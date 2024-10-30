from rest_framework import serializers
from .models import Flan, ContactForm
from django.contrib.auth.models import User

class FlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flan
        # fields = ("id", "name", "description")
        fields = '__all__'
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = ['customer_email', 'customer_name', 'message']
        

class UserSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password1', 'password2']

    def validate(self, data):
        # Validamos que las contraseñas coincidan
        if data['password1'] != data['password2']:
            raise serializers.ValidationError("Las contraseñas no coinciden.")
        return data

    def create(self, validated_data):
        # Creamos el usuario con la contraseña proporcionada
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password1']
        )
        return user
