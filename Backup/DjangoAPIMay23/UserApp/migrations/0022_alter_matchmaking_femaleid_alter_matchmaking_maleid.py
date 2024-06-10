# Generated by Django 5.0.6 on 2024-05-22 12:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserApp', '0021_alter_matchmaking_femaleid_alter_matchmaking_maleid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='matchmaking',
            name='femaleId',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='UserApp.femaleuser'),
        ),
        migrations.AlterField(
            model_name='matchmaking',
            name='maleId',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='UserApp.maleuser'),
        ),
    ]