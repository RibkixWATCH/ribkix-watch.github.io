function darktheme() {
  document.querySelector(".navbar").classList.remove("navbar-light");
  document.querySelector(".navbar").classList.add("navbar-dark");
  document.querySelector(".navbar-logo").src = "https://media.discordapp.net/attachments/651020737540259844/699701388849971282/Ribkix_WATCH_Logo_white.png";
  document.body.style.backgroundColor = "#101010";
}

function lighttheme() {
  document.querySelector(".navbar").classList.remove("navbar-dark");
  document.querySelector(".navbar").classList.add("navbar-light");
  document.querySelector(".navbar-logo").src = "https://media.discordapp.net/attachments/651020737540259844/699622764721733754/Ribkix_WATCH_Logo.png";
  document.body.style.backgroundColor = "#fff";
}
