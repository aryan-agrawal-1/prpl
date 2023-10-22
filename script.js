
// Opens the modals in the work section

function openModal(id){
    document.getElementById(id + 'img').style.display = "none";
    document.getElementById(id).style.display = "block";
    document.getElementById(id + "p").style.display = "block";
    document.getElementById(id + "heading").style.display = "block";
    document.getElementById(id + "Border").style.borderRadius = "3.8vh";
    document.getElementById(id + "Border").style.borderWidth = "5px 5px 5px 5px";
    window.location.href = "#" + id;
    document.getElementById(id + 'imgSmall').style.display = "inline";
    document.getElementById(id + 'visit').style.display = "inline";
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
observer.observe(document.querySelector('#TwoBorder'));