const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

console.log('before:\n', user);

const userChanges = (mood, hobby, premium) => {
    user.mood = mood;
    user.hobby = hobby;
    user.premium = premium;
}

userChanges('happy', 'skydiving', false);


console.log('after:\n', user);

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}