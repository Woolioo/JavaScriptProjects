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
for (const data in newUser) { //for in 
    console.log(data + ': ' + newUser[data]);
}
function User(name, age) {
    this.name = name;
    this.age = age;
}
const nextUser = new User('Klaudia', 23); //used of 'new'
const nextUser2 = new User('Kasia', 24);
console.log(nextUser);
console.log(nextUser2);
User.prototype.hello = function () {
    console.log(`Cześć ${this.name}`);
};
nextUser.hello();
nextUser2.hello();
