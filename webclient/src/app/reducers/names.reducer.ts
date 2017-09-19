export let reducer = (acc, name) => {

  const count = acc[name];
  // VORHER: acc[name] = count ? count + 1 : 1;

  const newAcc = acc.set(name, count ? count + 1 : 1);
  return newAcc;
};

// Expected
// Object({ test: 2 }) to be
// Object({ Erich: 1, Richard: 2, Ralph: 1, John: 1 }).
