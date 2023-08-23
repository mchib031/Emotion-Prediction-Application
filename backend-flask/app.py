from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy
import pickle


app = Flask(__name__)
CORS(app)

@app.route('/predict_emotion', methods=['OPTIONS'])
def handle_options():
    response = app.response_class()
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response


with open('trained_model.pickle', 'rb') as model_file:
    loaded_model = pickle.load(model_file)

with open('tfidf_vectorizer.pickle', 'rb') as vectorizer_file:
    loaded_vectorizer = pickle.load(vectorizer_file)

nlp = spacy.load("en_core_web_sm")

def preprocess(text):
    try:
        processed_tokens = []
        for token in nlp(text):
            if not token.is_space and not token.is_punct:
                processed_tokens.append(token.lemma_)
        return ' '.join(processed_tokens)
    except Exception as e:
        return str(e)


@app.route('/predict_emotion', methods=['POST'])
def predict_emotion():
    try:
        data = request.get_json()
        input_sentence = data.get('sentence', '')

        print("Input Sentence:", input_sentence)

        preprocessed_sentence = preprocess(input_sentence)

        print("Preprocessed Sentence:", preprocessed_sentence)

        vectorized_sentence = loaded_vectorizer.transform([preprocessed_sentence])

        print("Vectorized Sentence:", vectorized_sentence)
        dense_vectorized_sentence = vectorized_sentence.toarray()

        word_list = loaded_vectorizer.inverse_transform(dense_vectorized_sentence)[0]

        preprocessed_sentence = preprocess(" ".join(word_list))

        predicted_emotion = loaded_model.predict([preprocessed_sentence])

        emotion_labels = ['joy', 'sadness', 'anger', 'fear', 'love', 'surprise']
        predicted_emotion_label = emotion_labels[predicted_emotion[0]]

        return jsonify({'predicted_emotion': predicted_emotion_label})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
