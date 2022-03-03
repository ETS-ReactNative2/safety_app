from django.urls import path
from .views import SubstanceListView, SubstanceDetailView

urlpatterns = [
    path('all/', SubstanceListView.as_view()),
    path('<int:pk>/', SubstanceDetailView.as_view())
]