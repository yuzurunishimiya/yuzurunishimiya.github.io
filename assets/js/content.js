var content = document.getElementById("content");

data = {
    "A" : {
        "absolute"  : "bebas",
        "art"       : "seni",
        "and"       : "dan"
    },
    "B" : {
        "back"      : "kembali",
        "born"      : "lahir",
        "but"       : "tapi",
        "because"   : "karena"
    },
    "C" : {
        "cool"      : "dingin, keren",
        "count"     : "hitung",
        "chill"     : "kalem, santai",
        "complex"   : "komplek, rumit",
        "child"     : "anak",
        "children"  : "anak-anak",
        "crime"     : "kejahatan",
    },
    "D" : {
        "design"    : "desain",
        "drop"      : "menjatuhkan",
        "damn"      : "sial!",
        "define"    : "mendefinisikan",
        "do"        : "melakukan"
    }
}
var generateHtml = "";
Object.keys(data).forEach(function(key) {
    var child = Object.keys(data[key])
    generateHtml += `<div class="header-items">${key}</div>`
    for (item of child) {
        generateHtml += `<div class="main-items">
                            <div class="item">${item}</div>
                            <div class="item">${data[key][item]}</div>
                        </div>`
    }
});

content.innerHTML = generateHtml;

fetch("https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
    .then(res => res.json())
    .then(data=> console.log(data))
    .catch(error => console.log(error));