function Post(title, content, type) {
    return { title, content, type }
}

function Menu(name, price, recipe) {
    return { name, price, recipe }
};

function Contact(name, position, contact) {
    return { name, position, contact }
}

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

const firstMenu =  [
    Menu('Kimchi Fried Rice and Fried Gyoza set.', 
    '10000៛', 
    'Kimchi fried rice, Fried Gyoza set, and Beverages'),
    Menu('Teriyaki Chicken with rice set.',
    '10000៛',
    'Teriyaki Chicken, Kimchi/Pickled raddish, and Beverages'),
    Menu('Pasta Set.',
    '10000៛',
    'Mou\'s special pasta, Hasbrown. and Beverages'),
]

const secondMenu = [
    Menu('Kimchi Onigiri (cheese is optional)',
    '5000៛',
    'Kimchi, Rice, Egg/Spam/Ham'),
    Menu('Teriyaki Chicken Rice',
    '6500៛',
    'Chicken, Rice, Special sauce'),
    Menu('Mou\'s special pasta (Shrimp is optional)',
    '6500៛',
    'Special recipe'),
    Menu('Quesadilla',
    '5000៛',
    'Tortilla, Vegetables, Cheese, Meats'),
]

const thirdMenu = [
    Menu('Fried Gyoza (4 pieces)',
    '5000៛',
    'Pork/Shrimp dumping'),
    Menu('Cheese bites (6 pieces)',
    '2500៛',
    'Cheese blocks'),
    Menu('Chicken nuggets (4 pieces)',
    '5000៛',
    'Chicken breast, special mixture and spices'),
    Menu('BBQ Skweres (2 sticks)',
    '3500៛',
    'Beet Bell peppers, Onion, and stuffs'),
    Menu('Hashbrown (1 piece)',
    '2500៛',
    'Potato, special mixture, and spices'),
]

const fourthMenu = [
    Menu('Fruity smoothie',
    '7500៛',
    'Banana/Strawberry/Blueberry'),
    Menu('Chia seeds drink',
    '9000៛',
    'Chia seeds'),
    Menu('Sparkling Chia Lemonade with berries',
    '4500៛',
    'Strawberry/Blueberry/Kiwi/Mixed'),
    Menu('Beverages',
    '-៛',
    'Dasani/Coke/Sprite'),
]

const fifthMenu = [
    Menu('S\'more',
    '2000៛',
    'Marshmellow, crackers, choclate'),
    Menu('Shaved ice',
    '2500៛',
    'Green/red bean, ice, syrup'),
    Menu('Candied fruits',
    '2000៛',
    'Strawberry/Apple/Banana with caramel or chocolate.'),
    Menu('Matcha cake',
    '5000៛',
    'Special recipe (limited edition)'),
]

const contacts = [
    Contact('Chheang', 'CEO', '069980981'),
    Contact('Puthyrath', 'CEO', 'Prey'),
    Contact('Malin', 'CEO', '0703xx2xx'),
    Contact('Mary', 'CEO', '0103XX2XX'),
    Contact('Monah', 'CEO', '0986XX1XX'),
    Contact('Erissa', 'CEO', '0939XX7XX'),
    Contact('Ponita', 'CEO', '0103XX2XX'),
    Contact('Thika', 'CEO', '0103XX2XX'),
]
export {frontPagePost, firstMenu, secondMenu, thirdMenu, fourthMenu, fifthMenu, contacts};