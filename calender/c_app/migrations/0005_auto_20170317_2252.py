# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-17 22:52
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('c_app', '0004_auto_20170317_1144'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='ends',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='event',
            name='starts',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
