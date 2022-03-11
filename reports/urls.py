from django.urls import path
from .views import ReportListView, ReportDetailView

urlpatterns = [
    path('all/', ReportListView.as_view()),
    path('<int:pk>/', ReportDetailView.as_view(),)
]
