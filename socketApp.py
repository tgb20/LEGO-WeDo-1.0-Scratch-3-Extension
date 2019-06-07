from websocket_server import WebsocketServer
from wedo import WeDo
import json

def new_client(client, server):
    server.send_message(client, "It works!")
    print "Client Connected"

def new_message(client, server, message):

    j = json.loads(message)

    if j["type"] == "motor":
        if j["motor"] == "motor":
            wd.motor_a = j["power"]
            wd.motor_b = j["power"]
        elif j["motor"] == "motor A":
            wd.motor_a = j["power"]
        elif j["motor"] == "motor B":
            wd.motor_b = j["power"]

    print message

print "Opening WeDo Connection"
wd = WeDo()
print "Opened WeDo Connection"
print "Starting WebSocket Server"
server = WebsocketServer(8080)
server.set_fn_new_client(new_client)
server.set_fn_message_received(new_message)
server.run_forever()

while True:
    print wd.distance
