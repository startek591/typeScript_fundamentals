for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i2 = 0;
for (; i2 < 10; i2++) {
  console.log(i2);
}

let i3 = 0;
for (;;) {
  console.log(i3);
  i3++;
  if (i3 > 9) break;
}
