from django.urls import path
from orders import views
from rest_framework import routers
from django.conf.urls import include

router =routers.DefaultRouter()
router.register('orderlist',views.OrdersListApi,basename='orderlist')
router.register('orders',views.OrdersApi,basename='orders')

urlpatterns = [
    path('',include(router.urls)),
    # path('', views.index),
]
