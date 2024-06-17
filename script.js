
document.getElementById('generate').addEventListener('click', generateStory);

function randomizer(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateStory() {
    let story = randomizer(funnyStory);
    let name = document.getElementById('customName').value;
    if (name == '')
        name = randomizer(funnyNames);
    let object = randomizer(funnyObjects);
    let verb = randomizer(funnyVerbs);
    let location = randomizer(funnyLocations);
    let newStory = story;
    newStory = newStory.replaceAll('[Name]', name);
    newStory = newStory.replaceAll('[Object]', object);
    newStory = newStory.replaceAll('[Verb]', verb);
    newStory = newStory.replaceAll('[Location]', location);
    document.getElementById('storyContainer').innerText = newStory;
    document.getElementById('storyContainer').style.display = 'block';
}

const funnyStory = [
    "In the zany town of [Location], there was a quirky inventor named [Name]. One day, while [Verb]-ing with an old [Object], something strange happened. The [Object] started to glow and shake, and before [Name] knew it, it sprang to life! Hello, [Name]! the [Object] said, I'm here to help you on a wild adventure! Shocked but intrigued, [Name] agreed to follow the talking [Object].Their first stop was the enchanted forest outside [Location], where they encountered a dancing squirrel named Nutty. Nutty needed help finding his lost acorn stash, so [Name] and the [Object] joined in the search. They [Verb]-ed through the forest, laughing at Nutty’s silly jokes and unexpected dance moves. After a series of hilarious mishaps, including slipping on enchanted banana peels and getting tangled in magical vines, they found Nuttys acorns. Triumphant, they returned to [Location], where [Name] was hailed as the hero who saved the day with the help of a very unusual [Object].", 
    "In the town of [Location], [Name] loved to [Verb] with their favorite [Object]. One day, while [Name] was [Verb]-ing in [Location], the [Object] started to glow and talk! Hey, [Name]! Let's have some fun! the [Object] said. Excited, [Name] agreed and they [Verb]-ed all over [Location]. They met a dancing dog, a singing cat, and a juggling monkey. Together, they [Verb]-ed tdhrough the park, the market, and even the mayor's office. By the end of the day, [Location] was filled with laughter, and [Name] and the magical [Object] became local legends.",
    "In the village of [Location], [Name] loved to [Verb] with their trusty [Object]. One sunny day, while [Name] was happily [Verb]-ing, the [Object] began to bounce around on its own! Catch me if you can, [Name]! the [Object] giggled. Surprised but amused, [Name] chased the [Object] through [Location]. They [Verb]-ed past the bakery, the school, and even the town hall. As they [Verb]-ed, people joined in the fun, creating a joyful parade. By the end of the chase, [Location] was in stitches, and [Name] and the cheeky [Object] were heroes of laughter.",
    "In the quirky town of [Location], [Name] had a magical [Object] that could [Verb]. One day, [Name] decided to [Verb] with the [Object] in the town square of [Location]. Suddenly, the [Object] started to [Verb] on its own! It danced, twirled, and even sang songs. [Name] couldnt stop laughing and decided to join in. Together, they [Verb]-ed around [Location], visiting the market, the library, and the park. Everyone in [Location] gathered to watch the hilarious show. By the end of the day, [Name] and the talented [Object] had turned an ordinary day into an unforgettable, fun-filled adventure.",
    "Once upon a time, in a land far, far away, lived a peculiar fellow named [Name]. [Name] resided in [Location], a place where [Object]s danced in the streets and everyone spoke in rhymes. One sunny day, [Name] stumbled upon a magical [Object] that could [Verb] anything it touched. Excitedly, [Name] decided to test it out. First, [Name] touched a rock, and it began to [Verb] like a jazz musician. Then, [Name] touched a tree, and it started to [Verb] uncontrollably, shaking its branches like a maraca. [Name] couldn't stop giggling at the absurdity of it all. Soon, news spread throughout [Location] about [Name]'s antics with the magical [Object]. The townsfolk gathered around [Name], hoping to see more hilarious [Object]s [Verb]ing unexpectedly. Even the mayor couldn't resist joining in, [Verb]ing like a chicken when touched by the magical [Object]. From that day on, [Name] and the magical [Object] became local legends, spreading laughter and cheer wherever they went. And so, in [Location], life became a bit sillier and a lot more fun thanks to [Name]'s discovery of the mischievous [Object].",
    "In a quaint village named [Location], there dwelt a peculiar character known far and wide as [Name]. [Name] was infamous for causing mayhem with a magical [Object] that made everything [Verb] like a hyperactive squirrel. One fateful morning, [Name] decided to prank the entire village. [Name] touched the town bell, which promptly began to [Verb] like a teenager at a rock concert. Startled villagers spilled their morning tea as the bell's wild peals echoed through the streets. Not satisfied with just one spectacle, [Name] ventured to the village square. There, [Name] made the statue of the town's founder [Verb] like a breakdancer, much to the amusement of onlookers. From that day on, [Location] became known as the town where statues danced and bells rocked out, all thanks to [Name]'s mischievous antics with the enchanted [Object].",
    "Verily, in a realm hight [Location], there did reside a most curious soul, known throughout the land as [Name]. This merry fellow hath stumbled upon a wondrous [Object] one fair morn, which did possess a most enchanting power: to make all things [Verb] with great gusto and mirth. With mischievous glee, [Name] did set about testing this marvel. First, [Name] did lay hands upon a humble stone, causing it to [Verb] with a rhythm akin to a jester's jest. Then, [Name] did approach a mighty oak, which did [Verb] in the breeze as if touched by the faeries' wand. News of [Name]'s antics spread swift as the swallow's flight through [Location]. The good folk did gather 'round [Name], seeking to witness more such capers. Even the constable, when touched by the magical [Object], did [Verb] and dance upon yon cobbled street. Thus, in [Location], did life become a merry masquerade, all owing to [Name]'s discovery of this whimsical [Object], where even the gravest countenance did crack with laughter at the sight of such merry-making.",
    "In days of yore, within a hamlet called [Location], dwelt a jolly soul dubbed [Name]. This mirthful fellow chanced upon a strange [Object] one morn, which wrought wonders when it made all things [Verb] with uproarious delight. With merriment in heart, [Name] did test this marvel. First, [Name] touched a lowly stone, and it did [Verb] like a minstrel's lute. Then, [Name] approached an ancient oak, which did [Verb] in the breeze as if touched by the sprites' mirth. Word spread like wildfire through [Location] of [Name]'s antics. The folk gathered 'round, hoping for more. Even the constable, touched by the magical [Object], did [Verb] and jig upon the cobblestones.",
    "Once upon a time, in a village called [Location], there lived a cheerful person named [Name]. One day, [Name] stumbled upon a strange [Object] that made everything [Verb] with unexpected joy. Excitedly, [Name] tested it out. [Name] touched a rock, and it began to [Verb] like a musician at a concert. Then, [Name] found a tree and made it [Verb] like it was dancing in the wind. Word quickly spread across [Location] about [Name]'s discovery. People gathered around [Name], eager to see more amusing [Object]s [Verb]ing unexpectedly. Even the mayor couldn't resist joining in, [Verbd]ing like a clown when touched by the magical [Object]. From then on, life in [Location] became filled with laughter and surprises, all thanks to [Name]'s encounter with the whimsical [Object].",
    "In a cozy town named [Location], there resided a lively soul known as [Name]. One fine day, [Name] stumbled upon a peculiar [Object] that had the power to make everything [Verb] with infectious joy. Curious and thrilled, [Name] began to experiment. [Name] touched a rock, and it started to [Verb] like a percussionist at a carnival. Then, [Name] approached a nearby fountain, causing its waters to [Verb] like playful dolphins leaping in the sea. News of [Name]'s antics spread swiftly throughout [Location]. Soon, a crowd gathered around [Name], eager to witness more delightful surprises. Even the local baker, when touched by the magical [Object], couldn't help but [Verb] and skip like a child on a sunny day. Since that day, [Location] became known for its cheerful atmosphere, all thanks to [Name] and the whimsical [Object] that brought laughter to every corner of the town.",
    "In a bustling town named [Location], there lived a character named [Name]. [Name] was renowned for [Verb]ing every [Object] in sight, much to the amusement of the townsfolk. One day, [Name] stumbled upon a magical [Object] that made everything [Verb] with uncontrollable laughter. Curiosity piqued, [Name] decided to test it out. [Name] touched a rock, and it began to [Verb] like a stand-up comedian telling the best jokes. Then, [Name] found a statue and made it [Verb] like a disco dancer, much to the delight of passersby. Soon, word of [Name]'s antics spread like wildfire across [Name]. People eagerly awaited [Name]'s next prank, hoping to witness more hilarious [Object]s [Verb]ing unexpectedly. Even the town's grumpy old cat couldn't resist [Verb]ing when touched by the magical [Object]. From then on, [Name] became a local legend in [Name], where laughter echoed through the streets thanks to [Name]'s mischievous encounters with the whimsical [Object].",
    "In the illustrious town of [Location], there dwelt a person named—you guessed it—[Name]. This extraordinary individual had a talent for making every [Object] in sight [Verb] with unparalleled comedic timing. One fateful day, [Name] stumbled upon a mysterious [Object] that bestowed upon everything the dubious gift of bursting into laughter. Naturally, [Name] couldn't resist testing this newfound power. [Name] touched a rock, and it promptly began to [Verb] like it had attended clown school. Next, [Name] encountered a solemn statue, which unexpectedly started to [Verb] like it had just heard the world's funniest joke. Of course, news of [Name]'s antics spread faster than gossip in a small town. Soon, [Name] became the talk of [Name], where even the most mundane objects [Verb]ed with a comedic flair. All thanks to [Name]'s unintentionally sarcastic knack for finding laughter in the most unexpected places."
];

const funnyNames = [
    "Bouncy Banana Pants",
    "Wacky Wobblebottom",
    "Snickerdoodle McGiggles",
    "Twinkle Toes McSprinkle",
    "Fluffy Pancake Face",
    "Squeezy Cheeseball",
    "Zippy Noodle Noggin",
    "Jiggly Jellybean",
    "Doodlebug Fizzwhistle",
    "Bumblebee Hootenanny",
    "Giggle Muffin",
    "Tootsie Twinklefart",
    "Noodlehead McJiggle",
    "Silly Putty Pants",
    "Wobble Wonkadonk",
    "Pudding Pop Fluffernut",
    "Fizzy Tickle Tummy",
    "Cheeky Chucklesworth",
    "Quirky Quackleton",
    "Whimsical Wiggletoes"
];

const funnyObjects = [
    "Dancing Rubber Chicken",
    "Wobbling Jelly Mold",
    "Singing Teapot",
    "Bouncing Marshmallow",
    "Giggle-Inducing Whoopee Cushion",
    "Jiggly Pudding Cup",
    "Ticklish Feather Duster",
    "Spinning Disco Ball",
    "Wacky Inflatable Tube Man",
    "Prankster Clown Nose",
    "Juggling Jellybeans",
    "Twinkling Fairy Lights",
    "Chattering Teeth Toy",
    "Whistling Kettle",
    "Hopping Sock Puppet",
    "Glow-in-the-Dark Yo-Yo",
    "Bouncing Bubble Machine",
    "Slinky Spring Toy",
    "Farting Plush Unicorn",
    "Twirling Hula Hoop"
];

const funnyVerbs = [
    "Giggly Jiggle Dance",
    "Wobble Wonk Stumble",
    "Tickle Tummy Roll",
    "Chuckle Chuck Hop",
    "Bumble Bounce Skip",
    "Snicker Snort Clap",
    "Prance Twirl Laugh",
    "Twinkle Wink Shuffle",
    "Giggle Guffaw Sprint",
    "Wacky Wiggle Twist",
    "Squeaky Sneak Peek",
    "Zany Zoom Zing",
    "Boogie Woogie Bounce",
    "Funky Flop Flip",
    "Noodle Noggin Bop",
    "Belly Laugh Leap",
    "Shimmy Shake Slide",
    "Titter Totter Tiptoe",
    "Whistle Wheeze Wave",
    "Juggle Jive Jolt"
];

const funnyLocations = [
    "Silly Sausage Street",
    "Wacky Wombat Woods",
    "Giggly Giraffe Garden",
    "Bouncy Banana Boulevard",
    "Tickle Tummy Town",
    "Prankster Penguin Park",
    "Laughing Lollipop Lane",
    "Chuckleberry Canyon",
    "Snicker Snail Swamp",
    "Twinkle Toes Tower",
    "Jolly Jellybean Junction",
    "Wobble Wonka Waterfall",
    "Mirthful Marshmallow Meadow",
    "Zany Zucchini Zoo",
    "Guffawing Gopher Gulch",
    "Dizzy Dodo Desert",
    "Giggle Goose Grove",
    "Noodle Noggin Nook",
    "Jester Jaguar Jungle",
    "Frolicsome Flamingo Field"
];
