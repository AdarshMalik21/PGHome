from rest_framework import viewsets
from django.core.files.storage import default_storage
from .models import Flat
from .serializers import FlatSerializer
from rest_framework.pagination import PageNumberPagination

class CustomPagination(PageNumberPagination):
    page_size_query_param = 'page_size'  # Allows client to override page size
    max_page_size = 100

class FlatViewSet(viewsets.ModelViewSet):
    queryset = Flat.objects.all().order_by('id')
    serializer_class = FlatSerializer
    pagination_class = CustomPagination

   