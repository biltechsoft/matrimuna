# Generated by Django 4.0 on 2022-09-26 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserApp', '0012_adminlog'),
    ]

    operations = [
        migrations.AddField(
            model_name='adminlog',
            name='note',
            field=models.CharField(max_length=500, null=True),
        ),
    ]
