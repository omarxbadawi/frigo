<!DOCTYPE html>
<html>
    <head>
        <title>Testing API</title>
    </head>
    <body>
    <?php
		$para = $_POST['searchPara'];	    
    	$formattedpara = str_replace(", ", "%2C+", $para);
    	#echo $formattedpara;
    	$url = "https://recipe-puppy.p.rapidapi.com/?i=" . $formattedpara ;
    	echo($url . "<br>");

		$curl = curl_init();

		curl_setopt_array($curl, [
			CURLOPT_URL => 	$url,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_ENCODING => "",
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 30,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => "GET",
			CURLOPT_HTTPHEADER => [
				"x-rapidapi-host: recipe-puppy.p.rapidapi.com",
				"x-rapidapi-key: 6009943639msh16b18fc4b42ba8ep1a7df9jsn55a697cdbcec"
			],
		]);

		$response = curl_exec($curl);
		$err = curl_error($curl);

		curl_close($curl);

		if ($err) {
			die("cURL Error #:" . $err);
		} else {
			echo $response;
		}

		$response = json_decode($response, true);
		$response = $response['results'];

		foreach ($response as $item){
			echo("Recipe: " . $item['title'] . "<br>");
			echo("<a href='" . $item['href'] . "'>View Here</a><br><br>");
		}

		echo("<form method='POST'>");
		echo("<input type='text'  name='searchPara' id='searchPara'>");
		echo("<input type='submit' value='search'>");
		echo("</form>");				
				

    ?>
    </body>
</html>