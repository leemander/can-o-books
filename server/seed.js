const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

mongoose.connect(process.env.DB_URL);

async function seed() {
  await Book.create([
    {
      title: "The Road",
      description:
        "A father and his son walk alone through burned America. Nothing moves in the ravaged landscape save the ash on the wind. It is cold enough to crack stones, and when the snow falls it is gray. The sky is dark. Their destination is the coast, although they don’t know what, if anything, awaits them there. They have nothing; just a pistol to defend themselves against the lawless bands that stalk the road, the clothes they are wearing, a cart of scavenged food—and each other.",
      status: "read",
    },
    {
      title: "Watchmen",
      description:
        "This Hugo Award-winning graphic novel chronicles the fall from grace of a group of super-heroes plagued by all-too-human failings. Along the way, the concept of the super-hero is dissected as the heroes are stalked by an unknown assassin.",
      status: "read",
    },
    {
      title: "A Clockwork Orange",
      description:
        "In Anthony Burgess's influential nightmare vision of the future, criminals take over after dark. Teen gang leader Alex narrates in fantastically inventive slang that echoes the violent intensity of youth rebelling against society. Dazzling and transgressive, A Clockwork Orange is a frightening fable about good and evil and the meaning of human freedom.",
      status: "read",
    },
  ]);

  console.log("Book created");
  mongoose.disconnect();
}

seed();
