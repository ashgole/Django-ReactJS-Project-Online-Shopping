# Generated by Django 3.2.4 on 2021-10-05 12:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_auto_20211005_1807'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ordersm',
            name='price',
        ),
    ]
