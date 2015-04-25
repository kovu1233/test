<!DOCTYPE html>
<html>
<head>

</head>
<body>
<script>
alert("im here");
</script>

<?php

//$q = intval($_GET['q']);
$deviceID = $_GET['divd'];

include('connection.inc.php');

//get number of attempts
$sqldeviceID=mysql_query("SELECT deviceID FROM users where deviceID = '".$deviceID."'");
//while ($row = mysql_fetch_array($sqlAttempts)) 
//{
//	$attempts = $row['attempts'];
//}

//get number of warnings
/*$sqlWarning=mysql_query("SELECT warning FROM users where Email = '".$email."'");	
while ($row = mysql_fetch_array($sqlWarning)) 
{
	$warning = $row['warning'];
}*/

//user validation
//$sql=mysql_query("SELECT * FROM users where Email = '".$email."' and Pass = '".$pass."'");
if(mysql_num_rows($sqldeviceID)>=1){
	$sqlPayStatus=mysql_query("SELECT deviceID FROM users where deviceID = '".$deviceID."' AND paymentStatus = 'Completed'");
	if(mysql_num_rows($sqlPayStatus)>=1){
	//if ($attempts < 3){
	//	mysql_query("UPDATE users SET attempts = '0' WHERE Email = '".$email."'");
		echo "<meta http-equiv='refresh' content='0;url=http://slikke.net/test/Lesson1-TVM.html'>";
	}
	else{
		echo "<script>alert('You have not paid yet!')</script>";
		echo "<meta http-equiv='refresh' content='0;url=http://slikke.net/test/successPaypal.html'>";
	}
}
else{
		//$sqlTime=mysql_query("SELECT time FROM users where Email = '".$email."'");
		//echo $sqlTime;//." greater than ". $sqlTime + 30;
		echo "<script>document.getElementById('txtHintLogin').style.background = 'black';</script>";
		echo "Device not Registered. Please <b>Register</b> to log in";
	}
	
//}

//else{
//	$attempts++;
	//echo $attempts;
/*	mysql_query("UPDATE users SET attempts = '".$attempts."' WHERE Email = '".$email."'");
	if ($attempts < 3){
		$attempts = 3 - $attempts;
		echo "You have: ".$attempts." Attempts Left!";
	}
	else if ($attempts == 3){
		echo "You have reached your maximum attempts. Please Wait and try again later!";
		$warning++;
		mysql_query("UPDATE users SET warning = '".$warning."' WHERE Email = '".$email."'");
	}
	else{
		echo "exceeded 3 attempts<br>";
		echo "User has been locked due to <u>incorrect</u> Username or Password!<br>";
		echo "Try again later!";
	}
}
*/


////else{
////echo "<table border='0' align='center'>";
////echo "<tr><td><h3 style='color:red;'><b>Incorrect Username or Password!!</b></h3></td><td><img src='images/sad.png' width='40px'></td></tr>";
////echo "</table>";	
////}
	

?>
</body>
</html>