from django.db import models


class Flat(models.Model):
    society = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='flats/')

    def __str__(self):
        return self.society
