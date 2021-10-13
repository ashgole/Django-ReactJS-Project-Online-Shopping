from rest_framework import serializers
from .models import OrdersM
from django.contrib.auth.models import User

class OrdersMSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrdersM
        fields = '__all__'

class OrderListMSerializer(serializers.ModelSerializer):
    myorders = OrdersMSerializer(many=True,read_only=True)

    class Meta:
        model = User
        fields = ['id','username','myorders']
