**This project discovers the capabilities of character-level language models built from scratch in PyTorch.**

## The Bigram Model

A bigram model is a type of probabilistic model that uses the conditional probability of a token given the previous token. What is a token you ask? In this case, a token is a character, such as `h`, `2` or even '!'.

First, I scanned the training dataset consisting of around 32,000 names to create a list of `[vocab_size]` unique tokens that exist within the dataset as well as a special `"."` token to indicate the start or the end of a name.

I used a context size of 2 to start with, meaning that the model would use the previous 2 characters to predict the next word. The generic approach was to create a 2D array of shape `[vocab_size, vocab_size]` to store the frequency of token pairs by iterating through the training dataset and seeing which tokens followed which.

markov property: the probability of a token given the previous token is only dependent on the previous token.

The map of the token pairs can be seen below:
![freqmap](/images/projects/bigram/freqmap.png)

however, our goal is to use deep learning to do so, hence we need to create an Multilayer Perceptron (MLP) model that can learn those patterns in the data.

## The Model

The starting model will be very just 2 layers deep.

```python
# weights
W1 = torch.randn((30, 200)) * (5/3) / (num_embd*block_size)**0.5
W2 = torch.randn((200, 27))
# biases
b1 = torch.randn(200)
b2 = torch.randn(27)
```

What is this scary maths you might ask? Specifically `(5/3) / (num_embd*block_size)**0.5` is called the "kaiming uniform initialization" and it helps in controlling the variance of the weights. The problem this addresses is that some neurons might have too much weight variance, causing some neurons to saturate and others to explode. This can be shown in the image
![incorrect_init](/images/projects/bigram/init_old.png)

The white neurons are the ones that are not activated, hence despite the size, a large network may not be able to utilise most of its neurons.

Let's see how this compares to a new model with the correct initialization.

![correct_init](/images/projects/bigram/init_new.png)

As you can see, the neurons are now activated more uniformly, allowing for better learning.

## Now onto the training:

## The Embeddings

first, we need to realise that computer needs a way to represent tokens as numbers. This is where the `token_embedding` matrix comes in. To keep things simple, we will use the character's index in the `vocab` list as its corresponding index in the `token_embedding` matrix. This technique is called one-hot encoding. With `vocab_size` = 5 and `block_size` = 2, we can represent the tokens as such:

```
[0, 1] -> [1, 0, 0, 0, 0] # where 1 is the index of the token in the vocab
```

This is the basic unit of our model, and we can represent a name as a sequence of these tokens.

Then onto finding the hyperparameters:
to find the optimal learning rate, or the factor by which the partial derivative of a given parameter with respect to the output layer is multiplied during backward pass in the training stage, we can use the following method: # talk about linear search
