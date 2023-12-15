import os
import requests
import json


def load_config(config_path):
    with open(config_path, 'r') as file:
        return json.load(file)


class APIClient:
    def __init__(self, config):
        self.api_key = os.environ.get(config["api_key_name"])
        self.base_url = config["base_url"]
        self.models = config["models"]
        if not self.api_key:
            raise Exception(
                f"'{config['api_key_name']}' not found in enviroment, Make sure its loaded!"
            )

    def query_model(self, prompt, model):
        if model not in self.models:
            raise ValueError(f"Model {model} is not available for this service.")

        HEADERS = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.api_key}',
            'Accept': 'application/json'
        }

        data = {
            "model": model,
            "messages": [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.7
        }

        response = requests.post(self.base_url, headers=HEADERS, data=json.dumps(data))
        print("Response: ", response)
