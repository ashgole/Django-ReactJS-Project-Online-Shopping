from django.contrib import admin
from .models import OrdersM

class OrderMAdmin(admin.ModelAdmin):
    list_display = ['id','user','itemname']

admin.site.register(OrdersM,OrderMAdmin)
