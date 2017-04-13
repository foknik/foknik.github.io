<?php

$recepient = "Smelov18@gmail.com";
$sitename = "himshou.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

/*$name2 = trim($_POST["name2"]);
$phone2 = trim($_POST["phone2"]);
$message2 = "Имя2: $name2 \nТелефон2: $phone2";*/

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");