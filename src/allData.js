
import palm_tree_hair from "./assets/palm_tree_hair.jpeg";
import rose_headpiece from "./assets/rose_headpiece.jpeg";
import reindeer_led from "./assets/reindeer_led.jpeg";
import pink_feather_tutu_outfit from "./assets/pink_feather_tutu_outfit.png";
import popsicles from "./assets/popsicles.jpeg";
import bloody_bunnies from "./assets/bloody_bunnies.jpeg";
import bloody_bunnies2 from "./assets/bloody_bunnies2.jpeg";
import headform from "./assets/headform.jpeg";
import princess_leia from "./assets/princess_leia.jpeg";
import white_bunny from "./assets/white_bunny.jpeg";
import marching_band from "./assets/marching_band.jpeg";
import greenbowlerhat_side from "./assets/greenbowlerhat_side.jpeg";
import greentophat_side from "./assets/greentophat_side.jpeg";
import leopard_fur_front2 from "./assets/leopard_fur_front2.jpeg";
import patriotic_tophat_front from "./assets/patriotic_tophat_front.jpeg";
import tophatwithbuckle from "./assets/tophatwithbuckle.jpeg";
import marching_band_hat from "./assets/marching_band_hat.png";
import red_queen from "./assets/red_queen.jpeg";
import black_filigree_side from "./assets/black_filigree_side.jpeg";
import feather_mask_front from "./assets/feather_mask_front.jpeg";
import gold_filigree_front from "./assets/gold_filigree_front.jpeg";
import male_mask_front from "./assets/male_mask_front.jpeg";
import poinsettia_fronttop from "./assets/poinsettia_fronttop.jpeg";
import ice_crown from "./assets/icecrown_frontLEDclose.jpeg";
import white_showgirl from './assets/white_showgirl.jpeg'
import captain_america from './assets/captain_america.jpeg'

const allData = [
  {
    name: "Red Queen Wig",
    category: "wigs",
    image: red_queen,
    available: [
      {
        item: "Red queen wig with crown",
        price: 10,
        count: 1,
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
        price: 20,
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
    name: "Green Shamrock Bowler Hat",
    category: "hats",
    image: greenbowlerhat_side,
    available: [
      {
        item: "green bowler hat with shamrock",
        price: 10,
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
        price: 10,
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
        price: 10,
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
        price: 20,
        count: 1,
      },
    ],
  },
  {
    name: "LED ice crown",
    category: "accessories",
    image: ice_crown,
    available: [
      {
        item: "LED ice crown",
        price: 75,
        count: 2,
      },
    ],
  },
  {
    name: "Alice in White Wonderland",
    category: "clothing",
    image: white_bunny,
    available: [
      {
        item: "white hat with wig",
        price: 10,
        count: 1,
      },
    ],
  },
  {
    name: "Showgirl",
    category: "clothing",
    image: white_showgirl,
    available: [
      {
        item: "white feather headpiece",
        price: 25,
        count: 1,
      },
      {
        item: "bra (white)",
        price: 10,
        count: 1,
      },
    ],
  },
  {
    name: "Pink Feather Tutu Outfit",
    category: "clothing",
    image: pink_feather_tutu_outfit,
    available: [
      {
        item: "pink feather tutu outfit",
        price: 30,
        count: 1,
      },
    ],
  },
  {
    name: "Princess Leia",
    category: "clothing",
    image: princess_leia,
    available: [
      {
        item: "bra, necklace, arm bands, skirt",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "bloody bunnies outfit",
    category: "clothing",
    image: bloody_bunnies,
    available: [
      {
        item: "floppy hoodie, leotard, gloves, and bunny tail",
        price: 20,
        count: 2,
      },
    ],
  },
  {
    name: "bloody bunnies outfit",
    category: "clothing",
    image: bloody_bunnies2,
    available: [
      {
        item: "Straight-up ears hoodie, bra, bottoms, half top, gloves, and bunny tail",
        price: 20,
        count: 2,
      },
    ],
  },
  {
    name: "Marching Band",
    category: "clothing",
    image: marching_band,
    available: [
      {
        item: "marching band hat",
        price: 28,
        count: 3,
      },
    ],
  },
  {
    name: "Rose Headpiece",
    category: "accessories",
    image: rose_headpiece,
    available: [
      {
        item: "rose headpiece",
        price: 25,
        count: 3,
      },
    ],
  },
  {
    name: "Palm Tree Headpiece",
    category: "accessories",
    image: palm_tree_hair,
    available: [
      {
        item: "Palm Tree Headpiece",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Light Up Reindeer Headband",
    category: "accessories",
    image: reindeer_led,
    available: [
      {
        item: "Light-up Reindeer Headband",
        price: 35,
        count: 1,
      },
    ],
  },
  {
    name: "The Bomb Pop Popsicles",
    category: "accessories",
    image: popsicles,
    available: [
      {
        item: "bomb popsicle headband",
        price: 8,
        count: 3,
      },
    ],
  },
  {
    name: "Black Filigree Mask",
    category: "accessories",
    image: black_filigree_side,
    available: [
      {
        item: "black filigree mask",
        price: 15,
        count: 1,
      },
    ],
  },
  {
    name: "Gold Filigree Mask",
    category: "accessories",
    image: gold_filigree_front,
    available: [
      {
        item: "gold filigree mask",
        price: 15,
        count: 1,
      },
    ],
  },
  {
    name: "Feather Venetian Mask",
    category: "accessories",
    image: feather_mask_front,
    available: [
      {
        item: "feather venitian mask",
        price: 15,
        count: 1,
      },
    ],
  },
  {
    name: "Male Venetian Mask",
    category: "accessories",
    image: male_mask_front,
    available: [
      {
        item: "male venetian mask",
        price: 15,
        count: 1,
      },
    ],
  },
  {
    name: "Poinsettia Headband",
    category: "accessories",
    image: poinsettia_fronttop,
    available: [
      {
        item: "poinsettia headband",
        price: 10,
        count: 10,
      },
    ],
  },
  {
    name: "Captain America",
    category: "accessories",
    image: captain_america,
    available: [
      {
        item: "Captain America Shield",
        price: 10,
        count: 3,
      },
    ],
  },
  {
    name: "Mannequin Headform Wig Stand",
    category: "accessories",
    image: headform,
    available: [
      {
        item: "Headform",
        price: 2,
        count: 5,
      },
    ],
  },
];

export default allData;
