# OnlyFlans Project

## Descripción
OnlyFlans es un proyecto desarrollado con Django como parte de un desafío de desarrollo web. Este proyecto sirve como introducción práctica al framework Django y sus funcionalidades básicas.

## Requisitos Previos
- Python 3.x
- pip (Sistema de gestión de paquetes de Python)

## Instalación

1. Crear y activar el entorno virtual:
```bash
# Crear el entorno virtual
python -m venv onlyflans

# Activar el entorno virtual
# En Windows:
source ./onlyflans/Scripts/activate
# En macOS/Linux:
source onlyflans/bin/activate
```

2. Instalar las dependencias:
```bash
pip install django
```

3. Verificar las instalaciones:
```bash
# Verificar versión de Python
python --version

# Verificar paquetes instalados
pip freeze
```

## Configuración del Proyecto

1. Crear el proyecto Django:
```bash
django-admin startproject onlyflansMain
```

2. Navegar al directorio del proyecto:
```bash
cd onlyflans
```

3. Aplicar las migraciones:
```bash
python manage.py makemigrations
python manage.py migrate
```

4. Iniciar el servidor de desarrollo:
```bash
python manage.py runserver
```

5. Acceder al proyecto:
Abrir el navegador web y visitar: `http://127.0.0.1:8000/`

## Estructura del Proyecto
```
onlyflans/
    ├── manage.py
    └── onlyflans/
        ├── __init__.py
        ├── settings.py
        ├── urls.py
        ├── asgi.py
        └── wsgi.py
```

## Enlaces de Documentación
- [Documentación oficial de Django](https://docs.djangoproject.com)
- [Guía de inicio Django](https://www.djangoproject.com/start/)
- [Tutorial de Django MDN](https://developer.mozilla.org/es/docs/Learn/Server-side/Django/Introduction)
- [Tutorial Django 5.0](https://docs.djangoproject.com/es/5.0/intro/tutorial01/)
- [Documentación de Python](https://docs.python.org/3.2/)

## Autor
[Natalia Peña]
