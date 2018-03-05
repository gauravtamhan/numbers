/*
 * Calculations script
 */

var res = $('#result');
var num, str;
var arr = ['zero', 'one', 'two', 'three', 'four', 'five',
'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
'seventeen', 'eighteen', 'nineteen'];

var ddarr = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty',
'seventy', 'eighty', 'ninety'];

$(document).ready(function() {
	$('.btn').click(function() {
		$('.form-control').focus().select();
		num = $('.form-control').val();
		num = Number(num);
		res.animate({opacity: '0'}, 'fast', function() {
			str = calculate(num);
			res.html('"' + str + '"');
			res.animate({opacity: '1'}, 'fast');
		});
	});
});

function calculate(num) {
	var result;
	if (num == 69) {
		result = "sixty-nine ;)";
	} else if (num < 100) {
		result = doubleDigitCalc(num);
	} else if (num >= 100 && num < 1000) {
		result = tripleDigitCalc(num);
	} else if (num >= 1000 && num < 100000)  { // 1,000 to 99,999
		result = fourToFiveDigitCalc(num);
	} else if (num >= 100000) {
		result = 'Sorry, but that number is too big';
	}
	return result;
}

function doubleDigitCalc(num) { // 0 to 20
	var result;
	var ones = num % 10;
	if (num < 20) {
		result = arr[num];
	} else {
		num = (num - ones) / 10;
		if (ones == 0) {
			result = ddarr[num - 2];
		} else {
			var tensStr = ddarr[num - 2];
			var onesStr = arr[ones];
			result = tensStr + "-" + onesStr;
		}
	}
	return result;
}

function tripleDigitCalc(num) { // 100 to 999
	var result;
	var ones = num % 10;
	var tens = ((num - ones) / 10) % 10;
	var hundreds = (num - (num % 100)) / 100;
	if (ones == 0 && tens == 0) {
		result = arr[hundreds] + " hundred";
	} else {
		result = arr[hundreds] + " hundred and " + doubleDigitCalc(num % 100);
	}
	return result;
}

function fourToFiveDigitCalc(num) { // 1,000 to 99,000
	var result;
	var ones = num % 10;
	var tens = ((num - ones) / 10) % 10;
	var hundreds = ((num - (num % 100)) / 100) % 10;
	var thousands = (num - (num % 1000)) / 1000;
	if (ones == 0 && tens == 0 && hundreds == 0) {
		result = doubleDigitCalc(thousands) + " thousand";
	} else {
		if (Math.floor((num % 1000) / 100) == 0) {
			result = doubleDigitCalc(thousands) + " thousand and " + doubleDigitCalc(num % 1000);
		} else {
			result = doubleDigitCalc(thousands) + " thousand " + tripleDigitCalc(num % 1000);
		}
	}
	return result;
}