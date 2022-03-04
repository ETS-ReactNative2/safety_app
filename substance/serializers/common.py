from django.forms import IntegerField
from rest_framework import serializers
from ..models import Substance

class SubstanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Substance
        fields = '__all__'

