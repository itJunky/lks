from django.contrib import admin
from django.urls import path, include, re_path

# from rest_framework import routers
# from apps.blog import urls

# router = routers.DefaultRouter()
# router.register(r'posts', views.ArticleList)

urlpatterns = [

    path('admin/', admin.site.urls),
    re_path(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    path('', include('apps.blog.urls')),
    re_path('^shop/', include('apps.shop.urls')),

]
# urlpatterns += router.urls
# http://www.django-rest-framework.org/api-guide/routers/#usage
