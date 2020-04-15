var ul = document.querySelector(".navbar");

var p1 = document.createElement("LI");
var p1a = document.createElement("A");
p1a.href = "https://ribkix-watch-online.github.io/web";
p1a.innerHTML = "Home";
p1.appendChild(p1a);
ul.appendChild(p1);

var p2 = document.createElement("LI");
var p2a = document.createElement("A");
p2a.href = "https://ribkix-watch-online.github.io/contact";
p2a.innerHTML = "Contact";
p2.appendChild(p2a);
ul.appendChild(p2);

var p3 = document.createElement("LI");
var p3a = document.createElement("A");
p3a.href = "https://ribkix-watch-online.github.io/app";
p3a.innerHTML = "App";
p3.appendChild(p3a);
ul.appendChild(p3);

var p4 = document.createElement("LI");
var p4a = document.createElement("A");
p4a.href = "https://ribkix-watch-online.github.io/settings";
p4a.innerHTML = "Settings";
p4.appendChild(p4a);
ul.appendChild(p4);
