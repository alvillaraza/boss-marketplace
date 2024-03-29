import captain_hat_front from "./assets/captain_hat_front.jpeg";
// import freddy_with_hands from "./assets/freddy_with_hands.jpeg";
import greenbowlerhat_side from "./assets/greenbowlerhat_side.jpeg";
import greentophat_side from "./assets/greentophat_side.jpeg";
import leopard_fur_front2 from "./assets/leopard_fur_front2.jpeg";
import mariachi_front from "./assets/mariachi_front.jpeg";
import patriotic_summer_front from "./assets/patriotic_summer_front.jpeg";
import patriotic_tophat_front from "./assets/patriotic_tophat_front.jpeg";
import patriotic_visor_side from "./assets/patriotic_visor_side.jpeg";
import sailor_front from "./assets/sailor_front.jpeg";
import sailor_stripe_front from "./assets/sailor_stripe_front.jpeg";
import tophatwithbuckle from "./assets/tophatwithbuckle.jpeg";
import white_fur_ears_front from "./assets/white_fur_ears_front.jpeg";
import white_fur_hat from "./assets/white_fur_hat.jpeg";
import white_sailor_side from "./assets/white_sailor_side.jpeg";
import red_military from "./assets/red_military.jpeg";
import leather_hat from "./assets/leather_hat.jpeg";
import gold_spiked_side from "./assets/gold_spiked_side.jpeg";
import bluered_beanie from "./assets/bluered_beanie.png";
import boss_hats from "./assets/boss_hats.jpeg";
import marching_band_hat from "./assets/marching_band_hat.png";
import pink_ski_mask from './assets/pink_ski_mask.jpeg'

const hatsData = [
  {
    name: "Gold Spiked Hat",
    category: "hats",
    image: gold_spiked_side,
    available: [
      {
        item: "white hat with gold spikes",
        price: 20,
        count: 1,
      },
    ],
  },
  {
    name: "Gold BOSS Statement Hat",
    category: "hats",
    image: boss_hats,
    available: [
      {
        item: "BOSS Statement Hat",
        price: 15,
        count: 3,
      },
    ],
  },
  {
    name: "Black Leather Hat",
    category: "hats",
    image: leather_hat,
    available: [
      {
        item: "black leather biker hat with silver chain",
        price: 8,
        count: 3,
      },
    ],
  },
  {
    name: "Red Military Hat",
    category: "hats",
    image: red_military,
    available: [
      {
        item: "red military hat",
        price: 12,
        count: 2,
      },
    ],
  },
  // {
  //   name: "Freddy Kreuger Hat and Glove",
  //   category: "hats",
  //   image: freddy_with_hands,
  //   available: [
  //     {
  //       item: "freddy kreuger hat and glove",
  //       price: 20,
  //       count: 1,
  //     },
  //   ],
  // },

  {
    name: "Mariachi Hat",
    category: "hats",
    image: mariachi_front,
    available: [
      {
        item: "mariachi hat with moño",
        price: 20,
        count: 3,
      },
    ],
},
  {
    name: "Marching Band Hat",
    category: "hats",
    image: marching_band_hat,
    available: [
      {
        item: "marching band hat",
        price: 28,
        count: 3,
      },
    ],
},
  {
    name: "Patriotic Flowers Summer Hat",
    category: "hats",
    image: patriotic_summer_front,
    available: [
      {
        item: "summer hat with flowers",
        price: 8,
        count: 3,
      },
    ],
  },
  {
    name: "Patriotic Feathers Tophat",
    category: "hats",
    image: patriotic_tophat_front,
    available: [
      {
        item: "red, white, and blue tophat",
        price: 10,
        count: 3,
      },
    ],
  },
  {
    name: "Patriotic Visor",
    category: "hats",
    image: patriotic_visor_side,
    available: [
      {
        item: "red, white, blue visor",
        price: 8,
        count: 3,
      },
    ],
  },
  {
    name: "Blue and Red Poof Beanie",
    category: "hats",
    image: bluered_beanie,
    available: [
      {
        item: "blue and red poof beanie",
        price: 10,
        count: 3,
      },
    ],
  },
  {
    name: "Pink Studded Ski Mask",
    category: "hats",
    image: pink_ski_mask,
    available: [
      {
        item: "Pink Ski Mask",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Sailor Captain Hat",
    category: "hats",
    image: captain_hat_front,
    available: [
      {
        item: "sailor captain hat",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Sailor Hat",
    category: "hats",
    image: sailor_front,
    available: [
      {
        item: "blue sailor hat",
        price: 8,
        count: 3,
      },
    ],
  },
  {
    name: "Sailor Stripe Headband",
    category: "hats",
    image: sailor_stripe_front,
    available: [
      {
        item: "sailor stripe headband",
        price: 8,
        count: 3,
      },
    ],
  },
  {
    name: "White Sailor",
    category: "hats",
    image: white_sailor_side,
    available: [
      {
        item: "white sailor hat",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Green Shamrock Bowler Hat",
    category: "hats",
    image: greenbowlerhat_side,
    available: [
      {
        item: "green bowler hat with shamrock",
        price: 15,
        count: 3,
      },
    ],
  },
  {
    name: "Green Tophat",
    category: "hats",
    image: greentophat_side,
    available: [
      {
        item: "green tophat",
        price: 12,
        count: 3,
      },
    ],
  },
  {
    name: "Green Tophat with Buckle",
    category: "hats",
    image: tophatwithbuckle,
    available: [
      {
        item: "green tophat with buckle",
        price: 15,
        count: 2,
      },
    ],
  },
  {
    name: "White Fur Hood with Ears",
    category: "hats",
    image: white_fur_ears_front,
    available: [
      {
        item: "white fur hood with ears",
        price: 20,
        count: 3,
      },
    ],
  },
  {
    name: "White Fur Hat",
    category: "hats",
    image: white_fur_hat,
    available: [
      {
        item: "white fur  hat",
        price: 15,
        count: 2,
      },
    ],
  },
  {
    name: "Leopard Fur Hood",
    category: "hats",
    image: leopard_fur_front2,
    available: [
      {
        item: "leopard fur hood",
        price: 15,
        count: 1,
      },
    ],
  },
];

export default hatsData;
