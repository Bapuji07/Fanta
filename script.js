var tl=gsap.timeline({scrollTrigger:{
trigger:".sec-two",
start:"0% 90%",
end:"50% 50%",
// markers:true,
scrub:true,
}})

tl.to("#fanta",{
top:"120%",
left:"9%",
},'orangeSlice')

tl.to("#orangeSlice",{
    width:"50%",
top:"100%",
left:"2%",
},'orangeSlice')

tl.to("#orange",{
    width:"15%",
top:"170%",
left:"80%",
},'orangeSlice')

tl.to("#leaf",{
    rotate:"110%",
top:"110%",
left:"50%",
},'orangeSlice')

tl.to("#leaf2",{
    rotate:"100deg",
top:"100%",
left:"30%",
},'orangeSlice')

var tl1=gsap.timeline({scrollTrigger:{
    trigger:".sec-three",
    start:"0% 90%",
    end:"50% 50%",
    markers:true,
    scrub:true,
    }})
    tl1.to("#fanta",{
        top:"232%",
        left:"32%",
    },'orangeSlice')

    tl1.to("#orangeSlice",{
        width:"30%",
        top:"200%",
        left:"35%",
    },'orangeSlice')

    tl1.to("#leaf2",{
        rotate:"120deg",
        top:"150%",
        left:"20%",
    },'orangeSlice')

    tl1.from("#sprite",{
        rotate:"-90deg",
        top:"150%",
        left:"-50%",
    },'fanta')

    tl1.from(".lemon1",{
        rotate:"-90deg",
        top:"150%",
    },'fanta')

    tl1.from("#cococola",{
        rotate:"90deg",
        top:"150%",
        right:"-50%",
    },'fanta')

    tl1.from(".lemon2",{
        rotate:"-90deg",
        top:"150%",
    },'fanta')