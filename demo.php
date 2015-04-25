<!DOCTYPE html>
<html>
<head>

</head>
<body>

<?php

//$q = intval($_GET['q']);
$q = $_GET['q'];
$q1 = $_GET['q1'];
//echo $q."<br>".$q1;
include('connection.inc.php');

//$sql=mysql_query("SELECT * FROM Instructor where Instructor_UserName = '$_POST[iUsername]' and Instructor_Password = '$_POST[iPassword]'");
 //if(mysql_num_rows($sql)>=1)
  // {

//attempts
$sqlAttempts=mysql_query("SELECT attempts FROM users where user = '".$q."'");
while ($row = mysql_fetch_array($sqlAttempts)) 
{
	$attempts = $row['attempts'];
}
//warnings
$sqlWarning=mysql_query("SELECT warning FROM users where user = '".$q."'");	
while ($row = mysql_fetch_array($sqlWarning)) 
{
	$warning = $row['warning'];
}

//username validation
	$sql=mysql_query("SELECT * FROM users where user = '".$q."' AND password = '".$q1."'");
	if(mysql_num_rows($sql)>=1){
		if ($attempts < 3){
			mysql_query("UPDATE users SET attempts = '0' WHERE user = '".$q."");
			echo "<meta http-equiv='refresh' content='0;url=http://slikke.net/test/Lesson1-TVM.html'>";
		}
		else{
			$sqlTime=mysql_query("SELECT time FROM users where user = '".$q."'");
			echo $sqlTime;//." greater than ". $sqlTime + 30;
			echo "<br>login fail";
		}
	}
	else{
		$attempts = $attempts + 1;
		mysql_query("UPDATE users SET attempts = '".$attempts."' WHERE user = '".$q."");
		if ($attempts < 3){
			$attempts = 3 - $attempts;
			echo "You have: ".$attempts." Attempts Left!";
		}
		else if ($attempts == 3){
			echo "You have reached your maximum attempts. Please Wait and try again later!";
			$warning++;
			mysql_query("UPDATE users SET warning = '".$warning."' WHERE user = '".$q."");
		}
		else{
			echo "exceeded 3 attempts<br>";
			echo "Username or password is incorrect!<br>";
			echo "Try again later!";
		}
	}
	
	
	
	

?>
</body>
</html>