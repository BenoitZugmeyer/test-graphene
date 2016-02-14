from test_graphene.models import db, Note
from test_graphene.schema import schema
from test_graphene.app import app

from flask_graphql import GraphQL
from flask import send_file


db.create_all()

db.session.add(Note(text="Hello"))
db.session.add(Note(text="World"))

db.session.commit()

GraphQL(app, schema)


@app.route("/")
def index():
    return send_file("static/index.html", mimetype="text/html")

app.run()
