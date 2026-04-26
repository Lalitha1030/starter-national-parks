function printName(name){
  console.log("Hello " + name);
}

setTimeout(printName, 3000, "Thundercat");
setTimeout(printName, 2000, "Adele");
setTimeout(printName, 1000, "Sade");

function repeatMessage(){
  console.log("hey there! This message will be printed every second");
}

setInterval(repeatMessage, 1000); // Calls repeatMessage() every 1,000 milliseconds