# setup.py

from setuptools import setup, find_packages
from prompt_tune import __version__


setup(
    name='prompt_tune',
    version=__version__,
    author='Saurav Panda',
    author_email='saurav@cloudcode.ai',
    packages=["prompt_tune"],
    packages=find_packages(),
    install_requires=[],
    zip_safe=True,
)
