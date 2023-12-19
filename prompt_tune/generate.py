from prompt_tune import utils

TEMPLATES = {
    "alternative_prompts": "Transform the following original prompt into five distinct, shorter prompts. \
        Each new prompt should aim to produce responses that are more precise and to the point. \
        The new prompts should be efficient in terms of computational resources and encourage brief yet informative answers.\
        Please format the output as a JSON object with the key 'prompts'. \
        Original Prompt: {prompt} \
        Output Format: {{'prompts': ['alternative_1', 'alternative_2', ..., 'alternative_5']}}"

}


def generate_alternative_prompts(client, input, model, generate_response=False):
    message = TEMPLATES["alternative_prompts"].format(prompt=input)
    resp = client.query_model(message, model)
    # Expecting OpenAI response format but might have to change based on other API providers
    json_data = utils.extract_json_from_string(resp["choices"][0]["message"]["content"])
    output = []
    for prompt in json_data["prompts"]:
        tmp = {
            "prompt": prompt
        }
        if generate_prompt_response:
            resp = generate_prompt_response(client, prompt, model)
            tmp.update({
                "response": resp[0],
                "usage": resp[1]
            })
        output.append(tmp)
    return output


def generate_prompt_response(client, prompt, model):
    message = prompt
    resp = client.query_model(message, model)
    # Expecting OpenAI response format but might have to change based on other API providers
    return resp["choices"][0]["message"]["content"], resp["usage"]