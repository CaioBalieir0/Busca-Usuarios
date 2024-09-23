const a = [1, 2, 3];
const b = [1, 2, 3];

const c = a.filter((as) => !b.some((bs) => bs === as));

console.log(c);
