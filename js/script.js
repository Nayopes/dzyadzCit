// MEMORY GAME
$(function(){
    // validation part
    $('#nextGameTic').on('click' , function(){
        $('#tic-tac-toe').slideUp();
        $('#memoryGame').slideDown();
        var music = ['music/lose.mp3','music/test.mp3','music/time.wav','music/win.mp3']
        var sound = new Audio();
            sound.src = music[1];
        var sound_count = 0;
        if(sound_count==0){
            sound.play()
            sound_count++
        }
        $('#memoryGame').css('display' , 'flex');
   
          
            var count = 8;
            console.log(typeof count)
            var click = false;
            // $('.main').show();
    
            
            //    image name
        var globalPath = 'images/n';
        var globalEx = '.png';
        var arr = [];
        for(var i = 0; i<count/2; i++){
            arr.push(globalPath+i+globalEx);
        }
        
            var all = $.merge(arr, arr);
           
            function shuffle(array){
                var k;
                var temp;
               for(var i = 0; i<array.length; i++){
                  k = Math.floor(Math.random()*(i+1)) 
                   temp = array[i];
                   array[i]= array[k];
                   array[k]=temp;
               } 
                return array
            }
            
            var pic = shuffle(all);
            console.log(pic);
            
    //    show image
            
            $('.game').empty();
            for(var i = 0; i<count; i++){
                var div = $('<div>');
                div.attr('class','divIn');
                div.attr('data-image',all[i] );
                div.css('background-image',"url("+all[i]+")");
                $('.game').append(div);
                $('.game').css('width',106*4+"px");
            }
            
    //        hide image
            
            setTimeout(function(){
                var el = $('.divIn');
                for(var i = 0; i<count; i++){
                    $(el[i]).addClass('back');
                }
                timer(60);
            }, 4000)
            
            function timer(c){
                var time =c*2; 
                
                var x = setInterval(function(){
                    if(click==false){
                          time--;                  
                        $('h2').html(time+'sec');
                       
                        if(time==0){
                          $('h2').html('');
                            setTimeout(function(){
                                alert('game over');
                            clearInterval(x);
                            }, 400) 
                        }
                    }
                    
                },1000)
            }
    //        click
            setTimeout(function(){
                var indexes = [];
                var pair = [];
                $('.divIn').on('click', function(){
               
                    $(this).removeClass('back');
                    $(this).addClass('checked');
                    var t = $(this).data('image');
                    var ind = $(this).index();
                    indexes.push(ind);
                    pair.push(t);
                    if(indexes.length==2){
                        if(pair[0]==pair[1] && indexes[0]!=indexes[1]){
                            $('.checked').addClass('same');
                            if($('.divIn').has('same')){
                              $('.divIn').removeClass('checked');
                                $('.same').off('click');
                            }
                            
                        }else{
                            setTimeout(function(){
                               $('.checked').addClass('back');
                                $('.divIn').removeClass('checked');
                            },400)
                        }
                        indexes=[];
                        pair=[];
                    }
                    if($('.back').length==0){
                                                   sound.pause();
    
                        click=true;
                        setTimeout(function(){
                            $('#nextGameMem').slideDown()
                            
                        },500)
                    }
                })
            },1000)
            
    
            // text slide
    
            var textArr = ['Նրանց կռիվները ձմռանը վերմակը մեկը մյուսի վրա գցելու համար են: ',
            'Նրանք իրար հետ ապրելուց զատ ապրում են իրար համար ու միասին ստեղծածը պահում ամեն բանից առավել պինդ: ',
            'Նրանց սերը արդեն 28 տարվա խտություն ունի: ',
            'Նրանք իրար ամեն օր նայում են էնպես, ասես հենց նոր են տեսել իրար: ',
            'Նրանք միշտ ամուր իրար են կպած` անգամ երբ հեռու են իրարից:',
            'Նրանց մասին վեպեր կարելի էր գրել, ֆիլմեր նկարել, կտավներ ստեղծել, եթե մշակույթի ամեն դրսևորում չդառնար բացարձակ անզոր նրանց անսահմանության առաջ...',
        ]
            $('.text').find('h4').html(textArr[0])
            let text_i=0
            setInterval(function(){
                text_i++
                $('.text').find('h4').html(textArr[text_i])
                
            },20000)
        
        
    
        
    })
    
    })
   
