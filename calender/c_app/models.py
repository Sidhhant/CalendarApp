from __future__ import unicode_literals
import datetime
from django.db import models
#from datetime import datetime
from django.utils import timezone
from django.utils.translation import gettext as _
# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=50,default="Event")
    location = models.CharField(max_length=100,blank=True)
    start_date = models.DateField(_("Date"), default=datetime.date.today)
    end_date = models.DateField(_("Date"), default=datetime.date.today)
    start_time = models.TimeField(_(u"Start Time"), auto_now_add=True, blank=True,null=True)
    end_time = models.TimeField(_(u"End Time"), auto_now_add=True, blank=True,null=True)
    description = models.CharField(max_length=500,blank=True,null=True)

    def __str__(self):
        return self.name