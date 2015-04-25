<!DOCTYPE html>
<html>
<head>

</head>
<body>

<?php

//$q = intval($_GET['q']);
$Fname = $_GET['firstName'];
$Lname = $_GET['lastName'];
$Email = $_GET['email'];
$Mobile = $_GET['mobile'];
$Nationality = $_GET['nationality'];
$Pass = $_GET['pass'];
$attempReg = $_GET['attemp'];
$warningReg = $_GET['warnings'];
$deviceIDX = $_GET['divd'];
//$timeReg = $_GET['time'];
//echo $q."<br>".$q1;
include('connection.inc.php');

$sql=mysql_query("SELECT * FROM users where deviceID = '".$deviceIDX."'");
if(mysql_num_rows($sql)>=1){
	
	echo "<table border='0' align='center'>";
	echo "<tr><td><h3 style='color:red;'><b>This Device is Already Registered!!</b></h3></td><td><img src='images/sad.png' width='40px'></td></tr>";
	echo "</table>";
}
else{
	$sql = "INSERT INTO users (Fname, Lname, Email, Mobile, Nationality, Pass, deviceID, attempts, warning) 
	VALUES ('".$Fname."', '".$Lname."', '".$Email."', '".$Mobile."', '".$Nationality."', '".$Pass."', '".$deviceIDX."', '".$attempReg."', '".$warningReg."')";
	
	mysql_query ($sql);
	echo "<meta http-equiv='refresh' content='0; url=successPaypal.html'>";
}
?>
</body>
</html>