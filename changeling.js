var labels = $('label');
for(var x=0; x<labels.length; x++){
	var w = Number($('.header__container').css('width').slice(0, -2)) - Number($($('label')[x]).css('width').slice(0,-2)) -10;
	$($('.header__input')[x]).css('width', w+'px');
	$($('.header__filled')[x]).css('width', w+'px');
};


function textForm (x) {
	var id = x.attr('id').slice(1);
	$('#i'+id + ', ' + '#t'+id).toggleClass('hide');
	if($('#t'+id).hasClass('hide')){
		$('#i'+id).val($('#t'+id).html()==='&nbsp;'? '' : $('#t'+id).text());
		$('#i'+id).focus();
	} else {
		$('#t'+id).html($('#i'+id).val() || '&nbsp;');
	}
}


$('.header__filled').on('click', function() {
	textForm($(this));
});

$('.header__filled').on('focusin', function() {
	textForm($(this));
});

$('.header__input').on('focusout', function() {
	textForm($(this));
});











// var req = new XMLHttpRequest();
// req.open('Get', 'https://learnwebcode.github.io/json-example/animals-1.json')
// req.onload = function () {
// 	if(req.status>=200 && req.status <400){
// 		var ourData = JSON.parse(req.responseText);
// 		console.log(ourData[0])
// 	} else {
// 		console.log('connected, but error returned')
// 	}
// }
// req.onerror = function () {
// 	console.log('connection error')
// }
// req.send();
