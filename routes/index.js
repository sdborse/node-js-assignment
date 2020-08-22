var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
	return res.render('index.ejs');
});

router.post('/checkOccurance', function (req, res, next) {
	const str = req.body.character;
	var ss="abcdefghijklmnopqrstuvwxyx";
	let msg="<h1>Occurance of Alphabet in Given String</h1>";
	msg+="<table><tr><th>Alphabet</th><th>Count</th></tr>"
	for(i=0;i<ss.length;i++){
		var charCount = 0;
		for(j=0;j<str.length;j++){
			if(ss[i]==str[j]){
				charCount++;
			}
		}
		if(charCount!=0){
			msg+="<tr><td>"+ss[i]+"</td><td>"+charCount+"</td></tr>";
		}
	}
	msg+="</table>";
	res.send(msg);
});

router.post('/checkPerfectNumber', function (req, res, next) {
	const str = req.body.number;
	var no=parseInt(str);
	let sum=0;
	for(i=0;i<=no/2;i++){
		if(no%i==0)
			sum+=i;
	}
	if(sum==no)
		res.send("<h2>"+str+" is a Perfect Number");
	else
		res.send("<h2>"+str+" is Not a Perfect Number")
});

router.post('/convartToRoman', function (req, res, next) {
	let number=req.body.romanNumber;
	val=number;
	let roman = "";
	const numRoman = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
	let a;
	
	for(let key in numRoman){
		a = Math.floor(number / numRoman[key]);
		if(a >= 0){
			for(let i = 0; i < a; i++){
			roman += key;
			}
		}
		number = number % numRoman[key];
	}
	msg="<table><tr><th>Numeric</th><th>Roman</th></tr>";
	msg+="<tr><td>"+val+"</td><td>"+roman+"</td></tr></table>";
	res.send(msg);
});


module.exports = router;