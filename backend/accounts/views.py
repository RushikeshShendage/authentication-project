from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import RegisterSerializer


class RegisterView(APIView):

    def post(self, request):

        serializer = RegisterSerializer(
            data=request.data
        )

        if serializer.is_valid():
            serializer.save()

            return Response({
                "message": "User Registered Successfully"
            })

        return Response(serializer.errors)


class DashboardView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        return Response({
            "username": request.user.username,
            "email": request.user.email,
        })