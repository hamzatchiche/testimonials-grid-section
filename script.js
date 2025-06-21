let tl=gsap.timeline({
    defaults:{duration:1.3, ease:"power3.out",opacity:0},
});
tl.from(".grid div",{
    stagger:0.4,
    x:-100,
    delay:0.4,
})