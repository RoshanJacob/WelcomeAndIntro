let images = [
  "Forest",
  "HotChocolateWithMarshMallows",
  "Cropped-Cubes",
  "Sunlight",
  "Cubes",
];

module.exports = async function search(message, tokens) {
  let searchKeys = "Cubes";

  if (tokens.length > 0) {
    searchKeys = tokens.join(" ");
  } else if (tokens.length === 0) {
    searchKeys = images[Math.floor(Math.random() * images.length)];
  }
  // searchKeys = images[Math.random * images.length];

  await message.channel.send({
    files: [
      `https://raw.githubusercontent.com/RoshanJacob/Image-Collection/main/Image%20Collection/${searchKeys}.jpg`,
    ],
  });
};
