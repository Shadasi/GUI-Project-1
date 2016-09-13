/**
 * 
 */


//alert("Testing");

var candidates = {name:"default", votes:0};

function addperson()
{
	var test = document.getElementById("addForm");
	var list = document.getElementById("list");
	var newName = document.createElement('dt');
	newName.appendChild(document.createTextNode(test.elements[0].value));
	list.appendChild(newName);
	candidates.push(test.elements[0].value, 0);
}

function testStuff()
{
	var listItems = document.getElementById("list").getElementsByTagName("dt");
	//alert("DID THIS WORK");
	alert(test.elements[0].value);
}