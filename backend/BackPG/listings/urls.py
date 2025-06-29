from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import FlatViewSet

router = DefaultRouter()
router.register('flats', FlatViewSet)

urlpatterns = [
    path('',include(router.urls)),
]
