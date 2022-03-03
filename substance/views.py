from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from .serializers.common import SubstanceSerializer
from .models import Substance

# Create your views here.

class SubstanceListView(APIView):

    def get(self, _request):
        substances = Substance.objects.all()
        serialized_substances = SubstanceSerializer(substances, many=True)
        return Response(serialized_substances.data, status=status.HTTP_200_OK)


class SubstanceDetailView(APIView):

    def get(self, _request, pk):
        try:
            substance = Substance.objects.get(pk=pk)
            serialized_substance = SubstanceSerializer(substance)
            return Response(serialized_substance.data, status=status.HTTP_200_OK)
        except Substance.DoesNotExist:
            raise NotFound(detail="Substance not found")


class SubstanceMatchView(APIView):
    def get_queryset(self, request):
        try:
            choices = request.choices
            matches = Substance.objects.filter(symptoms__contains=choices)
            serialized_matches = SubstanceSerializer(matches, many=True)
            return Response(serialized_matches.data, status=status.HTTP_200_OK)
        except Substance.DoesNotExist:
            raise NotFound(detail="Something went wrong.")