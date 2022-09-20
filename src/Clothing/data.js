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
import feather_headpieces from '../Accessories/assets/feather_headpieces.jpeg'

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
        item: "floppy hoodie, leotard, gloves, and bunny tail",
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
        item: "Straight-up ears hoodie, bra, bottoms, half top, gloves, and bunny tail",
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
      {
        item: "statement necklace",
        price: 8,
        count: 2,
      },
      {
        item: "black strappy bra",
        price: 5,
        count: 2,
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
        item: "black strappy bra",
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
    name: "Yellow School Girl Outfit",
    image: yellow_school_girl,
    available: [
      {
        item: "yellow half top and plaid skirt",
        price: 10,
        count: 2,
      },
      {
        item: "yellow visor",
        price: 5,
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
      {
        item: "short red satin gloves",
        price: 5,
        count: 3,
      },
      {
        item: "short black satin gloves",
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
    available: [
      {
        item: "colorful tube leotard and half top",
        price: 15,
        count: 2,
      },
      {
        item: "short jumper shorts (light denim or dark denim)",
        price: 5,
        count: 2,
      },
      {
        item: "blonde wavy wig",
        price: 12,
        count: 3,
      },
      {
        item: "cat ears sequin headband",
        price: 8,
        count: 1,
      },
      {
        item: "pink beanie with black star",
        price: 8,
        count: 2,
      },
    ],
  },
  {
    name: "Lisa Frank Inspired",
    image: lisa_frank2,
    available: [
      {
        item: "colorful tube leotard and half top",
        price: 15,
        count: 2,
      },
      {
        item: "short jumper shorts (light denim or dark denim)",
        price: 5,
        count: 2,
      },
      {
        item: "blonde wavy wig",
        price: 12,
        count: 3,
      },
      {
        item: "cat ears sequin headband",
        price: 8,
        count: 1,
      },
      {
        item: "pink beanie with black star",
        price: 8,
        count: 2,
      },
    ],
  },
  {
    name: "Mardi Gras",
    image: mardi_gras,
    available: [
      {
        item: "feather mask, leotard, skirt",
        price: 20,
        count: 2,
      },
      {
        item: "long black lace gloves",
        price: 8,
        count: 2,
      },
    ],
  },
  {
    name: "Marie Antoinette",
    image: marie_antoinette,
    available: [
      {
        item: "leotard (no ruffley wrist)",
        price: 10,
        count: 2,
      },
      {
        item: "pink marie antoinette wig",
        price: 20,
        count: 2,
      },
    ],
  },
  {
    name: "Mermaids",
    image: mermaids,
    available: [
      {
        item: "pink sequin bra and skirt",
        price: 10,
        count: 2,
      },
      {
        item: "starfish hairclip",
        price: 8,
        count: 2,
      },
    ],
  },
  {
    name: "Olive Gold Spikey 2 piece",
    image: olive_gold_spikes,
    available: [
      {
        item: "olive top and bottom",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Pikachu",
    image: pikachu,
    available: [
      {
        item: "pikachu yellow top and headband",
        price: 8,
        count: 2,
      },
    ],
  },
  {
    name: "Pirate Captain",
    image: pirate_captain,
    available: [
      {
        item: "jacket (has no lining) and ruffley chest piece",
        price: 5,
        count: 1,
      },
      {
        item: "pirate captain hat",
        price: 8,
        count: 1,
      },
    ],
  },
  {
    name: "Pirates",
    image: pirates,
    available: [
      {
        item: "headwrap, dress, corset",
        price: 10,
        count: 2,
      },
      {
        item: "headwrap, bra, ruffley arms",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "The Bomb Pop Popsicles",
    image: popsicles,
    available: [
      {
        item: "bomb popsicle leotard",
        price: 5,
        count: 2,
      },
      {
        item: "bomb popsicle headband",
        price: 8,
        count: 3,
      },
    ],
  },
  {
    name: "Racing Leotard",
    image: race_car,
    available: [
      {
        item: "red acing leather leotard",
        price: 10,
        count: 2,
      },
      {
        item: "short red satin gloves",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Black Red Lace Mesh Leotard",
    image: red_black_lace_leo,
    available: [
      {
        item: "black mesh leotard with red lace appliques",
        price: 10,
        count: 1,
      },
      {
        item: "short red satin gloves",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Red Feather Tutu",
    image: red_feather_tutu,
    available: [
      {
        item: "bra and feather half tutu",
        price: 10,
        count: 1,
      },
    ],
  },
  {
    name: "Red Mesh Top",
    image: red_mesh,
    available: [
      {
        item: "red mesh crop top",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Red Ninja",
    image: red_ninaj,
    available: [
      {
        item: "ninja top with mask and bottoms",
        price: 15,
        count: 2,
      },
      {
        item: "pair of red, braided hair extensions",
        price: 8,
        count: 4,
      },
    ],
  },
  {
    name: "Retro Leopard Leotard",
    image: retro_leopard,
    available: [
      {
        item: "leopard leotard and a pair of fur leg garters",
        price: 10,
        count: 2,
      },
      {
        item: "red retro sunglasses",
        price: 8,
        count: 2,
      },
      {
        item: "short red satin gloves",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Ring Leader",
    image: ring_leader,
    available: [
      {
        item: "red half jacket and black high waisted bottoms",
        price: 10,
        count: 1,
      },
      {
        item: "short black satin gloves",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Rose Gold Leotard",
    image: rose_gold_leo,
    available: [
      {
        item: "rose gold sequin leotard and ribbon neck piece",
        price: 15,
        count: 2,
      },
      {
        item: "curly retro betty boop blonde wig",
        price: 15,
        count: 2,
      },
      {
        item: "butterfly fascinator hair clip",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "Ruffley Rose Ensemble",
    image: salsa_latina,
    available: [
      {
        item: "red sequin bra with attached ruffley sleeves",
        price: 10,
        count: 2,
      },
      {
        item: "red sequin bottoms",
        price: 8,
        count: 4,
      },
      {
        item: "black flapper headwrap hat",
        price: 5,
        count: 2,
      },
      {
        item: "fringe earrings (2 different styles)",
        price: 8,
        count: 2,
      },
    ],
  },
  {
    name: "Purple and Blue Samba Girls",
    image: samba_girls_purple_blue,
    available: [
      {
        item: "bra (purple or blue) with bottoms and arm bands",
        price: 15,
        count: 2,
      },
      {
        item: "peacock feather shoulder pieces",
        price: 25,
        count: 2,
      },
    ],
  },
  {
    name: "Purple and Blue Samba Girls",
    image: samba_girls_purple_blue2,
    available: [
      {
        item: "bra (purple or blue) with bottoms and arm bands",
        price: 15,
        count: 2,
      },
      {
        item: "peacock feather shoulder pieces",
        price: 25,
        count: 2,
      },
      {
        item: "silver necklace",
        price: 5,
        count: 2,
      },
      {
        item: "silver head decor",
        price: 5,
        count: 1,
      },
    ],
  },
  {
    name: "Samba Girls",
    image: samba_girls,
    available: [
      {
        item: "bra (purple or blue) with bottoms and arm bands",
        price: 15,
        count: 2,
      },
      {
        item: "peacock feather shoulder pieces",
        price: 25,
        count: 2,
      },
      {
        item: "neon green leotard",
        price: 10,
        count: 2,
      },
      {
        item: "green, pink, yellow shoulder piece with matching leg feather bands",
        price: 28,
        count: 1,
      },
    ],
  },
  {
    name: "Green and Pink Samba Girls",
    image: samba_girls2,
    available: [
      {
        item: "neon green leotard",
        price: 10,
        count: 2,
      },
      {
        item: "green, pink, yellow shoulder piece with matching leg feather bands",
        price: 28,
        count: 1,
      },
    ],
  },
  {
    name: "Santa Hoodie Leotard",
    image: santa_hoodie,
    available: [
      {
        item: "santa fur hoodie leotard",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "Shark",
    image: shark,
    available: [
      {
        item: "silver shark top with hood and arm bands",
        price: 20,
        count: 3,
      },
      {
        item: "silver bottoms",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Silver and Black Ensemble",
    image: silver_black_raw_fashion,
    available: [
      {
        item: "silver with black lace top and bottoms and black lace wrap",
        price: 10,
        count: 1,
      },
    ],
  },
  {
    name: "Silver Disco Leotard",
    image: silver_disco_leo,
    available: [
      {
        item: "silver sequin leotard",
        price: 15,
        count: 3,
      },
      {
        item: "white fur jacket",
        price: 25,
        count: 3,
      },
    ],
  },
  {
    name: "Silver Fringe Belt",
    image: silver_fringe_belt,
    available: [
      {
        item: "silver fringe belt",
        price: 8,
        count: 5,
      },
    ],
  },
  {
    name: "Sporty Football Outfit",
    image: sporty_football,
    available: [
      {
        item: "pink and black half top shoulder pads, top, and bottoms",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "St Patricks Outfit",
    image: st_patricks,
    available: [
      {
        item: "green vest and green bowtie",
        price: 10,
        count: 3,
      },
      {
        item: "gold high waist bottoms",
        price: 5,
        count: 3,
      },
      { item: "green hat with gold shamrocks", price: 15, count: 3 },
      { item: "gold sequin baton", price: 5, count: 3 },
    ],
  },
  {
    name: "Teenage Mutant Ninja Turtle Leonardo",
    image: tmnt,
    available: [
      {
        item: "top, wristbands, waist wrap, and shell backpack",
        price: 10,
        count: 1,
      },
    ],
  },
  {
    name: "Trapfest 2 Pieces",
    image: trapfest_cute,
    available: [
      {
        item: "top and bottom (yellow or red)",
        price: 5,
        count: 2,
      },
      {
        item: "visor (yellow or red)",
        price: 5,
        count: 4,
      },
    ],
  },
  {
    name: "White Crisscross 2 Pieces",
    image: white_crisscross,
    available: [
      {
        item: "crisscross top, bottoms, and arm gloves",
        price: 10,
        count: 2,
      },
    ],
  },
  {
    name: "White lace Straps",
    image: white_lace_fashion,
    available: [
      {
        item: "white lacey strappy top (bra not included) and strappy leg garter 5",
        price: 10,
        count: 1,
      },
    ],
  },
  {
    name: "White Mesh Leotard",
    image: white_mesh,
    available: [
      {
        item: "white mesh leotard",
        price: 5,
        count: 3,
      },
    ],
  },
  {
    name: "Winter White Leotard",
    image: winter_white_leo,
    available: [
      {
        item: "winter white leotard and arm bands",
        price: 10,
        count: 2,
      },
      {
        item: "light up ice headband",
        price: 25,
        count: 2,
      },
      {
        item: "short blonde wigs",
        price: 10,
        count: 3,
      },
    ],
  },
  {
    name: "Silver Winter Skirt",
    image: xmas_winter_silver_skirt,
    available: [
      {
        item: "silver winter fur skirt",
        price: 15,
        count: 2,
      },
      {
        item: "white poinsettia headband",
        price: 10,
        count: 2,
      },
      {
        item: "white long satin gloves",
        price: 5,
        count: 2,
      },
      {
        item: "short blonde wigs",
        price: 10,
        count: 3,
      },
    ],
  },
];

export default clothingData;
