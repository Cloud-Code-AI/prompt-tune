import unittest
from unittest.mock import patch, MagicMock
import os
import json
from prompt_tune.api_clients import APIClient, load_config


class TestAPIClient(unittest.TestCase):

    def setUp(self):
        self.config = {
            "api_key_name": "TEST_API_KEY",
            "base_url": "https://api.test.com",
            "models": ["model1", "model2"]
        }
        # Set up a mock environment variable for the API key
        self.api_key = "dummy_api_key"
        os.environ["TEST_API_KEY"] = self.api_key

    def test_init_without_api_key(self):
        # Remove the mock API key to test initialization failure
        del os.environ["TEST_API_KEY"]
        with self.assertRaises(Exception):
            APIClient(self.config)
        # Restore the mock API key after the test
        os.environ["TEST_API_KEY"] = self.api_key

    def test_init_with_api_key(self):
        client = APIClient(self.config)
        self.assertEqual(client.api_key, self.api_key)

    @patch('prompt_tune.api_clients.requests.post')
    def test_query_model_with_valid_model(self, mock_post):
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = json.dumps({"response": "test response"})
        mock_post.return_value = mock_response
        client = APIClient(self.config)
        response = client.query_model("test prompt", "model1")
        mock_post.assert_called_once()
        self.assertEqual(response.json(), {"response": "test response"})

    def test_query_model_with_invalid_model(self):
        client = APIClient(self.config)
        with self.assertRaises(ValueError):
            client.query_model("test prompt", "invalid_model")

# Run the tests
if __name__ == '__main__':
    unittest.main()
