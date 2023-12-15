from fuzzywuzzy import fuzz


def compare_lengths(responses):
    """ Compare the lengths of responses. """
    return {model: len(response) for model, response in responses.items()}


def compare_similarity(responses):
    """ Compare the similarity of responses. """
    models = list(responses.keys())
    similarity_scores = {}

    for i in range(len(models)):
        for j in range(i + 1, len(models)):
            model1, model2 = models[i], models[j]
            score = fuzz.ratio(responses[model1], responses[model2])
            similarity_scores[(model1, model2)] = score

    return similarity_scores


def compare_responses(responses):
    """
    Compare responses from different models.
    
    :param responses: A dictionary where keys are model names and values are their responses.
    :return: A dictionary with comparison results.
    """
    results = {
        'lengths': compare_lengths(responses),
        'similarities': compare_similarity(responses)
    }

    # Add more comparison metrics as needed

    return results



if __name__ == "__main__":
    example_responses = {
        'Model1': "Response from model 1",
        'Model2': "Response from model 2",
        'Model3': "Another response from model 3"
    }

    comparison_results = compare_responses(example_responses)
    print(comparison_results)
