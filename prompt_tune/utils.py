import json
import re


def extract_json_from_string(s):
    """
    Extracts a JSON object from a string.

    :param s: The string containing the JSON object.
    :return: The extracted JSON object, or None if no valid JSON is found.
    """
    try:
        # Regular expression to find a JSON object
        # This regex looks for something that starts with { and ends with }
        # and contains any character in between, non-greedily.
        json_match = re.search(r'{.*?}', s, re.DOTALL)
        if json_match:
            json_str = json_match.group()
            return json.loads(json_str)
        else:
            return None
    except json.JSONDecodeError:
        return None


if __name__ == "__main__":
    string_with_json = "Some text before the JSON {\"key1\": \"value1\", \"key2\": 123} and some text after."
    extracted_json = extract_json_from_string(string_with_json)
    print(extracted_json)