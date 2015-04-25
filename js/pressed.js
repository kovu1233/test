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


////////////////////////////////////NEw//////////////////////////////

function showDocx(docx){

 	if (document.getElementById(docx).innerHTML == "V"){	
		getV = docx;
		switch (getV){
			case "D1":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/CWGkUK4ZS4M";
			break;
			
			case "D2":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/WHMSdHa08YU";
			break;
			
			case "D3":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/Q6ggGSUHIC4";
			break;
			
			case "D4":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/u42yv06iFIg";
			break;
			
			case "D5":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/FWe0IS7JUKc";	
			break;
			
			case "D6":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/viVoK9RHAAc";
			break;
			
			case "D7":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/aQonhELQshs";
			break;
			
			case "D8":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/870MSi79Igc";
			break;
			
			case "D9":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/Jp3xr1ufo3o";
			break;
			
			case "D10":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/c_7enZYmUJ0";
			break;
			
			case "D11":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/j62E00MC2aE";
			break;
					
			case "D12":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/8c2TtKbpzGw";
			break;
			
			case "D13":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/GTP5PZKKMFw";
			break;
			
			case "D14":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/h6JIgNN6YvA";
			break;
			
			case "D15":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/AdlnkLP3yV8";
			break;
			
			case "D16":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/tYBNyVDhRgw";
			break;
			
			case "D17":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/FWoBxThAtkQ";
			break;
			
			case "D18":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/iOoMPq92ci4";
			break;
			
			case "D19":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/kQG4Lg5dQYc";
			break;
			
			case "D20":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/DXYRhG25EC0";
			break;
			
			case "D21":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/DNHyIJgj39A";
			break;
			
			case "D22":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/c1W-HgMqAU0";
			break;
			
			case "D23":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/a-YYmSh-KzM";
			break;
			
			case "D24":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/tBlE0ZvKBrQ";
			break;
			
			case "D25":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/PWvJwzlDhKU";
			break;
			
			case "D26":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/HCOuNFwZKME";
			break;
			
			case "D27":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/A_I5C_Iz_3U";
			break;
			
			case "D28":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/VD3kgckPA9Q";
			break;
			
			case "D29":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/eRd9k1PMBc0";
			break;
			
			case "D30":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/5tOwL_lNjIM";
			break;
			
			case "D31":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/BrK6MoIAhPM";
			break;
			
			case "D32":
				document.getElementById("V" + docx).src = "http://www.youtube.com/embed/D-Vp6ds-ByM";
			break;
			
			default:
				alert ("No video");
			break;
		}
		document.getElementById(docx).innerHTML = "D";
		document.getElementById(docx).style.backgroundColor = '#4EF0F0';
	}
	else{
		document.getElementById("V" + docx).src = "presSlides/" + docx + ".pdf#view=FitH";
		document.getElementById(docx).innerHTML = "V";
		document.getElementById(docx).style.backgroundColor = '#F04EF0';
		}
	}

function avoidLoaded(divbytwo){
	
		lastdig = divbytwo.substr(divbytwo.length - 2);

		if (lastdig.substr(0,1) == "-"){
			lastdig = divbytwo.substr(divbytwo.length - 1);
			lastdig = lastdig / 2;
		}
		else{
			lastdig = lastdig / 2;
		}
		document.getElementById('VD' + lastdig).src = 'presSlides/D' + lastdig + '.pdf';
		document.getElementById('D' + lastdig).innerHTML = "V";
		document.getElementById('D' + lastdig).style.backgroundColor = '#F04EF0';
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