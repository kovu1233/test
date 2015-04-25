<?php

include('connection.inc.php');

	$item_name        = $_POST['item_name'];
	$item_number      = $_POST['item_number'];
	$payment_status   = $_POST['payment_status'];
	$payment_amount   = $_POST['mc_gross'];
	$payment_currency = $_POST['mc_currency'];
	$txn_id           = $_POST['txn_id'];
	$receiver_email   = $_POST['receiver_email'];
	$payer_email      = $_POST['payer_email'];
	
	$email = "niffas@gmail.com";
	$amount = 199.00;

echo "<pre>";
print_r($_POST);
echo "<pre>";

	// Build the required acknowledgement message out of the notification just received
	$req = 'cmd=_notify-validate';               // Add 'cmd=_notify-validate' to beginning of the acknowledgement

	foreach ($_POST as $key => $value) {         // Loop through the notification NV pairs
		$value = urlencode(stripslashes($value));  // Encode these values
 		$req  .= "&$key=$value";                   // Add the NV pairs to the acknowledgement
	}

$url = "https://www.sandbox.paypal.com/cgi-bin/webscr";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $req);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$result = curl_exec($ch);
curl_close($ch);
echo $result;


if ($payment_status == "Completed"){
	if($result == "VERIFIED"){
		if ($receiver_email == $email & $payment_amount == 2.00){
			
			mysql_query("
			UPDATE users set paymentStatus = '".$payment_status."', Txn_ID = '".$txn_id."' WHERE deviceID = '".$item_name."'");
	
		}
	}	
}


?>