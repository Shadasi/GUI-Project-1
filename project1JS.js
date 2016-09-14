/**
 * 
 */


//alert("Testing");
debugger;
var candidates = [];

function addperson()
{

	
	var person = document.getElementById("addForm");
	var list = document.getElementById("list");
	var found = false;
	
	for(var x = 0; x < list.childNodes.length; x++)
	{
		if(list.childNodes[x].textContent == person.elements[0].value)
		{
			found = true;
		}		
	}
	
	if(found == true)
	{
		alert("Person Already Added!");
	}
	else
	{
		var newName = document.createElement('li');
		var x = list.childNodes.length;
		var tempName = person.elements[0].value;
		
		newName.appendChild(document.createTextNode(person.elements[0].value));
		list.appendChild(newName);
		candidates.push({name:tempName, votes:0});
		makeClickable();
	}
	
	
}

function makeClickable()
{
	//var list = document.getElementsByTagName("ol")[0];
	var list = document.getElementById("list");
	 for (var i = 0; i < list.childElementCount; i++) 
	 {
	        list.getElementsByTagName("li")[i].addEventListener("click", addVote, false);
	 }
}


function deletePerson()
{
	var person = document.getElementById("deleteForm");
	var listItems = document.getElementById("list");
	
	//alert("DID THIS WORK");
	//alert(person.elements[0].value);
	
	
	for(var x = 0; x < listItems.childNodes.length; x++)
	{
		if(listItems.childNodes[x].textContent == person.elements[0].value)
		{
			listItems.removeChild(listItems.childNodes[x]);
			return;
		}	
	}
}

function addVote(event)
{
	//alert("hello");
	alert(event.target.innerHTML);
}