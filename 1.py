from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

API_KEY = "AIzaSyCtA9BxuFvKvqgnEeT38gjtUH6MsGajCKI"
genai.configure(api_key=API_KEY)

app = Flask(__name__)

CORS(app)

def chat_with_gemini(prompt):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    return response.text

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    if not user_message:
        return jsonify({"reply": "No message received!"}), 400

    reply = chat_with_gemini(user_message)
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)