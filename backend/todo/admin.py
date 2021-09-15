from django.contrib import admin

from .models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ('ville1', 'mark1', 'namp1', 'mark2', 'namp2', 'ville2', 'mark3', 'namp3', 'mark4',
                    'namp4', 'mark5', 'namp5', 'ville3', 'mark6', 'namp6', 'mark7', 'namp7', 'mark8', 'namp8')

# Register your models here.


admin.site.register(Todo, TodoAdmin)
