from django.db import models

# Create your models here.
class Report(models.Model):
    spiking_method = models.CharField(max_length=20)
    has_reported = models.BooleanField
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name= "reports",
        on_delete=models.CASCADE
    )
    substance = models.ForeignKey(
        "substance.Substance",
        related_name= "reports",
        on_delete=models.CASCADE
    )
    incident_place = models.CharField(max_length=200, default=None)
    latitude = models.BigIntegerField
    longitude = models.BigIntegerField

    def __str__(self):
        return f"{self.id} - {self.spiking_method}"