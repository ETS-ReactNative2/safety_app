from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from .serializers.common import UserSerializer
from datetime import datetime, timedelta
import jwt
from django.conf import settings

# Create your views here.

User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        user_to_create = UserSerializer(data=request.data)
        try:
            user_to_create.is_valid()
            user_to_create.save()
            print("it saved")
            return Response(user_to_create.data, status=status.HTTP_201_CREATED)
        except:
            return Response("Failed to create user", status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoginView(APIView):

    def post(self, request):
        print(request.data)
        try:
            user_to_login = User.objects.get(email=request.data.get('email'))
        except User.DoesNotExist:
            return PermissionDenied(detail="Unauthorized")

        if not user_to_login.check_password(request.data.get('password')):
            return PermissionDenied(detail="Unauthorized")

        dt = datetime.now() + timedelta(days=7)
        token = jwt.encode({
            'sub': user_to_login.id,
            'exp': int(dt.strftime('%s'))
            }, settings.SECRET_KEY, 'HS256')
        print(token)
        return Response({
            'token': token,
            'message': f"Welcome back, {user_to_login.email}"
        }, status.HTTP_202_ACCEPTED)

