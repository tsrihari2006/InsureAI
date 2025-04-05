from flask import Flask
from flask_socketio import SocketIO, emit
from pymongo import MongoClient
from routes.chat import get_bot_response  # 👈 import here


app = Flask(__name__)
app.config["SECRET_KEY"] = "your-secret-key"


socketio = SocketIO(app, cors_allowed_origins="*")


client = MongoClient("mongodb://localhost:27017")
db = client["insurance_db"]
chat_collection = db["chats"]


def save_chat(sender, message):
    chat_collection.insert_one({"sender": sender, "message": message})


@socketio.on("sendMessage")
def handle_message(data):
    user_message = data["message"]
    save_chat("User", user_message)

    bot_reply = get_bot_response(user_message)  
    save_chat("Bot", bot_reply)

    emit("receiveMessage", {"sender": "User", "message": user_message})
    emit("receiveMessage", {"sender": "Bot", "message": bot_reply})

if __name__ == "__main__":
    socketio.run(app, debug=True, host="0.0.0.0", port=4000)
