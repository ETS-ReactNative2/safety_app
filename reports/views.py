from functools import partial
from urllib import request
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from .serializers.common import ReportSerializer
from .serializers.populated import PopulatedReportSerializer
from .models import Report
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.core.exceptions import FieldError

# Create your views here.

class ReportListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        reports = Report.objects.all()
        serialized_reports = ReportSerializer(reports, many=True)
        return Response(serialized_reports.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        serialized_report = ReportSerializer(data=request.data)
        try:
            serialized_report.is_valid()
            print("working")
            serialized_report.save()
            return Response(serialized_report.data, status=status.HTTP_201_CREATED)
        except AssertionError as error:
            print(error)
            return Response({"detail": str(error)}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except FieldError as error:
            print(error)
            return Response("Invalid field", status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        # except:
        #     return Response("Unprocessable Entity", status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class ReportDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request, pk):
        try:
            report = Report.objects.get(pk=pk)
            if report.owner != request.user:
                raise PermissionDenied(detail="Unauthorized")
            serialized_report = PopulatedReportSerializer(report)
            return Response(serialized_report.data, status=status.HTTP_200_OK)
        except Report.DoesNotExist:
            raise NotFound(detail="Report not found")

    def delete(self, request, pk):
        try:
            report_to_delete = Report.objects.get(pk=pk)
            if report_to_delete.owner != request.user:
                raise PermissionDenied(detail="Unauthorized")
            report_to_delete.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Report.DoesNotExist:
            raise NotFound(detail="Report not found")

    def put(self, request, pk):
        try:
            report_to_update = Report.objects.get(pk=pk)
            if report_to_update.owner != request.user:
                raise PermissionDenied(detail="Unauthorized")
            serialized_report_to_update = ReportSerializer(report_to_update, data=request.data)
            
            if serialized_report_to_update.is_valid():
                serialized_report_to_update.save()
            return Response(serialized_report_to_update.data, status=status.HTTP_200_OK)
        except Report.DoesNotExist:
            raise NotFound(detail="Report not found")