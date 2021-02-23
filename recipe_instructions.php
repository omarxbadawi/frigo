<!DOCTYPE html>
<html lang="en">
  <link rel="stylesheet" href="home.css">
  <head>
	<title>Recipes</title>
	<link rel="stylesheet" href="home.css">
	</head>
	<body>
		<header>
			<h1  id="headerwrap">FRIGO</h1>
		</header>
			<ul>
				<li><a class="active" href="choose_ingredients.html">Ingredients</a></li>
				<li><a href="recipe_instructions.html">Recipes</a></li>
				<li><a href="myAccount.php">My Account</a></li>
				<li><a href="settings.html">Website Settings</a></li>
			</ul>
		<div class = "main-content">
			<main>
				<h2>view your recipe </h2>
				<p>A small description about the dishs</p>
		
				  
				<p>ingredients showing around</p>
				<p> there will be a like button here! click if you like !</p>
			</main>
			<?php
			  $curl = curl_init();

			  curl_setopt_array($curl, [
			    CURLOPT_URL => "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=52772",
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

			  #each ingredient is  held in "$ingredient['strIngredient']", this data needs to be made into a search system of some sort, to pick out your ingredients.

			  foreach ($response as $meal){

			  	$ingredients = array($meal['strIngredient1'], $meal['strIngredient2'], $meal['strIngredient3'], $meal['strIngredient4'] ,$meal['strIngredient5'], $meal['strIngredient6'], $meal['strIngredient7'], $meal['strIngredient8'], $meal['strIngredient9'] ,$meal['strIngredient10'],$meal['strIngredient11'], $meal['strIngredient12'], $meal['strIngredient13'], $meal['strIngredient14'] ,$meal['strIngredient15'], $meal['strIngredient16'], $meal['strIngredient17'], $meal['strIngredient18'], $meal['strIngredient19'] ,$meal['strIngredient20'] );

			    echo("<br><br>Meal Name: " . $meal['strMeal'] . "<br><br>");
			    echo("Meal Category: " . $meal['strCategory'] . "<br><br>");
			    echo("Meal Instructions: " . $meal['strInstructions'] . "<br><br>");
			    echo("<img src=" . $meal['strMealThumb'] . " width='300' height='200' />" . "<br><br>");
			    echo("Youtube: <a href='" . $meal["strYoutube"] . "'>Click Here</a><br><br>");
			    echo("Ingredients: <br>");
			    foreach ($ingredients as $ingredient){
			    	if (($ingredient == Null) or ($ingredient == "")){
			    		break;
			    	}
			    	echo($ingredient . "<br>");
			    }

			  }
			?>
		</div>
		<footer> 
			<p>contact us</p>
		</footer>

	</body>
</html>
