from django.shortcuts import render
from rest_framework.decorators import api_view #
#api_view is a decorator that converts a regular Python function into a REST API endpoint, handling JSON parsing and HTTP method validation
from rest_framework.response import Response
#Response is a class that automatically formats Python data as JSON with proper HTTP headers.


@api_view(['GET'])
def hello_world(request):
    return Response({
        'message': 'Django says hello',
        'status': 'API is good to go'
    })

