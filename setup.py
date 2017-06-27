#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
WatchTower: setup script

Copyright 2017, Robert Banziziki
License: MIT
"""
import sys
import watchtower
from setuptools import setup, find_packages
from setuptools.command.test import test as TestCommand


# This is a plug-in for setuptools that will invoke py.test
# when you run python setup.py test
class PyTest(TestCommand):
    def finalize_options(self):
        TestCommand.finalize_options(self)
        self.test_args = []
        self.test_suite = True

    def run_tests(self):
        import pytest  # import here, because outside the required eggs aren't loaded yet
        sys.exit(pytest.main(self.test_args))


setup(
    name='watchtower',
    version=watchtower.__version__,
    description="Admin interface for REST server with mongoDB",
    long_description=open("README.rst").read(),
    author='Robert Banziziki',
    author_email='muhirerobert@gmail.com',
    url="http://www.your.site/or/github/page",
    license='MIT',
    classifiers=[ # Get strings from http://pypi.python.org/pypi?%3Aaction=list_classifiers
        'Development Status :: 1 - Planning',
        'Programming Language :: Python'
    ],
    zip_safe=False,
    packages=find_packages(exclude=['ez_setup', 'examples', 'tests']),
    include_package_data=True,
    install_requires=[
      "Flask", "Flask-SQLAlchemy", "Flask-Login", "Flask-WTF", "Flask-Babel", "Flask-Admin",
      "Flask-Script", "Flask-Assets", "jsmin", "cssmin"
    ],
    tests_require=["pytest", "webtest"],
    cmdclass={'test': PyTest},
    entry_points={
        "console_scripts": ["watchtower-manage = watchtower.manage:main"],
        "paste.app_factory": ["main = watchtower.app:app_factory"]
    },
)
