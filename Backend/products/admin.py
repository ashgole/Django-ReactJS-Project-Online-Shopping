from django.contrib import admin
from .models import ItemM,ProductM
class ProductMAdmin(admin.ModelAdmin):
    list_display = ['id','product']

admin.site.register(ProductM,ProductMAdmin)


class ItemMAdmin(admin.ModelAdmin):
    list_display = ['id','item','description','imgAddress','price','date']

admin.site.register(ItemM,ItemMAdmin)
