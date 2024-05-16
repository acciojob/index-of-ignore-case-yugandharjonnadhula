function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const string=s1.toLowerCase();
	const substring=s2.toLowerCase();
	return string.indexOf(substring);
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
