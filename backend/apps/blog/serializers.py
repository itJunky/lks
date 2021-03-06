from rest_framework import serializers

from apps.blog.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'

        lookup_field = 'slug'
