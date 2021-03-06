from django.contrib import admin

from apps.blog.models import Article


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = ('title', 'slug')
    save_as = True
    save_on_top = True
