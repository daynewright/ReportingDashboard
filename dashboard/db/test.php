<?php

  echo "testing";
  include('dbPDO.php');
  include('../selection.php');

echo 'CALL DASH_fyber_revenue_total('.$_SESSION["game"].', "'.$_SESSION["start_date"].'" , "'.$_SESSION["end_date"].'");';




















/*
  $monday = strtotime('last monday', strtotime('tomorrow'));
  $startOfWeek = date('Y-m-d',strtotime('last sunday'));
  $today = date("Y-m-d");
  $today2 = date('Y-m-d', strtotime("today"));

  $yesterday = date("Y-m-d", time() - 60 *  60 *  24);

  echo $startOfWeek."<br/>";
  echo "yesterday: ".$yesterday."<br/>";
  echo $today."</br>";
  echo $today2;

  echo "<br/>";

  var_dump($results_gplayinstalls_top);
*/

//echo $results_spend_rev_chart[0]->y;
//echo $yesterday;
/*
$the_date = "2015-10-29";
foreach($results_spend_rev_chart as $spend_date){
  if($spend_date->y == $the_date){
    echo $spend_date->b;
    break;
  }
}
*/
/*
$the_date = "2015-10-29";
foreach($results_spend_rev_chart as $spend_date){
  $spend_date->y == $the_date ? echo $spend_date->b : echo $yesterday;
}
*/
//var_dump($results_spend_period);


//echo $results_impr_spend[0]->kochava_today_clicks;

//echo $results_impr_spend[0]->kochava_today_impressions;


//echo $results_gplayinstalls_JSON;

?>
