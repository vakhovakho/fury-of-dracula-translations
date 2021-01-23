let card1 =  {
    "type": "event",
    "title": "Lucy's revenge",
    "img": "",
    "abilities": [],
    "meta": ["მხოლოდ Lord Godalming-ისთვის","ითამაშე ბრძოლის დაწყებამდე, სანამ აირჩევ ბარათს"],
    "options": [
        {
            "title": "",
            "description": {
                "paragraphs":[
                    {
                        "text":"დადე ეს ბარათი შენს წინ და მოიშორე იგი ბრძოლის ბოლოს ან რომელიმე ქვემოთ ჩამოთვლილის შემთხვევაში :",
                        "listItems": ["გააუქმე გაქცევის Escape As Bat ან Escape As Mist ბარათი","თუ ხარ ნაკბენი ან კვდები დარტყმით ის დარტყმა ან კბენა უქმდება"]
                    }
                ]
            }
        }
    ]
};


let card2 = {
    "type": "event",
    "title": "Consecrated ground",
    "img": "",
    "abilities": [],
    "meta": ["ითამაშე როგორც ღამის მოქმედება"],
    "options": [
        {
            "title": "",
            "description": {
                "paragraphs":[
                    {
                        "text":"გამოიყენე Consecrated ground-ის ჟეტონი ნებისმიერ ქალაქზე გარდა Castle Dracula Galatz ან Klausenburg",
                        "listItems": []
                    },
                    {
                        "text":"შემდეგ თითოეულ მონადირეს შეუძლია გამოააშკარაოს Heavenly Host ბარათი და დადოს Heavenly Host ჟეტონი ნებისმიერ ქალაქზე იგივე გამონაკლისებით",
                        "listItems": []
                    }
                ]
            }
        }
    ]
};

let card3 = {
    "type": "item",
    "title": "Knife",
    "img": "/assets/images/items/knife.jpg",
    "abilities": ["fangs","escape-as-bat"],
    "meta": ["Weapon"],
    "options": [
        {
            "title": "",
            "description": {
                "paragraphs":[
                    {
                        "text":"ვამპირს აკლდება 3 სიცოცხლე",
                        "listItems": []
                    }
                ]
            }
        }
    ]
};

function renderCard(card, parent) {
    let container = document.createElement('div');
    container.classList.add('card', card.type);

    renderTitle(card, container);

    if(card.img) {
        renderImage(card, container);
    }
    if(card.meta.length) {
        renderMeta(card, container);
    }

    let optionDiv = document.createElement('div');
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

renderCard(card1, document.body);
renderCard(card2, document.body);
renderCard(card3, document.body);
