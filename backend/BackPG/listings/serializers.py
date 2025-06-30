from rest_framework import serializers
from .models import Flat
import cloudinary.uploader
from urllib.parse import unquote

class FlatSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Flat
        fields = ['id', 'society', 'price', 'image_url']

    def get_image_url(self, obj):
        if obj.image:
            # Fix double-encoded URLs and remove /media/ prefix
            url = unquote(obj.image.url)
            return url.replace('/media/https:/', 'https://')
        return None

    def create(self, validated_data):
        image_file = validated_data.pop('image', None)
        instance = Flat.objects.create(**validated_data)
        
        if image_file:
            upload_result = cloudinary.uploader.upload(
                image_file,
                folder="flats/",
                resource_type="auto"
            )
            instance.image = upload_result['secure_url']
            instance.save()
        
        return instance

    def update(self, instance, validated_data):
        image_file = validated_data.pop('image', None)
        
        if image_file:
            upload_result = cloudinary.uploader.upload(
                image_file,
                folder="flats/",
                resource_type="auto"
            )
            instance.image = upload_result['secure_url']
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
            
        instance.save()
        return instance