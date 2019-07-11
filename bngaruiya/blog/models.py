from django.db import models

# Create your models here.
class Article(models.Model):
    """Defines the structure of an article in the Database."""

    title = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    content = models.CharField(blank=True, max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
