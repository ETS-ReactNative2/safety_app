from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.

class Substance(models.Model):
    name = models.CharField(max_length=20)
    link = models.CharField(max_length=200, default=None)
    drug_class = models.CharField(max_length=10, default=None)
    duration = models.CharField(max_length=30)
    symptoms = ArrayField(models.PositiveSmallIntegerField(blank=True))
    notes = ArrayField(models.TextField(default=None))