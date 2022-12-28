from django.contrib import admin
from .models import User, Card, List, Deck
# Register your models here.

admin.site.register(User)
admin.site.register(Card)
admin.site.register(List)
admin.site.register(Deck)