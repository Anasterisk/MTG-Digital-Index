from rest_framework import serializers
from .models import User, Card, List, Deck

class CardSerializer(serializers.HyperlinkedModelSerializer):
    decks = serializers.HyperlinkedRelatedField(
        view_name= 'card_deck',
        many = True,
        read_only = True
    )
    commander = serializers.HyperlinkedRelatedField(
        view_name= 'card_deck',
        many = True,
        read_only = True
    )
    class Meta:
        model   = Card
        fields  =('id','name', 'type', 'subtype', 'cost', 'colors', 'colorIdentity', 'uniqueId','imageurl', 'basicLand', 'decks', 'commander')

class DeckSerializer(serializers.HyperlinkedModelSerializer):
    cards = CardSerializer(
        many = True,
        read_only = True
    )
    lists = serializers.HyperlinkedRelatedField(
        view_name = 'list_deck',
        many = True,
        read_only = True
    )
    users = serializers.HyperlinkedRelatedField(
        view_name = 'user_deck',
        many = True,
        read_only = True
    )
    class Meta:
        model = Deck
        fields = ('id','user_id','list_id','commander_id','card','cards','lists','users')


class ListSerializer(serializers.HyperlinkedModelSerializer):    
    card = CardSerializer(
        many = True,
        read_only = True
    )
    decks =  DeckSerializer(
        many = True,
        read_only = True
    )
    user = serializers.HyperlinkedRelatedField(
        view_name = "lists",
        read_only = True
    )
    class Meta:
        model = List
        fields = ('id','name','description','quantity','stats','cards','completed','wishlist','status','user_id','user','decks','card')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    lists = serializers.HyperlinkedRelatedField(
        view_name='lists',
        many = True,
        read_only=True
    )
    decks = serializers.HyperlinkedRelatedField(
        view_name='user_deck',
        many = True,
        read_only = True,
    )
    class Meta:
        model = User
        fields = ('id','name','username','password', 'lists', 'decks')
