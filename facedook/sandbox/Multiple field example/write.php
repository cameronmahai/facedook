<?php

    //instantiate array of all field names
    $field_array = [
      "bio","status","kotd"
    ];

    //grab updates to all fields
    $fields = $_POST['fields'];

    //initialize filename as an empty variable
    $filename;

    //grab each updated field value
    //and write it to its corresponding .txt file
    foreach ($_POST['fields'] as $key => $value) {

        //generate file name
        $filename = $field_array[$key] . ".txt";

        //open the file, write to it, and close
        $file = fopen($filename, "w") or die("Unable to open file!");
        fwrite($file, $value);
        fclose($file);
        echo $value . "\n";
    }


?>
