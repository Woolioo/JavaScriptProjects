const newUser = {
    name: 'Micky',
    age: 20,
    car: {
        brand: 'BMW',
        model: 'M3',
        color: 'black',
        sound() {
            console.log(`wrrrrum`);
        },
    },
};
newUser['country'] = 'Poland';
newUser['fav-food'] = 'kebab';
const catName = 'Luna';
const catAge = '5';
const cat = {
    catName,
    catAge,
};
console.log(newUser);
newUser.car.sound();
console.log(cat);
for (const data in newUser) {
    console.log(data + ': ' + newUser[data]);
}
