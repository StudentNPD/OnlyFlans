from rest_framework import viewsets, status
from .serializer import FlanSerializer, ContactSerializer, UserSerializer
from .models import Flan, ContactForm
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate
from rest_framework.decorators import action


class Index(viewsets.ModelViewSet):
    serializer_class = FlanSerializer
    queryset = Flan.objects.filter(is_private=False)

# def about(request):
#     return render(request, "about.html")

# @login_required
class FlanView(viewsets.ModelViewSet):
    serializer_class = FlanSerializer
    queryset = Flan.objects.filter(is_private=True)
    
class ContacView(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = ContactForm.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(
                {"message": "Contacto creado exitosamente"},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['post', 'get']  # Solo permitimos POST para el registro

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        # Iniciar sesión automáticamente después del registro
        login(request, user)
        return Response({"message": "Usuario registrado exitosamente"}, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def login_view(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({"message": "Inicio de sesión exitoso"}, status=status.HTTP_200_OK)
        return Response({"error": "Credenciales inválidas"}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def logout_view(self, request):
        logout(request)
        return Response({"message": "Cierre de sesión exitoso"}, status=status.HTTP_200_OK)

