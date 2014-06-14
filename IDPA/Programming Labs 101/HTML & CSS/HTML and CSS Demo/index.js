// JavaScript Document
// JavaScript Document
function order()
{
	var qtySmash64, qtyMelee, qtyBrawl;
	var smash64Amt, meleeAmt, brawlAmt;
	var subTotal, total, tax, taxAmt;
	
	taxAmt = 5 / 100;
	
	qtySmash64 = parseInt(document.orderForm.smash64.value);
	qtyMelee = parseInt(document.orderForm.melee.value);
	qtyBrawl = parseInt(document.orderForm.brawl.value);
	
	if(isNaN(qtySmash64))
	{
		qtySmash64 = 0;
	}
	
	if(isNaN(qtyMelee))
	{
		qtyMelee = 0;
	}
	
	if(isNaN(qtyBrawl))
	{
		qtyBrawl = 0;
	}
	
	smash64Amt = qtySmash64 * 19.99;
	meleeAmt = qtyMelee * 34.99;
	brawlAmt = qtyBrawl * 49.99;
	
	subTotal = smash64Amt + meleeAmt + brawlAmt;
	
	tax = subTotal * taxAmt;
	
	total = subTotal + tax;
	
	document.getElementById("confirmation").innerHTML = "<b>Your Order:</b> " + "<br>" + 
    "Amount of " + "<em>Smash 64</em> " + "copies ordered: " + qtySmash64 + "<br>" +
	"Amount of " + "<em>Melee</em> " + "copies ordered: " + qtyMelee + "<br>" + 
	"Amount of " + "<em>Brawl</em> " + "copies ordered: " + qtyBrawl + "<br>" + "<br>" +
	"Total amount for " + "<em>Smash 64</em>: " + "$" + smash64Amt + "<br>" +
	"Total amount for " + "<em>Melee</em>: " + "$" + meleeAmt + "<br>" +
	"Total amount for " + "<em>Brawl</em>: " + "$" + brawlAmt + "<br>" + "<br>" +
	"Subtotal: " + "$" + subTotal + "<br>" +
	"Tax (5%): " + "$" + tax.toFixed(2) + "<br>";
	
	document.orderForm.total.value = "$" + total.toFixed(2);
}

function addLoadEvent(funct)
{
	var oldOnLoad = window.onload;
	
	if(typeof window.onload != "function")
	{
		window.onload = funct;
	}
	else
	{
		window.onload = function()
		{
			oldOnLoad();
			funct();
		}
	}
}

function getDataTables()
{
	if(!document.getElementsByTagName)
	{
		return false;
	}
	
	var tables = document.getElementsByTagName("table");
	
	for(var i = 0; i < tables.length; i++)
	{
		if(tables[i].className === "datatable")
		{
			stripes(tables[i]);
		}
	}
}

function stripes(table)
{
	var tableRows = table.getElementsByTagName("tr");
	
	for(var i = 0; i < tableRows.length; i++)
	{
		if((i % 2) !== 0)
		{
			tableRows[i].className = "trlight";
		}
	}
}

addLoadEvent(getDataTables);