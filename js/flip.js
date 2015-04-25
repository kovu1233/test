

function gg()
{
document.querySelector('#cc').classList.toggle('flip');
if (document.getElementById('message-notebook11').style.display == 'block'){
	document.getElementById('message-notebook11').style.display = 'none';
}
else{
	document.getElementById('message-notebook11').style.display = 'block';
}
}

function gg1(myID)
{
document.querySelector('#cc' + myID).classList.toggle('flip');
document.getElementById('message-notebook11').style.display = 'block';
}
  
 
   