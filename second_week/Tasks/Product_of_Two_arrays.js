var size=10, i, multiarr1=[10], multiarr2=[10], multiplication=[10];
	
	
	
	
	for(i = 0; i < size; i++)
	{
		multiarr1[i]=i;
        multiarr2[i]=i+1;
	}	

	
	for(i = 0; i < size; i++)
	{
		multiplication[i] = multiarr1[i] * multiarr2[i];
		console.log( multiarr1[i] << " * " << multiarr2[i] << " = " << multiplication[i] << "\n");
	}
	console.log("\nThe Final Result of Multiplying two Arrays = ");
	for(i = 0; i < size; i++)
	{
		console.log(multiplication[i] + " ");
	}
