from rest_framework import serializers
from .models import Flat
import cloudinary.uploader

class FlatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flat
        fields = "__all__"

    def create(self, validated_data):
        image_file = validated_data.pop('image', None)
        instance = Flat.objects.create(**validated_data)
        
        if image_file:
            # Upload to Cloudinary explicitly
            upload_result = cloudinary.uploader.upload(image_file, 
                                                     folder="flats/")
            instance.image = upload_result['secure_url']
            instance.save()
        
        return instance

    def update(self, instance, validated_data):
        image_file = validated_data.pop('image', None)
        
        if image_file:
            # Upload new image to Cloudinary
            upload_result = cloudinary.uploader.upload(image_file, 
                                                      folder="flats/")
            instance.image = upload_result['secure_url']
        
        # Update other fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
            
        instance.save()
        return instance