# -*- coding: UTF-8 -*-
"""
WatchTower: PyTest configuration

See https://pytest.org/latest/plugins.html

Copyright 2017, Robert Banziziki
License: MIT
"""

import pytest, os
from webtest import TestApp

from watchtower.app import create_app
from watchtower import model


@pytest.yield_fixture
def app():
    os.environ['CONFIG'] = 'watchtower.config.TestConfig'
    app = create_app()
    model.init_db_tables(app)
    model.init_db_data(app)
    ctx = app.test_request_context()
    ctx.push()
    yield app
    ctx.pop()


@pytest.fixture
def testapp(app):
    return TestApp(app)
