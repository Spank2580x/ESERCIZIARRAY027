/*
ESERCIZIO 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
function sumwhileneg(myarray)
{
	var tot=0;
	for(i=0; i<myarray.length;i++)
	{
		var x =myarray[i];
		if(x>0)
		{
			tot+=x;
		}
		else
		{
			return tot;
		}	
	}
	return tot;
}
//_____________________________________________________
function sumwhilenegR(myarray)
{
	if(myarray.length==0||myarray[0]<0)
	{
		return 0;
	}
	else
	{
	return myarray[0]+ sumwhilenegR(myarray.slice(1));
	}
}
//________________________________________________________________________________
//
function ex_1_I(myarray)
{
return sumwhileneg(myarray);
}

function ex_1_R(myarray)
{
return sumwhilenegR(myarray);
}
//__________________________________________________________________________________________
/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

function firstOdd(n) 
{
    var tot = 0;
    for(i = 0; i < n; ++i) 
    {
        tot += 1 + 2 * i;
    }
    return tot;
}
//________________________________________________________________
function firstOddR(n) 
{
    if (n == 0) 
    {
        return 0;
    }
    else
    {
        return 2 * n - 1 + firstOddR(n - 1);
    }
}
//_____________________________________________________________________________
function ex_2_I(x) 
{
    return firstOdd(x);
}

function ex_2_R(x) 
{
    return firstOddR(x);
}
//_________________________________________________________________________________________________________
/*
ESERCIZIO 3
Dato un array di 10 elementi, calcolarne la media
*/

function avg(myarray)
{
     var sum=0;
     for(i=0;i<10;i++)
     {
	sum+=myarray[i];
     }
     var avg= sum/10;
     return sum;
}


//_____________________________________________________________
/*ESERCIZIO 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri

compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,

calcolare la somma nell’intervallo [b,a]

*/
function sumInterval(a, b)
{ 
            var sum = 0;
            var c = 0;
            if (b < a)
	    {
                c = a;
                a = b;
                b = c;
            }
            for (a; a <= b; a++) 
	    {
                sum += a;
            }
            return sum;
}
//_______________________________________________________________________________________
/*ESERCIZIO 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo

operatore somma.*/
function mult(a,b)
{var sum;
if((a>=0)&&(b>=0))
	{
	for(i=0;i<a;i++)
	{
	    sum+=b;	
	}
	return sum;
	}
}
//______________________________________________________________________________________________
/* ESERCIZIO 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite

l’utilizzo dei soli operatori somma e sottrazione.*/
function div(a, b) 
{
            var c = 0;
            var h = 0;
            for (a; a >= b; a -= b) 
	    {
                c = a - b;
                h++;
            }
            return h + "resto" + c;
}
//__________________________________________________________________________________________________
/* ESERCIZIO 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli

operatori somma, sottrazione e della funzione mult.*/
function elevated(a, b) 
{ 
            if (b == 0) return 1;
            if (b == 1) return a;
            var ris = a;
            for (var i = 2; i <= b; i++) 
	    {
                ris = mult(ris, a);
            }
            return ris;
}
/*____________________________________________________________________________________
ESERCIZIO 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli

oggetti in un array bidimensionale n x n.*/



























































