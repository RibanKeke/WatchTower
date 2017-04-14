"""
Author: Robert Banziziki
Program: WatchTower backend runner
Description: Flash server for running system command and following execution.
"""
from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO

from controllers import helloController
from socket_controllers.socket_services import ServiceNamespace

APP = Flask(__name__)

API = Api(APP)
SOCKETIO = SocketIO(APP)

APP.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///static/db/test.db'
APP.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True


DB = SQLAlchemy(APP)

SOCKETIO.on_namespace(ServiceNamespace('sk_service'))

API.add_resource(helloController.HelloController, '/api/hello')

if __name__ == '__main__':
    SOCKETIO.run(app=APP, debug=True, port=8080)
