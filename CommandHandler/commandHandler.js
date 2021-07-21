const images = require("./Image");
const reply = require("./Reply");

var requests = {
  image: images,
  Hello: reply,
  hello: reply,
  Image: images,
};
module.exports = async function gotIt(message) {
  console.log(message.content);

  // switch (tokens.length) {
  //   case 1:
  // }

  if (message.channel.id === "851696010346758152") {
    let tokens = message.content.split(" ");
    console.log(tokens);
    let call = tokens.shift();

    if (call.charAt(0) === "!") {
      call = call.substring(1);
      // Excludes the '!' from the request ^.

      requests[call](message, tokens);

      // requests the correct function and passes the arguments ^.
    }
    // switch (tokens[0]) {
    //   case "Hello":
    //     break;
    //   case `!image`:
    //     break;
    // }
  }
};
