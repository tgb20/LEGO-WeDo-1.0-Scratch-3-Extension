
const iconURI = 'data:image/png;base64,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';

class Wedo1 {

    getInfo(){
        return {
            "id": "wedo1",
            "name": "WeDo 1.0",
            "blockIconURI": iconURI,
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