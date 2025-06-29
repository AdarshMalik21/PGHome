from rest_framework import viewsets
from django.core.files.storage import default_storage
from .models import Flat
from .serializers import FlatSerializer

class FlatViewSet(viewsets.ModelViewSet):
    queryset = Flat.objects.all()
    serializer_class = FlatSerializer


   