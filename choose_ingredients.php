<!-- ingredients choosing page -->

<!--Code to retrieve all possible ingredients from the API-->
<?php
  $curl = curl_init();

  curl_setopt_array($curl, [
    CURLOPT_URL => "https://www.themealdb.com/api/json/v2/9973533/list.php?i=list",
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
  foreach ($response as $ingredient){
    #echo($ingredient['strIngredient'] . "<br>");
  }
?>
<!DOCTYPE html>
<html lang="en">
  <link rel="stylesheet" href="home.css">
  <head>
    <title>Ingredients</title>
    <link rel="stylesheet" href="home.css">
    </head>
    <body>
      <header>
        <h1  id="headerwrap">FRIGO</h1>
      </header>
        <ul>
          <li><a class="active" href="choose_ingredients.php">Ingredients</a></li>
          <li><a href="recipe_instructions.html">Recipes</a></li>
          <li><a href="myAccount.php">My Account</a></li>
          <li><a href="settings.html">Website Settings</a></li>
        </ul>
      <div class = "main-content">
        <main>
          <h2>You will need to chose your ingredients here</h2>
          <form method="GET">
            <input type="text" placeholder="Search..." name="search">
            <button type="submit"></button>
          </form>
          <?php
            if (!isset($_GET['search'])){
              #echo("Not set");
            } else{;
              $search = $_GET['search'];
              foreach ($response as $ingredient){
                similar_text($search, $ingredient['strIngredient'], $percent);
                if ($percent >= 40){
                  echo ($ingredient['strIngredient'] . "<br>");
                }
              }
            }
          ?>
          
          

        </main>
        
      </div>
      <footer> 
        <p>contact us</p>
      </footer>
  
    </body>
</html>