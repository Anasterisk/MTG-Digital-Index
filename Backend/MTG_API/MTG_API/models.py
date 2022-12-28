from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class User(models.Model):
    name =      models.CharField(max_length=255, null=False)
    username =  models.CharField(max_length=255, null=False)
    password =  models.CharField(max_length=10, null =True)

    def __str__(self):
        return self.name

class Card(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    subtype = models.CharField(max_length=255)
    cost = models.IntegerField(default=0)
    colors = ArrayField(models.CharField(max_length=255))
    colorIdentity = ArrayField(models.CharField(max_length=255))
    uniqueId = models.CharField(max_length=255)
    imageurl = models.TextField(blank=True, null=True)
    basicLand = models.BooleanField(default=False)

    def __str__ (self):
        return self.name

class List(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='lists')
    name = models.CharField(max_length=255,blank=True, null=False)
    description = models.TextField(blank=True, null=True)
    quantity = models.IntegerField(default=0)
    stats = ArrayField(models.CharField(max_length=255, default=''), blank=True, null=True)

    cards = models.ManyToManyField(
        Card,
        through = 'Deck',
        through_fields= ('list', 'card'),
        related_name= 'list_card'
    )
    completed = models.BooleanField(default=False)
    wishlist = models.BooleanField(default=False)
    status = models.CharField(max_length=255, blank=True, null=True)
    
    def __str__(self):
        return self.name

class Deck(models.Model):
    user =  models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_deck')
    list = models.ForeignKey(List, on_delete=models.CASCADE, related_name='list_deck')
    card = models.ForeignKey(Card, on_delete=models.CASCADE, related_name='card_deck')
    commander = models.ForeignKey(
        Card,
        on_delete= models.CASCADE,
        related_name = 'commander_card',
        blank= True
    )