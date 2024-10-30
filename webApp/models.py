import uuid
from django.db import models

# Create your models here.
class Flan(models.Model):
    flan_uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=64)
    description = models.TextField()
    image_url = models.URLField()
    slug = models.SlugField()
    is_private = models.BooleanField(default=True)
    
    def __str__(self) -> str:
        return self.name
# Esto permitirá crear distintos Flan que serán presentados en la web, junto con una
# imagen (image_url), nombre (name), descripción (description), un identificador único
# (flan_uuid), un campo que permite especificar un nombre corto de url (slug) y un
# campo que permite definir si el flan es privado o no (is_private).
class ContactForm(models.Model):
    contact_form_uuid = models.UUIDField(default=uuid.uuid4, editable=False)  
    customer_email = models.EmailField()
    customer_name = models.CharField(max_length=64)
    message = models.TextField()
    
    def __str__(self) -> str:
        return self.customer_name
    


