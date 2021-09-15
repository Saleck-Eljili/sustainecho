from django.db import models


class Todo(models.Model):
    ville1 = models.CharField(max_length=120)
    mark1 = models.CharField(max_length=120)
    namp1 = models.CharField(max_length=120)
    mark2 = models.CharField(max_length=120)
    namp2 = models.CharField(max_length=120)
    ville2 = models.CharField(max_length=120)
    mark3 = models.CharField(max_length=120)
    namp3 = models.CharField(max_length=120)
    mark4 = models.CharField(max_length=120)
    namp4 = models.CharField(max_length=120)
    mark5 = models.CharField(max_length=120)
    namp5 = models.CharField(max_length=120)
    ville3 = models.CharField(max_length=120)
    mark6 = models.CharField(max_length=120)
    namp6 = models.CharField(max_length=120)
    mark7 = models.CharField(max_length=120)
    namp7 = models.CharField(max_length=120)
    mark8 = models.CharField(max_length=120)
    namp8 = models.CharField(max_length=120)

    def _str_(self):
        return self.ville
