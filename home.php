<!DOCTYPE html>
<?php
    session_start();
?>
<html>
    <head>
        <title>HomePage</title>
        <link rel="stylesheet" href="home.css">
    </head>
    <body>
        <header>
            <h1  id="headerwrap" >FRIGO</h1>
            <button onclick="document.location='register.php'">register</button>
        </header>
            <ul>
                <li><a class="active" href="choose_ingredients.html">Ingredients</a></li>
                <li><a href="recipe_instructions.html">Recipes</a></li>
                <li><a href="myAccount.php">My Account</a></li>
                <li><a href="settings.html">Website Settings</a></li>
            </ul>
        <div class = "main-content">
            <main>
				<h2>This is the home page </h2>
				<p>there will be some animations here</p>
			</main>
        </div>
        <footer> 
            <p>contact us</p>
        </footer>

    </body>

</html>