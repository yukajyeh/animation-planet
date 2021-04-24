const eyesTimeline = gsap.timeline({
    repeat : -1
})

const eyeballs = document.querySelectorAll('path#ball, path#ball_2, path#ball_3, path#ball_4, path#ball_5, path#ball_6')

eyesTimeline
    .set(eyeballs, { y : 0 })
    .to(eyeballs, { y : 7, duration: 0.25, dealy: 2, stagger: 0.25  })
    .to(eyeballs, { y: 0, duration: 4 })

const hatTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 4
})

const hat = document.querySelector('g#hat')

hatTimeline
    .set(hat, { y:0 })
    .to(hat, { y: -50, rotation: -10, duration: 0.25, delay: 1 })
    .to(hat, { y: 0, rotation:0, duration: 0.5, delay: 0.1 })

const leftArmTimeline = gsap.timeline({
    repeat: -1
})

const leftArm = document.querySelector('#left-arm')

leftArmTimeline
    .set(leftArm, { rotation:0 })
    .to(leftArm, { rotation:20, duration:0.25, delay:2 })
    .to(leftArm, { rotation:0, duration:0.25, delay:2 })


const rightArmTimeline = gsap.timeline({
    repeat: -1
})

const rightArm = document.querySelector('#right-arm')

rightArmTimeline
    .set(rightArm, { rotation:0 })
    .to(rightArm, { rotation:-20, duration:0.25, delay:3 })
    .to(rightArm, { rotation:0, duration:0.25, delay:2 })

const tvTimeline = gsap.timeline({
    repeat: -1
})

const tvLight = document.querySelector("g#tv-light")

let o = 0.75

tvTimeline
    .set(tvLight, { opacity:o })
    .to(tvLight, { opacity: 1, duration:1, delay: 0.5 })
    .to(tvLight, { opacity: o })
    .to(tvLight, { opacity:1, duration:0.4, delay: 0.5 })
    .to(tvLight, { opacity: o })


const label = document.querySelector("div.label")
const links = document.querySelectorAll('svg a')

links.forEach(link => {

    link.addEventListener("mouseenter", function(){
        label.classList.add("is-visible")
        label.innerHTML = link.getAttribute("data-label")
    })

    link.addEventListener("mouseleave", function() {
        label.classList.remove("is-visible")
        label.innerHTML = "Label"
    })
})

document.addEventListener("mousemove", function(event) {
    label.style.left = event.clientX + "px"
    label.style.top = event.clientY + "px" 
})