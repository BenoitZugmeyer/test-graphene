from flask_sqlalchemy import SQLAlchemy
from .app import app

db = SQLAlchemy(app)
Integer = db.Integer
Model = db.Model
Column = db.Column
String = db.String


class Note(Model):

    id = Column(Integer, primary_key=True)
    text = Column(String(1000))
