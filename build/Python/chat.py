import random
import json

import torch

from langdetect import detect
from model import NeuralNet
from nltk_utils import bag_of_words, tokenize

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('intents.json', 'r') as json_data:
    intents = json.load(json_data)

FILE = "data.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

bot_name = "EcoloGPT"
print("Bonjour. Je suis EcoloGPT, celui qui répondra à toutes tes questions sur l'écologie ! Lançons une conversation !(type 'quit' to exit)")
while True:
    # sentence = "do you use credit cards?"
    sentence = input("Vous: ")
    if sentence == "quit":
        break
    detected_language = detect(sentence)
    sentence = tokenize(sentence, language=detected_language)
    X = bag_of_words(sentence, all_words, language=detected_language)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]
    if prob.item() > 0.75:
        for intent in intents['intents']:
            if tag == intent["tag"]:
                print(f"{bot_name}: {random.choice(intent['responses'])}")
    else:
        print(f"{bot_name}: Je n'ai pas été entrainé pour répondre à ce genre de questions. Je suis écoloGpt ! L'intelligence artificielle qui vous aide à oeuvre pour la planète !")
