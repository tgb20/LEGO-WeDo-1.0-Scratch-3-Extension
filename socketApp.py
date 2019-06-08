from websocket_server import WebsocketServer
from wedo import WeDo
import json


motorAOn = False
motorBOn = False
motorAPower = 100
motorBPower = 100
motorADirection = True
motorBDirection = True



def new_client(client, server):
    # New Client
    pass

def new_message(client, server, message):

    j = json.loads(message)

    if j["type"] == "motor":
        handleMotor(j)
    if j["type"] == "sensor":
        if j["sensor"] == "distance":
            server.send_message(client, '{"type":"distance", "value": ' + str(wd.distance) + '}')
        elif j["sensor"] == "tilt":
            server.send_message(client, "{'type':'tilt', 'value': " + str(wd.tilt) + "}")
def updateMotors():
    if motorAOn == True:
        if motorADirection == True:
            wd.motor_a = motorAPower
        else:
            wd.motor_a = motorAPower * -1
    else:
        wd.motor_a = 0

    if motorBOn:
        if motorBDirection == True:
            wd.motor_b = motorBPower
        else:
            wd.motor_b = motorBPower * -1
    else:
        wd.motor_b = 0



def handleMotor(j):

    global motorAOn
    global motorBOn
    global motorAPower
    global motorBPower
    global motorADirection
    global motorBDirection


    if j["change"] == "power":
        if j["motor"] == "motor":
            # Do both
            motorAPower = j["power"]
            motorBPower = j["power"]
        elif j["motor"] == "motor A":
            # motor a
            motorAPower = j["power"]
        elif j["motor"] == "motor B":
            # motor b
            motorBPower = j["power"]
    elif j["change"] == "direction":
        if j["motor"] == "motor":
            # Do both
            if j["direction"] == "this way":
                motorADirection = True
                motorBDirection = True
            elif j["direction"] == "that way":
                motorADirection = False
                motorBDirection = False
            elif j["direction"] == "reverse":
                motorADirection = not motorADirection
                motorBDirection = not motorBDirection
        elif j["motor"] == "motor A":
            # motor A
            if j["direction"] == "this way":
                motorADirection = True
            elif j["direction"] == "that way":
                motorADirection = False
            elif j["direction"] == "reverse":
                motorADirection = not motorADirection
        elif j["motor"] == "motor B":
            # motor B
            if j["direction"] == "this way":
                motorBDirection = True
            elif j["direction"] == "that way":
                motorBDirection = False
            elif j["direction"] == "reverse":
                motorBDirection = not motorBDirection
    elif j["change"] == "status":
        if j["motor"] == "motor":
            # Do both
            if j["status"] == "on":
                motorAOn = True
                motorBOn = True
            elif j["status"] == "off":
                motorAOn = False
                motorBOn = False
        elif j["motor"] == "motor A":
            # motor A
            if j["status"] == "on":
                motorAOn = True
            elif j["status"] == "off":
                motorAOn = False
        elif j["motor"] == "motor B":
            # motor B
            if j["status"] == "on":
                motorBOn = True
            elif j["status"] == "off":
                motorBOn = False
    updateMotors()


print "Opening WeDo Connection"
wd = WeDo()
print "Opened WeDo Connection"
print "Starting WebSocket Server"
server = WebsocketServer(8080)
server.set_fn_new_client(new_client)
server.set_fn_message_received(new_message)
server.run_forever()