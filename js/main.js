// scroll menu
var home = document.getElementById("home");
var homeMenu = document.getElementsByClassName("home")[0];
var navLink = document.getElementsByClassName("nav-link");
var navItem = document.getElementsByClassName("nav-item");

var service = document.getElementById("service");
var about = document.getElementById("about");
var gallery = document.getElementById("gallery");
var price = document.getElementById("price");
var contact = document.getElementById("contact");

for ( var i=0; i<navLink.length; i++ ){
	navLink[i].addEventListener("click", function(){
		var classes = this.className.split(" ")[1];
		var element = document.getElementById(classes);
		window.scroll({
	  		top: element.offsetTop, 
	  		left: 0, 
	   		behavior: 'smooth' 
 		})
	})
};
// hover activ menu link
window.addEventListener("scroll", function(){
		var wScroll = this.pageYOffset;
		if ( wScroll >= home.offsetTop  && wScroll < service.offsetTop ){
			navItem[0].classList.add("active");
		}else{
			navItem[0].classList.remove("active");
		};
		if ( wScroll >= service.offsetTop && wScroll < about.offsetTop ){
			navItem[1].classList.add("active");
		}else{
			navItem[1].classList.remove("active");
		};
		if ( wScroll >= about.offsetTop && wScroll < gallery.offsetTop ){
			navItem[2].classList.add("active");
		}else{
			navItem[2].classList.remove("active");
		};
		if ( wScroll >= gallery.offsetTop && wScroll < price.offsetTop ){
			navItem[3].classList.add("active");
		}else{
			navItem[3].classList.remove("active");
		};
		if ( wScroll >= price.offsetTop && wScroll < contact.offsetTop ){
			navItem[4].classList.add("active");
		}else{
			navItem[4].classList.remove("active");
		};
		if ( wScroll >= contact.offsetTop ){
			navItem[5].classList.add("active");
		}else{
			navItem[5].classList.remove("active");
		};
});
// light box - gallery
$(document).ready(function () {
	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});
// scroll top
var btnScrollTop = document.getElementById("btnScrollTop");
btnScrollTop.addEventListener("click",scrollTop)
window.addEventListener("scroll", runOnScroll);

function runOnScroll(){
	if ( window.scrollY  > 1000){
		btnScrollTop.style.opacity = "0.5";
		btnScrollTop.style.zIndex = "1";
		btnScrollTop.style.display = "block";
	}else{
		btnScrollTop.style.opacity = "0";
		btnScrollTop.style.zIndex = "-1";
		btnScrollTop.style.display = "none";
	}
}
function scrollTop(){
    var topTarget = document.getElementById("topTarget");
	topTarget.scrollIntoView({behavior: "smooth", block: "center", inline: "end"});
}
