from django.urls import path
from products import views
from rest_framework import routers
from django.conf.urls import include

router =routers.DefaultRouter()
router.register('products',views.ProductApi,basename='products')

urlpatterns = [
    path('',include(router.urls)),
    # path('', views.index),
]
