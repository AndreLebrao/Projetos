let johnBodyWeight, johnHeight, markBodyWeight, markHeight;
//Data 1
johnBodyWeight = 92;
johnHeight = 1.95;
markBodyWeight = 78;
markHeight = 1.69;
//Data 2
johnBodyWeight = 85;
johnHeight = 1.76;
markBodyWeight = 95;
markHeight = 1.88;

johnBMI = johnBodyWeight / johnHeight ** 2;
markBMI = markBodyWeight / markHeight ** 2;

markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}
