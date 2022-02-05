// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item

const itemsRef = document.querySelectorAll('.item');
console.log("Number of categories: ", itemsRef.length); // Number of categories: 3


// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
itemsRef.forEach(item => {
    const itemsTitle = item.querySelector('.item h2');
    console.log('Category: ', itemsTitle.textContent);

    const itemsLength = item.querySelectorAll('.item > ul > li');
    console.log('Elements: ', itemsLength.length);
});

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5