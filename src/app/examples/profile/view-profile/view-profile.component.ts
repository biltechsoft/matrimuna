import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SharedService} from 'app/shared.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(private service:SharedService,
              private router : Router,
              private arout : ActivatedRoute) { }
  focus;
  currentUser;
  user;
  gotid;
  PhotoFilePath;
  PhotoUrl = this.service.PhotoUrl;
  gallery;
  pad=false;
  userid; usertype; xuser;
  STATES = this.service.STATES;
  ngOnInit(): void {
    this.userid = Number(this.arout.snapshot.paramMap.get("id"));
    this.usertype = this.arout.snapshot.paramMap.get("g");
    this.xuser = this.arout.snapshot.paramMap.get("xid");
    this.service.loginauth(this.userid, this.usertype);
    this.getCurrentUser(this.userid, this.usertype);
    this.service.reloadOnce();
    //this.getCurrentUser();
  }
  getCurrentUser(userid, usertype) {
    if(this.xuser != '0') {
      if(usertype=='1') {
          this.service.getTopMatchFemales(userid).subscribe(data=>{
            this.user = data["Matching"].filter(item => item.userId==this.xuser && (item.statusReq==3 || item.statusReq>4) );
            if(this.user.length > 0) {
              this.service.getFemaleUserList(Number(this.xuser)).subscribe(xuser=>{
                this.currentUser = xuser;
                this.PhotoFilePath=this.service.PhotoUrl+this.currentUser.photo;
                this.gallery=this.currentUser.gallery.split(',');
              });
            }
          });
      }
      else if(usertype=='2') {
          this.service.getTopMatchMales(userid).subscribe(data=>{
            this.user = data["Matching"].filter(item => item.userId==this.xuser && (item.statusReq==3 || item.statusReq>4));
            if(this.user.length > 0) {
              this.service.getMaleUserList(Number(this.xuser)).subscribe(xuser=>{
                this.currentUser = xuser;
                this.PhotoFilePath=this.service.PhotoUrl+this.currentUser.photo;
                this.gallery=this.currentUser.gallery.split(',');
              });
            }
          });
      }
    }
    else if(usertype=='1') {
        this.service.getMaleUserList(userid).subscribe(data=>{
          this.currentUser = data;
          this.PhotoFilePath=this.service.PhotoUrl+this.currentUser.photo;
          this.gallery=this.currentUser.gallery.split(',');
        });
    }
    else if(usertype=='2') {
        this.service.getFemaleUserList(userid).subscribe(data=>{
          this.currentUser = data;
          this.PhotoFilePath=this.service.PhotoUrl+this.currentUser.photo;
          this.gallery=this.currentUser.gallery.split(',');
        });
    }
  }
  /*getU() {
    if(localStorage.getItem('usertype')=='0') {
      if(localStorage.getItem('userid') != this.gotid) {
        this.getCurrentUser();
        this.gotid=localStorage.getItem('userid');
      }
    }
    else if(localStorage.getItem('xuser')!='0') {
      if(localStorage.getItem('xuser') != this.gotid) {
        this.getCurrentUser();
        this.gotid=localStorage.getItem('userid');
      }
    }
    return true;
  }*/
  imStatusOther() {
    if(this.currentUser.immigrationStatus == null) { return false; }
    if(this.currentUser.immigrationStatus == "US Citizen" || this.currentUser.immigrationStatus == "Permanent Resident") { return false; }
    else { return true; }
  }
  relPracticeOther() {
    if(this.currentUser.religiousPractice == "Other") { return true; }
  }
  preReligiousOther() {
    if(this.currentUser.preReligious == "Other") { return true; }
  }
  ownEthnicity() {
    if(this.currentUser.preEthnic == "Own Ethnicity") { return true; }
  }
  specificEthnicity() {
    if(this.currentUser.preEthnic == "Specific Ethnicity") { return true; }
  }
  preImStatusOther() {
    if(this.currentUser.preImmigrationStatus == "Other") { return true; }
  }
  preEmployed() {
    if(this.currentUser.preEmployment == "Employed") { return true; }
  }
  isMale() {
    if(this.currentUser.gender == 'Male') { return true; }
  }
  getAge() {
    var todate = new Date();
    var bdate = new Date(this.currentUser.dateOfBirth);
    var diff = todate.getTime() - bdate.getTime();
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    this.currentUser.age = Math.round(diffDays / 365);
    localStorage.setItem('userage',this.currentUser.age);
    return true;
  }

}
