from django.db import models

class ProductM(models.Model):
    product = models.CharField(max_length=255)

    def __str__(self):
        return self.product

class ItemM(models.Model):
    item = models.CharField(max_length=255)
    product = models.ForeignKey(ProductM,on_delete=models.CASCADE,related_name="items")
    description = models.CharField(max_length=255)
    imgAddress = models.CharField(default='https://previews.123rf.com/images/yaroslav2077/yaroslav20772002/yaroslav2077200200012/140498347-phone-icon-vector-call-icon-vector-mobile-phone-smartphone-device-gadget-telephone-icon.jpg',max_length=255)
    price = models.IntegerField()
    date=models.DateField(auto_now=True)

    def __str__(self):
        return self.item
