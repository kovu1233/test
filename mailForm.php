<?php
  //include '';
   
  //echo "Reached"; 
  //send email
  $Ouremail = "CFA@slikke.net" ;
  $name = $_GET['namez'];
  //$project = $_POST['project'] ;
  $email = $_GET['emailz'] ;
  $mobile = $_GET['mobilez'];
  $topic = $_GET['topicz'];
  $msg = $_GET['msgz'] ;
  //$general = $_POST['general'];
  //$design = $_POST['design'];
  //$totalSum1 = $_POST['totalSum1'];    

mail($Ouremail, "CFA - Lesson 1 - ".$topic,
  "Sent from:\n\n Name: ".$name."\n Email: ".$email."\n Phone #: ".$mobile."\n\n Topic: ".$topic."\n Msg: \n".$msg
  , "From:" . $Ouremail);

// mail("yousif2@hotmail.com", "testing", "Hello Man", "From: kovupoisoned@gmail.com");
   echo "Thank you for using our mail form";
 //confirmation msg
/*print '<script type="text/javascript">';
print 'alert("Thank you '.$name.'.\nYour message has been successfully sent.\n\nWe will get back to you soon.")';
print '</script>';  

/*echo '<script language="JavaScript"> window.location.href ="getInTouch.html" </script>';*/
?>


