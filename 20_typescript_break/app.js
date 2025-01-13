var products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 },
];
for (var i = 0; i < products.length; i++) {
    if (products[i].name === 'tablet')
        break;
}
console.log(products[i]);
var discount = 0;
var product = products[i];
switch (product.name) {
    case 'phone':
        discount = 5;
        break;
    case 'tablet':
        discount = 10;
        break;
    case 'laptop':
        discount = 15;
        break;
}
console.log("There is a ".concat(discount, "% on ").concat(product.name, "."));
