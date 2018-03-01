// JavaScript Document	
	// B	A	K	E	D		G	O	O	D	S
	//GRANDMA  FUNCTIONS
		//Grandma Bake
			window.onload = function() {
				//Normal Grandma
				setInterval(grandmaBake, 4000);
				//LVL1 Grandma
				setInterval(grandmaBakeL1, 4000);
				//LVL2 Grandma
				setInterval(grandmaBakeL2, 4000);
				//LVL3 Grandma
				setInterval(grandmaBakeL3, 4000);
				//LVL4 Grandma
				setInterval(grandmaBakeL4, 4000);
			};
				//Normal GrandmaBake
					function grandmaBake() {
					cookie_ += grandma;
					document.getElementById("cookie_").innerHTML=cookie_;
					}
			//Get Grandmas
				//Normal Grandma; Cookie
					var grandma = 0;
					function getGrandma() {
						if (cookie_ >= 10) {
							cookie_ -= 10;
							grandma += 1;
							document.getElementById("cookie_").innerHTML = cookie_;
							document.getElementById("grandma").innerHTML = grandma;
						}
						else if (cookie_ < 10) {
							alert("not enough cookies! try to get at least ten to buy a grandma! :..)");
						}
					}
				
			//Grandma Lvl1; Baguette
				var grandmaL1=0;
				function getGrandmaL1() {
					if (baguette >= 15) {
					baguette -= 15; 
					grandmaL1 += 1;
						document.getElementById("baguette").innerHTML=baguette;
						document.getElementById("grandmaL1").innerHTML=grandmaL1;
					} 
					else if (baguette < 15) {
						alert("not enough baguettes to buy a grandma! get at least 15 baguettes to bribe a good grandma.");
						}
					}
			function grandmaBakeL1() {
				if (grandmaL1 >= 1) {
					baguette += grandmaL1; 
					cookie_ += grandmaL1;
						document.getElementById("baguette").innerHTML=baguette;
						document.getElementById("cookie_").innerHTML=cookie_;
					}
				else if (grandmasL1 < 1) {
					alert("you don't have any level 1 grandmas! bribe one using 15 baguettes.");	
				}
				}
		//Grandma Lvl2; Bread
			var grandmaL2=0;
			function getGrandmaL2() {
			if (bread >= 20) {
				bread -= 20; grandmaL2 += 1;
					document.getElementById("bread").innerHTML=bread;
					document.getElementById("grandmaL2").innerHTML=grandmaL2;
			}
			else if (bread < 20) {
				alert("not enough bread to bribe! get at least 20 to buy a level 2 grandma.");	
			}
			}
			function grandmaBakeL2() {
				if (grandmaL2 >= 1) {
					bread += grandmaL2;
					cookie_ += grandmaL2;
					baguette += grandmaL2;
					
				document.getElementById("bread").innerHTML= bread;	
				document.getElementById("cookie_").innerHTML= cookie_;	
				document.getElementById("baguette").innerHTML= baguette;	
				}
			}
		//Grandma Lvl3; Brownie
			var grandmaL3=0;
			function getGrandmaL3() {
			if (brownie >= 25) {
				brownie -= 25; 
				grandmaL3 += 1;
				document.getElementById("brownie").innerHTML=brownie;
				document.getElementById("grandmaL3").innerHTML=grandmaL3;
			}
			else if (brownie < 25) {
				alert("not enough brownies! get at least 25 brownies to bribe a grandma to bake for you!");	
			}
			}
			function grandmaBakeL3() {
				if (grandmaL3 >= 1) {
					cookie_ += grandma*2;
					baguette += grandma*2;
					bread += grandma;
					brownie += grandma;
					
					document.getElementById("cookie_").innerHTML = cookie_;
					document.getElementById("baguette").innerHTML = baguette;
					document.getElementById("bread").innerHTML = bread;
					document.getElementById("brownie").innerHTML = brownie;
				}
			}
		// Grandma Lvl4; Croissant
			var grandmaL4=0;
			function getGrandmaL4() {
				if (croissant >= 30) {
					croissant -= 30; 
					grandmaL4 += 1;
					document.getElementById("croissant").innerHTML=croissant;
					document.getElementById("grandmaL4").innerHTML=grandmaL4;	
				}
				else if (croissant < 30) {
					alert("not enough croissants!!! get 30 to bribe the grandma to bake for you!");	
				}
			}
			function grandmaBakeL4() {
				if (grandmaL4	>= 1) {
					cookie_ += grandma*3;
					baguette += grandma*2;
					bread += grandma*2;
					brownie += grandma;
					croissant += grandma;
					
					document.getElementById("cookie_").innerHTML = cookie_;
					document.getElementById("baguette").innerHTML = baguette;
					document.getElementById("bread").innerHTML = bread;
					document.getElementById("brownie").innerHTML = brownie;
					document.getElementById("croissant").innerHTML = croissant;
				}
			}
	//FOOD COUNTERS
		// Cookie
			var cookie_ = 0;
			function cookieClick() {
							cookie_ += 1;
							document.getElementById("cookie_").innerHTML = cookie_;
			}			
		//Baguette
			var baguette = 0;
			function baguetteClick() {
				baguette += 1;
				document.getElementById("baguette").innerHTML = baguette;
			}
		//Bread
			var bread = 0;
			function breadClick() {
				bread += 1;
				document.getElementById("bread").innerHTML = bread;
			}	
		// Brownie
			var brownie = 0;
			function brownieClick() {
				brownie += 1;
				document.getElementById("brownie").innerHTML = brownie;
			}
		//Croissant
						var croissant = 0;
				function croissantClick() {
						croissant += 1;
						document.getElementById("croissant").innerHTML = croissant;
				}
//	D	E	S	S	E	R	T	S		
	//BAKER FUNCTIONS
		//Normal Baker; Cheesecake
			var baker = 0;
			function getBaker() {
				if (cheesecake >= 10) {
					cheesecake -= 10;
						document.getElementById("cheesecake").innerHTML = cheesecake;
					baker += 1;
						document.getElementById("baker").innerHTML = baker;
				}
				else if (cheesecake < 10) {
					alert("not enough cheesecake to bribe a pastry chef to bake for you! get at least 10 cheesecakes.");
				}
			}
			function bakerBake() {	
				if (baker >= 1) {
						cheesecake += baker;
							document.getElementById("cheesecake").innerHTML = cheesecake;
					}
				else if (baker < 1) {
					alert("not enough bakers to bake for you! get at least one to start baking.")	
				}
			}
		//Baker Lvl1; 
		var bakerL1 = 0;
		function getbakerL1() {
			if (taiyaki >= 15) {
				taiyaki -= 15;
					document.getElementById("taiyaki").innerHTML = taiyaki;
				bakerL1 += 1;
					document.getElementById("bakerL1").innerHTML = bakerL1;
			}
			else if (taiyaki < 15) {
				alert("not enough taiyaki to bribe a baker to bake for you! get at least 15 taiyaki.");
			}
		}
		function bakerBakeL1() {
			if (bakerL1 >= 1) {
				cheesecake += bakerL1;
				taiyaki += bakerL1;
					document.getElementById("cheesecake").innerHTML = cheesecake;
					document.getElementById("taiyaki").innerHTML = taiyaki;
			}
			else if (bakerL1 < 1) {
				alert("not enough bakers to bake for you! get at least 1");
			}
			}
		//Baker Lvl2;
				var bakerL2 = 0;
		function getbakerL2() {
			if (gelato >= 20) {
				gelato -= 20;
					document.getElementById("gelato").innerHTML = gelato;
				bakerL2 += 1;
					document.getElementById("bakerL2").innerHTML = bakerL2;
			}
			else if (gelato < 15) {
				alert("not enough gelato to bribe a baker to bake for you! get at least 20 gelato.");
			}
		}
		function bakerBakeL2() {
			if (bakerL2 >= 1) {
				cheesecake += bakerL2;
				taiyaki += bakerL2;
				gelato += bakerL2;
					document.getElementById("cheesecake").innerHTML = cheesecake;
					document.getElementById("taiyaki").innerHTML = taiyaki;
					document.getElementById("gelato").innerHTML = gelato;
			}
			else if (bakerL2 < 1) {
				alert("not enough bakers to bake for you! get at least 1.");
			}
			}
	//FOOD COUNTERS
		//Cheesecake
						var cheesecake = 0;
				function cheesecakeClick() {
						cheesecake += 1;
						document.getElementById("cheesecake").innerHTML = cheesecake;
				}
						
		//Taiyaki
						var taiyaki = 0;
				function taiyakiClick() {
						taiyaki += 1;
						document.getElementById("taiyaki").innerHTML = taiyaki;
				}
				
		//Gelato
						var gelato = 0;
				function gelatoClick() {
						gelato += 1;
						document.getElementById("gelato").innerHTML = gelato;
				}
				
		//Churros
		var churros = 0;
				function churrosClick() {
						churros += 1;
						document.getElementById("churros").innerHTML = churros;
				}
				
		//Chocolate mousse
		var mousse=0;
		function mousseClick() {
			mousse +=1;
			document.getElementById("mousse").innerHTML=mousse;
		}

//Coffee
var coffee=0;
function coffeeClick() {
	coffee +=1;
	document.getElementById("coffee").innerHTML=coffee;
}

//Coke
var coke=0;
function cokeClick() {
	coke +=1;
	document.getElementById("coke").innerHTML=coke;
}

//Dr. Pepper
var drpepper=0;
function drpepperClick() {
	drpepper +=1;
	document.getElementById("drpepper").innerHTML=drpepper;
}
//Jarritos
var jarritos=0;
function jarritosClick() {
	jarritos +=1;
	document.getElementById("jarritos").innerHTML=jarritos;
}

//Tea
var tea=0;
function teaClick() {
	tea +=1;
	document.getElementById("tea").innerHTML=tea;
}

// F	A	S	T		F	O	O	D
//Fries
var fries=0;
function friesClick() {
	fries +=1;
	document.getElementById("fries").innerHTML=fries;
}

//Hotdog
var hotdog=0;
function hotdogClick() {
	hotdog +=1;
	document.getElementById("hotdog").innerHTML=hotdog;
}

//Pizza
var pizza=0;
function pizzaClick() {
	pizza +=1;	
	document.getElementById("pizza").innerHTML=pizza;
}
//Nacho
var nacho=0;
function nachoClick() {
	nacho +=1;
	document.getElementById("nacho").innerHTML=nacho;
}

//Pringles
var pringles=0;
function pringlesClick() {
	pringles +=1;
	document.getElementById("pringles").innerHTML=pringles;
}

//M	E	A	T
//Cooked Chicken
var chicken=0;
function chickenClick() {
	chicken +=1;
	document.getElementById("chicken").innerHTML=chicken;
}

//Escargot
var escargot=0;
function escargotClick() {
	escargot +=1;
	document.getElementById("escargot").innerHTML=escargot;
}

//Lamb Chops
var lamb=0;
function lambClick() {
	lamb +=1;
	document.getElementById("lamb").innerHTML=lamb;
}

//Steak
var steak=0;
function steakClick() {
	steak +=1;
	document.getElementById("steak").innerHTML=steak;
}

//S	W	E	E	T	S
//Haribo
var haribo=0;
function hariboClick() {
	haribo +=1;
	document.getElementById("haribo").innerHTML=haribo;
}

//Kit Kat
var kitkat=0;
function kitkatClick() {
	kitkat +=1;
	document.getElementById("kitkat").innerHTML=kitkat;
}

//Milkshakes
var milkshakes=0;
function milkshakesClick() {
	milkshakes +=1;
	document.getElementById("milkshakes").innerHTML=milkshakes;
}

//Skittles
var skittles=0;
function skittlesClick() {
	skittles +=1;
	document.getElementById("skittles").innerHTML=skittles;
}

//Trolli
var trolli=0;
function trolliClick() {
	trolli +=1;
	document.getElementById("trolli").innerHTML=trolli;
}


//F	R	E	S	H		F	R	U	I	T
//Avocado
var avocado=0;
function avocadoClick() {
	avocado +=1;
	document.getElementById("avocado").innerHTML=avocado;
}

//Bell Pepper
var bellpepper=0;
function bellpepperClick() {
	bellpepper +=1;
	document.getElementById("bellpepper").innerHTML=bellpepper;
}

//Bok Choy
var bokchoy=0;
function bokchoyClick() {
	bokchoy +=1;
	document.getElementById("bokchoy").innerHTML=bokchoy;
}

//Broccoli
var broccoli=0;
function broccoliClick() {
	broccoli +=1;
	document.getElementById("broccoli").innerHTML=broccoli;
}

//Carrot
var clicks42=0;
function carrotClick() {
	carrot +=1;
	document.getElementById("carrot").innerHTML=carrot;
}

// Z u c c h i n i
	//Counter Clicker
	var zucchini=0;
	function zucchiniClick() {
		zucchini +=1;
		document.getElementById("zucchini").innerHTML=zucchini;
	}
//Cherry
var cherry=0;
function cherryClick() {
	cherry +=1;
	document.getElementById("cherry").innerHTML=cherry;
}

//Grape
var grape=0;
function grapeClick() {
	grape +=1;
	document.getElementById("grape").innerHTML=grape;
}

//Mango
var mango=0;
function mangoClick() {
	mango +=1;
	document.getElementById("mango").innerHTML=mango;
}

//Pineapple
var pineapple=0;
function pineappleClick() {
	pineapple +=1;
	document.getElementById("pineapple").innerHTML=pineapple;
}
