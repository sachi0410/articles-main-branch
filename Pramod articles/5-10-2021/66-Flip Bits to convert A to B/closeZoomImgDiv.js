let zoomImgDiv = document.querySelector(".imgZoomDiv");
let zoomImgDivCloseBtn = document.querySelector(".imgZoomDivCloseBtn i");
let zoomImgDivImg = document.querySelector(".imgZoomDivImg img");
let allImgTagsInArticle = document.querySelectorAll(".img img");
let wrapper = document.querySelector(".wrapper")
let quesDivBtn = document.querySelector(".questionLogo");
let quesDiv = document.querySelector(".ques-info");

quesDivBtn.addEventListener("mousemove",function(){
    
    quesDiv.style.display= "block"
})

quesDivBtn.addEventListener("mouseout",function(){
    quesDiv.style.display= "none"
})


zoomImgDivCloseBtn.addEventListener("click",function(){
    zoomImgDiv.style.display = "none";
})
console.log(allImgTagsInArticle.length)

for(let i=0;i<allImgTagsInArticle.length;i++){

    allImgTagsInArticle[i].addEventListener("click", function(){
        if(window.innerWidth>900){
            zoomImgDivImg.src = allImgTagsInArticle[i].src
            zoomImgDiv.style.display = "block";
            zoomImgDivImg.classList.add("easeIn")
        }
    })

}

window.addEventListener("scroll",function(e){
    if((this.window.innerHeight * 0.8)>this.window.scrollY){
        quesDivBtn.style.display = "none"
    }else if(this.window.innerWidth>900){
        quesDivBtn.style.display = "flex"
        
    }
})


