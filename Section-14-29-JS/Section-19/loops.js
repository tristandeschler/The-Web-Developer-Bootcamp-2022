// for loops

for (let i = 1; i <= 10; i++) {
    console.log(i);
    console.log("I'm in the Loop Body!");
}

//all even numbers
for (let e = 0; e <= 20; e += 2) {
    console.log(e);
}

//count down
for (let d = 100; d >= 0; d -= 10) {
    console.log(d);
}

//infinite loop (DO NOT DO!!!!)
// for (let in = 20; in >= 0; in ++) {
//     console.log(in);
// }

//looping over arrays
const animals = [
    "Aardvark",
    "Aardwolf",
    "African Elephant",
    "African Tree Pangolin",
    "Alligator",
    "Alpaca",
    "Anteater",
    "Antelope",
    "Ape(s)",
    "Arabian Horse",
    "Armadillo",
    "Arthropod(s)",
    "Asian Elephant",
    "Aye-Aye",
    "Baboon",
    "Badger",
    "Bandicoot",
    "Bangle Tiger",
    "Bat(s)",
    "Bearded Dragon",
    "Beaver",
    "Beluga Whale",
    "Bengal Tiger",
    "Big-Horned Sheep",
    "Billy Goat",
    "Bird(s)",
    "Bison",
    "Black Bear",
    "Black Footed Rhino",
    "Black Howler Monkey",
    "Black Rhino",
    "Blacktip Reef Shark",
    "Blue Shark",
    "Blue Whale",
    "Boar",
    "Bob-Cat",
    "Bonobo",
    "Bottlenose Dolphin",
    "Bottlenose Whale",
    "Brown Bear",
    "Buffalo",
    "Bull",
    "Bull frog",
    "Caiman Lizard",
    "Camel",
    "Capuchin Monkey",
    "Capybara",
    "Caribou",
    "Cat(s)",
    "Cattle",
    "Cheetah",
    "Chimpanzee",
    "Chinchilla",
    "Chipmunk",
    "Common Dolphin",
    "Common Seal",
    "Coral(s) and Anemone(s)",
    "Cougar",
    "Cow(s)",
    "Coyote",
    "Crocodile",
    "Crustacean(s)",
    "Dart Frog",
    "Deer",
    "Degus",
    "Dik-Dik",
    "Dingo",
    "Dog(s)",
    "Dogfish Shark",
    "Dolphin",
    "Donkey",
    "Door Mouse",
    "Dormouse",
    "Draft Horse",
    "Duckbill Platypus",
    "Dugong",
    "Dusky Shark",
    "Elephant",
    "Elephant Seal",
    "Elk",
    "Ermine",
    "Eurasian Lynx",
    "Ferret",
    "Fish(es)",
    "Florida Panther",
    "Flying Fox",
    "Fox",
    "Fresh Water Crocodile",
    "Frog",
    "Fur Seal",
    "Galapagos Land Iguana",
    "Galapagos Shark",
    "Galapagos Tortoise",
    "Gazelle",
    "Gecko",
    "Giant Anteater",
    "Giant Panda",
    "Gibbon",
    "Giraffe",
    "Goat",
    "Gopher",
    "Gorilla",
    "Gray Fox",
    "Gray Nurse Shark",
    "Gray Reef Shark",
    "Gray Whale",
    "Great White Shark",
    "Green Poison Dart Frog",
    "Green Sea Turtle",
    "Grizzly Bear",
    "Groundhog",
    "Guinea Pig",
    "Hairy-Nosed Wombat",
    "Hammerhead Shark",
    "Harbor Porpoise",
    "Harbor Seal",
    "Hare",
    "Harp Seal",
    "Hawaiian Monk Seal",
    "Hedgehog",
    "Hippopotamus",
    "Horn Shark",
    "Horse(s)",
    "Howler Monkey",
    "Humpback Whale",
    "Hyena",
    "Hyrax",
    "Iguana",
    "Iguanodon",
    "Impala",
    "Insect(s)",
    "Irrawaddy Dolphin",
    "Jackal",
    "Jackrabbit",
    "Jaguar",
    "Jellyfish",
    "Kangaroo",
    "Kermode Bear",
    "Killer Whale",
    "Koala",
    "Komodo Dragon",
    "Kookaburra",
    "Lama",
    "Lamb",
    "Lancelet",
    "Least Weasel",
    "Leatherback Sea Turtle",
    "Lemming",
    "Lemon Shark",
    "Lemur",
    "Leopard",
    "Leopard Gecko",
    "Leopard Seal",
    "Leopard Shark",
    "Lion",
    "Llama",
    "Loggerhead Turtles",
    "Lynx",
    "Mako Shark",
    "Manatee",
    "Manta Ray",
    "Mantis",
    "Marbled Salamander",
    "Marmot",
    "Marsupial(s)",
    "Meerkat",
    "Megamouth Shark",
    "Melon-Headed Whale",
    "Miniature Donkey",
    "Mink",
    "Minke Whale",
    "Mole",
    "Mole Salamander",
    "Mollusk(s)",
    "Mongoose",
    "Monitor Lizard",
    "Monk Seal",
    "Monkey",
    "Moose",
    "Mountain Lion",
    "Mouse",
    "Mule",
    "Muskox",
    "Muskrat",
    "Naked Mole Rat",
    "Narwhal",
    "Nautilus",
    "Newt",
    "Northern Right Whale",
    "Nurse Shark",
    "Nutria",
    "Nyala",
    "Ocelot",
    "Octopus",
    "Okapi",
    "Opossum",
    "Orangutan",
    "Orca",
    "Otter",
    "Ox",
    "Panda",
    "Panther",
    "Pig",
    "Pilot Whale",
    "Pine Marten",
    "Platypus",
    "Polar Bear",
    "Porcupine",
    "Porpoise",
    "Possum",
    "Potbellied Pig",
    "Potto",
    "Prairie Dog",
    "Proboscis Monkey",
    "Przewalski's Wild horse",
    "Puma",
    "Pygmy Hippopotamus",
    "Pygmy Right Whale",
    "Pygmy Sperm Whale",
    "Quokkas",
    "Quolls",
    "Rabbit",
    "Raccoon",
    "Rat",
    "Ray",
    "Red Fox",
    "Red Kangaroo",
    "Red Panda",
    "Red-Eyed Tree Frog",
    "Reef Shark",
    "Reindeer",
    "Rhino",
    "Rhinoceros",
    "Right Whale",
    "Ringed Seal",
    "Risso's Dolphin",
    "River Dolphin",
    "Salamander",
    "Sandbar Shark",
    "Scalloped Hammerhead Shark",
    "Sea Lion",
    "Sea Turtles",
    "Seal",
    "Sei Whale",
    "Shark",
    "Sheep",
    "Shortfin Mako Shark",
    "Siberian Tiger",
    "Silky Shark",
    "Skink",
    "Skunk",
    "Slender Loris",
    "Sloth",
    "Sloth Bear",
    "Snake(s)",
    "Snow Fox",
    "Snow Hare",
    "Snow Leopard",
    "Snow Monkey",
    "Somali Wild Ass",
    "Spectacled Bear",
    "Sperm Whale",
    "Spider Monkey",
    "Spiny Dogfish Shark",
    "Spotted Dolphin",
    "Squirrel",
    "Star-Nosed Mole",
    "Stellar Sea Lion",
    "Striped Dolphin",
    "Sun Bear",
    "Takin",
    "Tamarin",
    "Tapir",
    "Tasmanian Devil",
    "Tasmanian Tiger",
    "Terrapin",
    "Thresher Shark",
    "Tiger",
    "Tiger Salamander",
    "Tiger Shark",
    "Topi",
    "Tortoise",
    "Tree Frog",
    "Turtle",
    "Uakari",
    "Vampire Bat",
    "Vancouver Island Marmot",
    "Vervet Monkey",
    "Vicuna",
    "Vole",
    "Wallaby",
    "Walrus",
    "Warthog",
    "Water Buffalo",
    "Weasel",
    "Whale Shark",
    "Whale(s)",
    "White Rhino",
    "White Tailed Deer",
    "White-Beaked Dolphin",
    "Whitetip Reef Shark",
    "Wildcat",
    "Wildebeest",
    "Wobbegong Shark",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodchuck",
    "Yak",
    "Yellow-Bellied Marmot",
    "Zebra",
    "Zebu",
    "Zorilla"
];


//first to last array loop
for (let a = 0; a < animals.length; a++) {
    console.log(animals[a]);
};

//last to first array loop
for (let b = animals.length - 1; b >= 0; b--) {
    console.log(animals[b]);
};

//nesting for loop
for (i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(j);
    };
};


//iterating through a nested array
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
];

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row ${i + 1}`.toUpperCase());
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    };
};

//while loop
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

//repeat until guess = SECRET
const SECRET = "BabyHippo";
let guessing = prompt("enter the secret code...");

while (guessing !== SECRET) {
    guessing = prompt("enter the secret code...");
};
console.log("You're Logged In!");

//break keyword
let input = prompt("Hey! Say Something");

while (true) {
    input = prompt(input);
    if (input === "stop copying me") break;
}
console.log("Okay - you win!");

//guessing game
let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    console.log("Please enter a valid number!");
};

const targetNum = Math.floor((Math.random() * maximum) + 1);
let attempts = 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess === "q") break;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess");
    } else {
        guess = prompt("Too low! Enter a new guess");
    };
};

if (guess === "q") {
    console.log("Quitter!");
} else {
    console.log(`It took you ${attempts} guesses!`);
};