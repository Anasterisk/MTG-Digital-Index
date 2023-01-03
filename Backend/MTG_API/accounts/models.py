from django.db import models

# Create your models here.
class User(models.Model):
   name = models.CharField(max_length=256)
   username = models.CharField(max_length=256)
   password = models.CharField(max_length=1024)

   def __str__(self):
     return self.name 