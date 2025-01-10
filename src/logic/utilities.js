
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

export default createElem;
