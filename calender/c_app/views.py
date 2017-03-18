from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

from .models import *

import datetime
import calendar

def index(request):
    date = datetime.datetime.now()
    month = date.month
    year = date.year
    day = date.day
    monthName = calendar.month_name[month]
    weekDay = date.weekday()
    weekDayName = calendar.day_name[weekDay]
    
    if month == 1:
        prMonth = 12
    else:
        prMonth = month - 1

    if month == 12:
        nMonth = 1
    else:
        nMonth = month + 1

    prYear = year - 1
    nYear = year + 1

    monthRange = calendar.monthrange(year,month)
    prmonthRange = calendar.monthrange(year,prMonth)
    nmonthRange = calendar.monthrange(year,nMonth)

    weekDayMonth = calendar.weekday(year,month,1)

    #first_date = datetime.date(year,month,1)
    #last_date = datetime.date(year,month,monthRange[1])
    events = Event.objects.filter(start_date__year=year, start_date__month=month,start_date__day=day).order_by('-start_time')

    #c_date = str(date)
    c_date = date.strftime('%Y-%m-%d')
    #print c_date
    cal = {
    'c_date':c_date,
    'events':events,
    'weekDayMonth':weekDayMonth,
    'month':month,
    'year':year,
    'day':day,
    'monthName':monthName,
    'weekDay':weekDay,
    'weekDayName':weekDayName,
    'prMonth':prMonth,
    'nMonth':nMonth,
    'prYear':prYear,
    'nYear':nYear,
    'monthRange':monthRange[1],
    'prmonthRange':prmonthRange[1],
    'nmonthRange':nmonthRange[1],
    }
    #print cal
    return render(request, 'c_app/calendar.html',cal)


