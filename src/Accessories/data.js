import camo_2pc_2 from './assets/camo_2pc_2.jpeg'
import clown_neck from './assets/clown_neck.jpeg'
import clown_stuff from './assets/clown_stuff.jpeg'
import count_dracula from './assets/count_dracula.jpeg'
import cupids from './assets/cupids.jpeg'
import feather_headpieces from './assets/feather_headpieces.jpeg'
import gold_fringe_epaulette from './assets/gold_fringe_epaulette.jpeg'
import palm_tree_hair from './assets/palm_tree_hair.jpeg'
import pink_fringe_for_bra from './assets/pink_fringe_for_bra.jpeg'
import red_gold_epaulette from './assets/red_gold_epaulette.jpeg'
import rose_headpiece from './assets/rose_headpiece.jpeg'
import white_fringe_epaulette from './assets/white_fringe_epaulette.jpeg'


const accessoriesData = [
  {
    name: "White Fringe Epaulette",
    image: white_fringe_epaulette,
    available: [
      {
        item: "white fringe shoulder pads",
        price: 10,
        count: 3,
      },
    ],
  },
  {
    name: "Red and Gold Leopard Epaulette",
    image: red_gold_epaulette,
    available: [
      {
        item: "red and gold leopard shoulder pads",
        price: 5,
        count: 2,
      },
    ],
  },
  {
    name: "Gold Fringe Strappy Epaulette",
    image: gold_fringe_epaulette,
    available: [
      {
        item: "gold fringe strappy shoulder pads",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "Rose Headpiece",
    image: rose_headpiece,
  },
  {
    name: "Pink Fringe",
    image: pink_fringe_for_bra,
  },
  {
    name: "Palm Tree Headpiece",
    image: palm_tree_hair,
  },
  {
    name: "Showgirl Feather Headpiece",
    image: feather_headpieces,
    available: [
      {
        item: "feather headpieces (black or white)",
        price: 25,
        count: 2,
      },
      {
        item: "bra (black or white)",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "Cupid Feathery Headband and Arrow",
    image: cupids,
  },
  {
    name: "Short Black Cape",
    image: count_dracula,
  },
  {
    name: "Neck and Wrist Clown Accessories",
    image: clown_stuff,
  },
  {
    name: "Gold and Purple Clown Neck Ruffle",
    image: clown_neck,
  },
  {
    name: "Leather Shoulder Piece",
    image: camo_2pc_2,
  },
];

export default accessoriesData;