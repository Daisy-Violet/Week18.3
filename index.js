let formName = document.querySelector('.form__name');
let formImg = document.querySelector('.form__img');
let formComment = document.querySelector('.form__text');
let formBtn = document.querySelector('.form__btn');
let listComments = document.querySelector('.list-comments');
const arr = [];
const oldComments = localStorage.getItem('items');
listComments.innerHTML = oldComments;
const createElement = (name, url, comment) => {
    const div = document.createElement('div');
    div.classList.add('item');
    const span = document.createElement('span');
    const img = document.createElement('img');
    const p = document.createElement('p');
    p.textContent = comment;
    p.className = 'item__text';
    img.src = url;
    img.className = 'item__img';
    span.textContent = name;
    span.className = 'item__name';
    div.append(span);
    div.append(img);
    div.append(p);
    return div;
}
const addElement = (container) => {
    const element = createElement(formName.value, formImg.value, formComment.value);
    arr.push(`${element.outerHTML}`);
    container.append(element);
}
formBtn.addEventListener('click', () => {
    addElement(listComments);
    localStorage.setItem('items', arr.join(''));
});

