console.log(window.innerHeight, window.innerWidth);
// window.addEventListener("load", function(){
// 	var body = document.body, html = document.documentElement;
// 	var textHight = Math.max(body.scrollHeight, body.offsetHeight);
// 	var windowHeight = window.innerHeight
// 	|| document.documentElement.clientHeight
// 	|| document.body.clientHeight;
// 	// var w = window.innerWidth
// 	// || document.documentElement.clientWidth
// 	// || document.body.clientWidth;
// 	var textTop = (windowHeight - textHight)/2;
// 	console.log(textHight, windowHeight, textTop);
// 	document.body.style.marginTop = textTop;
// 	console.log("ndjkcdsb");
// 	console.log(document.body.style.marginTop);
// }, false);
// // var glitchElements = document.getElementsByClassName("glitch");

// // function getHeight(elem){
// // 	return elem.clientHeight;
// // }

// // var glitchElementsHeights = glitchElements.map(getHeight);
// // var glitchElementsHeights = Array.prototype.map.call(glitchElements, getHeight);

// // function getSumHeight(index){
// // 	var sum = 0;
// // 	for (var i = 0; i < index; i++){
// // 		sum += glitchElementsHeights[i];
// // 	}
// // 	return sum;
// // }
// // var textHight = getSumHeight(glitchElements.length-1);
// // console.log(getSumHeight(glitchElements.length));

// // function getTextTop(index){
// // 	return textTop+getSumHeight(index);
// // }

// // for (var i = 0; i < glitchElements.length; i++){
// // 	glitchElements[i].style.top 
// // }
// // function setGlitchMarginTop(){
// // 	document.body.style.marginTop = textTop;
// // }