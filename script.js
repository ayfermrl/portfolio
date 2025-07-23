const aboutL=document.querySelector("#aboutl");
const projectL=document.querySelector("#projectl");
const contactL=document.querySelector("#contactl");
const aboutB=document.querySelector(".about");
const projectB=document.querySelector(".projects");
const contactB=document.querySelector(".contact");
const themebtn=document.querySelector("#themebtn")
const body=document.body
const top1=document.querySelector(".top1")
const heading=document.querySelector(".heading")
const linkedin=document.querySelector("#linkedin")
const diet=document.querySelector("#diet")


aboutL.addEventListener("click",function(){
aboutB.classList.add("shadow")
})

projectL.addEventListener("click",function(){
projectB.classList.add("shadow")
})

contactL.addEventListener("click",function(){
    contactB.classList.add("shadow")

})

window.addEventListener("scroll",function(){
const header=document.querySelector(".top1");
if(this.window.scrollY>10){
    header.classList.add("shrink")
}else{
    header.classList.remove("shrink")
}
})

themebtn.addEventListener("click",function(){
    body.classList.toggle("themebody")
    top1.classList.toggle("themetop1")
    heading.classList.toggle("themeheading")
    aboutL.classList.toggle("themeheading")
    projectL.classList.toggle("themeheading")
    contactL.classList.toggle("themeheading")
    aboutB.classList.toggle("themeabout")
    projectB.classList.toggle("themeabout")
    contactB.classList.toggle("themeabout")
    linkedin.classList.toggle("themeabout")
    diet.classList.toggle("themeabout")
    themebtn.classList.toggle("themeabout")
    .classList.toggle("themehover")



})
