from django.urls import path, include
from rest_framework import routers
from webApp import views

router = routers.DefaultRouter()
router.register(r'flan', views.FlanView, 'flan')
router.register(r'flanfalse', views.Index, 'flanfalse')
router.register(r'contacts', views.ContacView, basename='contacts')
router.register(r'users', views.UserViewSet, basename='users')

urlpatterns = [
    path('api/', include(router.urls)),
]

# from django.urls import path, include
# from . import views
# from rest_framework import router

# router = router.DefaultRouter()
# router.register(r"flan", views.FlanView, "flan")


# urlpatterns = [
#     path('', views.index, name='index'),
#     path('about/', views.about, name='about'),
#     path('welcome/', views.welcome, name='welcome'),
#     path('contacto/', views.contacto, name='contacto'),
#     path('exito/', views.exito, name='exito'),
#     path('signup/', views.sign_up, name="signup"),
#     path('logout/', views.sign_out, name="logout"),
#     path('login/', views.log_in, name="login"),
#     path('api-auth/', include('rest_framework.urls')),
    
    
# ]