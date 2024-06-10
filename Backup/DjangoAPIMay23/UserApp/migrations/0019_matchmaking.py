# Generated by Django 5.0.6 on 2024-05-18 09:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserApp', '0018_alter_femaleuser_health_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='MatchMaking',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('percentage', models.IntegerField(default=0)),
                ('statusMale', models.IntegerField(choices=[(0, 'Normal'), (1, 'ReqSent'), (2, 'ReqPending'), (3, 'ReqAccepted'), (4, 'ReqRejected'), (5, 'Lock_req'), (6, 'Locked')], default=0)),
                ('femaleId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='UserApp.femaleuser')),
                ('maleId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='UserApp.maleuser')),
            ],
        ),
    ]