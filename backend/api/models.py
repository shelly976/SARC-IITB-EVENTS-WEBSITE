from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Event(models.Model):
   imagesrc=models.CharField(blank=True,null=True)
   title=models.CharField(max_length=50)
   venue=models.CharField(max_length=50)
   date=models.CharField(max_length=20)
   description=models.CharField(max_length=200)

   def __str__(self):
      return self.title

class User(AbstractUser):
   picture=models.CharField(
      null=True,
      blank=True
   )

   google_id=models.CharField(
      max_length=300,
      null=True,blank=True
   )