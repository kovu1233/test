function calcShowMenu(id){
	
	var questionView = (id.slice(8,10));
	document.getElementById("getQuestion").innerHTML = document.getElementById(questionView).innerHTML;
	
	if( snapper.state().state=="right" ){
        snapper.close();
    } else {
        snapper.open('right');
    }
}


var sndBtn = false;
var solveAnswer = false;
var downPressing = false;
var PValue = "";
var FValue = "";
var NpValue = "";
var PmtValue = "";
var IrValue = "";
var enterPressing = false;
var downPressing = 1;
var sndBtn2nd = false;
var mainValueEAR = "";
var storeMonthEAR = "";

var QQValue = false;
var MMValue = false;
var VVValue = false;

var Xsquared = false;
var clearOp = false;

function periodMethod(periodMeth){
	switch (periodMeth){
		case "annually":
			document.getElementById("annually").className = "calcSideBtn1"
			document.getElementById("quarterly").className = "calcSideBtn"
			document.getElementById("monthly").className = "calcSideBtn"
			document.getElementById("continuous").className = "calcSideBtn"
			
			if (QQValue == true){
				NpValue = NpValue / 4;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = NpValue;
			
				IrValue = IrValue * 4;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = IrValue;
				QQValue = false;
			}
			
			if (MMValue == true){
				NpValue = NpValue / 12;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = NpValue;
			
				IrValue = IrValue * 12;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = IrValue;
				MMValue = false;
			}
				VVValue = false;
		break;
		
		case "quarterly":
			document.getElementById("annually").className = "calcSideBtn"
			document.getElementById("quarterly").className = "calcSideBtn1"
			document.getElementById("monthly").className = "calcSideBtn"
			document.getElementById("continuous").className = "calcSideBtn"
			
			if (MMValue == true){
				NpValue = NpValue / 12;
				IrValue = IrValue * 12;
				MMValue = false;
			}
			
			if (QQValue == false){
				NpValue = NpValue * 4;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = "X4= " + NpValue;
			
				IrValue = IrValue / 4;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = "/4= " + IrValue;
			
				QQValue = true;
			}
			VVValue = false;
		break;
		
		case "monthly":
			document.getElementById("annually").className = "calcSideBtn"
			document.getElementById("quarterly").className = "calcSideBtn"
			document.getElementById("monthly").className = "calcSideBtn1"
			document.getElementById("continuous").className = "calcSideBtn"
			
			if (QQValue == true){
				NpValue = NpValue / 4;
				IrValue = IrValue * 4;
				QQValue = false;
			}
			
			if (MMValue == false){
				NpValue = NpValue * 12;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = "X12= " + NpValue;
			
				IrValue = IrValue / 12;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = "/12= " + IrValue;
			
				MMValue = true;
			}
			VVValue = false;
		break;
		
		case "continuous":
			document.getElementById("annually").className = "calcSideBtn"
			document.getElementById("quarterly").className = "calcSideBtn"
			document.getElementById("monthly").className = "calcSideBtn"
			document.getElementById("continuous").className = "calcSideBtn1"
			
			if (QQValue == true){
				NpValue = NpValue / 4;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = NpValue;
			
				IrValue = IrValue * 4;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = IrValue;
				QQValue = false;
			}
			
			if (MMValue == true){
				NpValue = NpValue / 12;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = NpValue;
			
				IrValue = IrValue * 12;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = IrValue;
				MMValue = false;
			}
			VVValue = true;
		break;
	}
	
	///////////////////////////////////Notes////////////////////
	switch (periodMeth){
		case "annuallyNotes":
		
			document.getElementById("annually").className = "calcSideBtn1"
			document.getElementById("quarterly").className = "calcSideBtn"
			document.getElementById("monthly").className = "calcSideBtn"
			document.getElementById("continuous").className = "calcSideBtn"
			
			document.getElementById("annuallyNotes").className = "calcSideBtn1"
			document.getElementById("quarterlyNotes").className = "calcSideBtn"
			document.getElementById("monthlyNotes").className = "calcSideBtn"
			document.getElementById("continuousNotes").className = "calcSideBtn"
			
			if (QQValue == true){
				NpValue = NpValue / 4;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = NpValue;
				document.getElementById('theSetN').value = NpValue;
			
				IrValue = IrValue * 4;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = IrValue;
				document.getElementById('theSetI').value = IrValue;
				QQValue = false;
			}
			
			if (MMValue == true){
				NpValue = NpValue / 12;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = NpValue;
				document.getElementById('theSetN').value = NpValue;
			
				IrValue = IrValue * 12;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = IrValue;
				document.getElementById('theSetI').value = IrValue;
				MMValue = false;
			}
				VVValue = false;
		break;
		
		case "quarterlyNotes":
			document.getElementById("annually").className = "calcSideBtn"
			document.getElementById("quarterly").className = "calcSideBtn1"
			document.getElementById("monthly").className = "calcSideBtn"
			document.getElementById("continuous").className = "calcSideBtn"
			
			document.getElementById("annuallyNotes").className = "calcSideBtn"
			document.getElementById("quarterlyNotes").className = "calcSideBtn1"
			document.getElementById("monthlyNotes").className = "calcSideBtn"
			document.getElementById("continuousNotes").className = "calcSideBtn"
			
			if (MMValue == true){
				NpValue = NpValue / 12;
				IrValue = IrValue * 12;
				MMValue = false;
			}
			
			if (QQValue == false){
				NpValue = NpValue * 4;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = "X4= " + NpValue;
				document.getElementById('theSetN').value = NpValue;
			
				IrValue = IrValue / 4;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = "/4= " + IrValue;
				document.getElementById('theSetI').value = IrValue;
			
				QQValue = true;
			}
			VVValue = false;
		break;
		
		case "monthlyNotes":
			document.getElementById("annually").className = "calcSideBtn"
			document.getElementById("quarterly").className = "calcSideBtn"
			document.getElementById("monthly").className = "calcSideBtn1"
			document.getElementById("continuous").className = "calcSideBtn"
			
			document.getElementById("annuallyNotes").className = "calcSideBtn"
			document.getElementById("quarterlyNotes").className = "calcSideBtn"
			document.getElementById("monthlyNotes").className = "calcSideBtn1"
			document.getElementById("continuousNotes").className = "calcSideBtn"
			
			if (QQValue == true){
				NpValue = NpValue / 4;
				IrValue = IrValue * 4;
				QQValue = false;
			}
			
			if (MMValue == false){
				NpValue = NpValue * 12;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = "X12= " + NpValue;
				document.getElementById('theSetN').value = NpValue;
			
				IrValue = IrValue / 12;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = "/12= " + IrValue;
				document.getElementById('theSetI').value = IrValue;
			
				MMValue = true;
			}
			VVValue = false;
		break;
		
		case "continuousNotes":
			document.getElementById("annually").className = "calcSideBtn"
			document.getElementById("quarterly").className = "calcSideBtn"
			document.getElementById("monthly").className = "calcSideBtn"
			document.getElementById("continuous").className = "calcSideBtn1"
			
			document.getElementById("annuallyNotes").className = "calcSideBtn"
			document.getElementById("quarterlyNotes").className = "calcSideBtn"
			document.getElementById("monthlyNotes").className = "calcSideBtn"
			document.getElementById("continuousNotes").className = "calcSideBtn1"
			
			if (QQValue == true){
				NpValue = NpValue / 4;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = NpValue;
				document.getElementById('theSetN').value = NpValue;
			
				IrValue = IrValue * 4;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = IrValue;
				document.getElementById('theSetI').value = IrValue;
				QQValue = false;
			}
			
			if (MMValue == true){
				NpValue = NpValue / 12;
				document.getElementById('npsetting').style.color = "Red";
				document.getElementById('npsetting').innerHTML = NpValue;
				document.getElementById('theSetN').value = NpValue;
			
				IrValue = IrValue * 12;
				document.getElementById('irsetting').style.color = "Red";
				document.getElementById('irsetting').innerHTML = IrValue;
				document.getElementById('theSetI').value = IrValue;
				MMValue = false;
			}
			VVValue = true;
		break;
	}
}

function percentageChg(){
	document.getElementById('mainCalc').value = document.getElementById('mainCalc').value / 100;
}

function LN(){
	//alert (Math.pow(Math.E, -screenValue);
	     screenValue = document.getElementById('mainCalc').value;
		 
		if (sndBtn == false)
			document.getElementById('mainCalc').value = Math.log(screenValue);
		else {
			document.getElementById('mainCalc').value =  Math.pow(Math.E, screenValue);
			sndBtn = false;
			secondBtn();
		}
}

var store = "";
function storing(){
	store = document.getElementById('mainCalc').value;
	document.getElementById('mainCalc').value = ""
}
function recall(){
	document.getElementById('mainCalc').value = store;	
}

function Xsqrd(){
	store = document.getElementById('mainCalc').value;
	document.getElementById('mainCalc').value = "^ then enter";
	setTimeout(function(){(document.getElementById('mainCalc').value = "")},1000);
	Xsquared = true;
}

function notebookLoadData(){
		
	PValue = document.getElementById('theSetPV').value;
	FValue = document.getElementById("theSetFV").value;
	PmtValue = document.getElementById("theSetPMT").value;
	NpValue = document.getElementById("theSetN").value;
	IrValue = document.getElementById("theSetI").value;
	
	alert ("All Values Have been Set");
	
	document.getElementById('pvsetting').style.color = "Red";
	document.getElementById('pvsetting').innerHTML = PValue;
	
	document.getElementById('fvsetting').style.color = "Red";
	document.getElementById('fvsetting').innerHTML = FValue;
	
	document.getElementById('pmtsetting').style.color = "Red";
	document.getElementById('pmtsetting').innerHTML = PmtValue;
	
	document.getElementById('npsetting').style.color = "Red";
	document.getElementById('npsetting').innerHTML = NpValue;
	
	document.getElementById('irsetting').style.color = "Red";
	document.getElementById('irsetting').innerHTML = IrValue;
}

function notebookClearData(){
	document.getElementById('theSetPV').value = "";
	document.getElementById("theSetFV").value = "";
	document.getElementById("theSetPMT").value = "";
	document.getElementById("theSetN").value = "";
	document.getElementById("theSetI").value =  "";
	
	PValue = "";
	FValue = "";
	PmtValue = "";
	NpValue = "";
	IrValue = "";
	
	document.getElementById('pvsetting').innerHTML = "";
	document.getElementById('fvsetting').innerHTML = "";
	document.getElementById('pmtsetting').innerHTML = "";
	document.getElementById('npsetting').innerHTML = "";
	document.getElementById('irsetting').innerHTML = "";
	
	document.getElementById("annually").className = "calcSideBtn1"
	document.getElementById("quarterly").className = "calcSideBtn"
	document.getElementById("monthly").className = "calcSideBtn"
	document.getElementById("continuous").className = "calcSideBtn"
	
	QQValue = false;
	MMValue = false;
	VVValue = false;
}

function c(val)
{
	//Calculate EAR
		if (sndBtn == true & sndBtn2nd == true & enterPressing == true & downPressing == 3){
			mainValueEARdiv100 = (mainValueEAR / 100);
			document.getElementById("mainCalc").value = (Math.pow(1 + (mainValueEARdiv100 / storeMonthEAR), storeMonthEAR) - 1) * 100;
			document.getElementById('clr1').className = "calcBtn"
			solveAnswer = false;
		
			sndBtn = false;
			sndBtn2nd = false;
			enterPressing = false;
			downPressing == 1;
		}
		
		if (document.getElementById('clr1').className == "calcBtn") {
			document.getElementById('clr1').className = 'calcBtn3';
			solveAnswer = true;
			clearOp = true;
		}
		else{
			document.getElementById('clr1').className = "calcBtn"
			solveAnswer = false;
		}
		if (sndBtn == true){
			document.getElementById("mainCalc").value=val;
			document.getElementById('2ndBtn').className = "calcBtn3"
			document.getElementById('clr1').className = "calcBtn"

			//document.getElementById('pvsetting').style.color = "blue";
			document.getElementById('pvsetting').innerHTML = "0.00";
			//document.getElementById('fvsetting').style.color = "blue";
			document.getElementById('fvsetting').innerHTML = "0.00";
			//document.getElementById('pmtsetting').style.color = "blue";
			document.getElementById('pmtsetting').innerHTML = "0.00";
			//document.getElementById('npsetting').style.color = "blue";
			document.getElementById('npsetting').innerHTML = "0.00";
			//document.getElementById('irsetting').style.color = "blue";
			document.getElementById('irsetting').innerHTML = "0.00";
			
			PValue = "";
			FValue = "";
			PmtValue = "";
			NpValue = "";
			IrValue = "";
			
			sndBtn = false;
			solveAnswer = false;
			
			document.getElementById("annually").className = "calcSideBtn1"
			document.getElementById("quarterly").className = "calcSideBtn"
			document.getElementById("monthly").className = "calcSideBtn"
			document.getElementById("continuous").className = "calcSideBtn"
			
			enterPressing = false;
			downPressing = 1;
			sndBtn2nd = false;
			mainValueEAR = "";
			storeMonthEAR = "";
			store = "";
			Xsquared = false;
			
			QQValue = false;
			MMValue = false;
			VVValue = false;
			
		}
	//}
	//else{
		
	//}
}

function enterPressed(){
	enterPressing = true; 
	if (sndBtn == true & sndBtn2nd == true & downPressing == 1){
		mainValueEAR = document.getElementById("mainCalc").value;
		document.getElementById("mainCalc").value = "press down"
		setTimeout(function(){(document.getElementById('mainCalc').value = "")},1000)
	}
	
	if (sndBtn == true & sndBtn2nd == true & enterPressing == true & downPressing == 3){
		storeMonthEAR = document.getElementById('mainCalc').value;
		document.getElementById("mainCalc").value = "press up"
		setTimeout(function(){(document.getElementById('mainCalc').value = "")},1000)
	}
	
	if (Xsquared == true){
		document.getElementById('mainCalc').value = Math.pow(store, document.getElementById('mainCalc').value);
	}
	//var f = $(".calcBtn").width() / $('.calcBtn').parent().width() * 100;
	//var g = $(".calcBtn").height() / $('.calcBtn').parent().height() * 100;
	//alert(f);
	//alert(g);
}

function downPressed (){
	downPressing ++;
	if (sndBtn == true & sndBtn2nd == true & enterPressing == true & downPressing == 2){
		document.getElementById("mainCalc").value = "press down again"
		setTimeout(function(){(document.getElementById('mainCalc').value = "")},1000)
	}
	if (sndBtn == true & sndBtn2nd == true & enterPressing == true & downPressing == 3){
		document.getElementById("mainCalc").value = "# of months"
		setTimeout(function(){(document.getElementById('mainCalc').value = "")},1000)
	}
	if (sndBtn == true & sndBtn2nd == true & enterPressing == true & downPressing == 4){
		document.getElementById("mainCalc").value = "Error! Reset."
		setTimeout(function(){(document.getElementById('mainCalc').value = "")},1000)
	}
}

function upPressed (){
	if (sndBtn == true & sndBtn2nd == true & enterPressing == true & downPressing == 3){
		document.getElementById("mainCalc").value = "press CPT"
		setTimeout(function(){(document.getElementById('mainCalc').value = "")},1000)
	}
	//top text
	if (sndBtn == true & sndBtn2nd == false & enterPressing == false){
		delKey();	
	}
}

function v(val)
{
	if (sndBtn == false){
		if (clearOp){
			if (val.charCodeAt (0) >= 48 && val.charCodeAt (0) <= 57){
				clearOp = false;
				document.getElementById("mainCalc").value = "";
			}
		}
		document.getElementById("mainCalc").value+=val;
	}
	
	if (sndBtn == true){
		if (sndBtn2nd == true){ //ALREADY IN ICONV
			document.getElementById("mainCalc").value += val;
		}
		
		if (sndBtn2nd == false){
			if (val == 2){ //ACTIVATING ICONV
				document.getElementById("mainCalc").value = "Interest Rate = ??";
				setTimeout(function(){(document.getElementById('mainCalc').value = "")},1000)
				document.getElementById('2ndBtn').className = "calcBtn2"
				sndBtn2nd = true;
			}
		}
	}
}

function eq() 
{
		document.getElementById("mainCalc").value = (eval(document.getElementById("mainCalc").value));
		clearOp = true;
} 



function delKey(){
	document.getElementById("mainCalc").value = document.getElementById("mainCalc").value.substring( 0, document.getElementById("mainCalc").value.length-1 );
}

function plusMinus(){
	if (document.getElementById("mainCalc").value.charAt(0) == "-"){
		document.getElementById("mainCalc").value = document.getElementById("mainCalc").value.slice(1, document.getElementById("mainCalc").value.length);
	}
	else{
		document.getElementById("mainCalc").value = "-" + document.getElementById("mainCalc").value;
	}
}

function secondBtn() {
	if (document.getElementById('2ndBtn').className == "calcBtn2") {
		document.getElementById('2ndBtn').className = 'calcBtn3';
		sndBtn = true;		
	}
	else{
		document.getElementById('2ndBtn').className = "calcBtn2"
		//document.getElementById('clr1').className = "calcBtn"
		sndBtn = false;
		//solveAnswer = false;
	}
	if (solveAnswer == true){
			document.getElementById("mainCalc").value=val;
			document.getElementById('2ndBtn').className = "calcBtn2"
			document.getElementById('clr1').className = "calcBtn"
			sndBtn = false;
			solveAnswer = false;
	}
}

//setting the PV,FV,PMT,NP, IR
function whatsSet(giveID){
	if (solveAnswer == false) {
		if (document.getElementById('mainCalc').value == ""){
			document.getElementById('mainCalc').value = 'Value?';
			myVar = setTimeout(function(){(document.getElementById('mainCalc').value = "")},1000)
			//document.getElementById('2ndBtn').className = "calcBtn";
			//sndBtn = false;
		}
		else{
			switch (giveID){
				case "pv1":
					PValue = document.getElementById('mainCalc').value;
					document.getElementById('mainCalc').value = 'PV Set!';
					document.getElementById('pvsetting').style.color = "Red";
					document.getElementById('pvsetting').innerHTML = PValue;
					break;
				case "fv1":
					FValue = document.getElementById('mainCalc').value;
					document.getElementById('mainCalc').value = 'FV Set!';
					document.getElementById('fvsetting').style.color = "Red";
					document.getElementById('fvsetting').innerHTML = FValue;
					break;
				case "np1":
					NpValue = document.getElementById('mainCalc').value;
					document.getElementById('mainCalc').value = 'NP Set!';
					document.getElementById('npsetting').style.color = "Red";
					document.getElementById('npsetting').innerHTML = NpValue;
					break;
				case "pmt1":
					PmtValue = document.getElementById('mainCalc').value;
					document.getElementById('mainCalc').value = 'PMT Set!';
					document.getElementById('pmtsetting').style.color = "Red";
					document.getElementById('pmtsetting').innerHTML = PmtValue;
					break;			
				case "ir1":
					IrValue = document.getElementById('mainCalc').value;
					document.getElementById('mainCalc').value = 'IR Set!';
					document.getElementById('irsetting').style.color = "Red";
					document.getElementById('irsetting').innerHTML = IrValue;
					break;
			}
			myVar = setTimeout(function(){(document.getElementById('mainCalc').value = "")},1000)
			//document.getElementById('2ndBtn').className = "calcBtn";
			//sndBtn = false;	
		}
	}
}

function validate(txt) {
		b = true;
		if (PmtValue == "" && txt != "PV" && PValue == "") { //PMT for annuity
			alert("PV is not set");
			b = false;
		}

		if (PmtValue == "" && txt != "FV" && FValue == "") {//PMT for annuity
			alert("FV is not set");
			b = false;
		}

		if (txt != "IR" && IrValue == "") {
			alert("IR is not set");
			b = false;
		}

		if (txt != "NP" && NpValue == "") {
			alert("NP is not set");
			b = false;
		}

		if (txt != "PMT" && PmtValue == "") {
			alert("PMT is not set");
			b = false;
		}

        return b;

 }

function calcPV_Annuity() {
	  IRP = IrValue / 100;
	  x = 1.0/(1+IRP);
	  x = Math.pow (x,NpValue);
	  PV = PmtValue * ((1-x)/IRP) ;
	  return PV;
}

function calcPV(){
	IRP = IrValue / 100;
	x = 1+IRP;
	x = Math.pow(x,NpValue);
	PV = - (FValue/x);
	return PV;
}


//calculate the PV
function calculateThePV()
{
	if (solveAnswer == true && validate ("PV")){
   		pmt = PmtValue;
		IRP = IrValue / 100;
		if (VVValue == true){ //continuous
            temp =Math.pow (Math.E,-IRP);
            PValue = -FValue*Math.pow(temp, NpValue);
		}
		else{
			if (pmt == 0) {
				//pvNotCalc = Math.pow((1+IRP),NpValue);
				//PValue = - (FValue/pvNotCalc);
				PValue = calcPV();
			}
			else 
				PValue = -calcPV_Annuity();
		}
		
		PValue = conv_number(PValue,2);		
   		document.getElementById('mainCalc').value = PValue;
		document.getElementById('clr1').className = 'calcBtn';
		solveAnswer = false;
	}
}

function calcFV_Annuity() {
	  IRP = IrValue / 100;
	  x = Math.pow((1 + IRP), NpValue);
	  FV = PmtValue * ((x - 1) / IRP);
	  return FV;
}

function calcFV(){
	IRP = IrValue / 100;
	x = 1 + IRP;
	x = Math.pow (x, NpValue);
	FV = PValue * x;
	return FV;

}
//calculate the FV

function calculateTheFV() {
	
	if (solveAnswer == true && validate ("FV")){
   		pmt = PmtValue;
		if (VVValue == true){ //continuous
			IRP = IrValue / 100;
            temp = Math.pow(Math.E, -IRP);
            FValue = -PValue / Math.pow(temp, NpValue);

		}
		else{
			if (pmt == 0) 
				FValue = -calcFV();
			else
				FValue =  -calcFV_Annuity();
		}
			
		FValue = conv_number(FValue,2);

		document.getElementById('mainCalc').value = FValue;
		document.getElementById('clr1').className = 'calcBtn';
		
		solveAnswer = false;
		
	}
}

//calculate the NP

function calculateTheNP() {
  if (solveAnswer == true && validate ("NP")){  		
	  npValueGG = (FValue/PValue) * - 1;
	  npValueGGG = Math.log(1 + IrValue/100);
	  NpValue = Math.log(npValueGG)/npValueGGG;
	  
	  NpValue = conv_number(NpValue,2);
	  
	  document.getElementById('mainCalc').value = NpValue;
	  document.getElementById('clr1').className = 'calcBtn';
	  //document.getElementById('2ndBtn').className = "calcBtn";
	  solveAnswer = false;
	  //sndBtn = false;
  }
}


//calculate the PMT

function calculateThePMT(){
	if (solveAnswer == true){	
	  b = true;
	  Fval = FValue;
	  Pval = PValue;
      if (Fval !=0 && Pval != 0)
                alert ("Either PV or FV must be zero");
      else {
		  if ( IrValue == "")
                {
                    alert ("IR is not set");
                    b = false;
                }
			else
                if (NpValue == "")
                {
                    alert ("NP is not set");
                    b = false;
                }
				
			if (b){	
				pir = IrValue/100;
				pmtTempo = (1+pir);
			
				if (Fval != 0) 
					PmtValue = Fval * pir / (Math.pow (pmtTempo, NpValue) - 1);
					
				if (Pval != 0) 
					PmtValue = Pval * pir / (1-Math.pow(pmtTempo, -NpValue));
				
		 
				PmtValue = conv_number(-PmtValue,2);
		  
				document.getElementById('mainCalc').value = PmtValue;
				document.getElementById('clr1').className = 'calcBtn';
		  
				solveAnswer = false;
			}
			}
	  }
}
	

//calculate the IR

function calculateTheIR() {
  if (solveAnswer == true && validate ("IR")){
	irValueGG = (FValue/PValue) * -1;
	irValueGGG = 1/NpValue;
	
	IrValue = (Math.pow (irValueGG, irValueGGG)-1)*100
	
	IrValue = conv_number(IrValue,2);
	document.getElementById('mainCalc').value = IrValue;
	document.getElementById('clr1').className = 'calcBtn';
	//document.getElementById('2ndBtn').className = "calcBtn";
	solveAnswer = false;
	//sndBtn = false;
  }
}

////////////////////////////CALCULATING EAR//////////////////////////////////////

function ear(){
	
		
	
}


function conv_number(expr, decplaces) 
{       // This function is from David Goodman's Javascript Bible.
	var p = expr.toFixed(decplaces);
	//alert (parts);
	var parts = p.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); //\d{1,2}(\.\d{,2})?$
	//return parts[0];
    return parts.join(".");
	
/*     var str = "" + Math.round(eval(parts) * Math.pow(10,decplaces));
	  
     while (str.length <= decplaces) {
           str = "0" + str;
     }
     var decpoint = str.length - decplaces;
     return (str.substring(0,decpoint) + "." + str.substring(decpoint,str.length));*/
}




