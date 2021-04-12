<?php

//echo "you ran the database PHP file \n";
    //read

    //main read script
    $txt = fopen("data.txt", "r") or die("Unable to open file!");
    echo fread($txt,filesize("data.txt"));
    fclose($txt);



    //feof test
    // while(! feof($file)) {
    //   $txt = fgets($file);
    //   echo $txt. "<br>";
    // }
    // fclose($txt);

    //	https://www.php.net/manual/en/function.file-get-contents.php
    // ^^maybe worth looking into

?>
