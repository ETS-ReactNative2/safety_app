from .common import ReportSerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedReportSerializer(ReportSerializer):
    owner=UserSerializer()