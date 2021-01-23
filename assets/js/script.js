function renderCard(card, parent) {
    let container = document.createElement('div');
    container.classList.add('card', card.type);

    renderTitle(card, container);

    if(card.img) {
        if(card.abilities.length) {
            renderAbilities(card, container);
        }
        renderImage(card, container);
    }

    if(card.meta.length) {
        renderMeta(card, container);
    }

    let optionDiv = document.createElement('div');
    optionDiv.classList.add("options-container");
    container.appendChild(optionDiv); 

    card.options.forEach(element => {
        renderOption(element, optionDiv);
    });

    parent.appendChild(container);
}

function renderTitle(card, parent) {
    let title = document.createElement('h4');
    title.textContent = card.title;
    parent.appendChild(title);
}

function renderAbilities(card, parent) {
    const abilitiesContainer = document.createElement("div");
    abilitiesContainer.classList.add("abilities-container");
    parent.appendChild(abilitiesContainer);

    const abilityNames = ['fangs', 'fist', 'claws', 'mesmerize', 'plotting', 'escape-as-bat', 'escape-as-mist'];
    abilityNames.forEach(name => {
        const imgElement = document.createElement('img');
        imgElement.src = `/assets/images/attacks/${name}.png`;
        abilitiesContainer.appendChild(imgElement);

        if(card.abilities.includes(name)) {
            imgElement.classList.add('show');
        }
                
    });
}

function renderImage(card, parent) {
    let divImg = document.createElement('div');
    divImg.classList.add('image-container')
    let img = document.createElement('img');
    img.src = card.img;
    divImg.appendChild(img);
    parent.appendChild(divImg);
}

function renderMeta(card, parent) {
    let metaDiv = document.createElement('div');
    metaDiv.classList.add('meta-container');
    parent.appendChild(metaDiv);
    
    card.meta.forEach(element => {
        let meta = document.createElement('h5');
        meta.textContent = element;
        metaDiv.appendChild(meta);
    });
}

function renderOption(option, parent) {
    if(option.title){
        let title = document.createElement('h6');
        title.textContent = option.title
        parent.appendChild(title)
    }

    option.description.paragraphs.forEach(element =>{
        renderParagraph(element, parent);
    })
}

function renderParagraph(paragraph, parent) {
    let text = document.createElement('p');
    text.textContent = paragraph.text
    parent.appendChild(text)
    
    if(paragraph.listItems) {
        renderList(paragraph.listItems, parent);
    }
}

function renderList(list, parent) {
    let ul = document.createElement('ul');
                
    list.forEach(element =>{
        let li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });

    parent.appendChild(ul);
}

let cards = [];
const eventParent = document.body;
const itemParent = document.body;

fetch('/data.json')
    .then(res => res.json())
    .then(data => {
        cards = data;
        filter();
    });

function filter(query = "") {
    eventParent.innerHTML = '';
    itemParent.innerHTML = '';
    if(query === "") {
        filteredCards = cards;
    } else {
        filteredCards = cards.filter(card =>  card.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }

    filteredCards.forEach(card => {
        if(card.type === "event") {
            renderCard(card, eventParent);
        } else {
            renderCard(card, itemParent);
        } 
    });
}

