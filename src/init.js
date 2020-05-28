
//functions
let pageTitle = function() {
    var content = document.querySelector('#content');
    let a = document.createElement('h1');
    a.setAttribute("id", "pageTitle");
    a.innerHTML = "Egg Express";
    content.appendChild(a);
};

let phrase = function() {
    var content = document.querySelector('#content');
    let a = document.createElement('h2');
    a.setAttribute("id", "phrase");
    a.innerHTML = "Speedy meals on the go!";
    content.appendChild(a);
};

let photo = () => {
    var content = document.querySelector('#content');
    let a = document.createElement('img');
    a.setAttribute("src", "https://i.dailymail.co.uk/1s/2019/11/04/11/20574966-0-image-a-55_1572866659865.jpg");
    a.setAttribute("alt", "Restaurant Photo")
    content.appendChild(a);

}

let tabsMenu = () => {
    var tabs = document.createElement("div");
    tabs.setAttribute("class", "tab");

    var a = document.createElement("button");
    a.setAttribute("class", "tablinks");
    a.addEventListener("click", menuFood);
    a.innerHTML = "Menu";
    tabs.appendChild(a);

    var b = document.createElement('button');
    b.setAttribute("class", "tablinks");
    b.addEventListener("click", menuDrinks);
    b.innerHTML = "Drinks";
    tabs.appendChild(b);

    var c = document.createElement("button");
    c.setAttribute("class", "tablinks");
    c.addEventListener("click", contactUs);
    c.innerHTML = "Contact Us";
    tabs.appendChild(c);

    var d = document.createElement("div");
    d.setAttribute('id', 'tabContent');
    tabs.appendChild(d);

    content.appendChild(tabs);
}

var activeTab = (z) => {
    var tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    console.log(this);
    z.className += " active";
}

let menuFood = function(e) {
    var tabContent = document.querySelector('#tabContent');
    tabContent.innerHTML = "";

    let a = document.createElement('ul');
    a.setAttribute("id", "menuFood");


    let b = document.createElement('li');
    b.innerHTML = "Habanero Chili -- Cup 3.50 -- Bowl 5.50";
    a.appendChild(b);

    let c = document.createElement('li');
    c.innerHTML = "Spaghetti w/ Meat Sauce -- 5.50";
    a.appendChild(c);

    let d = document.createElement('li');
    d.innerHTML = "Roasted Salmon & Veggies -- 8.50"
    a.appendChild(d);

    let g = document.createElement('li');
    g.innerHTML = "Habanero Carnitas Tacos -- 7.50";
    a.appendChild(g);

    let f = document.createElement('li');
    f.innerHTML = "Add an Egg, any style -- 1.00"
    a.appendChild(f);

    tabContent.appendChild(a);
    let x = this;
    activeTab(x);

};

let menuDrinks = function(e) {
    var tabContent = document.querySelector('#tabContent');
    tabContent.innerHTML = "";

  let a = document.createElement("ul");
  a.setAttribute("id", "menuDrinks");

  let b = document.createElement("li");
  b.innerHTML = "Sparkling Water -- 2.50";
  a.appendChild(b);

  let c = document.createElement("li");
  c.innerHTML = "Fountain Drinks -- 3.50";
  a.appendChild(c);

  let d = document.createElement("li");
  d.innerHTML = "House Margarita -- Glass 6.50 -- Pitcher 18.00";
  a.appendChild(d);

  tabContent.appendChild(a);
  let x = this;
  activeTab(x);
};

let contactUs = function(e) {
    tabContent.innerHTML = "";

    let b = document.createElement('ul');
    b.setAttribute("id", "contactList");

    let f = document.createElement('li');
    f.innerHTML = "Owner: Sean Devaney";
    b.appendChild(f);

    let d = document.createElement('li');
    d.innerHTML = "Phone: 916-747-3059";
    b.appendChild(d);

    let g = document.createElement('li');
    g.innerHTML = "Email: sgdevaney@ucdavis.edu"
    b.appendChild(g);

    tabContent.appendChild(b);
    let x = this;
    activeTab(x);


}

let pageInit = () => {
    pageTitle();
phrase();
photo();
tabsMenu();
};

// Export
export { 
pageInit,
menuFood,
menuDrinks,
contactUs
}