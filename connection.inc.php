<?php

	//..... connecting to MySQL .....
	$host = "50.62.209.13";
	$user = "kovu";
	$password = "tmK5SbxZ123";
	//connecting...
	$connection = mysql_connect($host, $user, $password) or die("couldn't connect: <br/>". mysql_error()."<br/>");
	//echo ("Connecting to MySQL<br>");
	//Using the given database
	$getDB = "use kovu1233_Slikke;";
	$db = mysql_query ($getDB);
	//echo ("Connecting to database<br>");

?>