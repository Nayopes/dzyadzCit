// TIC TAC TOE
const boxes = document.getElementsByClassName('box');
const container = document.getElementById('gridContainer');
const popup = document.getElementById("popup");
const newGame = document.getElementById("newGame");
let isPlayer = true;
const x = '<img src="./images/X.png">';
const o = '<img src="./images/O.png">';


let numberOfbox = 3;;

function randomItem(a) {
    return Math.floor(Math.random() * a);
}
let random = randomItem(boxes.length)


for (i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        if (this.innerHTML === '') {
            if (isPlayer) {
                this.innerHTML = x;
                isPlayer = false;
                checkHorizontalWin();
                checkVerticalWin();
                checkLeftDiagonal();
                checkRightDiagonal();
                setTimeout(() => {

                    function randomItem(a) {
                        return Math.floor(Math.random() * a);
                    }
                    let arr = Array.from(boxes);
                    let filtered = arr.filter(el => el.innerHTML === '');
                    random = randomItem(filtered.length);
                    // horizontal win
                    if (arr[0].innerHTML === o && arr[1].innerHTML === o && arr[2].innerHTML === '') {
                        arr[2].innerHTML = o
                    } else if (arr[1].innerHTML === o && arr[2].innerHTML === o && arr[0].innerHTML === '') {
                        arr[0].innerHTML = o
                    } else if (arr[0].innerHTML === o && arr[2].innerHTML === o && arr[1].innerHTML === '') {
                        arr[1].innerHTML = o
                    }

                    else if (arr[3].innerHTML === o && arr[4].innerHTML === o && arr[5].innerHTML === '') {
                        arr[5].innerHTML = o
                    } else if (arr[3].innerHTML === o && arr[5].innerHTML === o && arr[4].innerHTML === '') {
                        arr[4].innerHTML = o
                    } else if (arr[4].innerHTML === o && arr[5].innerHTML === o && arr[3].innerHTML === '') {
                        arr[3].innerHTML = o
                    }

                    else if (arr[6].innerHTML === o && arr[7].innerHTML === o && arr[8].innerHTML === '') {
                        arr[8].innerHTML = o
                    } else if (arr[6].innerHTML === o && arr[8].innerHTML === o && arr[7].innerHTML === '') {
                        arr[7].innerHTML = o
                    } else if (arr[7].innerHTML === o && arr[8].innerHTML === o && arr[6].innerHTML === '') {
                        arr[6].innerHTML = o
                    }


                    //vertical win
                    else if (arr[0].innerHTML === o && arr[3].innerHTML === o && arr[6].innerHTML === '') {
                        arr[6].innerHTML = o
                    } else if (arr[3].innerHTML === o && arr[6].innerHTML === o && arr[0].innerHTML === '') {
                        arr[0].innerHTML = o
                    } else if (arr[0].innerHTML === o && arr[6].innerHTML === o && arr[3].innerHTML === '') {
                        arr[3].innerHTML = o
                    }

                    else if (arr[1].innerHTML === o && arr[4].innerHTML === o && arr[7].innerHTML === '') {
                        arr[7].innerHTML = o
                    } else if (arr[1].innerHTML === o && arr[7].innerHTML === o && arr[4].innerHTML === '') {
                        arr[4].innerHTML = o
                    } else if (arr[4].innerHTML === o && arr[7].innerHTML === o && arr[1].innerHTML === '') {
                        arr[1].innerHTML = o
                    }

                    else if (arr[2].innerHTML === o && arr[5].innerHTML === o && arr[8].innerHTML === '') {
                        arr[8].innerHTML = o
                    } else if (arr[2].innerHTML === o && arr[8].innerHTML === o && arr[5].innerHTML === '') {
                        arr[5].innerHTML = o
                    } else if (arr[5].innerHTML === o && arr[8].innerHTML === o && arr[2].innerHTML === '') {
                        arr[2].innerHTML = o
                    }

                    //diagonal win
                    else if (arr[0].innerHTML === o && arr[4].innerHTML === o && arr[8].innerHTML === '') {
                        arr[8].innerHTML = o
                    } else if (arr[4].innerHTML === o && arr[8].innerHTML === o && arr[0].innerHTML === '') {
                        arr[0].innerHTML = o
                    } else if (arr[8].innerHTML === o && arr[0].innerHTML === o && arr[4].innerHTML === '') {
                        arr[4].innerHTML = o
                    }

                    else if (arr[2].innerHTML === o && arr[4].innerHTML === o && arr[6].innerHTML === '') {
                        arr[6].innerHTML = o
                    } else if (arr[4].innerHTML === o && arr[6].innerHTML === o && arr[2].innerHTML === '') {
                        arr[2].innerHTML = o
                    } else if (arr[6].innerHTML === o && arr[2].innerHTML === o && arr[4].innerHTML === '') {
                        arr[4].innerHTML = o
                    }


                    // horizontal protect
                    else if (arr[0].innerHTML === x && arr[1].innerHTML === x && arr[2].innerHTML === '') {
                        arr[2].innerHTML = o
                    } else if (arr[1].innerHTML === x && arr[2].innerHTML === x && arr[0].innerHTML === '') {
                        arr[0].innerHTML = o
                    } else if (arr[0].innerHTML === x && arr[2].innerHTML === x && arr[1].innerHTML === '') {
                        arr[1].innerHTML = o
                    }

                    else if (arr[3].innerHTML === x && arr[4].innerHTML === x && arr[5].innerHTML === '') {
                        arr[5].innerHTML = o
                    } else if (arr[3].innerHTML === x && arr[5].innerHTML === x && arr[4].innerHTML === '') {
                        arr[4].innerHTML = o
                    } else if (arr[4].innerHTML === x && arr[5].innerHTML === x && arr[3].innerHTML === '') {
                        arr[3].innerHTML = o
                    }

                    else if (arr[6].innerHTML === x && arr[7].innerHTML === x && arr[8].innerHTML === '') {
                        arr[8].innerHTML = o
                    } else if (arr[6].innerHTML === x && arr[8].innerHTML === x && arr[7].innerHTML === '') {
                        arr[7].innerHTML = o
                    } else if (arr[7].innerHTML === x && arr[8].innerHTML === x && arr[6].innerHTML === '') {
                        arr[6].innerHTML = o
                    }

                    //vertical protect
                    else if (arr[0].innerHTML === x && arr[3].innerHTML === x && arr[6].innerHTML === '') {
                        arr[6].innerHTML = o
                    } else if (arr[3].innerHTML === x && arr[6].innerHTML === x && arr[0].innerHTML === '') {
                        arr[0].innerHTML = o
                    } else if (arr[0].innerHTML === x && arr[6].innerHTML === x && arr[3].innerHTML === '') {
                        arr[3].innerHTML = o
                    }

                    else if (arr[1].innerHTML === x && arr[4].innerHTML === x && arr[7].innerHTML === '') {
                        arr[7].innerHTML = o
                    } else if (arr[1].innerHTML === x && arr[7].innerHTML === x && arr[4].innerHTML === '') {
                        arr[4].innerHTML = o
                    } else if (arr[4].innerHTML === x && arr[7].innerHTML === x && arr[1].innerHTML === '') {
                        arr[1].innerHTML = o
                    }

                    else if (arr[2].innerHTML === x && arr[5].innerHTML === x && arr[8].innerHTML === '') {
                        arr[8].innerHTML = o
                    } else if (arr[2].innerHTML === x && arr[8].innerHTML === x && arr[5].innerHTML === '') {
                        arr[5].innerHTML = o
                    } else if (arr[5].innerHTML === x && arr[8].innerHTML === x && arr[2].innerHTML === '') {
                        arr[2].innerHTML = o
                    }

                    //diagonal protect
                    else if (arr[0].innerHTML === x && arr[4].innerHTML === x && arr[8].innerHTML === '') {
                        arr[8].innerHTML = o
                    } else if (arr[4].innerHTML === x && arr[8].innerHTML === x && arr[0].innerHTML === '') {
                        arr[0].innerHTML = o
                    } else if (arr[8].innerHTML === x && arr[0].innerHTML === x && arr[4].innerHTML === '') {
                        arr[4].innerHTML = o
                    }

                    else if (arr[2].innerHTML === x && arr[4].innerHTML === x && arr[6].innerHTML === '') {
                        arr[6].innerHTML = o
                    } else if (arr[4].innerHTML === x && arr[6].innerHTML === x && arr[2].innerHTML === '') {
                        arr[2].innerHTML = o
                    } else if (arr[6].innerHTML === x && arr[2].innerHTML === x && arr[4].innerHTML === '') {
                        arr[4].innerHTML = o
                    }
                    else if (arr[4].innerHTML === '') {
                        arr[4].innerHTML = o
                    }
                    else if (arr[4].innerHTML === x && arr[2].innerHTML === '') {
                        arr[2].innerHTML = o
                    } else if (arr.every(el => el.innerHTML !== '')) {
                        $('#repeatGame').css('display' , 'block')
                        $('#gridContainer').css('display' , 'none')
                    }
                    else {
                        filtered[random].innerHTML = o;
                    }
                    isPlayer = true;
                    checkHorizontalWin();
                    checkVerticalWin();
                    checkLeftDiagonal();
                    checkRightDiagonal();
                }, 500)
            }
        }
        else {
            alert('Field is already taken!');
        }
    }
}


const checkHorizontalWin = () => {
    let horizontalArray = Array.from(boxes);
    let newHorizontal;
    while (horizontalArray.length > 0) {
        newHorizontal = horizontalArray.splice(0, 3);
        if (newHorizontal.every(el => el.innerHTML === x)) {
            popup.style.display = 'block';
            // changeColor(newHorizontal);
            for(let i=0;i<newHorizontal.length ; i++){
                newHorizontal[i].innerHTML = '<img src="./images/heart.png">'
            }
            document.getElementById('nextGameTic').style.display = 'block'
            document.getElementById('newGame').style.display = 'none'

            return false
        } else if (newHorizontal.every(el => el.innerHTML === o)) {
            $('#repeatGame').css('display' , 'block')
            $('#gridContainer').css('display' , 'none')
            return changeColor(newHorizontal);
        }
    }
}

const checkVerticalWin = () => {
    let verticalArray = Array.from(boxes);
    let n = 3;
    for (k = 0; k < n; k++) {
        let arr = []
        for (i = k; i < verticalArray.length; i += n) {
            arr.push(verticalArray[i]);
        }
        if (arr.every(el => el.innerHTML === x)) {
            // popup.style.display = 'block';
            for(let i=0;i<arr.length ; i++){
                arr[i].innerHTML = '<img src="./images/heart.png">'
            }
            document.getElementById('nextGameTic').style.display = 'block'
            document.getElementById('newGame').style.display = 'none'
            // changeColor(arr);
            return false
        } else if (arr.every(el => el.innerHTML === o)) {
            $('#repeatGame').css('display' , 'block')
            $('#gridContainer').css('display' , 'none')

            changeColor(arr);
        }
    }
}

const checkLeftDiagonal = () => {
    let leftDiagonalArray = Array.from(boxes);
    let leftDiagonal = 4;
    let arr = [];
    for (i = 0; i < leftDiagonalArray.length; i += leftDiagonal) {
        arr.push(leftDiagonalArray[i]);
    }
    if (arr.every(el => el.innerHTML === x)) {

        // popup.style.display = 'block';
        for(let i=0;i<arr.length ; i++){
            arr[i].innerHTML = '<img src="./images/heart.png">'
        }
        document.getElementById('nextGameTic').style.display = 'block'
        document.getElementById('newGame').style.display = 'none'
        // changeColor(arr);
        return false
    } else if (arr.every(el => el.innerHTML === o)) {
        $('#repeatGame').css('display' , 'block')
        $('#gridContainer').css('display' , 'none')

        changeColor(arr);
    }
}

const checkRightDiagonal = () => {
    let rightDiagonalArray = Array.from(boxes);
    let rightDiagonal = 2;
    let arr = [];
    for (i = rightDiagonal; i < rightDiagonalArray.length - 1; i += rightDiagonal) {
        arr.push(rightDiagonalArray[i]);
    }
    if (arr.every(el => el.innerHTML === x)) {
        // popup.style.display = 'block';
        for(let i=0;i<arr.length ; i++){
            arr[i].innerHTML = '<img src="./images/heart.png">'
        }
        document.getElementById('nextGameTic').style.display = 'block'
        document.getElementById('newGame').style.display = 'none'
        // changeColor(arr);
        return false
    } else if (arr.every(el => el.innerHTML === o)) {
        $('#repeatGame').css('display' , 'block')
        $('#gridContainer').css('display' , 'none')

        changeColor(arr);
    }
}

const changeColor = (array) => {
    for (i = 0; i < array.length; i++) {
        array[i].style.color = 'rgb(224, 19, 111)';
    }
}

newGame.onclick = () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = '';
        popup.style.display = 'none';
        boxes[i].style.color = '#000'
    }
    $('#repeatGame').css('display' , 'none')
    $('#gridContainer').css('display','grid')
}
