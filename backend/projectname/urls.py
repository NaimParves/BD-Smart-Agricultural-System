"""
URL configuration for projectname project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# projectname/urls.py
from django.contrib import admin
from django.urls import path, include
#from django.conf.urls import url
from authentication.views import ReactView, CheckEmployeeExistenceView
#from django.views.generic import RedirectView
from login_stuffs.views import ReactView_Register_admin, CheckUserExistenceView , ReactView_DeleteMember
from field_officer_login.views import ReactView_Register_Field_Officer, CheckUserExistenceView_Field_Officer,ReactView_DeleteMember_Field_Officer


urlpatterns = [
    path('', ReactView.as_view(), name="anything"),
    path('admin/', admin.site.urls),
    path('check_employee/', CheckEmployeeExistenceView.as_view(), name="check_employee"),
    #path('authentication/', include('authentication.urls')),  # Include your authentication app's URLs

    
    path('register/', ReactView_Register_admin.as_view(), name="anything"),# for admins register
    path('login/', CheckUserExistenceView.as_view(), name="check_user"), # for  admins logins
    path('delete_admin/', ReactView_DeleteMember.as_view(), name="delete_member"),


    path('register_field_officer/', ReactView_Register_Field_Officer.as_view(), name="anything"),# for field officer register
    path('login_field_officer/', CheckUserExistenceView_Field_Officer.as_view(), name="check_user"), # for  field officer logins
    path('delete_field_officer/', ReactView_DeleteMember_Field_Officer.as_view(), name="delete_field_officer"),

]


