from flask_socketio import Namespace, emit


class ServiceNamespace(Namespace):

    def on_connect(self):
        pass
    
    def on_disconnect(self):
        pass

    def on_my_event(self, data):
        emit("my_response", data)