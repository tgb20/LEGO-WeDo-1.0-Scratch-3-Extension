
const iconURI = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yODUgMjMzIDQwIDQwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yODUgMjMzIDQwIDQwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRTZFN0U4O3N0cm9rZTojN0M4N0E1O3N0cm9rZS13aWR0aDowLjg2MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOiNFNkU3RTg7c3Ryb2tlOiM3Qzg3QTU7c3Ryb2tlLXdpZHRoOjAuODYzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9DQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiM3Qzg3QTU7c3Ryb2tlLXdpZHRoOjAuODYzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTS0yNzAuNCwyNDcuMWgtMS4zYy0wLjQsMC0wLjctMC4zLTAuNy0wLjd2LTAuN2MwLTAuMiwwLjItMC40LDAuNC0wLjRoMS45YzAuMiwwLDAuNCwwLjIsMC40LDAuNHYwLjcNCgkJQy0yNjkuNywyNDYuOC0yNzAsMjQ3LjEtMjcwLjQsMjQ3LjF6Ii8+DQoJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9Ii0yNzEiIGN5PSIyNDUuNSIgcng9IjEuMyIgcnk9IjAuMyIvPg0KPC9nPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTS0yNjUuNywyNDcuMWgtMS4zYy0wLjQsMC0wLjctMC4zLTAuNy0wLjd2LTAuN2MwLTAuMiwwLjItMC40LDAuNC0wLjRoMS45YzAuMiwwLDAuNCwwLjIsMC40LDAuNHYwLjcNCgkJQy0yNjUsMjQ2LjgtMjY1LjMsMjQ3LjEtMjY1LjcsMjQ3LjF6Ii8+DQoJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9Ii0yNjYuMyIgY3k9IjI0NS41IiByeD0iMS4zIiByeT0iMC4zIi8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTI1OS4xLDI1Mi43aC0xLjNjLTAuNCwwLTAuNy0wLjMtMC43LTAuN3YtMC43YzAtMC4yLDAuMi0wLjQsMC40LTAuNGgxLjljMC4yLDAsMC40LDAuMiwwLjQsMC40djAuNw0KCQlDLTI1OC40LDI1Mi40LTI1OC43LDI1Mi43LTI1OS4xLDI1Mi43eiIvPg0KCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSItMjU5LjciIGN5PSIyNTEuMiIgcng9IjEuMyIgcnk9IjAuMyIvPg0KPC9nPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTS0yNTQuOSwyNTIuN2gtMS4zYy0wLjQsMC0wLjctMC4zLTAuNy0wLjd2LTAuN2MwLTAuMiwwLjItMC40LDAuNC0wLjRoMS45YzAuMiwwLDAuNCwwLjIsMC40LDAuNHYwLjcNCgkJQy0yNTQuMiwyNTIuNC0yNTQuNSwyNTIuNy0yNTQuOSwyNTIuN3oiLz4NCgk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iLTI1NS41IiBjeT0iMjUxLjIiIHJ4PSIxLjMiIHJ5PSIwLjMiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMjUyLjYsMjUxLjIiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNLTI1My41LDI2MC42aC0yNGMtMC41LDAtMC45LTAuNC0wLjktMC45VjI1MmMwLTIuOSwyLjQtNS4zLDUuMy01LjNoOC44YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDIuNQ0KCQljMCwwLjgsMC43LDEuNSwxLjUsMS41aDguMWMwLjMsMCwwLjUsMC4yLDAuNSwwLjV2Ni45Qy0yNTIuNiwyNjAuMi0yNTMsMjYwLjYtMjUzLjUsMjYwLjZ6Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTS0yNTAsMjUxLjIiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNLTI1MS43LDI1MS4yIi8+DQo8L2c+DQo8cG9seWxpbmUgY2xhc3M9InN0MiIgcG9pbnRzPSItMjc4LjIsMjUzLjcgLTI3Mi43LDI1My43IC0yNjcuNywyNTguMSAtMjUyLjcsMjU4LjEgIi8+DQo8L3N2Zz4NCg==';

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

    async getDistance({}) {
        return await this.fetchDistance()
    }

    fetchDistance(){
        return new Promise((resolve, reject) => {
            const socket = new WebSocket('ws://localhost:8080/');

            socket.addEventListener('open', function (event) {
                socket.send(JSON.stringify({type: "sensor", sensor: "distance"}));
            });

            socket.addEventListener('message', function (event) {
                var j = JSON.parse(event.data)
                socket.close();
                var fixedValue = Math.floor(j.value * 100 / 46)
                resolve(fixedValue)
            });
        })
    }

    async getTilt({tilt}){
        return await this.fetchTilt(tilt);
    }

    fetchTilt(tilt){
        return new Promise((resolve, reject) => {
            resolve(true)
        })
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