const container = document.querySelector('.container');
const submitButtonQuantidade = document.getElementById('submit-quantidade');
const submitButtonSize = document.getElementById('submit-size');
const flexDirection = document.querySelectorAll('input[name="flex-direction"]');
const justifyContent = document.querySelectorAll('input[name="justify-content"]');
const alignItems = document.querySelectorAll('input[name="align-items"]');
const flexWrap = document.querySelectorAll('input[name="flex-wrap"]');
var quantityBoxs;
var boxSize;

function onLoad() {
    container.style.flexDirection = 'row';
    container.style.justifyContent = 'flex-start';
    container.style.alignItems = 'flex-start';
    container.style.flexWrap = 'wrap';

    submitButtonQuantidade.addEventListener('click', createDivs);
    submitButtonSize.addEventListener('click', reSizeBox);
    flexDirection.forEach(item => item.addEventListener('change', changeFlexDirection));
    justifyContent.forEach(item => item.addEventListener('change', changeJustifyContent));
    alignItems.forEach(item => item.addEventListener('change', changeAlignItems));
    flexWrap.forEach(item => item.addEventListener('change', changeFlexWrap));
}

function createDivs(e) {
    e.preventDefault();

    container.style.backgroundColor = '#9e9e9e';
    
    clearDivChilds();
    quantityBoxs = Number(document.getElementById('quantity').value);
    for(let i = 0; i < quantityBoxs; i++) {
        let div = document.createElement('div');
        div.classList.add("div");
        div.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        container.appendChild(div);
    }
}

function clearDivChilds() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function changeFlexDirection(e) {
    if(e.target.value === 'Column') {
        reSizeContainer();
    }
    container.style.flexDirection = e.target.value;
}

function changeJustifyContent(e) {
    container.style.justifyContent = e.target.value;
}

function changeAlignItems(e) {
    container.style.alignItems = e.target.value;
}

function changeFlexWrap(e) {
    container.style.flexWrap = e.target.value;
}

function reSizeContainer() {
    let height = quantityBoxs * boxSize + 2*boxSize;
    container.style.height = height + 'px';
}

function reSizeBox(e) {
    e.preventDefault();

    boxSize = Number(document.getElementById('box-size').value);
    let divs = document.querySelectorAll('.div');
    divs.forEach(item => item.style.width = boxSize + 'px');
    divs.forEach(item => item.style.height = boxSize + 'px');
}

window.onLoad = onLoad();