const db = require("../db");
const Review = require("../models/review");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const reviews = [
    {
      location: "Rome",
      costOfTravel: "75$",
      image:
        "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
      typesOfTransportation: "no transport at all",
      wouldRecommend: "Yes I recommend",
    },
    {
      location: "Paris",
      costOfTravel: "150$",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      typesOfTransportation: "yes transport, they have mopeds",
      wouldRecommend: "Yes I recommend baguette",
    },
    {
      location: "Mexico",
      costOfTravel: "200$",
      image:
        "https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city_2x1.JPG ",
      typesOfTransportation: "buses",
      wouldRecommend: "Si Senor",
    },
  ];

  await Review.insertMany(reviews);
  console.log("Created Some New Reviews!");
};

const run = async () => {
  await main();
  db.close;
};

run();
