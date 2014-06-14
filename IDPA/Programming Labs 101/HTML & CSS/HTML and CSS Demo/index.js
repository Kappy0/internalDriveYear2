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
	
	document.getElementById("confirmation").innerHTML = "Your Order:" + "\n" +
    "Amount of " + "Smash 64 " + "copies ordered: " + qtySmash64 + "\n" +
	"Amount of " + "Melee " + "copies ordered: " + qtyMelee + "\n" + 
	"Amount of " + "Brawl " + "copies ordered: " + qtyBrawl + "\n" + "\n" +
	"Total amount for " + "Smash 64: " + "$" + smash64Amt.toFixed(2) + "\n" +
	"Total amount for " + "Melee: " + "$" + meleeAmt.toFixed(2) + "\n" +
	"Total amount for " + "Brawl: " + "$" + brawlAmt.toFixed(2) + "\n" + "\n" +
	"Subtotal: " + "$" + subTotal.toFixed(2) + "\n" +
	"Tax (5%): " + "$" + tax.toFixed(2) + "\n" + "\n" +
	"Your total (with tax): " + "$" + total.toFixed(2);
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