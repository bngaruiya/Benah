from rest_framework import serializers
from blog.models import Article

# Article Serializer
class ArticleSerializer(serializers.ModelSerializer):
    """Translates the Model Class into native python datastructures for easy interpretition."""

    class Meta:
        model = Article
        fields = "__all__"

