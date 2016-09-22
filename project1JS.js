/**
 * 
 */


//alert("Testing");
//debugger;
var candidates = [];
var totalVotes = 0;
	// keep track of total votes and object array for candidates

function addperson()
{

	
	var person = document.getElementById("addForm");
	var list = document.getElementById("list");
	var found = false;
	var place;
	
	for(var x = 0; x < list.childNodes.length; x++)
	{
		if(list.childNodes[x].textContent == person.elements[0].value) // go through all items in list
		{
			found = true;
			place = x;
				// store place and if we found a dupe
		}		
	}
	
	if(found == true)
	{
		var confirmation = confirm(candidates[place].name + " has already been added.  Would you like to reset their votes?");
		if (confirmation)
		{
			totalVotes = totalVotes - candidates[place].votes;
			candidates[place].votes = 0;	
				// remove that candidates votes from total and delete
		}
		
		updateAll();
			// if we found a dupe prompt to delete votes and update all
	}
	else
	{
		var newName = document.createElement('dl');
		var x = list.childNodes.length;
		var tempName = person.elements[0].value;		
		
		newName.appendChild(document.createTextNode(person.elements[0].value));
		list.appendChild(newName);
		candidates.push({name:tempName, votes:0});
		makeClickable();
		addBar(person.elements[0].value);
		updateAll();
			// add new item, new bar, and update all the bars
			// if we didn't find a dupe
	}
	
	
}

function addBar(name)
{
	var getLine = document.getElementById("graphs");
	var dd = document.createElement("dd");
	dd.appendChild(document.createTextNode("0"));
	dd.setAttribute("class", "bar");
	getLine.appendChild(dd);
		// adds a bar of type bar to the graph list
}

function makeClickable()
{
	//var list = document.getElementsByTagName("ol")[0];
	var list = document.getElementById("list");
	 for (var i = 0; i < list.childElementCount; i++) 
	 {
	        list.getElementsByTagName("dl")[i].addEventListener("click", addVote, false);
	        	// go through all items and make sure they can be clicked
	 }
}


function deletePerson()
{
	var person = document.getElementById("deleteForm");
	var listItems = document.getElementById("list");
	var barGraph = document.getElementById("graphs");
		// references to items
	
	//alert("DID THIS WORK");
	//alert(person.elements[0].value);
	
	
	for(var x = 0; x < listItems.childNodes.length; x++) /// go through all items in list
	{
		if(listItems.childNodes[x].textContent == person.elements[0].value) // when you find the item we eed
		{
			totalVotes = totalVotes - candidates[x].votes;
			candidates.splice(x,1);
			listItems.removeChild(listItems.childNodes[x]);
			barGraph.removeChild(barGraph.childNodes[x]);
			updateAll(); 
				// delete it, subtract its votes, update all the bars
			return;
		}	
	}
}

function addVote(event)
{
	//alert("hello");
	//alert(event.target.innerHTML);
	
	
	var barGraph = document.getElementById("graphs");
		// reference to graph
	
	for(var x = 0; x < candidates.length; x++)
	{
		if(event.target.innerHTML == candidates[x].name) // search for correct candidate
		{
			candidates[x].votes++;
			totalVotes++;
			updateAll();
				// increase total and candidates vote, update all graphs
		}
	}
}

function updateAll()
{
	var barGraph = document.getElementById("graphs");
	var percent;
		// reference to graph
	for(var x = 0; x < candidates.length; x++) // for all items in bar graph
	{					
		percent = ((candidates[x].votes)/(totalVotes))*100;
		barGraph.childNodes[x].style.width = percent+"%";
		barGraph.childNodes[x].innerHTML = candidates[x].votes; 
			// update their width to match their current percent of votes
		//alert(candidates[x].votes);
		
	}
}