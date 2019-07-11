from rest_framework import routers
from .api import ArticleViewSet

router = routers.DefaultRouter()
router.register("api/blog", ArticleViewSet, "blog")

urlpatterns = router.urls
