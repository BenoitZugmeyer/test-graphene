from graphene import ObjectType, Schema
from graphene.relay import NodeField
from graphene.contrib.sqlalchemy import SQLAlchemyNode, \
    SQLAlchemyConnectionField

from test_graphene import models

schema = Schema()


@schema.register
class Note(SQLAlchemyNode):
    class Meta:
        model = models.Note


class Query(ObjectType):
    node = NodeField()
    all_notes = SQLAlchemyConnectionField(Note)


schema.query = Query

if __name__ == "__main__":
    import sys
    import json
    if len(sys.argv) > 1 and sys.argv[1] == "--json":
        print(json.dumps(schema.introspect(), indent=2))
    else:
        print(schema)
