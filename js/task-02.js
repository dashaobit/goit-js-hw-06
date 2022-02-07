const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ищем внутри document элемент с id-шником ingredients <ul id="ingredients">
const ingredientListEl = document.querySelector("#ingredients");

// сконструировали DOM-элемент
// создаём новый массив arrIngredient с результатом вызова функции-колбек для каждого элемента массива ingredients

const arrIngredient=ingredients.map((ingredient) =>{
  const listEl=document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent=ingredient;
  console.log(listEl)

  return listEl;
});

// добавили DOM-элемент на страницу
ingredientListEl.append(...arrIngredient);
