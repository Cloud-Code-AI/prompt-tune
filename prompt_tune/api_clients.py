import os
import requests
import json


class APIClient:
    def load_config(self, config_file):
        with open('config.json', 'r') as file:
            self.config = json.load(file)["services"]

    def __init__(self, config_file, service):
        self.load_config(config_file)
        self.api_key = os.environ.get(self.config[service]["api_key_name"])
        self.service = service
        self.base_url = self.config[service]["base_url"]
        self.models = self.config[service]["models"]
        if not self.api_key:
            raise Exception(
                f"'{self.config['api_key_name']}' not found in enviroment, Make sure its loaded!"
            )

    def query_model(self, prompt, model, system_msg = None):
        if not system_msg:
            system_msg = "You are a helpful AI assistant"
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
                {"role": "system", "content": system_msg},
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.7
        }

        response = requests.post(self.base_url, headers=HEADERS, data=json.dumps(data))
        if response.status_code != 200:
            raise Exception("Error in API response!")
        return json.loads(response.text)
