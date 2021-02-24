<!DOCTYPE html>
<html>
    <head>
        <title>Testing API</title>
    </head>
    <body>
    	<?php
    	#Gather recipe IDs matching ingredietns from list
    	$array = array("Eggs", "Chicken", "Cheese", "Oil", "water");
    	$rec = array();
    	foreach ($array as $ing){
    		$curl = curl_init();

			  curl_setopt_array($curl, [
			    CURLOPT_URL => "https://www.themealdb.com/api/json/v2/9973533/filter.php?i=" . $ing,
			    CURLOPT_RETURNTRANSFER => true,
			    CURLOPT_FOLLOWLOCATION => true,
			    CURLOPT_ENCODING => "",
			    CURLOPT_MAXREDIRS => 10,
			    CURLOPT_TIMEOUT => 30,
			    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			    CURLOPT_CUSTOMREQUEST => "GET",
			  ]);

			  $response = curl_exec($curl);
			  $err = curl_error($curl);

			  curl_close($curl);

			  if ($err) {
			    die ("cURL Error #:" . $err);
			  } else {
			    #echo $response;
			  }
			  $response = json_decode($response, true);
		  	  $response = $response['meals'];
		  	  foreach ($response as $meal){
		  	  	array_push($rec, $meal['idMeal']);
		  	  }
    	}

    	#An attempt of trying to count number of matching ingredients for each recipe
    	foreach ($rec as $id){
    		echo $id . "<br>";
    		$curl = curl_init();

			  curl_setopt_array($curl, [
			    CURLOPT_URL => "https://www.themealdb.com/api/json/v2/9973533\lookup.php?i=" . $id,
			    CURLOPT_RETURNTRANSFER => true,
			    CURLOPT_FOLLOWLOCATION => true,
			    CURLOPT_ENCODING => "",
			    CURLOPT_MAXREDIRS => 10,
			    CURLOPT_TIMEOUT => 30,
			    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			    CURLOPT_CUSTOMREQUEST => "GET",
			  ]);

			  $response = curl_exec($curl);
			  $err = curl_error($curl);

			  curl_close($curl);

			  if ($err) {
			    die ("cURL Error #:" . $err);
			  } else {
			    #echo $response;
			  }

			  
			  $response = json_decode($response, true);
		  	  $response = $response['meals'];
		  	  $number = array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
		  	 $count = 0;
		  	 $countarray = array(5);
		  	 foreach($response as $meal){
		  	  foreach ($number as $num){
		  	  	foreach($array as $ing){
		  	  		if ($meal['strIngredient' . $num] == $ing){
		  	  			$count = $count + 1;
		  	  		}
		  	  	}
		  	  }
		  	  array_push($countarray, $count);
		  	}
		  	echo($count . "<br>");
    	}
    	foreach($countarray as $x){
    		echo $x;
    	}
		?>
    </body>
</html>