from setuptools import setup

setup(name='test_graphene',
      version='1.0',
      description='Test graphene cababilities',
      url='',
      author='Benoît Zugmeyer',
      author_email='bzugmeyer@gmail.com',
      license='Expat',
      packages=['test_graphene'],
      install_requires=[
          'graphene[sqlalchemy] >=0.7.3, <0.8',
          'flask_sqlalchemy >=2.1, <3',
          'flask_graphql >=1.1.0, <2',
      ],
      zip_safe=True,
      )
