# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-17 22:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('c_app', '0005_auto_20170317_2252'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='ends',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='starts',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
