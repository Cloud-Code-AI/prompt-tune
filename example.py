# Example 1: Generating Alternative Prompts

# Introduction
# This example demonstrates how to generate alternative prompts using Prompt Tune.

from prompt_tune import APIClient, generate_alternative_prompts

original_prompt = "Explain the theory of relativity."

client = APIClient('config.json', 'OpenAI')

# Generate alternative prompts
alternatives = generate_alternative_prompts(client, original_prompt, 'gpt-3.5-turbo', generate_response=True)

# Output the alternatives
for i, alt in enumerate(alternatives, start=1):
    print(f"Alternative {i}: {alt}\n--------\n")

# Explanation
# Here, we use the `generate_alternative_prompts` function to create different versions of the original prompt...
