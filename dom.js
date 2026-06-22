 // a) Get first paragraph using querySelector(tagname)
let firstPara = document.querySelector("p");
console.log("First paragraph:", firstPara.textContent);

// b) Get each paragraph using id
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");

// c) Get all paragraphs using querySelectorAllDom
let allParas = document.querySelectorAll("p");

// d) Loop through NodeList and print text content
allParas.forEach((para) => {
    console.log("Text:", para.textContent);
});

// e) Set text content to fourth paragraph
p4.textContent = "Fourth Paragraph";

// f) Set id and class using attribute methods
p1.setAttribute("class", "first-class");
p2.setAttribute("class", "second-class");
p3.setAttribute("class", "third-class");
p4.setAttribute("class", "fourth-class");

// g) Change style of each paragraph
allParas.forEach((para) => {
    para.style.color = "blue";
    para.style.backgroundColor = "#f0f0f0";
    para.style.border = "1px solid black";
    para.style.fontSize = "18px";
    para.style.fontFamily = "Arial";
});

// h) First & third green, second & fourth red
allParas.forEach((para, index) => {
    if (index === 0 || index === 2) {
        para.style.color = "green";
    } else {
        para.style.color = "red";
    }
});

// i) Set text, id, class for each paragraph
p1.textContent = "Updated First Paragraph";
p1.id = "first";
p1.className = "green-text";

p2.textContent = "Updated Second Paragraph";
p2.id = "second";
p2.className = "red-text";

p3.textContent = "Updated Third Paragraph";
p3.id = "third";
p3.className = "green-text";

p4.textContent = "Updated Fourth Paragraph";
p4.id = "fourth";
p4.className = "red-text";