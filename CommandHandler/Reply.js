let replies = [
  "Hello! Good Day!",
  "Hi! This is the Welcome And Intro Bot Speaking!",
  "🎁 Hey!",
  "👍😃✨",
  "How can I help you?",
  "My Name is the Welcome bot, how can I help you?",
];
module.exports = function send(message, tokens) {
  message.channel.send(replies[Math.floor(Math.random() * replies.length)]);
};
