from account import views
from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from rest_framework.authtoken.views import obtain_auth_token # token-auth
# from account import views
router =routers.DefaultRouter()
router.register('accounts',views.AccountApi ,basename='accounts')


urlpatterns = [
    path('',include(router.urls)),
    path('token-auth/', obtain_auth_token, name='api_token_auth'), # token-auth
]