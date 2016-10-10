var Movie = require('./Movie');

var m1 = new Movie();

m1.set("title", "terminator");

m1.play();
m1.stop();

console.log("Títle: " + m1.get("title"));
