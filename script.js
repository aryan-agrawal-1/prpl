
// Opens the modals in the work section

function openModal(id){
    document.getElementById(id + 'img').style.display = "none";
    document.getElementById(id).style.display = "block";
    document.getElementById(id + "p").style.display = "block";
    document.getElementById(id + "text").style.display = "block";
    document.getElementById(id + "heading").style.display = "block";
    document.getElementById(id + "Border").style.borderRadius = "3.8vh";
    document.getElementById(id + "Border").style.borderWidth = "5px 5px 5px 5px";
    document.getElementById(id + "Border").style.justifyContent = "space-evenly";
    document.getElementById(id + "Border").style.width = "68vw";
    window.location.href = "#" + id;
    document.getElementById(id + 'imgSmall').style.display = "inline";
    document.getElementById(id + 'visit').style.display = "inline";
    document.getElementById(id + 'Close').style.visibility = "visible";
}

// close the modals in the work section
function closeModal(id){
    document.getElementById(id + "Border").style.width = "100vw";
    document.getElementById(id + "Border").style.transition = "0s";
    document.getElementById(id + "Close").style.transition = "0s";
    document.getElementById(id + 'img').style.display = "inline";
    document.getElementById(id + "text").style.display = "none";
    document.getElementById(id).style.display = "flex";
    document.getElementById(id + "p").style.display = "none";
    document.getElementById(id + "heading").style.display = "none";
    document.getElementById(id + "Border").style.borderRadius = "0";
    document.getElementById(id + "Border").style.borderWidth = "0px 0px 0px 0px";
    document.getElementById(id + 'imgSmall').style.display = "none";
    document.getElementById(id + 'visit').style.display = "none";
    document.getElementById(id + 'Close').style.visibility = "hidden";
    document.getElementById(id + "Border").style.justifyContent = "center";
}


// opens menu modal
function openMenu(){
    document.getElementById("modal").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("html").style.overflow = "hidden";

}

function closeMenu(){
    document.getElementById("html").style.overflow = "scroll";
    document.getElementById("modal").style.display = "none";
    document.getElementById("menu").style.display = "block";
}


// Typewriting effect for the title
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #8119e878}";
    document.body.appendChild(css);
};


// show social links

function show(id){
    document.getElementById(id).style.fontSize = "0.8vw";
};

function hide(id){
    document.getElementById(id).style.fontSize = "0vw";
};



// Animate Work Section on scroll

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // if the element is visible
        if(entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('transition');
        }
    });
});

observer.observe(document.querySelector('#flowmodoroBorder'));
observer.observe(document.querySelector('#mcoachBorder'));



// const observer2 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const whatWeDo = entry.target.querySelectorAll('.what-we-do');
//       const struct = entry.target.querySelectorAll('.struct');
//       const title = entry.target.querySelectorAll('.section-title');
//       const para = entry.target.querySelectorAll('.section-para');
//       const codingIcon = entry.target.querySelector('#coding-icon');
//       const designIcon = entry.target.querySelector('#design-icon');
  
//       if (entry.isIntersecting) {
//         setTimeout(function() {
//             for (let i = 0; i < 2; i++) {
//                 struct[i].classList.add('after-animate-struct');
//                 title[i].classList.add('h1-after-animation');
//                 para[i].classList.add('p-after-animate');
//                 whatWeDo[i].classList.add('what-we-do-after');
//             }
//             designIcon.classList.add('design-icon-after');
//             codingIcon.classList.add('coding-icon-after');
//             return; // if we added the class, exit the function
//         }, 300)
//       }
  
//       // We're not intersecting, so remove the class!
//       for (let i = 0; i < 2; i++) {
//         whatWeDo[i].classList.remove('what-we-do-after');
//         struct[i].classList.remove('after-animate-struct');
//         title[i].classList.remove('h1-after-animation');
//         para[i].classList.remove('p-after-animate');
//       }

//       codingIcon.classList.remove('coding-icon-after');
//       designIcon.classList.remove('design-icon-after');
//     });
//   });
  
//   observer2.observe(document.querySelector('#about-us'));