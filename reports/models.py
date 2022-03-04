from django.db import models

# Create your models here.
class Report(models.Model):
    spiking_method = models.CharField(max_length=20)
    has_reported = models.CharField(max_length=3)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name= "reports",
        on_delete=models.CASCADE,
        default=1
    )
    substance = models.ForeignKey(
        "substance.Substance",
        related_name= "reports",
        on_delete=models.CASCADE,
        default=None,
        null=True
    )
    incident_place = models.CharField(max_length=200, blank=True, default=None)
    location = models.CharField(max_length=200, blank=True, default=None)
    latitude = models.CharField(max_length=200, blank=True, default=None)
    longitude = models.CharField(max_length=200, blank=True, default=None)

    def __str__(self):
        return f"{self.id} - {self.spiking_method}"