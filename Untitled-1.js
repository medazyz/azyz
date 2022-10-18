//How Edabit Works
function hello() {
    return "hello edabit.com"
   
}
//Return the Sum of Two Numbers
function addition(a, b) {
	return(a+b)
	
}
//Convert Minutes into Seconds
function(minuet){
    return(60*minuet)
}
//Area of a Triangle
function triArea(base, height) {
    return (base * height) / 2
	
}
//Maximum Edge of a Triangle
function nextEdge(side1, side2) {
	return (side1+side2) - 1;
	
	
}
//Return the Remainder from Two Numbers
function remainder(x, y) {
	return x % y;
	
}
//Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
	return 2 * (length+width);
	
}
//Return the Next Number from the Integer Passed
function addition(num) {
	return num+1;
	
}
//Correct the Mistakes
function squared(b) {
	return b * b;
}
//Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
	if(num<=0)
		return true;
	else
		return false
	
	//Less Than 100?
	function lessThan100(a, b) {
		if(a+b<100)
			return true;
		else
			return false;	
		
	}
	//Return Something to Me!
	function giveMeSomething(a) {
		return"something "+a;	
	}
	//Convert Age to Days
	function calcAge(age) {
		return 365*age;
		
	}
	//Convert Hours and Minutes into Seconds
	function convert(hours, minutes) {
		return hours*3600+minutes*60;
		
	}
	//Simple Counting
	function countDigits(n, d) {
		var squares ='', reg = new RegExp (d, 'g');
		for (var i = 0 ; i<=n ; i++){ squares += (i * i); }
		return squares.match(reg).length;	
	}
	//Diagonal of a Cube
	function cubeDiagonal(volume) {
		return+(volume**(1/3)*3**0.5).toFixed(2);
	}
	//How Many Days Between Two Dates
	function getDays(date1, date2) {
		const d1Stamp=date1.getTime() / 1000;
		const d2Stamp=date2.getTime() / 1000;
		
		const secondsInDay=86400;
		const difference = Math.abs(d1Stamp - d2Stamp) / secondsInDay;
		
		return Math.floor(difference);	
	}