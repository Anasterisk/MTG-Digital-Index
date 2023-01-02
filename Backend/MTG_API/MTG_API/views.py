from django.shortcuts import render
from .models import User, List, Card, Deck
from rest_framework import generics
from .serializers import UserSerializer, ListSerializer, CardSerializer, DeckSerializer
# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ListList(generics.ListCreateAPIView):
    queryset = List.objects.all()
    serializer_class = ListSerializer

class ListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = List.objects.all()
    serializer_class = ListSerializer

class CardList(generics.ListCreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class CardDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class DeckList(generics.ListCreateAPIView):
    queryset = Deck.objects.all()
    serializer_class = DeckSerializer

class DeckDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Deck.objects.all()
    serializer_class = DeckSerializer

# class Register(generics.ListCreateAPIView):
#     model = User
#     serializer_class = UserSerializer
#     def perform_create(self, serializer):
#         queryset = SignupReque