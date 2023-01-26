let info = document.querySelector('.card-body');
let card = document.querySelector('.card')
let test = document.querySelector('img-plan');

console.log(info);


info.addEventListener("mouseover", function(event) {
  // card.style. backgroundColor= 'linear-gradient(to bottom, rgba(107, 4, 111, 0.5), rgb(116, 118, 218))';
  card.style.filter = 'blur(6px)';
  info.style.color = '#000';
  info.style.fontWeight = 'bold';
  card.style.transform= 'translateY(20px)';
  // // info.style.fontSize = '1.5em'
  // // info.style.backgroundColor= '#ECE9E6'
  // // info.style.padding = '10px';
  // // info.style.border = 'solid 2px'
  // info.style.borderRadius = '6px';
});

info.addEventListener("mouseout", function (e) {
  card.style.filter = 'none';
  info.style.color = '#fff';
  info.style.fontWeight = 'regular';
  info.style.padding = '0px';
  info.style.border = 'none';
  info.style.backgroundColor= 'transparent';
})
