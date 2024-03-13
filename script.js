 var cr = document.querySelector("#cru")
 var bu = document.querySelector("#blur")

document.addEventListener("mousemove",function(dets){
    cr.style.left = dets.x + "px";
    cr.style.top = dets.y + "px";
    bu.style.left = dets.x -130 + "px";
    bu.style.top = dets.y -150 + "px";
    

});


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:"0.5",
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:"ture",
        start:'top -75% ',
        end:"top -17%",
        scrub:"ture"

    

    }
})
gsap.to("#page2",{
    backgroundColor:'black',
//  transition:`(0.77, 0, 0.175, 1)2s,`,
    duration:'0.5',
    scrollTrigger:{
        trigger:'#page2',
        scroller:'body',
        // markers: 'ture',
        start:'top 10%',
        end: 'top 12%',
        scrub:true,

    }



})
gsap.from("#img1",{
    // x:"100",
    opacity:'0',
    duration:'1'

});
 
gsap.to("#col",{
    x:40,
    y:20,
    duration:2,
    // transition:"all ease 1s",
    scrollTrigger:{
        trigger:"#colan",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        toggleActions: "play restart play reverse",
        // pin:true,
        // scrub:0.25,
        
    }
    
})
gsap.to("#coll",{
    x:-40,
    y:-20,
    duration:2,
    // transition:"all ease 4s",
    scrollTrigger:{
        trigger:"#colan",
        toggleActions:"play restart play reverse",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        
    
        // scrub:0.25,
    }
    })

    gsap.to("#last>h1",{
    y:-18,
    duration: 2,
    scrollTrigger:{
        trigger:"#last",
        toggleActions:"play restart play reverse",
        scroller:"body",
        markers:"true",
        start: "top 85%",

    }
    })

