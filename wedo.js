class Wedo1 {

    getInfo(){
        return {
            "id": "wedo1",
            "name": "WeDo 1.0",
            "blocks": [
                {
                    "opcode": "testSocket",
                    "blockType": "command",
                    "text": "send [text] message",
                    "arguments": {
                        "text":{
                            "type": "string",
                            "defaultValue": ""
                        }
                    }
                },
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
                POWERED: ['motor', 'motor A', 'motor B', 'everything'],
                DIRECTION: ['this way', 'that way', 'reverse']
            }
        }
    }

    getDistance({}) {
        return 0;
    }

    whenDistance({op, num}){
        return false;
    }

    whenTilt({tilt}){
        return "up";
    }

    turnOnTime({powered, num}){

    }

    turnOn({powered}){

    }

    turnOff({powered}){

    }

    setPower({powered, num}){

    }

    setDirection({powered, direction}){

    }

    testSocket({text}){
        const socket = new WebSocket('ws://localhost:8080/');

        socket.addEventListener('open', function (event) {
            socket.send(text + "\n");
            socket.close()
        });
    }
}
Scratch.extensions.register(new Wedo1());