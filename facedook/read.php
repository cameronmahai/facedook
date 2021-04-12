<?php

    //read from from the file specified by the JS
    $field = $_GET['field'];

    //generate file name from the value specified
    $file = __DIR__ . "/TXT_files/" . strval($field) . ".txt";

    //open the file and read from it
    $field = fopen($file, "r") or die("Unable to open file!");
    echo fread($field,filesize($file));
    fclose($field);

?>
