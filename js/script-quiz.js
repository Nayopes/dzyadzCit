$('#nextGameMem').on('click' , function(){
    $('#memoryGame').slideUp();
    $('#quiz').slideDown();
    $('#quiz').css('display' , 'flex');

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
			'A': 'ԱԲԳ'
		},
		{
			'Q': '<img src="images/8.png" alt="">  <span> Ո՞վ է առավել խանդոտ մյուսի նկատմամբ <span style="color:  #DF8775"> (դե լավ, մի հարցն էլ սուպեր հեշտ թող լինի): </span> </span>  ',
			'A': 'ՍԵՐՈԺ'
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
