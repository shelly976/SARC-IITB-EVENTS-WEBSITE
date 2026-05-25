from rest_framework import serializers
from .models import Event
from django.contrib.auth import get_user_model
User = get_user_model()
class UserSerializer(
    serializers.ModelSerializer
):

    class Meta:

        model = User

        fields = '__all__'


class EventSerializer(
    serializers.ModelSerializer
):

    class Meta:

        model = Event

        fields = '__all__'