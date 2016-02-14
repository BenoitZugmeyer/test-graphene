test-graphene
=============

A small app to test Graphene_ integration with Flask_ and Relay_.

Building
--------

.. code:: bash

    # Get the source
    git clone https://github.com/BenoitZugmeyer/test-graphene
    cd test-graphene

    # Create a virtual env
    virtualenv3 venv  # Must be python 3!
    . venv/bin/activate

    # Install Python dependencies
    python setup.py install

    # Install JavaScript dependencies and build the files
    cd ui
    npm install
    npm run build  # You can use `npm run watch` to watch for changes
    cd ..

    # Launch it
    python test_graphene



.. _Graphene: http://graphene-python.org/
.. _Flask: http://flask.pocoo.org/
.. _Relay: https://facebook.github.io/relay/
