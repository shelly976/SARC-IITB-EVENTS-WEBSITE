from google.oauth2 import id_token
from google.auth.transport import requests
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework import status
from .serializers import UserSerializer,EventSerializer
from .models import Event
from django.conf import settings

User=get_user_model()

GOOGLE_CLIENT_ID=settings.GOOGLE_CLIENT_ID

@api_view(['POST'])
def google_login(request):
    token=request.data.get('token')

    if not token:
        return Response({'error':'token missing'},status=status.HTTP_400_BAD_REQUEST)

    try:
        idinfo=id_token.verify_oauth2_token(
            token,
            requests.Request(),
            GOOGLE_CLIENT_ID
        )

        email=idinfo['email']
        name=idinfo.get('name')
        google_id=idinfo['sub']
        picture=idinfo.get('picture')    
         

        user,created=User.objects.get_or_create(
            email=email,
            defaults={
                'username':name,
                'google_id':google_id,
                'picture':picture
            }
        )
        refresh=RefreshToken.for_user(user)

        return Response({
            "message": "Login successful",
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "user": {
                "email": user.email,
                "name": user.username,
                "picture": user.picture
            }
        })
    except Exception as e:
        print("ACTUAL ERROR:", str(e))   # <-- important
        return Response(
            {"error": str(e)},
            status=400
        )


#for getting user while loggin 
@api_view(['POST'])
def get_users(request):
    try:
        email=request.data.get('email')
        password=request.data.get('password')
        user,tuple=User.objects.get_or_create(email=email,username=password,defaults={"username":email})
        refresh=RefreshToken.for_user(user)
        return Response({
                "message": "Login successful",
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": {
                    "email": user.email,
                    "name": user.email,
                    "picture": user.picture
                }
            })
    except Exception as e:
        print("ACTUAL ERROR:", str(e))   # <-- important
        return Response(
            {"error": str(e)},
            status=400
        )


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_users(request,id):
    try:
        user=User.objects.get(id=id)
    except user.DoesNotExist:
        return Response('User doesnot exist')
    
    serializer=UserSerializer(user,data=request.data)

    if serializer.is_valid():
       serializer.save()
       return Response (serializer.data)
    return Response(serializer.errors)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_users(request,id):
    try:
        user=User.objects.get(id=id)
    except User.DoesNotExist:
        return Response('USER NOT FOUND')
    user.delete()
    return Response('user deleted succesffully')

@api_view(['POST'])
def get_data(request):
    email=request.data.get('email')
    password=request.data.get('password')
    try:
        user=User.objects.get(email=email,password=password)
        print(user)
    except user.DoesNotExist:
        return Response('user doesnot exist')

    serializer=UserSerializer(user)
    return Response(serializer.data)

@api_view(['GET'])
def get_events(request):
    events=Event.objects.all()
    serializer=EventSerializer(events,many=True)
    return Response(serializer.data)


#for admin  to create event

@api_view(['POST'])
@permission_classes([IsAdminUser])
def write_events(request):
    print(request.data)
    serializer=EventSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def update_events(request,id):
    try:
        event=Event.objects.get(id=id)
    except Event.DoesNotExist:
        return Response(
            {
                'message':'event not found'
            },
            status=404
        )
    serializer=EventSerializer(
        event,
        data=request.data,
        partial=True
    )
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors,status=400)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def delete_event(request,id):
    try:
        event = Event.objects.get(id=id)
    except Event.DoesNotExist:
        return Response({'message':'event not found'},status=404)

    event.delete()
    return Response({
        'message':'event deleted'
    },status=200)
