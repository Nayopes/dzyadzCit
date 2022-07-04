// MEMORY GAME
$(function () {
    // validation part
    var sound;
    $('#nextGameTic').on('click', function () {
        var textArr = [
            'Նրանց կռիվները ձմռանը վերմակը մեկը մյուսի վրա գցելու համար են: ',
            'Նրանք իրար հետ ապրելուց զատ ապրում են իրար համար ու միասին ստեղծածը պահում ամեն բանից առավել պինդ: ',
            'Նրանց սերը արդեն 28 տարվա խտություն ունի: Նրանք իրար ամեն օր նայում են էնպես, ասես հենց նոր են տեսել իրար:',
            'Նրանք միշտ ամուր իրար են կպած` անգամ երբ հեռու են իրարից:',
            'Նրանց մասին վեպեր կարելի էր գրել, ֆիլմեր նկարել, կտավներ ստեղծել, եթե մշակույթի ամեն դրսևորում չդառնար բացարձակ անզոր նրանց անսահմանության առաջ...',

        ]
        let text_i = 0
        $('.text').find('h4').html(textArr[0])
        $('#tic-tac-toe').css('display' , 'none');
        $('#memoryGame').css('display', 'flex');
        var music = ['music/lose.mp3', 'music/gyumri.mp3', 'music/time.wav', 'music/win.mp3']
    sound = new Audio();
        sound.src = music[1];
        var sound_count = 0;
        if (sound_count == 0) {
            sound.play()
            sound_count++
        }



        var count = 8;
        console.log(typeof count)
        var click = false;
        // $('.main').show();


        //    image name
        var globalPath = 'images/n';
        var globalEx = '.png';
        var arr = [];
        for (var i = 0; i < count / 2; i++) {
            arr.push(globalPath + i + globalEx);
        }

        var all = $.merge(arr, arr);

        function shuffle(array) {
            var k;
            var temp;
            for (var i = 0; i < array.length; i++) {
                k = Math.floor(Math.random() * (i + 1))
                temp = array[i];
                array[i] = array[k];
                array[k] = temp;
            }
            return array
        }

        var pic = shuffle(all);
        console.log(pic);

        //    show image

        $('.game').empty();
        for (var i = 0; i < count; i++) {
            var div = $('<div>');
            div.attr('class', 'divIn');
            div.attr('data-image', all[i]);
            div.css('background-image', "url(" + all[i] + ")");
            $('.game').append(div);
            $('.game').css('width', 106 * 4 + "px");
        }

        //        hide image

        setTimeout(function () {
            var el = $('.divIn');
            for (var i = 0; i < count; i++) {
                $(el[i]).addClass('back');
            }
            timer(60);
        }, 4000)

        function timer(c) {
            var time = c * 2;

            var x = setInterval(function () {
                if (click == false) {
                    time--;
                    $('h2').html(time + 'sec');

                    if (time == 0) {
                        $('h2').html('');
                        setTimeout(function () {
                            // alert('game over');
                            clearInterval(x);
                        }, 400)
                    }
                }

            }, 1000)
        }
        //        click
        setTimeout(function () {
            var indexes = [];
            var pair = [];
            $('.divIn').on('click', function () {

                $(this).removeClass('back');
                $(this).addClass('checked');
                var t = $(this).data('image');
                var ind = $(this).index();
                indexes.push(ind);
                pair.push(t);
                if (indexes.length == 2) {
                    if (pair[0] == pair[1] && indexes[0] != indexes[1]) {
                        $('.checked').addClass('same');
                        if ($('.divIn').has('same')) {
                            $('.divIn').removeClass('checked');
                            $('.same').off('click');
                        }

                    } else {
                        setTimeout(function () {
                            $('.checked').addClass('back');
                            $('.divIn').removeClass('checked');
                        }, 400)
                    }
                    indexes = [];
                    pair = [];
                }
                if ($('.back').length == 0) {
                    sound.pause();

                    click = true;
                    setTimeout(function () {
                        $('#nextGameMem').slideDown()

                    }, 500)
                }
                let same = $(document).find('.divIn.same')
                console.log(same)
                if (same.length == 2) {
                    text_i = 1
                    $('.text').find('h4').html(textArr[text_i])
                }
                else if (same.length == 4) {
                  text_i = 2
                    $('.text').find('h4').html(textArr[text_i])
                }
                else if (same.length == 6) {
                    text_i = 3
                    $('.text').find('h4').html(textArr[text_i])
                }
                else if (same.length == 8) {
                    text_i = 4
                    $('.text').find('h4').html(textArr[text_i])


                }
            })


        }, 1000)


        // text slide

        $('#rightVector').on('click', function(){
            text_i ++
            if(text_i==textArr.length){
                text_i =0
            }
            $('.text').find('h4').html(textArr[text_i])
        })
        $('#leftVector').on('click', function(){
            text_i --
            if(text_i==-1){
                text_i = textArr.length-1
            }
            $('.text').find('h4').html(textArr[text_i])
        })








    })
    $('#nextGameMem').on('click' , function(){
        $('#memoryGame').css('display' , 'none');
        // $('#quiz').slideDown();
        $('#quiz').css('display' , 'flex');
        sound.pause()
        let arr = 'ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ';
    let alf = arr.split('');
    let temp = 0 ;
    
    let questions =
        [
            {
                'Q': '<img src="images/1.png" alt=""><span> Համատեղ քանի՞ զավակ ունեք <span style="color:  #DF8775"> (ճիշտն ասեք): </span> </span>    ',
                'A': 'ԵՐԵՔ'
            },
            {
                'Q': '<img src="images/2.png" alt=""> <span> Ինչի՞ հավաքածուից էր մի կտոր պակասում, որը գտնելու համար Սերոժը Նառային առավ ողջ տեսականին: </span>   ',
                'A': 'ԾԱՄՈՆ'
            },
            {
                'Q': '<img src="images/3.png" alt=""> <span> Ո՞վ էր Սերոժի ու Նառայի սուրհանդակը, երբ Սերոժը ծառայում էր բանակում: </span>  ',
                'A': 'ՄԱՐՏԻՐՈՍՅԱՆ ԱՐՄԵՆ'
            },
            {
                'Q': '<img src="images/4.png" alt=""> <span>Ո՞վ Նառային «խփեց թևի տակ» ու փախցրեց տանից Սերոժի համար <span style="color:  #DF8775"> (նշեք անունը): </span> </span>'  ,
                'A': 'ԱՆԴՈ'
            },
            {
                'Q': '<img src="images/5.png" alt="">  <span> Ի՞նչ կլիներ Սերոժի ու Նառայի առաջնեկի անունը, եթե չլիներ այժմյանը:  </span> ',
                'A': 'ՅՈՒՂԱԲԵՐ'
            },
            {
                'Q': '<img src="images/6.png" alt=""> <span>Ո՞վ «հանցավորներին» խնձոր բաժանելով անցավ շուկայից դեպի տուն ողջ ճանապարհը, երբ տղաները զբաղված էին աղջիկ փախցնելու կարևորագույն առաջադրանքով! </span>  ',
                'A': 'ԲՈՒՐԻԿ ՏԱՏ'
            },
            {
                'Q': '<img src="images/7.png" alt=""> <span> Ո՞ր ֆիլմի «մենակ-մենակ» դիտման համար մինչ այսօր Սերոժին ու Նառային «չի ներում» իրենց երկրորդ դուստրը:  </span>  ',
                'A': 'ՄԵԿ ԱՆԳԱՄ ՄԵՔՍԻԿԱՅՈՒՄ'
            },
            {
                'Q': '<img src="images/8.png" alt="">  <span> Ո՞վ է առավել խանդոտ մյուսի նկատմամբ <span style="color:  #DF8775"> (դե լավ, մի հարցն էլ սուպեր հեշտ թող լինի): </span> </span>  ',
                'A': 'ՍԵՐՈԺԸ'
            }
        ];
    
    
    
    
    alfaviteEng();
    quest_slide()
    function alfaviteEng() {
        $('.thirdStage').append('<div id="alfavite"></div>')
        for (let i = 0; i < alf.length; i++) {
            var alphabetLetters = $('<button></button>')
            alphabetLetters.attr('class', 'alphabetLetters').html(alf[i])
            $('#alfavite').append(alphabetLetters)
        }
    }
    function quest_slide(){
        $('#question').html([questions[temp]['Q']])
        let k = questions[temp]['A'];
        console.log(k)
        for (let t = 0; t < k.length; t++) {
    
            var main1 = $('<div></div>');
            main1.attr('class', 'main1')
            var p = $('<p></p>')
            // p.attr('class', 'p').html(k[t]);
            $("#main").append(main1)
            if(k[t]==' '){
                main1.css('background-image' , 'none')
                
                }else{
                    main1.append(p);
    
                }
    
        }
    }
    
    
        $('.alphabetLetters').on('click', func)
    
        function func() {
            let answerArr = questions[temp].A.split('')
                let letter = $(this).html()
                console.log(letter)
                let ind = [];
                $(this).css('background-color' , '#D76851')
                for(let i = 0; i<answerArr.length ; i++){
                    
                    if(letter==answerArr[i]){
                        console.log(answerArr[i])
                        $('.main1').eq(i).html(letter)
                        ind.push(i)
                        $(this).css('background-color' , '#8BCAB8')
                    }
                        
                    
                }
                let temp1 = 0
                for(let i = 0; i<$('.main1').length ; i++){
                    
                if($('.main1').eq(i).html() !=='<p></p>'){
                    temp1 ++;
                    if(temp1==answerArr.length){
                        temp++
                        if(temp==questions.length){
                            $('#nextGameQuiz').css('display' , 'block');
                            return
                        }
                        $('#main').html('')
                        for(let j=0 ;j<$('.alphabetLetters').length;j++){
                            $('.alphabetLetters').eq(j).css('background-color' , '#DAC6D5 ')
                        }
                        quest_slide();
    
                    }
                }
                        
                    
                }
    
    
        }
    })
    

})

