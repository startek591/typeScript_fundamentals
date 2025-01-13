function applyDiscount(
  price: number,
  discount: number = 0.05
): number {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

function getDay(
  year: number = new Date().getFullYear(),
  month: number
): number {
  let day = 0;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        day = 29;
      } else day = 28;
      break;
    default:
      throw new Error('Invalid month');
  }
  return day;
}

let day = getDay(2019, 2);
console.log(day);

let day2 = getDay(undefined, 2);
console.log(day2);
