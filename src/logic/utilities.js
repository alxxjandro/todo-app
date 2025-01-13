
const createElem = function (element,content, classList = null, container = null){
    const body = document.body;
    const div = document.createElement("div");

    content.forEach(text => {
        let temp = document.createElement(element);
        temp.textContent = text;
        div.appendChild(temp);
    });

    if (classList){
        classList.forEach(_class =>{
            div.classList.add(_class);
        })
    }

    if (container){
        container.appendChild(div);
    }
    return div;
} 

export const createButtonWithImage = function(text, className, imgSrc, parent){
    const button = createElem("button", [text], [className], parent);
    const img = document.createElement("img");
    img.src = imgSrc;
    button.appendChild(img);
    return button;
};

export const createLinkImg = function(link,imgSrc,className,container){
    const aElem = createElem("a",[""],[className],container);
    const img = document.createElement("img");
    img.src = imgSrc;

    aElem.querySelector("a").href = `${link}`;
    aElem.querySelector("a").target = "_blank";
    aElem.querySelector("a").appendChild(img);

}

export const addButtonListener = function(button, callback) {
    button.addEventListener("click", () => { 
        return callback();
    });
};

export const createInput = function(_label, _type, _id, _name, _placeholder = null, container = null){
    const div = document.createElement("div");

    const input = Object.assign(document.createElement("input"), {
         type : _type,
         id : _id, 
         name : _name, 
         placeholder : _placeholder
        });

    const label = Object.assign(document.createElement("label"),{ 
        htmlFor : _id,
        textContent : _label 
    });
    
    div.appendChild(label);
    div.appendChild(input);

    if (container){
        container.appendChild(div);
    }
    return div;
}

export default createElem;
