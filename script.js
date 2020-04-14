function darktheme() {
  document.querySelector(".navbar").classList.remove("navbar-light");
  document.querySelector(".navbar").classList.add("navbar-dark");
  document.querySelector(".navbar-logo").src = "https://media.discordapp.net/attachments/651020737540259844/699701388849971282/Ribkix_WATCH_Logo_white.png";
  document.body.style.backgroundColor = "#101010";
  scrollmenu = document.querySelectorAll(".item");
  scrollmenu.forEach(function(scrollmenu) {
     scrollmenu.style.backgroundColor = "#303030";
  });
  item = document.querySelectorAll(".item");
  item.forEach(function(item) {
     item.style.backgroundColor = "#505050";
  });
  item_name = document.querySelectorAll(".item-name");
  item_name.forEach(function(text) {
     item_name.style.color = "#fff";
  });
  text = document.querySelectorAll(".text");
  text.forEach(function(text) {
     text.style.color = "#fff";
  });
}

function lighttheme() {
  document.querySelector(".navbar").classList.remove("navbar-dark");
  document.querySelector(".navbar").classList.add("navbar-light");
  document.querySelector(".navbar-logo").src = "https://media.discordapp.net/attachments/651020737540259844/699622764721733754/Ribkix_WATCH_Logo.png";
  document.body.style.backgroundColor = "#fff";
  scrollmenu = document.querySelectorAll(".item");
  scrollmenu.forEach(function(scrollmenu) {
     scrollmenu.style.backgroundColor = "#ededed";
  });
  item = document.querySelectorAll(".item");
  item.forEach(function(item) {
     item.style.backgroundColor = "#dbdbdb";
  });
  item_name = document.querySelectorAll(".item-name");
  item_name.forEach(function(text) {
     item_name.style.color = "#000";
  });
  text = document.querySelectorAll(".text");
  text.forEach(function(text) {
     text.style.color = "#000";
  });
}
