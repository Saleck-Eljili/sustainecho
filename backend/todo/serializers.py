from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'ville1', 'mark1', 'namp1', 'mark2', 'namp2', 'ville2', 'mark3', 'namp3', 'mark4',
                  'namp4', 'mark5', 'namp5', 'ville3', 'mark6', 'namp6', 'mark7', 'namp7', 'mark8', 'namp8')
