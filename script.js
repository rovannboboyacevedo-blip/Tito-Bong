/*==================================================
        EMERALD INVITATION
        VERSION 2
        SCRIPT.JS - PART 1
==================================================*/

/*=========================================
PRELOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "opacity .8s ease";

        setTimeout(() => {

            loader.style.display = "none";

        },800);

    },1800);

});

/*=========================================
AOS INITIALIZE
=========================================*/

AOS.init({

    duration:1000,

    once:true,

    easing:"ease-in-out"

});

/*=========================================
GSAP
=========================================*/

gsap.registerPlugin(ScrollTrigger);

/*=========================================
ELEMENTS
=========================================*/

const opening =
document.getElementById("opening");

const mainContent =
document.getElementById("mainContent");

const openBtn =
document.getElementById("openInvitation");

const letter =
document.querySelector(".letter");

const envelope =
document.querySelector(".envelope");

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

/*=========================================
INITIAL STATE
=========================================*/

mainContent.style.display="none";

music.volume=.35;

/*=========================================
OPEN INVITATION
=========================================*/

openBtn.addEventListener("click",()=>{

    gsap.to(letter,{

        y:-170,

        duration:1,

        ease:"power3.out"

    });

    gsap.to(".seal",{

        scale:0,

        duration:.45,

        delay:.2

    });

    gsap.to(".envelope-front",{

        rotationX:-180,

        transformOrigin:"top",

        duration:1,

        ease:"power2.inOut"

    });

    setTimeout(()=>{

        gsap.to("#opening",{

            opacity:0,

            duration:1

        });

        setTimeout(()=>{

            opening.style.display="none";

            mainContent.style.display="block";

            gsap.from("#hero",{

                opacity:0,

                y:60,

                duration:1.2,

                ease:"power3.out"

            });

        },900);

    },1500);

    music.play().catch(()=>{});

});

/*=========================================
HERO ANIMATION
=========================================*/

window.addEventListener("load",()=>{

    gsap.from(".hero-image",{

        x:-120,

        opacity:0,

        duration:1.4,

        delay:.3

    });

    gsap.from(".hero-content > *",{

        y:40,

        opacity:0,

        duration:1,

        stagger:.15,

        delay:.7

    });

});

/*=========================================
MUSIC BUTTON
=========================================*/

let playing=true;

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML=

        '<i class="fa-solid fa-volume-xmark"></i>';

    }

    else{

        music.play();

        musicBtn.innerHTML=

        '<i class="fa-solid fa-music"></i>';

    }

    playing=!playing;

});

/*=========================================
MUSIC BUTTON ANIMATION
=========================================*/

gsap.to("#musicBtn",{

    y:-8,

    repeat:-1,

    yoyo:true,

    duration:1.2,

    ease:"sine.inOut"

});

/*=========================================
OPEN BUTTON HOVER
=========================================*/

openBtn.addEventListener("mouseenter",()=>{

    gsap.to(openBtn,{

        scale:1.06,

        duration:.25

    });

});

openBtn.addEventListener("mouseleave",()=>{

    gsap.to(openBtn,{

        scale:1,

        duration:.25

    });

});

/*=========================================
SHIMMER EFFECT
=========================================*/

gsap.to(".number60",{

    backgroundPosition:"300% 0",

    duration:6,

    repeat:-1,

    ease:"none"

});

/*=========================================
HERO FLOAT
=========================================*/

gsap.to(".hero-image img",{

    y:-12,

    repeat:-1,

    yoyo:true,

    duration:3,

    ease:"sine.inOut"

});

/*=========================================
SCROLL REVEAL
=========================================*/

gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section,{

        scrollTrigger:{

            trigger:section,

            start:"top 80%"

        },

        y:60,

        opacity:0,

        duration:1

    });

});

/*==================================================
        EMERALD INVITATION
        VERSION 2
        SCRIPT.JS - PART 2
==================================================*/

/*=========================================
COUNTDOWN
=========================================*/

// Change this to your actual event date
const eventDate = new Date(
    "August 7, 2026 18:30:00"
).getTime();

const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    if(distance <= 0){

        dayEl.textContent = "00";
        hourEl.textContent = "00";
        minuteEl.textContent = "00";
        secondEl.textContent = "00";

        return;

    }

    const days = Math.floor(
        distance / (1000*60*60*24)
    );

    const hours = Math.floor(
        (distance % (1000*60*60*24))
        /(1000*60*60)
    );

    const minutes = Math.floor(
        (distance % (1000*60*60))
        /(1000*60)
    );

    const seconds = Math.floor(
        (distance % (1000*60))
        /1000
    );

    dayEl.textContent =
    String(days).padStart(2,"0");

    hourEl.textContent =
    String(hours).padStart(2,"0");

    minuteEl.textContent =
    String(minutes).padStart(2,"0");

    secondEl.textContent =
    String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

/*=========================================
FLOATING SPARKLES
=========================================*/

const sparkleContainer =
document.getElementById("sparkles");

function createSparkle(){

    const sparkle =
    document.createElement("span");

    sparkle.className = "sparkle";

    sparkle.style.left =
    Math.random()*100+"vw";

    sparkle.style.top =
    Math.random()*100+"vh";

    sparkle.style.animationDuration =
    2 + Math.random()*3 + "s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },5000);

}

setInterval(createSparkle,350);

/*=========================================
FLOATING BALLOONS
=========================================*/

const balloonContainer =
document.getElementById("balloons");

const balloonColors = [

    "green-balloon",

    "gold-balloon",

    "sage-balloon"

];

function createBalloon(){

    const balloon =
    document.createElement("div");

    balloon.classList.add("balloon");

    balloon.classList.add(

        balloonColors[
            Math.floor(
                Math.random()*
                balloonColors.length
            )
        ]

    );

    balloon.style.left =
    Math.random()*100+"vw";

    balloon.style.animationDuration =
    10 + Math.random()*8 + "s";

    balloon.style.opacity =
    .15 + Math.random()*.25;

    balloonContainer.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },18000);

}

setInterval(createBalloon,1800);

/*=========================================
FALLING LEAVES
=========================================*/

const particleContainer =
document.getElementById("particles");

const leaves = [

    "🍃",

    "🌿",

    "🍀"

];

function createLeaf(){

    const leaf =
    document.createElement("span");

    leaf.className="leaf";

    leaf.innerHTML=

    leaves[
        Math.floor(
            Math.random()*
            leaves.length
        )
    ];

    leaf.style.left=
    Math.random()*100+"vw";

    leaf.style.fontSize=
    18 + Math.random()*16 + "px";

    leaf.style.animationDuration=
    8 + Math.random()*8 + "s";

    particleContainer.appendChild(leaf);

    setTimeout(()=>{

        leaf.remove();

    },16000);

}

setInterval(createLeaf,700);

/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progress =
document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const totalHeight=

    document.documentElement.scrollHeight-

    document.documentElement.clientHeight;

    const progressValue=

    (window.scrollY/totalHeight)*100;

    progress.style.width=

    progressValue+"%";

});

/*=========================================
BACK TO TOP
=========================================*/

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>600){

        backToTop.style.display="flex";

    }else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

gsap.from("#backToTop",{

    scale:0,

    duration:.6,

    ease:"back.out(1.8)"

});

/*==================================================
        EMERALD INVITATION
        VERSION 2
        SCRIPT.JS - PART 3
==================================================*/

/*=========================================
GALLERY LIGHTBOX
=========================================*/

const galleryItems =
document.querySelectorAll(".gallery-item img");

const galleryModal =
document.getElementById("galleryModal");

const modalImage =
document.getElementById("modalImage");

const closeGallery =
document.getElementById("closeGallery");

galleryItems.forEach(image=>{

    image.addEventListener("click",()=>{

        modalImage.src=image.src;

        galleryModal.style.display="flex";

        gsap.fromTo(

            "#modalImage",

            {
                scale:.75,
                opacity:0
            },

            {
                scale:1,
                opacity:1,
                duration:.45,
                ease:"power2.out"
            }

        );

    });

});

closeGallery.addEventListener("click",()=>{

    galleryModal.style.display="none";

});

galleryModal.addEventListener("click",(e)=>{

    if(e.target===galleryModal){

        galleryModal.style.display="none";

    }

});

/*=========================================
PARALLAX HERO
=========================================*/

window.addEventListener("scroll",()=>{

    const scroll=window.scrollY;

    const hero=document.getElementById("hero");

    if(hero){

        hero.style.backgroundPositionY=
        scroll*.35+"px";

    }

});

/*=========================================
MOUSE GLOW
=========================================*/

const glow=document.createElement("div");

glow.id="mouseGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

/*=========================================
SECTION ANIMATIONS
=========================================*/

gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section.querySelectorAll("h1,h2,h3,p,img,.detail-card,.timeline-item,.gallery-item"),{

        scrollTrigger:{
            trigger:section,
            start:"top 80%"
        },

        opacity:0,

        y:40,

        duration:.8,

        stagger:.08

    });

});

/*=========================================
SMOOTH NAVIGATION
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================
CONFETTI
=========================================*/

function createConfetti(){

    const confetti=document.createElement("span");

    confetti.innerHTML="🎉";

    confetti.style.position="fixed";

    confetti.style.left=
    Math.random()*100+"vw";

    confetti.style.top="-30px";

    confetti.style.fontSize=
    (18+Math.random()*20)+"px";

    confetti.style.pointerEvents="none";

    confetti.style.zIndex="9999";

    document.body.appendChild(confetti);

    gsap.to(confetti,{

        y:window.innerHeight+120,

        rotation:720,

        x:(Math.random()*300)-150,

        duration:4,

        ease:"power1.out",

        onComplete(){

            confetti.remove();

        }

    });

}

let celebrationPlayed=false;

ScrollTrigger.create({

    trigger:"#thankyou",

    start:"top center",

    once:true,

    onEnter(){

        if(celebrationPlayed) return;

        celebrationPlayed=true;

        for(let i=0;i<70;i++){

            setTimeout(createConfetti,i*60);

        }

    }

});

/*=========================================
PAGE FADE
=========================================*/

gsap.from("body",{

    opacity:0,

    duration:1

});

/*=========================================
WINDOW RESIZE
=========================================*/

window.addEventListener("resize",()=>{

    ScrollTrigger.refresh();

});

/*=========================================
FINAL INITIALIZATION
=========================================*/

console.log(

"%c Emerald Invitation Loaded",

"color:#1B5E20;font-size:18px;font-weight:bold;"

);

console.log(

"Designed with ❤️ using HTML, CSS, GSAP & JavaScript."

);

/*==================================================
                END OF SCRIPT
==================================================*/