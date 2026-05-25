from django.urls import path
from . import views

urlpatterns=[
    path('user/',views.get_users),
    path('update/<int:id>/',views.update_users),
    path('delete/<int:id>/',views.delete_users),
    path('get/',views.get_data),
    path('google-login/',views.google_login),
    path('create-events/',views.write_events),
    path('gevents/',views.get_events),
    path('update-events/<int:id>/',views.update_events),
    path('delete-events/<int:id>/',views.delete_event)
]