const seedCategories = [
  { name: "accesories" },
  { name: "boxing" },
  { name: "cardio" },
  { name: "pilates" },
  { name: "free weights" },
  { name: "resistance" },
  { name: "smart fitness" },
  { name: "yoga" }
];

const seedProducts = [
  {
    title: "Gaiam Coreplus Reformer",
    categoryId: 6,
    price: 29.98,
    quantity: 3,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71L%2BsG45SeL._SX679_.jpg",
    detailImages: [
      "https://images-na.ssl-images-amazon.com/images/I/61gEkerHsHL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51lu7mZTG0L._SX679_.jpg"
    ],
    description:
      "Coreplus reformer resistance band with four loops and comfort-cushion grips. Full length 45-Minute coreplus reformer workout DVD"
  },
  {
    title: "Stamina AeroPilates Pro Reformer with Free-Form Cardio Rebounder",
    categoryId: 6,
    price: 750.0,
    quantity: 3,
    imageUrl:
      "Stamina AeroPilates Pro Reformer with Free-Form Cardio Rebounder",
    detailImages: [
      "https://images-na.ssl-images-amazon.com/images/I/712LT01XP1L._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71F9tMtyLeL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81Vs0Vm%2BZhL._SX679_.jpg"
    ],
    description:
      "Adjustable resistance with 4 heavy-duty, elastic bungee cords. Elevated built in silver steel frame raised 15 off the floor with oak wood trim. Padded, flared black platform (23.5 wide); Longer (5) aluminum rails with ball bearing wheels; Larger silver Cardio Rebounder. Flared, padded, wider, removable and adjustable foot bar with 3 positions; High density foam shoulder pads; Padded, 3-position adjustable head rest; Comfortable hand & foot straps 2 DVD with 3 Workouts: Introduction to AeroPilates, AeroPilates Level 1 Pure Pilates and AeroPilates Level 1 Simply Cardio. AeroPilates full-color workout wall chart; Supports up to 300 lbs"
  },
  {
    title: "Shock Doctor Mouthguard",
    categoryId: 2,
    price: 9.99,
    quantity: 31,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41FyBzAF74L.jpg",
    detailImages: [
      "https://images-na.ssl-images-amazon.com/images/I/41ianPQq3PL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81b%2Bo6fCPdL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61%2BrNG5jeYL._SX679_.jpg"
    ],
    description:
      "CUSTOM COMFORT & FIT - Gel-fit Liner Technology is easy to fit, silicone mold forms specifically to your teeth and gums, providing a comfortable fit for extended use, available in a variety of customized colors. BREATHABLE - Integrated breathing channels make it easy to breathe while wearing the guard and maximize your performance. PROFESSIONAL DENTAL PROTECTION - Heavy duty Exoskeletal Shock Frame provides full mouth protection during the hardest impacts, protects cheek and tongue, teeth grinding, and secures teeth in place. DURABLE - Crafted using heavy duty silicone, combined in our Triple Layer Design for added protection and durability. RECOMMENDED SPORTS - Suitable for all contact sports where a mouth guard is required or recommended including football, wrestling, boxing, and more! Includes a detachable helmet strap for football."
  },
  {
    title: "Everlast 40LB Heavy Punching Bag",
    categoryId: 2,
    price: 49.99,
    quantity: 19,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51DjJL-Z%2BiL._SX679_.jpg",
    detailImages: [
      "https://images-na.ssl-images-amazon.com/images/I/51DjJL-Z%2BiL._SX679_.jpg"
    ],
    description:
      "Premium synthetic leather with reinforced webbing provides long lasting durability. Specially blended filler mix of sanitized synthetic and natural. Fibers provides resilient shock absorbency. Heavy duty nylon straps provide security and safety. Double end loop provides increased functionality."
  },
  {
    title: "Everlast Women's Pro Style Training Gloves",
    categoryId: 2,
    price: 86.73,
    quantity: 12,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/912sbqRH%2BWL._SX679_.jpg",
    detailImages: [
      "https://images-na.ssl-images-amazon.com/images/I/912sbqRH%2BWL._SX679_.jpg"
    ],
    description:
      "Patented Thumb-Lok feature, Premium synthetic leather along with superior construction increases durability, Natural shape conforms to hand. Everfresh treatment helps prevent offensive odors, keeping your products smelling fresh, Full mesh palm ensures breathability and comfort. Improved curved anatomical grip and fit. Ideal for sparring, heavy bag workouts, and mitt work. Wrap-around hook and loop strap closure. Available in 12- or 14-ounce weight sizes. Patented Thumb-Lok feature. Natural shape conforms to hand."
  },
  {
    title: "Gaiam Yoga Block",
    categoryId: 8,
    price: 14.99,
    quantity: 27,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71SOPMLXfIL._SX679_.jpg",
    detailImages: [
      "https://images-na.ssl-images-amazon.com/images/I/814SliU7MpL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81xwu3-Cd3L._SX679_.jpg"
    ],
    description:
      "High-density cushion, joint protection, unmatched support. Standard: 7.5 lbs; 71 x 26; 6 mm thick. Long: 9.5 lbs; 85 x 26. To Store, Roll Manduka PRO mats with the top side (-finish) facing outwards. To Break In, the surface texture of Manduka PRO mats improves with use. The best way to break in your mat is practice, practice, practice. To Keep your mat in the best condition by wiping it down after every practice with Manduka All-Purpose Mat Wash. Its specially formulated to clean your mat without damaging the surface. Closed-cell surface prevents sweat from seeping into the mat. Non-toxic, emissions-free manufacturing, 100% latex free."
  },
  {
    title: "Manduka PRO Yoga and Pilates Mat",
    categoryId: 8,
    price: 90.0,
    quantity: 7,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81v2x8IEw2L._SX679_.jpg",
    detailImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71HmY5EUU4L._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71HBtDEAgEL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51b2tHlKJAL._SX679_.jpg"
    ],
    description:
      "High-density cushion, joint protection, unmatched support. Standard: 7.5 lbs; 71 x 26; 6 mm thick. Long: 9.5 lbs; 85 x 26. To Store, Roll Manduka PRO mats with the top side (-finish) facing outwards. To Break In, the surface texture of Manduka PRO mats improves with use. The best way to break in your mat is practice, practice, practice. To Keep your mat in the best condition by wiping it down after every practice with Manduka All-Purpose Mat Wash. Its specially formulated to clean your mat without damaging the surface. Closed-cell surface prevents sweat from seeping into the mat. Non-toxic, emissions-free manufacturing, 100% latex free."
  },
  {
    title: "Bowflex Weight Bench",
    categoryId: 7,
    price: 13.99,
    quantity: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/8104o354qFL._SX679_.jpg",
    detailImages: [
      "https://images-na.ssl-images-amazon.com/images/I/81Iv-eToHlL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81BNZzzBPVL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71BU4RkeisL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81PrWJR62dL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81khCNW9h7L._SX679_.jpg"
    ],
    description:
      "The Bowflex 5.1S Stowable Bench is our top of the line weight bench. Adjusts to six different positions, 17-degree decline to 90-degree incline. Folds up and wheels away for easy storage .Comes standard with a removable leg hold-down brace for added decline position support. Built strong to last long with heavy-duty commercial quality steel. 600-pound load capacity."
  },
  {
    title: "Cap Barbell Fitness Urethane Covered Dumbbell Black,10-Pound",
    categoryId: 5,
    price: 13.99,
    quantity: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/8122KMrWLQL._SX679_.jpg",
    detailImages: [
      "https://images-na.ssl-images-amazon.com/images/I/714qipG8QCL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71SEwLP9veL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81MUb6wiXlL._SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81vqGn30bTL._SX679_.jpg"
    ],
    description:
      "VERSATILE - Dumbbells offer the ability to target specific muscle groups or attain a full body workout. CONSTRUCTION - Heads are made from ASTM A48 Class 20 grey iron coated in a proprietary 90 shore hardness urethane joined together by a solid 1018 cold rolled steel chromed handle. FEATURES – Original Hex Shaped heads prevent rolling. The medium depth knurling on the urethane infused gripping surface on the ergo handle provides essential grip and security during use. Urethane coating is extremely durable. No odor or greasy feel. FUNCTIONAL - Perfect for isos, full body, functional training and HIIT workouts. CHOICES – This dumbbell group from CAP is available in sizes from 5 - 50 lb in 5 lb increments. Sold individually."
  },
  {
    title: "Fitbit Ionic Watch",
    categoryId: 8,
    price: 219.99,
    quantity: 2,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71sSyaf-luL._UX679_.jpg",
    detailImages: [
      "https://images-na.ssl-images-amazon.com/images/I/61bqhd8rMZL._UX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61%2BS%2BEWdcXL._UX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71YmPFqbvLL._UX679_.jpg"
    ],
    description:
      "Low impact workout that engages all major muscle groups; work legs, core and arms with a smooth, high calorie-burning motion Track your progress with real-time reliable data; the Performance Monitor 5 (included) self-calibrates for comparable results; connect wirelessly to heart rate belts and apps (not included) Designed to fit most users: 14-inch seat height, adjustable footrests and ergonomic handleSeparates easily into two pieces for storage; caster wheels make it mobile; easy to assemble with only eight screws. Space Recommendations- Assembled- 8 ft x 2 ft (244 cm x 61 cm). For Storage- 25 in x 33 in x 54 in (63.5 cm x 83.8 cm x 137.2 cm) Space recommended for use is 9 x 4 feet; 500-pound user capacity; 5-year frame warranty included.Seat Height:14 inches"
  },
  {
    title: "Concept2 Model D Indoor Rowing Machine with PM5",
    categoryId: 3,
    price: 945.0,
    quantity: 3,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/517wbxG6btL._SX679_.jpg",
    detailImages: [
      "https://images-na.ssl-images-amazon.com/images/I/612KA-wPMvL._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/618QlI2QaqL._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51OSdTLA-5L._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51jRUI%2B2y5L._SL1000_.jpg"
    ],
    description:
      "Low impact workout that engages all major muscle groups; work legs, core and arms with a smooth, high calorie-burning motion Track your progress with real-time reliable data; the Performance Monitor 5 (included) self-calibrates for comparable results; connect wirelessly to heart rate belts and apps (not included) Designed to fit most users: 14-inch seat height, adjustable footrests and ergonomic handleSeparates easily into two pieces for storage; caster wheels make it mobile; easy to assemble with only eight screws. Space Recommendations- Assembled- 8 ft x 2 ft (244 cm x 61 cm). For Storage- 25 in x 33 in x 54 in (63.5 cm x 83.8 cm x 137.2 cm) Space recommended for use is 9 x 4 feet; 500-pound user capacity; 5-year frame warranty included.Seat Height:14 inches"
  }
];

module.exports = {
  seedCategories,
  seedProducts
};
