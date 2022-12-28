from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views


urlpatterns = [
    path('users/',  views.UserList.as_view(),   name ='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('cards/',  views.CardList.as_view(),  name ='card_list'),
    path('cards/<int:pk>', views.CardDetail.as_view(), name = 'card_detail'),
    path('lists/',views.ListList.as_view(),  name = 'list_list'),
    path('lists/<int:pk>', views.ListDetail.as_view(), name = 'list_detail'),
    path('decks/',views.DeckList.as_view(),  name = 'deck_list'),
    path('decks/<int:pk>', views.DeckDetail.as_view(), name = 'deck_detail'),
]