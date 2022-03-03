from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
import jwt
from django.conf import settings
from datetime import datetime, timedelta
from rest_framework.exceptions import PermissionDenied
from .serializers.common import UserSerializer

# Create your views here.

User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        user_to_create = UserSerializer(data=request.data)

        try:
            user_to_create.is_valid()
            user_to_create.save()
            return Response(user_to_create.data, status=status.HTTP_201_CREATED)
        except:
            return Response("Failed to create user", status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class LoginView(APIView):

    def post(self, request):
        try:
            user_to_login = UserSerializer(email=request.email)
        except User.DoesNotExist:
            return PermissionDenied(detail="Login failed.")

        if not user_to_login.check_password(request.data.get('password')):
            return PermissionDenied(detail="Login failed.")

        dt = datetime.now() + timedelta(days=7)
        token = jwt.encode({
            'sub': user_to_login.id,
            'exp': int(dt.strftime('%s'))
            }, settings.SECRET_KEY, 'HS256')

        return Response({
            'token': token,
            'message': f"Welcome back, {user_to_login.username}"
        })

