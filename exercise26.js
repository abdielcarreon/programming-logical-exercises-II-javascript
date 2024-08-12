//Every recharge gasoline cost 10 euros 
//To get the gasoline memerbership cost 90 euros yearly
//Every recharge gasoline with the membership descount 78% of the initial cost but just until 50%
//Evaluating if better to get the membership or paid the regular cost


function theBetterOption(rechargesNumber) {
    let costEveryRechargeRegular = 10 * rechargesNumber;
    let costEveryRechargeMembership = 10;
    let costMembership = 90;
    let fixedRateDiscount = .78
    let totalWithDiscount = 0;
    let sumRecharges = 0;
    let residue = 0;
    let justOneRecharge = costEveryRechargeMembership * fixedRateDiscount;
    let totalYearlyDiscount = 0;

    while((costEveryRechargeMembership * fixedRateDiscount) >= 5) {
        totalWithDiscount = costEveryRechargeMembership * fixedRateDiscount;
        costEveryRechargeMembership = totalWithDiscount;    

        // In two gasoline recharges
        sumRecharges += totalWithDiscount

        // Getting the remainder to be able to define equalizing the percentage to 50%
        residue = totalWithDiscount % 5;
    
        // Getting how many percent will have to subtract and so can obtain the 50%
        residue = (residue * 78) / (totalWithDiscount * .78)
    }
    if (!rechargesNumber) {
        return 'You need adding a recharges number';
    } else if(rechargesNumber === 1) {
        totalYearlyDiscount = justOneRecharge + costMembership;
    }
    else if(totalWithDiscount !== 0 && rechargesNumber > 2) {
        let fiftyPercent = (totalWithDiscount - (totalWithDiscount * residue) / 100)
        totalYearlyDiscount = (((fiftyPercent * rechargesNumber) + sumRecharges) + costMembership) - fiftyPercent * 2;
        
    } else {
        totalYearlyDiscount = sumRecharges + costMembership;
    }
 
    if(totalYearlyDiscount < costEveryRechargeRegular) {
        return `It's convenient to get the membership, the total = ${totalYearlyDiscount}`;
    } else {
        return `Isn't convenient to get the membership, the total = ${totalYearlyDiscount}`;
    }
}

console.log(theBetterOption(4))










