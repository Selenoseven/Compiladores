[10,2].forEach(j => {
  new Array(j).fill('').forEach((v, i) => {
    console.log(
      [
        ...new Array(9-i).fill('.'),
        ...new Array(1+i*2).fill('^'),
        ...new Array(9-i).fill('.')
      ].join('')
    );
  });
});