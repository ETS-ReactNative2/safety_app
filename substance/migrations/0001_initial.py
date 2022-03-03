# Generated by Django 4.0.3 on 2022-03-03 16:24

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Substance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('link', models.CharField(default=None, max_length=200)),
                ('drug_class', models.CharField(default=None, max_length=10)),
                ('duration', models.CharField(max_length=30)),
                ('symptoms', django.contrib.postgres.fields.ArrayField(base_field=models.PositiveSmallIntegerField(blank=True), size=None)),
                ('notes', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(default=None), size=None)),
            ],
        ),
    ]
