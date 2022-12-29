from rest_framework import serializers
from .models import User, Card, List, Deck

class CardSerializer(serializers.HyperlinkedModelSerializer):
    decks = serializers.HyperlinkedRelatedField(
        view_name= 'deck_list',
        many = True,
        read_only = True
    )
    commander = serializers.HyperlinkedRelatedField(
        view_name= 'deck_detail',
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
    lists_url = serializers.ModelSerializer.serializer_url_field(
        view_name = 'list_list',
        many = True,
        read_only = True
    )
    users = serializers.HyperlinkedRelatedField(
        view_name = 'user_detail',
        many = True,
        read_only = True
    )
    class Meta:
        model = Deck
        fields = ('id','user_id','list_id','commander_id','cards','lists_url','users')


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
        view_name = "user_detail",
        read_only = True
    )
    class Meta:
        model = List
        fields = ('id','name','description','quantity','stats','cards','completed','wishlist','status','user_id','user','decks','card')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    lists = ListSerializer(
        many = True,
        read_only=True
    )
    decks = DeckSerializer(
        many = True,
        read_only = True,
    )
    class Meta:
        model = User
        fields = ('id','name','username','password', 'lists', 'decks')
