"use strict";



function calculate () {
	var kwotaStart = document.getElementById("kapital_poczatkowy").value;
	//pobieram wartosc kapitału poczatkowego w PLN 

	var stopaZwrotu = document.getElementById("stopa_zwrotu").value;
	
	var lata = document.getElementById("lata").value;

	var podatekBelka = document.getElementById("podatek").value;  //podatek
	
	var e = document.getElementById("czestotliwosc");
	var czestotliwosc = e.options[e.selectedIndex].value;
//	console.log("czestotliwosc to: " + czestotliwosc);
	
	
	var wynik;
	var wykladnik = lata*czestotliwosc;
	stopaZwrotu=stopaZwrotu/100;
//	console.log("Stopa zwrotu: " + stopaZwrotu);
	wynik = 1+(stopaZwrotu/czestotliwosc);
	wynik = Math.pow(wynik,wykladnik);
	wynik = kwotaStart*wynik;
	console.log(wynik);
//	return wynik;
	podatekBelka=wynik-0.19*(wynik-kwotaStart);
	if(document.getElementById("podatek").checked == true){
		document.getElementById("display").innerHTML = "Zysk z uwzględnieniem podatku: " + podatekBelka;
	}else{
	document.getElementById("display").innerHTML = "Zysk bez uwzględnienia podatku: " + wynik;
	}
	
}


var result = document.getElementById("licz").addEventListener("click", calculate);

//console.log(result);



