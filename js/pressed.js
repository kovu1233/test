var current = null;


function showresponddiv(messagedivid){
    var id = messagedivid.replace("message-", "respond-"),
        div = document.getElementById(id);
		
    // hide previous one
    if(current && current != div) {
        current.style.display =  'none';
		
		if (document.getElementById(translate1).innerHTML == "Hide Translation"){
			document.getElementById(translate1).innerHTML = "Translate";
		}
		
		if (document.getElementById(translate1).innerHTML == "Hide Answer"){
			document.getElementById(translate1).innerHTML = "Show Answer";	
		}
		
		document.getElementById(translate1).style.background = '#00062E';
	}   

    if (div.style.display=="none"){
        div.style.display="block";
        current = div;
		
		//translate1 = messagedivid;
			if (document.getElementById(messagedivid).innerHTML == "Translate"){
				document.getElementById(messagedivid).innerHTML = "Hide Translation";	
			}
			
			if (document.getElementById(messagedivid).innerHTML == "Show Answer"){
				document.getElementById(messagedivid).innerHTML = "Hide Answer";	
			}
			
			if (document.getElementById(messagedivid).innerHTML == "Close Notebook"){
				document.getElementById('theSetPV').value = PValue;
				document.getElementById('theSetFV').value = FValue;
				document.getElementById('theSetPMT').value = PmtValue;
				document.getElementById('theSetN').value = NpValue;
				document.getElementById('theSetI').value = IrValue;
				
				if (document.getElementById('theSetPV').value == ""){
					document.getElementById('theSetPV').value = "0.00"
				}
				if (document.getElementById('theSetFV').value == ""){
					document.getElementById('theSetFV').value = "0.00"
				}
				if (document.getElementById('theSetPMT').value == ""){
					document.getElementById('theSetPMT').value = "0.00"
				}
				if (document.getElementById('theSetN').value == ""){
					document.getElementById('theSetN').value = "0.00"
				}
				if (document.getElementById('theSetI').value == ""){
					document.getElementById('theSetI').value = "0.00"
				}
				
			}
			document.getElementById(messagedivid).style.background = '#102E56';
			translate1 = messagedivid;
		}
	
    else {
        div.style.display="none";
		if (document.getElementById(messagedivid).innerHTML == "Hide Translation"){
			document.getElementById(messagedivid).innerHTML = "Translate";
		}
		
		if (document.getElementById(messagedivid).innerHTML == "Hide Answer"){
			document.getElementById(messagedivid).innerHTML = "Show Answer";	
		}
				
		document.getElementById(messagedivid).style.background = '#00062E';
   	}	
}

var currentMoa = null;

function wrongX(moa){
	
	//if already selected then
	if(currentMoa && currentMoa != document.getElementById(moa) ) {
		if (currentMoa.className == 'numberCircleX'){
			currentMoa.className = 'AtempoX';
		}
		if (currentMoa.className == 'numberCircle'){
			currentMoa.className = 'Atempo';
		}
	}
	
	//if it is then
	if (document.getElementById(moa).className == 'AtempoX'){
		document.getElementById(moa).className = 'numberCircleX';
		currentMoa = document.getElementById(moa);
	}
	
	else if (document.getElementById(moa).className == 'Atempo'){
		document.getElementById(moa).className = 'numberCircle';
		currentMoa = document.getElementById(moa);
	}
	
	
	//if not then
	else if (document.getElementById(moa).className == 'numberCircleX'){
		document.getElementById(moa).className = 'AtempoX';
	}
	else if (document.getElementById(moa).className == 'numberCircle'){
		document.getElementById(moa).className = 'Atempo';
	}
		
}