# from rest_framework import views, response,status,viewsets
from rest_framework import  response,viewsets
from . import models as OrdersModel
from . import serializers as OrdersSearializer
from django.forms.models import model_to_dict
from django.shortcuts import get_object_or_404
from rest_framework import authentication, permissions
from products.models import ItemM

class OrdersListApi(viewsets.ModelViewSet):
    serializer_class=OrdersSearializer.OrderListMSerializer
    queryset=OrdersModel.User.objects.all()

class OrdersApi(viewsets.ViewSet):
    serializer_class=OrdersSearializer.OrdersMSerializer
    queryset=OrdersModel.OrdersM.objects.all()

    def list(self,request):
        serializer=self.serializer_class(self.queryset,many=True)
        return response.Response(serializer.data)

    def create(self,request):
        username=request.data.get('user')
        itemid=request.data.get('itemid')
        userid=OrdersModel.User.objects.values_list('id', flat=True).get(username=username) #only one value
        accountObj=OrdersModel.OrdersM.objects.create(user_id=userid, itemname_id=itemid)
        accountObj.save()
        return response.Response(model_to_dict(accountObj))