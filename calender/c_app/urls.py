from django.conf.urls import url

from . import views, ajax_functions

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^CreateEvent/', ajax_functions.index, name='createEvent'),
    url(r'^ShowEvent/', ajax_functions.viewEvent, name='viewEvent'),
    url(r'^UpdateEvent/', ajax_functions.updateEvent, name='updateEvent'),
    url(r'^DeleteEvent/', ajax_functions.deleteEvent, name='deleteEvent'),
]
