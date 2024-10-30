# Generated by Django 5.1.2 on 2024-10-26 11:09

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webApp', '0003_alter_flan_is_private'),
    ]

    operations = [
        migrations.CreateModel(
            name='ConctactForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contact_form_uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('customer_email', models.EmailField(max_length=254)),
                ('customer_name', models.CharField(max_length=64)),
                ('message', models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name='flan',
            name='flan_uuid',
            field=models.UUIDField(default=uuid.uuid4, editable=False),
        ),
    ]