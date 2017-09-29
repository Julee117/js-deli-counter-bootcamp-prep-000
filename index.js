var katzDeli = [];

function takeANumber(katsDeliLine, name) {
  var num = katsDeliLine.push(name);
   return `Welcome, ${name}. You are number ${katsDeliLine.length} in line.`;
}

function nowServing() {
  if (katsDeli.length >= 1) {
    console.log(`We are serving ${katsDeli.shift()}.`);
    katsDeli.shift();
  } else {
    return "There is nobody waiting to be served!";
  }
}
