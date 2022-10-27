const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('footer');
const pheading = document.querySelector('.container');
const menu = document.querySelector('.menu , .menu li a');


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.style.background = '#cbc0d3';
        body.style.color = 'black';
        body.style.transition = '1s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

// 
function a(){
    if(confirm("Apakah ingin pesan?")){
        alert("pesanan anda telah di buat")
    }
    else{
        alert("membatalkan pesanan")
    }
}

// function zoomin() {
//     var GFG = document.getElementById("geeks");
//     var currWidth = GFG.clientWidth;
//     GFG.style.width = currWidth + 100 + "px";
//   }

//   function zoomout() {
//     var GFG = document.getElementById("geeks");
//     var currWidth = GFG.clientWidth;
//     GFG.style.width = currWidth - 100 + "px";
//   }
function zoomIn() {
    var pic = document.getElementById("geeks");
    var width = pic.clientWidth;
    pic.style.width = width + 100 + "px";
    }
function zoomOut() {
var pic = document.getElementById("geeks");
var width = pic.clientWidth;
pic.style.width = width - 100 + "px";
}

const newspaperSpinning = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const newspaperTiming = {
    duration: 2000,
    iterations: 1,
  }
  
  const newspaper = document.querySelector(".newspaper");
  
  newspaper.addEventListener('click', () => {
    newspaper.animate(newspaperSpinning, newspaperTiming);
  });

