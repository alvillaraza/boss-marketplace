import apocalypse_gold_2 from "./assets/apocalypse_gold_2.jpeg";
import apocalypse_gold from "./assets/apocalypse_gold.jpeg";
import audrey_hepburn from "./assets/audrey_hepburn.jpeg";
import autumn_babes from "./assets/autumn_babes.jpeg";
import autumn_full_piece from "./assets/autumn_full_piece.jpeg";
import white_lace_suit from "./assets/white_lace_suit.jpeg";
import black_lacey_leo from "./assets/black_lacey_leo.jpeg";
import bloody_bunnies from "./assets/bloody_bunnies.jpeg";
import bloody_bunnies2 from "./assets/bloody_bunnies2.jpeg";
import blue_sequin from "./assets/blue_sequin.jpeg";
import bride_frankenstein from "./assets/bride_frankenstein.jpeg";
import camo_2pc from "./assets/camo_2pc.jpeg";
import christmas_tartan from "./assets/christmas_tartan.jpeg";
import comic_book from "./assets/comic_book.jpeg";
import cute_sailor_retro from "./assets/cute_sailor_retro.jpeg";
import dancetronauts from "./assets/dancetronauts.jpeg";
import fembots from "./assets/fembots.jpeg";
import futuristic_silver from "./assets/futuristic_silver.png";
import german_oktoberfest_2 from "./assets/german_oktoberfest_2.jpeg";
import gold_retro from "./assets/gold_retro.jpeg";
import green_mesh from "./assets/green_mesh.jpeg";
import green_robe from "./assets/green_robe.jpeg";
import green_school_girl_golf from "./assets/green_school_girl_golf.jpeg";
import green_shamrock from "./assets/green_shamrock.jpeg";
import halloween_candy from "./assets/halloween_candy.jpeg";
import halloween_geisha from "./assets/halloween_geisha.jpeg";
import harley_quinn_OG from "./assets/harley_quinn_OG.jpeg";
import hooded_fur from "./assets/hooded_fur.jpeg";
import hot_pink_strappy from "./assets/hot_pink_strappy.jpeg";
import hula_girl from "./assets/hula_girl.jpeg";
import incredibles from "./assets/incredibles.jpeg";
import james_bond from "./assets/james_bond.jpeg";
import latina_fluff_3 from "./assets/latina_fluff_3.jpeg";
import latina_mariachi from "./assets/latina_mariachi.jpeg";
import lisa_frank from "./assets/lisa_frank.jpeg";
import lisa_frank2 from "./assets/lisa_frank2.jpeg";
import mardi_gras from "./assets/mardi_gras.jpeg";
import marie_antoinette from "./assets/marie_antoinette.jpeg";
import mermaids from "./assets/mermaids.jpeg";
import olive_gold_spikes from "./assets/olive_gold_spikes.jpeg";
import pikachu from "./assets/pikachu.jpeg";
import pirate_captain from "./assets/pirate_captain.jpeg";
import pirates from "./assets/pirates.jpeg";
import popsicles from "./assets/popsicles.jpeg";
import race_car from "./assets/race_car.jpeg";
import red_black_lace_leo from "./assets/red_black_lace_leo.jpeg";
import red_feather_tutu from "./assets/red_feather_tutu.png";
import red_mesh from "./assets/red_mesh.jpeg";
import red_ninaj from "./assets/red_ninaj.jpeg";
import retro_leopard from "./assets/retro_leopard.jpeg";
import ring_leader from "./assets/ring_leader.jpeg";
import rose_gold_leo from "./assets/rose_gold_leo.png";
import salsa_latina from "./assets/salsa_latina.jpeg";
import samba_girls_purple_blue from "./assets/samba_girls_purple_blue.jpeg";
import samba_girls_purple_blue2 from "./assets/samba_girls_purple_blue2.jpeg";
import samba_girls from "./assets/samba_girls.jpeg";
import samba_girls2 from "./assets/samba_girls2.jpeg";
import santa_hoodie from "./assets/santa_hoodie.jpeg";
import shark from "./assets/shark.jpeg";
import silver_black_raw_fashion from "./assets/silver_black_raw_fasion.jpeg";
import silver_disco_leo from "./assets/silver_disco_leo.jpeg";
import silver_fringe_belt from "./assets/silver_fringe_belt.jpeg";
import sporty_football from "./assets/sporty_football.jpeg";
import st_patricks from "./assets/st_patricks.jpeg";
import tmnt from "./assets/tmnt.jpeg";
import trapfest_cute from "./assets/trapfest_cute.jpeg";
import white_crisscross from "./assets/white_crisscross.jpeg";
import white_lace_fashion from "./assets/white_lace_fashion.jpeg";
import white_mesh from "./assets/white_mesh.jpeg";
import winter_white_leo from "./assets/winter_white_leo.jpeg";
import xmas_winter_silver_skirt from "./assets/xmas_winter_silver_skirt.jpeg";
import yellow_school_girl from "./assets/yellow_school_girl.jpeg";

// data set should be name, image, number in Storage (count), items for sale, price?
const clothingData = [
  {
    name: "apocalypse gold costume 2",
    image: apocalypse_gold_2,
    available: [
      {
        item: "bra",
        price: 10,
        count: 3,
      },
      {
        item: "gas mask",
        price: 10,
        count: 3,
      },
      {
        item: "gold studded belt",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "apocalypse costume",
    image: apocalypse_gold,
    available: [
      {
        item: "bra",
        price: 10,
        count: 3,
      },
      {
        item: "gas mask",
        price: 10,
        count: 3,
      },
    ],
  },
  {
    name: "audrey hepburn leotard",
    image: audrey_hepburn,
    available: [
      {
        item: "leotard",
        price: 10,
        count: 2,
      },

      {
        item: "cigarette holder",
        price: 3,
        count: 1,
      },
    ],
  },
  {
    name: "Autumn Babes Outfit",
    image: autumn_babes,
    available: [
      {
        item: "Bra, wrap, and floral clips",
        price: 10,
        count: 1,
      },
    ],
  },
  {
    name: "Autumn Glitter",
    image: autumn_full_piece,
    available: [
      {
        item: "Bra, bottoms, and flowy back skirt",
        price: 20,
        count: 1,
      },
    ],
  },
  {
    name: "white lace full leotard",
    image: white_lace_suit,
    available: [
      {
        item: "White lace full body leotard",
        price: 15,
        count: 1,
      },
      {
        item: "White metal mask",
        price: 12,
        count: 1,
      },
    ],
  },
  {
    name: "black lace leotard",
    image: black_lacey_leo,
    available: [
      {
        item: "black lace leotard",
        price: 5,
        count: 4,
      },
      {
        item: "black lace bunny mask",
        price: 15,
        count: 3,
      },
      {
        item: "long black lace gloves",
        price: 8,
        count: 2,
      },
    ],
  },
  {
    name: "bloody bunnies outfit",
    image: bloody_bunnies,
    available: [
      {
        item: "Straight-up ears hoodie, bra, bottoms, half top, gloves, and bunny tail",
        price: 20,
        count: 1,
      },
    ],
  },
  {
    name: "bloody bunnies outfit",
    image: bloody_bunnies2,
    available: [
      {
        item: "floppy hoodie, leotard, gloves, and bunny tail",
        price: 20,
        count: 1,
      },
    ],
  },
  {
    name: "blue sequin leotard",
    image: blue_sequin,
    available: [
      {
        item: "blue sequin leotard",
        price: 15,
        count: 3,
      },
      {
        item: "silver sequin bra",
        price: 10,
        count: 4,
      },
      {
        item: "white wigs",
        price: 10,
        count: 3,
      },
    ],
  },
  {
    name: "bride of frankenstein",
    image: bride_frankenstein,
    available: [
      {
        item: "bra, long skirt, wig",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "camo 2pc",
    image: camo_2pc,
    available: [
      {
        item: "bra and bottoms",
        price: 8,
        count: 3,
      },
      {
        item: "gold studded belt",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "christmas tartan plaid leotard",
    image: christmas_tartan,
    available: [
      {
        item: "tartan plaid leotard",
        price: 10,
        count: 2,
      },
      {
        item: "poinsettia headband",
        price: 10,
        count: 3,
      },
    ],
  },
  {
    name: "comic book top",
    image: comic_book,
    available: [
      {
        item: "half top",
        price: 5,
        count: 2,
      },
    ],
  },
  {
    name: "retro sailor outfit",
    image: cute_sailor_retro,
    available: [
      {
        item: "bra and bottoms",
        price: 10,
        count: 3,
      },
      {
        item: "red and white striped bra",
        price: 5,
        count: 3,
      },
      {
        item: "sailor headband",
        price: 8,
        count: 3,
      },
    ],
  },
  {
    name: "futuristic silver",
    image: dancetronauts,
    available: [
      {
        item: "neckpiece, bra, bottoms, arm bands",
        price: 15,
        count: 1,
      },
    ],
  },
  {
    name: "futuristic silver 2pc",
    image: futuristic_silver,
    available: [
      {
        item: "top, bottoms, gloves",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "fembots",
    image: fembots,
    available: [
      {
        item: "wig",
        price: 15,
        count: 3,
      },
      {
        item: "dress, bottoms, gloves, and poof for shoes",
        price: 25,
        count: 3,
      },
    ],
  },
  {
    name: "Oktoberfest",
    image: german_oktoberfest_2,
    available: [
      {
        item: "bra, skirt jumper, arm bands",
        price: 15,
        count: 3,
      },
    ],
  },
  {
    name: "Gold Disco Outfit",
    image: gold_retro,
    available: [
      {
        item: "gold top",
        price: 5,
        count: 3,
      },
      {
        item: "gold pants",
        price: 8,
        count: 2,
      },
    ],
  },
  {
    name: "Green Mesh Leotard",
    image: green_mesh,
    available: [
      {
        item: "green mesh leotard",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "Green Robe",
    image: green_robe,
    available: [
      {
        item: "green robe",
        price: 10,
        count: 3,
      },
    ],
  },
  {
    name: "Green School Girl Golf Outfit",
    image: green_school_girl_golf,
    available: [
      {
        item: "hat",
        price: 8,
        count: 3,
      },
      {
        item: "strappy black bra",
        price: 5,
        count: 3,
      },
      {
        item: "skirt",
        price: 8,
        count: 2,
      },
    ],
  },
  {
    name: "Green St Patrick's Shamrock Leotard",
    image: green_shamrock,
    available: [
      {
        item: "mesh shamrock leotard",
        price: 5,
        count: 2,
      },
      {
        item: "green tophat with buckle",
        price: 15,
        count: 2,
      },
    ],
  },
  {
    name: "Halloween Candy Corn",
    image: halloween_candy,
    available: [
      {
        item: "Candy Corn",
        price: 5,
        count: 2,
      },
    ],
  },
  {
    name: "Zombie Geisha",
    image: halloween_geisha,
    available: [
      {
        item: "bone hairclip, fan, robe, and robe wrap",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "OG Harley Quinn",
    image: harley_quinn_OG,
    available: [
      {
        item: "leotard, headband, neck piece, and wristpieces",
        price: 10,
        count: 3,
      },
      {
        item: "checkered bra",
        price: 5,
        count: 3,
      },
      {
        item: "black and white checkered thigh high stockings",
        price: 5,
        count: 3,
      },
      {
        item: "black and red striped thigh high stockings",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Hooded Fur Leotard",
    image: hooded_fur,
    available: [
      {
        item: "hooded fur leotard",
        price: 12,
        count: 1,
      },
      {
        item: "silver sequin bra",
        price: 10,
        count: 4,
      },
      {
        item: "silver necklace",
        price: 5,
        count: 2,
      },
    ],
  },
  {
    name: "Strappy Hot Pink",
    image: hot_pink_strappy,
    available: [
      {
        item: "facemask, strappy bra, bottoms, whip",
        price: 10,
        count: 2,
      },
      {
        item: "white wig",
        price: 10,
        count: 3,
      },
    ],
  },
  {
    name: "Hula Girl",
    image: hula_girl,
    available: [
      {
        item: "bra, grass skirt, hairpiece, wrist flowers, and flower hair clip",
        price: 15,
        count: 3,
      },
    ],
  },
  {
    name: "Incredibles Superhero",
    image: incredibles,
    available: [
      {
        item: "red top with logo",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Bond Girls",
    image: james_bond,
    available: [
      {
        item: "red dress",
        price: 15,
        count: 1,
      },
      {
        item: "nude dress",
        price: 15,
        count: 1,
      },
    ],
  },
  {
    name: "Ruffles",
    image: latina_fluff_3,
    available: [
      {
        item: "ruffle top and skirt",
        price: 5,
        count: 3,
      },
      {
        item: "flower hair clip",
        price: 3,
        count: 3,
      },
    ],
  },
  {
    name: "Mariachi Inspired",
    image: latina_mariachi,
    available: [
      {
        item: "half leather jacket and bottoms with gold lace",
        price: 10,
        count: 2,
      },
      {
        item: "bra",
        price: 3,
        count: 2,
      },
    ],
  },
  {
    name: "Lisa Frank Inspired",
    image: lisa_frank,
  },
  {
    name: "Lisa Frank Inspired",
    image: lisa_frank2,
  },
  {
    name: "Mardi Gras",
    image: mardi_gras,
  },
  {
    name: "Marie Antoinette",
    image: marie_antoinette,
  },
  {
    name: "Mermaids",
    image: mermaids,
  },
  {
    name: "Olive Gold Spikey 2 piece",
    image: olive_gold_spikes,
  },
  {
    name: "Pikachu",
    image: pikachu,
  },
  {
    name: "Pirate Captain",
    image: pirate_captain,
  },
  {
    name: "Pirates",
    image: pirates,
  },
  {
    name: "The Bomb Pop Popsicles",
    image: popsicles,
  },
  {
    name: "Racing Leotard",
    image: race_car,
  },
  {
    name: "Black Red Lace Mesh Leotard",
    image: red_black_lace_leo,
  },
  {
    name: "Red Feather Tutu",
    image: red_feather_tutu,
  },
  {
    name: "Red Mesh Top",
    image: red_mesh,
  },
  {
    name: "Red Ninja",
    image: red_ninaj,
  },
  {
    name: "Retro Leopard Leotard",
    image: retro_leopard,
  },
  {
    name: "Ring Leader",
    image: ring_leader,
  },
  {
    name: "Rose Gold Leotard",
    image: rose_gold_leo,
  },
  {
    name: "Ruffley Rose Ensemble",
    image: salsa_latina,
  },
  {
    name: "Purple and Blue Samba Girls",
    image: samba_girls_purple_blue,
  },
  {
    name: "Purple and Blue Samba Girls",
    image: samba_girls_purple_blue2,
  },
  {
    name: "Samba Girls",
    image: samba_girls,
  },
  {
    name: "Green and Pink Samba Girls",
    image: samba_girls2,
  },
  {
    name: "Santa Hoodie Leotard",
    image: santa_hoodie,
  },
  {
    name: "Shark",
    image: shark,
  },
  {
    name: "Silver and Black Ensemble",
    image: silver_black_raw_fashion,
  },
  {
    name: "Silver Disco Leotard",
    image: silver_disco_leo,
  },
  {
    name: "Silver Fringe Belt",
    image: silver_fringe_belt,
  },
  {
    name: "Sporty Football Outfit",
    image: sporty_football,
  },
  {
    name: "St Patricks Outfit",
    image: st_patricks,
  },
  {
    name: "Teenage Mutant Ninja Turtle Leonardo",
    image: tmnt,
  },
  {
    name: "Trapfest 2 Pieces",
    image: trapfest_cute,
  },
  {
    name: "White Crisscross 2 Pieces",
    image: white_crisscross,
  },
  {
    name: "White lace Straps",
    image: white_lace_fashion,
  },
  {
    name: "White Mesh Leotard",
    image: white_mesh,
  },
  {
    name: "Winter White Leotard",
    image: winter_white_leo,
  },
  {
    name: "Silver Winter Skirt",
    image: xmas_winter_silver_skirt,
  },
  {
    name: "Yellow School Girl Outfit",
    image: yellow_school_girl,
  },
];

export default clothingData;
