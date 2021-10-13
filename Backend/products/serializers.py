from rest_framework import serializers
from .models import ProductM,ItemM

class ItemMSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemM
        fields = '__all__'

class ProductMSerializer(serializers.ModelSerializer):
    items = ItemMSerializer(many=True,read_only=True)
    class Meta:
        model = ProductM
        fields = ['id','product','items']
