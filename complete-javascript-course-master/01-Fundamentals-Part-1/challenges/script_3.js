const dolph1 = 96;
const dolph2 = 108;
const dolph3 = 89;
const koala1 = 88;
const koala2 = 91;
const koala3 = 110;

const avgDolphins = (dolph1 + dolph2 + dolph3) / 3;
const avgKoalas = (koala1 + koala2 + koala3) / 3;

bothMin = avgKoalas >= 100 || avgDolphins >= 100;
dw = avgDolphins > avgKoalas && avgDolphins >= 100;
kw = avgKoalas > avgDolphins && avgKoalas >= 100;

if (dw) console.log(`Dolphin's win: D(${avgDolphins}) K(${avgKoalas})`);
else if (kw) console.log(`Koalas's win: D(${avgDolphins}) K(${avgKoalas})`);
else if (bothMin && avgKoalas === avgDolphins)
  console.log(`Draw: D(${avgDolphins}) K(${avgKoalas})`);
else console.log(`Nobody's win: D(${avgDolphins}) K(${avgKoalas})`);
