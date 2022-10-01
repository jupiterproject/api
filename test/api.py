import requests

data = requests.get("http://localhost:8000/users")
print(data.json())