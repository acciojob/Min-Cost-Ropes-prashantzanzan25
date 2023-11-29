function mincost(arr)
{ 
//write your code here
// return the min cost
	if (!arr.length){ 
		return 0;
	}
	arr.sort((a, b) => a - b);
	
	let minCost = 0;
	for (let i = 1; i < arr.length; i++) {
	    minCost += arr[i - 1] + arr[i];
	}
	return minCost;
}

module.exports=mincost;
