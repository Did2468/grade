let oops,dsa,coa,mat,oe1,oe2,tot;

document.getElementById("submit").onclick = function() {
	
	oops = ((Number(document.getElementById("oops-se1").value) * 0.3) + (Number(document.getElementById("oops-le").value) * 0.25) + (Number(document.getElementById("oops-se2").value) * 0.45));
	
	oops = oops*0.7;
	oops = oops + (Number(document.getElementById("oops-lab").value) *0.3);
	oops = final(oops);
	
	dsa = ((Number(document.getElementById("dsa-se1").value) * 0.3) + (Number(document.getElementById("dsa-le").value) * 0.25) + (Number(document.getElementById("dsa-se2").value) * 0.45));
	
	dsa = dsa*0.7;
	dsa = dsa + (Number(document.getElementById("dsa-lab").value) *0.3);
	dsa = final(dsa);
	
	coa = ((Number(document.getElementById("coa-se1").value) * 0.3) + (Number(document.getElementById("coa-le").value) * 0.25) + (Number(document.getElementById("coa-se2").value) * 0.45));
	coa=final(coa);
	
	mat = ((Number(document.getElementById("mat-se1").value) * 0.3) + (Number(document.getElementById("mat-le").value) * 0.25) + (Number(document.getElementById("mat-se2").value) * 0.45));
	mat = final(mat);
	
	oe1 = ((Number(document.getElementById("oe1-se1").value) * 0.3) + (Number(document.getElementById("oe1-le").value) * 0.25) + (Number(document.getElementById("oe1-se2").value) * 0.45));
	oe1 =final(oe1)
	
	oe2 = ((Number(document.getElementById("oe2-se1").value) * 0.3) + (Number(document.getElementById("oe2-le").value) * 0.25) + (Number(document.getElementById("oe2-se2").value) * 0.45));
	oe2 = final(oe2);
	tot = (((oops*4)+(dsa*4)+(coa*4)+(mat*4)+(oe1*3)+(oe2*3))+9)/23;
	document.getElementById("Final").textContent = `Your final grade is ${tot}`;
}

function final(x) {

	if(x>9 && x<=10)
	{
		return 10;
	}
	else if(x>8 && x<=9)
	{
		return 9;
	}
	else if(x>7 && x<=8)
	{
		return 8;
	}
	else if(x>6 && x<=7)
	{
		return 7;
	}
	else if(x>5 && x<=6)
	{
		return 6;
	}
	else if(x>4 && x<=5)
	{
		return 5;
	}
	else
	{
		return 0;
	}
}
