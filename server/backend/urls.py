from . import views
from django.urls import path

urlpatterns = [
    path("api/auth/login/", views.login_authenticate, name="login_authenticate"),
]