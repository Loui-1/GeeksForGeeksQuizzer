import json

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all domains
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:bolatito224@localhost:3306/learnhub"

db.init_app(app)


@app.route('/', methods=['GET', 'POST'])
def hello_world():
    from database import fetch

    results = fetch(0, 'Amalitech')
    return jsonify(results), 200


@app.route("/register")
def register():
    pass


if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True)
