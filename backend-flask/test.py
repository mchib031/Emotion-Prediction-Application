import requests

api_url = 'http://127.0.0.1:5000/predict_emotion'

input_sentence = "I hate it"

response = requests.post(api_url, json={'sentence': input_sentence})

print("Response Content:", response.content.decode('utf-8'))
