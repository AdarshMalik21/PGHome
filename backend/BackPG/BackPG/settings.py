from pathlib import Path
import os
from decouple import config
import dj_database_url
from dotenv import load_dotenv

load_dotenv()  # Load .env file

# Build paths inside the project
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY
SECRET_KEY = config("SECRET_KEY")
DEBUG = config("DEBUG", default=False, cast=bool)
ALLOWED_HOSTS = config("ALLOWED_HOSTS", default="127.0.0.1,localhost").split(',')

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'listings',
    'rest_framework',
    'cloudinary',
    'cloudinary_storage',
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
# Added CORS Manually
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # React dev server
    "http://127.0.0.1:3000",  # Alternative localhost
]
CORS_URLS_REGEX = r'^/api/.*$|^/media/.*$' 

# Production whitelist (add domains here when deployed)
PRODUCTION_DOMAINS = []

# Combined configuration
CORS_ALLOWED_ORIGINS = [
    *CORS_ALLOWED_ORIGINS,
    *PRODUCTION_DOMAINS,
]

# Development-only宽松模式 (auto-disabled when DEBUG=False)
if DEBUG:
    CORS_ALLOW_ALL_ORIGINS = True  # Local development only!
    CSRF_TRUSTED_ORIGINS = CORS_ALLOWED_ORIGINS.copy()  # For form submissions

# Required for cookie/session auth
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]
#Ended here

ROOT_URLCONF = 'BackPG.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'BackPG.wsgi.application'

# Database
DATABASES = {
    'default': dj_database_url.config(default=config("DATABASE_URL"))
}

# REST Framework
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10 
}

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static and Media files
STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Cloudinary Storage Setup
CLOUDINARY_STORAGE = {
    'CLOUD_NAME': config('CLOUDINARY_CLOUD_NAME'),
    'API_KEY': config('CLOUDINARY_API_KEY'),
    'API_SECRET': config('CLOUDINARY_API_SECRET'),
    'SECURE': True ,
}
DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

# Default auto field
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
