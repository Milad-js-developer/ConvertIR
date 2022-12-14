const selects = document.querySelector("select");
const input = document.querySelector("form input");
const btn = document.querySelector("form button");
const ul = document.querySelector("ul");
const onvan = document.getElementById("onvan");

selects.addEventListener("click", filter);
btn.addEventListener("click", exchange);

let filterVal;
let inputValue;
let exchangeValue;
let result = "";

function filter(event) {
    let options = selects.childNodes;
    options.forEach(item => {
        switch(event.target.value) {
            case "tr":
                filterVal = "TR";
                break;
            case "rt":
                filterVal = "RT";
                break;
            case "choose":
                filterVal = "CHOOSE";
        }
    })

    if(filterVal == "TR") {
        onvan.innerText = "مبلغ را به تومان وارد کنید:";
    }
    if(filterVal == "RT") {
        onvan.innerText = "مبلغ را به ریال وارد کنید:";
    }
    if(filterVal == "CHOOSE") {
        onvan.innerText = "- - -";
    }
}

function exchange(event) {
    event.preventDefault();

    inputValue = input.value;

    let convertStatus = Number(inputValue);

    if(inputValue === "" || filterVal === "CHOOSE" || isNaN(convertStatus) == true ) {
        alert("نوع تبدیل را  انتخاب نکرده اید یا مبلغ مورد نظر را وارد نکرده اید");
    }
    else {
        if(filterVal == "TR") {
            exchangeValue = inputValue * 10;
            result = `${exchangeValue} ریال`;
    
        }
        if(filterVal == "RT") {
            exchangeValue = inputValue / 10;
            result = `${exchangeValue} تومان`;
        }
         
        const li = document.createElement("li");
        li.className = "liStyle";
        li.innerText = result;
        ul.appendChild(li);
    }
}