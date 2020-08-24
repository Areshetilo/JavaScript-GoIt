const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingUlRef = document.querySelector('#ingredients');
const ulTitleRef = document.createElement('h2');
ulTitleRef.textContent = 'Ингридиенты';
ingUlRef.append(ulTitleRef);


const liItemsRef = ingredients.map(item => {
    const itemRef = document.createElement('li');
    itemRef.textContent = item;
    return itemRef;
});

ingUlRef.append(...liItemsRef);
