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

function renderCard(card) {
    let container = document.createElement('div');
    container.classList.add('card', card.type);

    let title = document.createElement('h4');
    title.textContent = card.title;
    container.appendChild(title);

    if(card.img) {
        let divImg = document.createElement('div');
        divImg.classList.add('image-container')
        let img = document.createElement('img');
        img.src = card.img;
        divImg.appendChild(img);
        container.appendChild(divImg);
    }
    if(card.meta.length) {
        let metaDiv = document.createElement('div');
        metaDiv.classList.add('meta-container');
        container.appendChild(metaDiv);
        card.meta.forEach(element => {
            let meta = document.createElement('h5');
            meta.textContent = element;
            metaDiv.appendChild(meta);
        });
    }

    let optionDiv = document.createElement('div');
    
    container.appendChild(optionDiv); 

    card.options.forEach(element => {
        if(element.title){
            let title = document.createElement('h6');
            title.textContent = element.title
            optionDiv.appendChild(title)
        }

        element.description.paragraphs.forEach(element =>{
            let text = document.createElement('p');
            text.textContent = element.text
            optionDiv.appendChild(text)
            
            if(element.listItems) {
                let ul = document.createElement('ul');
                
                element.listItems.forEach(element =>{
                    let li = document.createElement('li');
                    li.textContent = element;
                    ul.appendChild(li);
                });

                optionDiv.appendChild(ul);
            }
        
        })

    });

    
    document.body.appendChild(container);


}

renderCard(card1);
renderCard(card2);
renderCard(card3);

console.log(card3.img);  