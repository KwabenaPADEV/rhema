<!DOCTYPE html>
<html>
<head>
	<title>LOGIN</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	 <link rel="icon" type="image/x-icon" href="logo.png" />
</head>
<body>
	
     <form action="login.php" method="post">
		<img src="logo.jpg" alt="" style="height: 100px; display: block; margin: 0 auto;"> <br>
     	<h2>COURSE PORTAL</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
		
     	<label>Course</label>
     	<input type="text" name="uname" placeholder="Course"><br>

     	<label>Course Code</label>
     	<input type="password" name="password" placeholder="Course Code"><br>

     	<button type="submit">Login</button>
          <a href="signup.php" class="ca">Register Course</a>
		  <a href="home.html" class="ca" style="color: red;">Home</a>

     </form>
</body>
</html>