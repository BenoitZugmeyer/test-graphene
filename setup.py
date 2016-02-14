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
          'graphene >=0.7.3, <0.8',
      ],
      zip_safe=True,
      )
