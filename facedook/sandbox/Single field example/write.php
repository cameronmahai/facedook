<?php
    //read
    // $myfile = fopen("data.txt", "r") or die("Unable to open file!");
    // echo fread($myfile,filesize("data.txt"));
    // fclose($myfile);

    //write

//echo "you ran the PHP file \n";

  $txt = $_POST['data'];

    $myfile = fopen("data.txt", "w") or die("Unable to open file!");

//  $txt = "hahaha I changed it again\n";


  if ($txt == null)
    echo "there's no text";


    fwrite($myfile, $txt);
    	echo $txt;

    fclose($myfile);
?>
