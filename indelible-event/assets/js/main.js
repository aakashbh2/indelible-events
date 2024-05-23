! function(e) {
    "use strict";
    e(window).on("load", function() {
        function o() {
            e(window).width() <= 768 ? e(".navbar-collapse a").on("click", function() {
                e(".navbar-collapse").collapse("hide")
            }) : e(".navbar .navbar-inverse a").off("click")
        }
        e("#preloader").fadeOut(), e(window).on("scroll", function() {
            e(window).scrollTop() > 350 ? (e(".scrolling-navbar").addClass("top-nav-collapse"), e(".icon-bar").addClass("active-sc")) : (e(".scrolling-navbar").removeClass("top-nav-collapse"), e(".icon-bar").removeClass("active-sc"))
        }), e(".navbar-nav").onePageNav({
            currentClass: "active"
        }), o(), e(window).resize(o), new WOW({
            mobile: !1
        }).init();
        e(window).scroll(function() {
            e(this).scrollTop() > 200 ? e(".back-to-top").fadeIn(400) : e(".back-to-top").fadeOut(400)
        }), e(".back-to-top").on("click", function(o) {
            return o.preventDefault(), e("html, body").animate({
                scrollTop: 0
            }, 600), !1
        })
    })
}(jQuery), $(document).ready(function() {
    $('[data-fancybox="mygallery"]').fancybox({
        infobar: !1,
        loop: !0,
        buttons: ["share", "slideShow", "close"],
        slideShow: {
            autoStart: !0,
            speed: 3e3
        }
    })
}), $(document).ready(function() {
    $(".customer-logos").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 1500,
        arrows: !1,
        dots: !1,
        pauseOnHover: !0,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    })
}), $(document).ready(function() {
    $(".customer-testimony").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3500,
        arrows: !1,
        dots: !0,
        pauseOnHover: !0,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    })
}), $(document).ready(function() {
    $(".work-log").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 4500,
        arrows: !1,
        dots: !1,
        pauseOnHover: !1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    })
});
var count = 0;
$(window).scroll(function() {
    $(window).scrollTop() + $(window).height() > $(document).height() - 3e3 && 0 === count && (count = 1, $("#modalContactForm").modal("show"))
});
var config = {
    apiKey: "AIzaSyCiba1GcibtEq7dhyIrc7ncQVj1eQZPvBw",
    authDomain: "indelible-events.firebaseapp.com",
    databaseURL: "https://indelible-events.firebaseio.com",
    projectId: "indelible-events",
    storageBucket: "indelible-events.appspot.com",
    messagingSenderId: "682280791079"
};
firebase.initializeApp(config);
var messagesRef = firebase.database().ref("messages");

function validateForm() {
    var name = document.getElementById("name").value ? "name" : "modalName";
    var nameLabel = name === "name" ? "nameLabel" : "modalNameLabel";
    var email = document.getElementById("email").value ? "email" : "modalEmail";
    var emailLabel = email === "email" ? "emailLabel" : "modalEmailLabel";
    var subject = document.getElementById("subject").value ? "subject" : "modalSubject";
    var subjectLabel = subject === "subject" ? "subjectLabel" : "modalSubjectLabel";
    var message = document.getElementById("message").value ? "message" : "modalMessage";
    var messageLabel = message === "message" ? "messageLabel" : "modalMessageLabel";
    var e = document.getElementById(name).value,
        o = document.getElementById(email).value,
        t = document.getElementById(subject).value,
        n = document.getElementById(message).value;
    return "" == e || null == e ? (document.getElementById(nameLabel).innerHTML = "Please enter your name", document.getElementById(name).style.borderColor = "red", !1) : e.match(/^[a-zA-Z\s]*$/) ? "" == o || null == o ? (document.getElementById(emailLabel).innerHTML = "Please enter your email", document.getElementById(email).style.borderColor = "red", !1) : o.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? "" == t || null == t ? (document.getElementById(subjectLabel).innerHTML = "Please enter your phone number", document.getElementById(subject).style.borderColor = "red", !1) : t.match(/^[0-9]*$/) ? 10 != t.length ? (document.getElementById(subjectLabel).innerHTML = "Please enter your 10 digit phone number", document.getElementById(subject).style.borderColor = "red", !1) : (saveMessage(e, o, t, n), document.querySelector(".alert").style.display = "block", setTimeout(function() {
        document.querySelector(".alert").style.display = "none"
    }, 3e3), document.getElementById("contact-form").reset(), !0) : (document.getElementById(subjectLabel).innerHTML = "Please enter only numbers", document.getElementById(subject).style.borderColor = "red", !1) :
    (document.getElementById(emailLabel).innerHTML = "Please enter a valid email address", document.getElementById(email).style.borderColor = "red", !1) : (document.getElementById(nameLabel).innerHTML = "Please enter only letters", document.getElementById(name).style.borderColor = "red", !1)
}

function saveMessage(e, o, t, n) {
    messagesRef.push().set({
        name: e,
        email: o,
        phone: t,
        message: n
    })
}
var text = "";
var i;
for (i = 7; i < 168; i++) {
    text += "<a data-fancybox=\"mygallery\" href=\"assets/img/indelible-events-portfolio/image" + i + ".jpeg\"><img alt=\"Indelible Events portfolio\" data-src=\"assets/img/indelible-events-portfolio/image" + i + ".jpeg\" class=\"responsive\"></a>"
}
// document.getElementById("portfolio-images").innerHTML = text;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./service-worker.js')
           .then(function() { console.log('Service Worker Registered'); });
}

$('.lazy-image').each(function() {
	var imageDataSource = $(this).data('src').toString();
  var setImageSource = $(this).attr('src', imageDataSource);
});
