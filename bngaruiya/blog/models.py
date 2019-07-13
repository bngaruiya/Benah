from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Article(models.Model):
    """Defines the structure of an article in the Database."""

    title = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    content = models.CharField(blank=True, max_length=2000)
    author = models.ForeignKey(
        User, related_name="articles", on_delete=models.CASCADE, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
