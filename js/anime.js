gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline();
tl

.from('.logo', .6,{
    
    y:-50,
    opacity:0,
})
.from('nav ul li', .6, {
    
    y:-50,
    opacity:0,
    stagger:.2
})
.from('.first-screen__title .word', 1, {
    
    opacity:0, y:100, stagger:0.1
    
})
.from('.first-screen__btns', .6, {
    
    y:150,
    opacity:0
})

gsap.from('.about__title .word',1,{
    scrollTrigger:{
        trigger:'.about',
        start:'top 80%',
        end:'70% 80%',
        toggleActions:'play none none none'
    },
    opacity:0, yPercent:100, stagger:0.3, 
})
gsap.from('.industry__title .word',1,{
    scrollTrigger:{
        trigger:'.industry',
        start:'top 80%',
        end:'70% 80%',
        toggleActions:'play none none none'
    },
    opacity:0, yPercent:100, stagger:0.3, 
})
gsap.from('.industry__inner .industry__item',1,{
    scrollTrigger:{
        trigger:'.industry__inner',
        start:'top 70%',
        end:'100% 100%',
        toggleActions:'play none none none',
    },
    opacity:0, yPercent:100, stagger:0.15, 
})
gsap.from('.complex__title .word',1,{
    scrollTrigger:{
        trigger:'.complex',
        start:'top 80%',
        end:'70% 80%',
        toggleActions:'play none none none'
    },
    opacity:0, yPercent:100, stagger:0.3, 
})
gsap.from('.complex__inner .complex__item',1,{
    scrollTrigger:{
        trigger:'.complex',
        start:'top 70%',
        end:'100% 100%',
        toggleActions:'play none none none',
    },
    opacity:0, yPercent:100, stagger:0.2,
})
gsap.from('.news__title .word',1,{
    scrollTrigger:{
        trigger:'.news',
        start:'top 80%',
        end:'70% 80%',
        toggleActions:'play none none none'
    },
    opacity:0, yPercent:100, stagger:0.3, 
})
gsap.from('.news__wrapper .news__slide',1,{
    scrollTrigger:{
        trigger:'.news',
        start:'top 70%',
        end:'100% 100%',
        toggleActions:'play none none none',
    },
    opacity:0, yPercent:100, stagger:0.2,
})
gsap.from('.clients__title .word',1,{
    scrollTrigger:{
        trigger:'.clients',
        start:'top 80%',
        end:'70% 80%',
        toggleActions:'play none none none',
        scrub:true
    },
    opacity:0, yPercent:100, stagger:0.3, 
})
gsap.from('.clients__inner .clients__item',1,{
    scrollTrigger:{
        trigger:'.clients',
        start:'top 70%',
        end:'100% 100%',
        toggleActions:'play none none none',
    },
    opacity:0, yPercent:100, stagger:0.1,
})
gsap.from('.contacts__title .word',1,{
    scrollTrigger:{
        trigger:'.contacts',
        start:'top 80%',
        end:'70% 80%',
        toggleActions:'play none none none'
    },
    opacity:0, yPercent:100, stagger:0.3, 
})
gsap.from('.contacts__container',1,{
    scrollTrigger:{
        trigger:'.contacts',
        start:'top 80%',
        end:'70% 80%',
        toggleActions:'play none none none'
    },
    opacity:0, yPercent:100, stagger:0.4, 
})
gsap.from('.video__item',1,{
    scrollTrigger:{
        trigger:'.video',
        start:'top 80%',
        end:'70% 80%',
        toggleActions:'play none none none',
    },
    opacity:0, yPercent:100, stagger:0.4, 
})
gsap.from('.citatata__container',1,{
    scrollTrigger:{
        trigger:'.citatata',
        start:'top 80%',
        end:'70% 80%',
        toggleActions:'play none none none',
    },
    opacity:0, yPercent:100, stagger:0.4, 
})
gsap.from('.dvigatel__container',1,{
    scrollTrigger:{
        trigger:'.dvigatel',
        start:'top 80%',
        end:'70% 80%',
        toggleActions:'play none none none',
    },
    opacity:0, yPercent:100, stagger:0.4, 
})