function Post(title, content, type) {
    return { title, content, type }
}

function Menu(name, price, recipe) {
    return { name, price, recipe }
};

const frontPagePost = [
    Post('A SECOND LIFE!',
    "\"Don't implore your mind to change what was to be, implore your mind to change and change for what's next! this relived version of the project will put to rest of a memory that's bitter.\"",
    'main'),
    Post('WHY AHHA?', 
    "Want a step back from the usual generic food you eat at a conventional food fair? <br>have you tasted a food that you would remember to want to taste for next school fair? <br>No? <br><br>Come here then!",
    'sub'),
    Post('WHEN\'S AHHA?',
    "We'll be hosting the fair for two days from 8:00 A.M to 4:30 P.M! Be sure to check us out at Western International School, Stadium Campus on the 1st and 2nd of February.",
    'sub'), Post('WHERE\'S AHHA EXACTLY?','','sub')
];

const secondPagePost = [
    Menu('Kimchi Fried Rice and Fried Gyoza set.', 
    '10000៛', 
    'Kimchi fried rice, Fried Gyoza set, and Beverages'),
    Menu('Teriyaki Chicken with rice set.',
    '10000៛',
    'Teriyaki Chicken, Kimchi/Pickled raddish, and Beverages'),
    Menu('Pasta Set.',
    '10000៛',
    'Mou\'s special pasta, Hasbrown. and Beverages'),
    Menu('Kimchi Onigir (cheese is optional)',
    '5000៛',
    'Kimchi, Rice, Egg/Spam/Ham'),
    Menu('Teriyaki Chicken Rice',
    '6500៛',
    'Chicken, Rice, Special sauce'),
    Menu('Mou\'s special pasta (Shrimp is optional)',
    '6500៛',
    'Special recipe',
    Menu('Quesadilla',
    '5000៛',
    'Tortilla, Vegetables, Cheese, Meats'))
]

export {frontPagePost, secondPagePost};