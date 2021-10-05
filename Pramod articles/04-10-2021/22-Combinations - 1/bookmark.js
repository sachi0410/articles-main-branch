let bookmarksBtn = document.querySelectorAll(".bookmark i");
let bookmarksDiv = document.querySelector(".bookmarkWrapper");

bookmarksBtn[0].addEventListener("click",function(){
    bookmarksBtn[0].style.display = "none"
    bookmarksBtn[1].style.display = "block"
    bookmarksDiv.classList.add("zoomInAndOut");
})

bookmarksBtn[1].addEventListener("click",function(){
    bookmarksBtn[1].style.display = "none"
    bookmarksBtn[0].style.display = "block"
    bookmarksDiv.classList.remove("zoomInAndOut");
})
