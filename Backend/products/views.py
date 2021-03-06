# from rest_framework import views, response,status,viewsets
from rest_framework import  response,viewsets
from . import models as ProductsModel
from . import serializers as ProductsSearializer
from django.forms.models import model_to_dict
from django.shortcuts import get_object_or_404

class ProductApi(viewsets.ViewSet):
    serializer_class=ProductsSearializer.ProductMSerializer
    queryset=ProductsModel.ProductM.objects.all()

    def list(self,request):
        serializer=self.serializer_class(self.queryset,many=True)
        return response.Response(serializer.data)

    def retrieve(self,request,pk=None):
        blog=get_object_or_404(self.queryset,pk=pk)
        serializer=self.serializer_class(blog)
        return response.Response(serializer.data)

    def create(self,request):
        data=request.data
        serializer=self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(serializer.data)

    def update(self,request,pk=None):
        blog=get_object_or_404(self.queryset,pk=pk)
        data=request.data
        serializer=self.serializer_class(blog,data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(serializer.data)

    def partial_update(self,request,pk=None):
        blog=get_object_or_404(self.queryset,pk=pk)
        data=request.data
        serializer=self.serializer_class(blog,data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(serializer.data,status=200)

    def destroy(self,request,pk=None):
        instances=get_object_or_404(self.queryset,pk=pk)
        instances.delete()
        return response.Response(status=200)
