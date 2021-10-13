from django.db import models
from django.contrib.auth.models import User
from products.models import ItemM

class OrdersM(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name="myorders")
    itemname = models.ForeignKey(ItemM,on_delete=models.CASCADE,related_name="itemname")

    def __str__(self):
        return str(self.user)
