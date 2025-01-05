
const createElement = function (element,content, classList = null, container = null){
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

export default createElement;