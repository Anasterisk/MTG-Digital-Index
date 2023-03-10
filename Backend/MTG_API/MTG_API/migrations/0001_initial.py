# Generated by Django 4.1.4 on 2022-12-27 06:22

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('type', models.CharField(max_length=255)),
                ('subtype', models.CharField(max_length=255)),
                ('cost', models.IntegerField(default=0)),
                ('colors', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=255), size=None)),
                ('colorIdentity', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=255), size=None)),
                ('uniqueId', models.CharField(max_length=255)),
                ('imageurl', models.TextField(blank=True, null=True)),
                ('basicLand', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Deck',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MTG_API.card')),
                ('commander', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='commander_card', to='MTG_API.card')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('username', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=10, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='List',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
                ('quantity', models.IntegerField(default=0)),
                ('stats', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default='', max_length=255), blank=True, null=True, size=None)),
                ('completed', models.BooleanField(default=False)),
                ('wishlist', models.BooleanField(default=False)),
                ('status', models.CharField(blank=True, max_length=255, null=True)),
                ('cards', models.ManyToManyField(through='MTG_API.Deck', to='MTG_API.card')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lists', to='MTG_API.user')),
            ],
        ),
        migrations.AddField(
            model_name='deck',
            name='list',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MTG_API.list'),
        ),
        migrations.AddField(
            model_name='deck',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MTG_API.user'),
        ),
    ]
