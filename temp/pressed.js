var current = null;

function showresponddiv(messagedivid){
    var id = messagedivid.replace("message-", "respond-"),
        div = document.getElementById(id);
		
    // hide previous one
    if(current && current != div) {
        current.style.display =  'none';
		}   

    if (div.style.display=="none"){
        div.style.display="inherit";
        current = div;
	
	}
    else {
        div.style.display="none";

   	}	
}