from blog.models import Article
from rest_framework import viewsets, permissions
from .serializers import ArticleSerializer

# Lead Viewset
class ArticleViewSet(viewsets.ModelViewSet):
    """A viewset for listing and retrieving articles."""

    permission_classes = [permissions.IsAuthenticated]

    serializer_class = ArticleSerializer

    def get_queryset(self):
        return self.request.user.articles.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

