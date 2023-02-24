<?php

function cmp($a, $b)
{
    for ($i = 2; $i >= 0; $i--)
    {
        if ($a[$i] != $b[$i]) {
            return ($a[$i] < $b[$i]) ? -1 : 1;
        } 
    }
    return 0;
}

$input = array("BOAT", "Locomotive", "Poet", "Accelerate", "GOLF", "ACCIDENTAL", "Submarine");
usort($input, "cmp");
print_r($input);
?>