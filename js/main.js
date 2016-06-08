
// function getInfo(){
// 	//get value from user input
// 	var username=document.getElementById('username').value
// 	var comment=document.getElementById('comment').value
// 	//store input to variable
// 	var usernameTxt=document.createTextNode('Username: '+username)
// 	var commentTxt=document.createTextNode('Comment: '+comment)
// 	//create new item 
// 	var newItem=document.createElement('LI')
// 	newItem.className="list-group-item"
// 	//put user input in new variable
// 	var newUser=document.createElement('H3')
// 	newUser.appendChild(usernameTxt)
// 	//put user comment in new variable
// 	var newComment=document.createElement('P')
// 	newComment.appendChild(commentTxt)
// 	newComment.className+=" comment"
// 	//put new username and new comment in new item
// 	newItem.appendChild(newUser)
// 	newItem.appendChild(newComment)
// 	//put new item in item list
// 	document.getElementById('list').appendChild(newItem)
// }

// function removeInfo(){
// 	var removeEl=document.getElementsByTagName('li')[0]
// 	var containerEl=removeEl.parentNode
// 	containerEl.removeChild(removeEl)
// }

// ********* bonus1 ********

// var newItem=document.createElement('h1')
// newItem.setAttribute('id', 'heading')
// var newTxt=document.createTextNode("Hello")
// newItem.appendChild(newTxt)
// document.getElementById('body').appendChild(newItem)

// var newItem2=document.createElement('h2')
// var newTxt2=document.createTextNode('world')
// newItem2.appendChild(newTxt2)
// document.getElementById('body').appendChild(newItem2)

// function deleteInfo(){
// 	var removeEl=document.getElementById('heading')
// 	removeEl.parentNode.removeChild(removeEl)
// }

// document.getElementById('button').className="color"

// ********* bonus2 ********

var menu=[
	{
		name:"Extra Manly Burger",
		ingredients:"House beer-cheddar cheese, bacon lardons, smoked-salt onion strings, Umami ketchup, mustard spread.",
		image:"img/extramanlyburger.jpg"
	},
	{
		name:"Truffle Especiale",
		ingredients:"Parmesan frico, fired egg, truffle thyme compound butter, truffled arugula truffled aioli.",
		image:"img/truffleespeciale.jpg"
	},
	{
		name:"Truffle Fries",
		ingredients:"Thin cut fries with house truffle cheese, topped with chives.",
		image:"img/trufflefries.jpg"
	},
	{
		name:"Falafel Burger",
		ingredients:"Falafel patty, beet infused couscous, crushed avocado, romaine, tomato, tzatziki, pickled red onion.",
		image:"img/falafelburger.jpg"
	},
	{
		name:"Ahi Tuna Burger",
		ingredients:"seared ahi patty, daikon sprouts, crushed avocado, gingered carrots, wasabi flake, wasabi tartar.",
		image:"img/ahitunaburger.jpg"
	},
	{
		name:"Seared Ahi Salad",
		ingredients:"sesame-crusted ahi, mesclun mix, sesame dressing, puffed black rice.",
		image:"img/searedahisalad.jpg"
	}
]

document.getElementById('img0').src=menu[0].image
document.getElementById('name0').innerHTML=menu[0].name
document.getElementById('ingredients0').innerHTML=menu[0].ingredients

document.getElementById('img1').src=menu[1].image
document.getElementById('name1').innerHTML=menu[1].name
document.getElementById('ingredients1').innerHTML=menu[1].ingredients

document.getElementById('img2').src=menu[2].image
document.getElementById('name2').innerHTML=menu[2].name
document.getElementById('ingredients2').innerHTML=menu[2].ingredients

document.getElementById('img3').src=menu[3].image
document.getElementById('name3').innerHTML=menu[3].name
document.getElementById('ingredients3').innerHTML=menu[3].ingredients

document.getElementById('img4').src=menu[4].image
document.getElementById('name4').innerHTML=menu[4].name
document.getElementById('ingredients4').innerHTML=menu[4].ingredients

document.getElementById('img5').src=menu[5].image
document.getElementById('name5').innerHTML=menu[5].name
document.getElementById('ingredients5').innerHTML=menu[5].ingredients










