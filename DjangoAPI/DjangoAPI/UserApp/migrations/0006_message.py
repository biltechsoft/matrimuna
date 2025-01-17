# Generated by Django 4.0 on 2022-07-23 04:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserApp', '0005_femaleuser_signature_maleuser_signature'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('messageId', models.AutoField(primary_key=True, serialize=False)),
                ('senderId', models.CharField(max_length=100, null=True)),
                ('userType', models.IntegerField(blank=True, null=True)),
                ('senderEmail', models.CharField(blank=True, max_length=100, null=True)),
                ('messageDetail', models.CharField(max_length=5000)),
                ('dateTime', models.DateTimeField()),
            ],
        ),
    ]
