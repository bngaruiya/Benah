from blog.models import Article
from rest_framework import viewsets, permissions
from .serializers import ArticleSerializer

# Lead Viewset
class ArticleViewSet(viewsets.ModelViewSet):
    """A viewset for listing and retrieving articles."""
    queryset = Article.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ArticleSerializer