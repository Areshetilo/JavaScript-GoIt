const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

console.log('before:', user);

// const userChanges = (mood, hobby, premium) => {
//     user.mood = mood;
//     user.hobby = hobby;
//     user.premium = premium;
// }

// userChanges('happy', 'skydiving', false);
const changeObjectKey = function (obj, key, value) {
    obj[key] = value;
};

changeObjectKey(user, 'mood', 'happy');
changeObjectKey(user, 'hobby', 'skydiving');
changeObjectKey(user, 'premium', false);

console.log('after:', user);

for (let key of Object.keys(user)) {
    console.log(`${key} : ${user[key]}`);
}

