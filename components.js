/* 
    Create simple templates with these components.
    By: Neo Chee Kiong 
*/

//  Basic Approach to making an element with attributes found in html
function makeAnElement(elementData){
    let element = document.createElement(elementData.element);
    elementData.attributes.forEach(attribute => {
        element.setAttribute(attribute[0], attribute[1])
    });
    if (elementData.innerHTML){
        element.innerHTML = elementData.innerHTML;
    }
    if (elementData.children){
        elementData.children.forEach(children => {
            element.appendChild(makeAnElement(children));
        });
    }
    return element;
}

//  JSON equivalent for header
let navbarTogglerIcon = {
    element: "span",
    attributes: [["class", "navbar-toggler-icon"]],
    innerHTML: "",
    children: []
}

let navbarToggler = {
    element: "button",
    attributes: [["class", "navbar-toggler"], 
        ["type", "button"],
        ["data-toggle", "collapse"],
        ["data-target", "#navbarMenu"],
        ["aria-controls", "navbarMenu"],
        ["aria-expanded", "false"],
        ["aria-label", "Toggle navigation"]],
    innerHTML: "",
    children: [navbarTogglerIcon]
}

let navLink1 = {
    element: "a",
    attributes: [["class", "nav-link"], ["href", "CV.html"]],
    innerHTML: "CV",
    children: []
}

let navLink2 = {
    element: "a",
    attributes: [["class", "nav-link"], ["href", "portfolio.html"]],
    innerHTML: "Portfolio",
    children: []
}

let navLink3 = {
    element: "a",
    attributes: [["class", "nav-link"], ["href", "hobbies_interests.html"]],
    innerHTML: "Hobbies & Interests",
    children: []
}

let navItem1 = {
    element: "li",
    attributes: [["class", "nav-item"]],
    innerHTML: "",
    children: [navLink1]
}

let navItem2 = {
    element: "li",
    attributes: [["class", "nav-item"]],
    innerHTML: "",
    children: [navLink2]
}

let navItem3 = {
    element: "li",
    attributes: [["class", "nav-item"]],
    innerHTML: "",
    children: [navLink3]
}

let navbarList = {
    element: "ul",
    attributes: [["class", "navbar-nav mr-auto"]],
    innerHTML: "",
    children: [navItem1, navItem2, navItem3]
}

let navbarMenu = {
    element: "div",
    attributes: [["class", "collapse navbar-collapse"], ["id", "navbarMenu"]],
    innerHTML: "",
    children: [navbarList]
}

let homeLink = {
    element: "a",
    attributes: [["class", "navbar-brand"], ["href", "index.html"]],
    innerHTML: "Home",
    children: []
}
let navbar = {
    element: "header",
    attributes: [["class", "navbar navbar-light"]],
    innerHTML: "",
    children: [homeLink, navbarToggler, navbarMenu]
}

let header = {
    element: "header",
    attributes: [["class", "sticky-top"]],
    innerHTML: "",
    children: [navbar]
}

// Writing cards was repetitive, so I automated it.
class card {
    constructor(image, title, text){
        this.image = image
        this.title = title
        this.text = text
    }
    
}

class element {
    constructor(element, attributes, innerHTML, children){
        this.element = element
        this.attributes = attributes
        this.innerHTML = innerHTML
        this.children = children
    }
}

class image {
    constructor(file, text){
        this.file = file
        this.text = text
    }
}

//  Append the card to an element to implement.
function makeACard(card){
    return makeAnElement(new element("div", [["class", "card"]], "",
        [
            new element("img", [["src", "images\\" + card.image.file], ["alt", card.image.text]], "", []),
            new element("div", [["class", "card-body"]], "", 
            [
                new element("div", [["class", "card-title"]], card.title,[]),
                new element("p", [["class", "card-text"]], card.text, [])
            ])
        ]
    ))
}
