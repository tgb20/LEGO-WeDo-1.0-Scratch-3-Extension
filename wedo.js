class Wedo1 {

    getInfo(){
        return {
            "id": "wedo1",
            "name": "WeDo 1.0",
            "blocks": [
                {
                    "opcode": "turnOnTime",
                    "blockType": "command",
                    "text": "turn [powered] on for [num] secs",
                    "arguments": {
                        "powered": {
                            "type": "ArgumentType.STRING",
                            "menu": "POWERED",
                            "defaultValue": "motor"
                        },
                        "num": {
                            "type": "number",
                            "defaultValue": "1"
                        }
                    }
                },
                {
                    "opcode": "turnOn",
                    "blockType": "command",
                    "text": "turn [powered] on",
                    "arguments": {
                        "powered": {
                            "type": "ArgumentType.STRING",
                            "menu": "POWERED",
                            "defaultValue": "motor"
                        }
                    }
                },
                {
                    "opcode": "turnOff",
                    "blockType": "command",
                    "text": "turn [powered] off",
                    "arguments": {
                        "powered": {
                            "type": "ArgumentType.STRING",
                            "menu": "POWERED",
                            "defaultValue": "motor"
                        }
                    }
                },
                {
                    "opcode": "setPower",
                    "blockType": "command",
                    "text": "set [powered] power to [num]",
                    "arguments": {
                        "powered": {
                            "type": "ArgumentType.STRING",
                            "menu": "POWERED",
                            "defaultValue": "motor"
                        },
                        "num": {
                            "type": "number",
                            "defaultValue": "100"
                        }
                    }
                },
                {
                    "opcode": "setDirection",
                    "blockType": "command",
                    "text": "set [powered] direction to [direction]",
                    "arguments": {
                        "powered": {
                            "type": "ArgumentType.STRING",
                            "menu": "POWERED",
                            "defaultValue": "motor"
                        },
                        "direction": {
                            "type": "ArgumentType.STRING",
                            "menu": "DIRECTION",
                            "defaultValue": "this way"
                        }
                    }
                },
                {
                    "opcode": "whenDistance",
                    "blockType": "hat",
                    "text": "when distance [op] [num]",
                    "arguments": {
                        "op": {
                            "type": "ArgumentType.STRING",
                            "menu": "OP",
                            "defaultValue": "<"
                        },
                        "num": {
                            "type": "number",
                            "defaultValue": "20"
                        }
                    }
                },
                {
                    "opcode": "whenTilt",
                    "blockType": "hat",
                    "text": "when tilted [tilt]",
                    "arguments": {
                        "tilt": {
                            "type": "ArgumentType.STRING",
                            "menu": "TILT",
                            "defaultValue": "any"
                        }
                    }
                },
                {
                    "opcode": "getDistance",
                    "blockType": "reporter",
                    "text": "distance",
                    "arguments": {
                    }
                },
                {
                    "opcode": "getTilt",
                    "blockType": "Boolean",
                    "text": "tilted [tilt]?",
                    "arguments": {
                        "tilt": {
                            "type": "ArgumentType.STRING",
                            "menu": "TILT",
                            "defaultValue": "any"
                        }
                    }
                }
            ],
            "menus": {
                OP: ['<', '>'],
                TILT: ['up', 'down', 'left', 'right', 'any'],
                POWERED: ['motor', 'motor A', 'motor B'],
                DIRECTION: ['this way', 'that way', 'reverse']
            }
        }
    }

    getDistance({}) {
        const socket = new WebSocket('ws://localhost:8080/');

        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({type: "sensor", sensor: "distance"}));
        });

        socket.addEventListener('message', function (event) {
            var j = JSON.parse(event.data)
            socket.close();
            var fixedValue = Math.floor(j.value * 100 / 46)
            return fixedValue
        });

        return 1337;
    }

    getTilt({tilt}){
        return false;
    }

    whenDistance({op, num}){
        return false;
    }

    whenTilt({tilt}){
        return "up";
    }

    turnOnTime({powered, num}){
        this.turnOn({powered})
        setTimeout(() => {
            this.turnOff({powered})
        }, num * 1000)
    }

    turnOn({powered}){
        const socket = new WebSocket('ws://localhost:8080/');

        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({type: "motor", change: "status", motor: powered, status: "on"}));
            socket.close()
        });
    }

    turnOff({powered}){
        const socket = new WebSocket('ws://localhost:8080/');

        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({type: "motor", change: "status", motor: powered, status: "off"}));
            socket.close()
        });
    }

    setPower({powered, num}){
        const socket = new WebSocket('ws://localhost:8080/');

        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({type: "motor", change: "power", motor: powered, power: num}));
            socket.close()
        });
    }

    setDirection({powered, direction}){
        const socket = new WebSocket('ws://localhost:8080/');

        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({type: "motor", change: "direction", motor: powered, direction: direction}));
            socket.close()
        });
    }
}
Scratch.extensions.register(new Wedo1());