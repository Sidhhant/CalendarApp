from django.forms.models import model_to_dict
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from django.http import JsonResponse
from .models import *

import datetime
import calendar
import json

from django.core import serializers

def index(request):
	if request.method == 'GET':
		#import pdb
		#pdb.set_trace()
		try:
			name = request.GET.get("name",None)
			location = request.GET.get("location",None)
			start_date = request.GET.get("start_date",None)
			start_time = request.GET.get("start_time",None)
			end_date = request.GET.get("end_date",None)
			end_time = request.GET.get("end_time",None)
			description = request.GET.get("description",None)
		except Exception as e:
			print e
			
		try:
			event = Event.objects.create(
               name=name, location = location, start_date = start_date
               ,start_time = start_time, end_date = end_date, end_time = end_time
               ,description = description)
		except Exception as e:
			raise e


		data = {
			'id':event.id,
			'name':name,
			'location':location,
			'start_date':start_date,
			'start_time':start_time,
			'end_date':end_date,
			'end_time':end_time,
			'description':description,
		}
		return JsonResponse(data)
	else:
		return JsonResponse({'e':"not GET request"})




def viewEvent(request):
	if request.method == 'GET':
		try:
			event_id = request.GET.get("event_id",None)
		except Exception as e:
			raise e

		try:
			event = Event.objects.get(id=event_id)
		except Exception as e:
			raise e
		e = event.start_time
		event.start_date = str(event.start_date)
		event.start_time = str(event.start_time)
		event.start_date = datetime.datetime.strptime(event.start_date,'%Y-%m-%d').strftime('%a, %Y')
		if e.microsecond:
			event.start_time = datetime.datetime.strptime(event.start_time,'%H:%M:%S.%f').strftime('%-I %p')
		else:
			event.start_time = datetime.datetime.strptime(event.start_time,'%H:%M:%S').strftime('%-I %p')			
		data= {
			'id':event.id,
			'name':event.name,
			'location':event.location,
			'start_date':event.start_date,
			'start_time':event.start_time,
			'end_date':event.end_date,
			'end_time':event.end_time,
			'description':event.description,
		}
		try:
			return JsonResponse(data)
		except Exception as e:
			raise e
		
	else:
		return JsonResponse({'e':"not GET request"})


def updateEvent(request):
	if request.method == 'GET':
		try:
			event_id = request.GET.get("event_id",None)
		except Exception as e:
			print "h"
			raise e

		
		try:
			event = Event.objects.get(id=event_id)
		except Exception as e:
			raise e
		
		try:
			name = request.GET.get("name",None)
			location = request.GET.get("location",None)
			start_date = request.GET.get("start_date",None)
			start_time = request.GET.get("start_time",None)
			end_date = request.GET.get("end_date",None)
			end_time = request.GET.get("end_time",None)
			description = request.GET.get("description",None)
		except Exception as e:
			print e

		try:
			Event.objects.filter(pk=event_id).update(
               name=name, location = location, start_date = start_date
               ,start_time = start_time, end_date = end_date, end_time = end_time
               ,description = description)
		except Exception as e:
			raise e
			
		data = {
			'id':event.id,
			'name':name,
			'location':location,
			'start_date':start_date,
			'start_time':start_time,
			'end_date':end_date,
			'end_time':end_time,
			'description':description,
		}
		return JsonResponse(data)
	else:
		return JsonResponse({'e':"not update request"})


def deleteEvent(request):
	if request.method == 'GET':
		try:
			event_id = request.GET.get("event_id",None)
		except Exception as e:
			raise e

		try:
			event = Event.objects.get(id=event_id)
		except Exception as e:
			raise e

		try:
			Event.objects.filter(pk=event_id).delete()
		except Exception as e:
			raise e

		return JsonResponse({'foo':"booo"})
	else:
		return JsonResponse({'e':"not delete request"})		