# Generated by Django 3.2.4 on 2021-10-05 12:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_rename_product_name_itemm_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itemm',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='products.productm'),
        ),
    ]