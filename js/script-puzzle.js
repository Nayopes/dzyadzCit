$('#nextGameQuiz').on('click' , function(){
    // $('#quiz').slideUp();
    $('#quiz').css('display' , 'none');

    // $('#colors').slideDown();
    $('#colors').css('display' , 'flex');
    let wCount = 4;
    let hCount = 3;
    let bHeight = 185;
    let bWidth = 198;
    let mainDiv = document.getElementById('main1')
    for (let i = 0; i < wCount * hCount; i++) {
        let a = createBox(bHeight, bWidth , i);
        mainDiv.appendChild(a);
        a.setAttribute('class', 'puzzleItem')
        a.onmouseout = function () {
            a.style.background = setRandomColor(this);
            let puzzleItem = document.getElementsByClassName('puzzleItem');
            let arr = Array.from(puzzleItem)

if(arr.every(el=>el.style.visibility === 'hidden')){
    $('#pdf').css('visibility' , 'visible')
}
        }
    }
    document.getElementById('giftBg').appendChild(mainDiv);


// document.querySelector(".ref").onclick = function () {
//     location.reload();
// }

function createBox(h, w , img) {
    let div = document.createElement("div");
    div.style.height = h + "px";
    div.style.width = w + "px";
    div.style.border = "4px solid #6DB6BF";
    div.style.boxSizing = "border-box";
    div.style.background = "white";
    div.innerHTML = `<img src="images/nk${img}.png">`;

    return div;
}

function setRandomColor(a) {
    console.log(a);
    return a.style.visibility = "hidden";
}
})


   