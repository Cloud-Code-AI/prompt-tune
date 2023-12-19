# Prompt-Tune

Promptune is an open-source tool designed to enhance interactions with AI language models. It enables users to evaluate and select effective prompts, test them across multiple models, and track how model responses change over time. This tool is ideal for developers, researchers, and AI enthusiasts working with models like GPT-3.5 and others.

## Features

- **Generate Alternative Prompts**: Create variations of prompts to explore different phrasing.
- **Evaluate Prompt Effectiveness**: Assess prompt performance across different AI models.
- **Iterative Prompt Refinement**: Quickly refine prompts for optimal results.
- **Multi-Model Compatibility**: Test prompts with various AI models, including different versions of OpenAI's GPT.
- **Response Tracking**: Analyze how AI model responses evolve in relation to prompt modifications.

## Installation

Promptune is not available as a pip package, but you can install it from the source. Clone the repository and use the `setup.py` script:

```bash
git clone https://github.com/Cloud-Code-AI/prompt-tune.git
cd promptune
python setup.py install
```

## Configuration

Before using Promptune, you need to set up a configuration file (`config.json`). This file contains the necessary details for connecting to AI services like OpenAI.

Here's an example of what your `config.json` should look like:

```json
{
    "services": {
        "OpenAI": {
            "api_key_name": "OPENAI_KEY",
            "base_url": "https://api.openai.com/v1/chat/completions",
            "models": ["gpt-3.5-turbo", "gpt-4-turbo"]
        }
    }
}
```

- `api_key_name`: The environment variable name where your OpenAI API key is stored.
- `base_url`: The base URL for the OpenAI API.
- `models`: A list of models you plan to use.

Ensure you have set the `OPENAI_KEY` environment variable with your actual OpenAI API key.

## Usage

### Example 1: Generating and Testing Alternative Prompts

This example demonstrates generating alternative prompts.

```bash
python example.py
```

## Contributing

We welcome contributions to Promptune. If you're interested in helping, please read our [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## License

Promptune is released under the [MIT License](./LICENSE).

## Contact

For questions and feedback, please reach out to us at [contact@example.com](mailto:oss@cloudcode.ai).
