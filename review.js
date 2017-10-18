
//
function mergeSort(a, b) {
  let result = []
  let countA = 0
  let countB = 0


  while (countA < a.length && countB < b.length) {
    if (a[countA] <= b[countB]) {
      result[countA + countB] = a[countA]
      countA++
    } else {
      result[countA + countB] = b[countB]
      countB++
    }
  }

  return result
}

//base case, what happens when you have 1 left or none left


//websockets - easy to send json
{
  action: "move",
  jaunt: [0, -1],

}

//server
if (msg.action === "move") {
  player.move(action.jaunt)
}

function moveFunc(payload) {

}

function passFunc(payload) {

}

function quitFunc(payload) {

}

function chatFunc(payload) {

}
var funcDispatch = {
  move: moveFunc,
  pass: passFunc,
  quit: quitFunc,
  chat: chatFunc
}

//msg cam ein through server
function handleMsg(msg) {
  funcDispatch[msg.action](msg.payload)
}

handleMsg()

//class
class Message {
  constructor(action, payload) {
    this.action = action;
    this.payload = payload
  }

  handleMe() {
    funcDispatch[this.action](this.payload)
  }
}
