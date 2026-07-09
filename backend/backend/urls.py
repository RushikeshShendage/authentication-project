from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)


urlpatterns = [

    path('', RedirectView.as_view(url='/api/login/', permanent=False)),

    path('admin/', admin.site.urls),

    path('api/', include('accounts.urls')),

    path(
        'api/login/',
        TokenObtainPairView.as_view()
    ),

    path(
        'api/token/refresh/',
        TokenRefreshView.as_view()
    ),
]