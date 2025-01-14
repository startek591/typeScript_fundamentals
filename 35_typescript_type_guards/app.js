function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
// instanceof
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        return true;
    };
    return Supplier;
}());
function signContract(partner) {
    var message;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed()
            ? 'Sign a new contract with the customer'
            : 'Credit issue';
    }
    else {
        message = partner.isInShortList()
            ? 'Sign a new contract with the supplier'
            : 'Need to evaluate further';
    }
    return message;
}
// in operator
function signContract2(partner) {
    var message;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed()
            ? 'Sign a new contract with the customer'
            : 'Credit issue';
    }
    else {
        message = partner.isInShortList()
            ? 'Sign a new contract with the supplier'
            : 'Need to evaluate further';
    }
    return message;
}
// user-defined type guards
function isCustomer(partner) {
    return partner instanceof Customer;
}
function signContract3(partner) {
    var message;
    if (isCustomer(partner)) {
        message = partner.isCreditAllowed()
            ? 'Sign a new contract with the customer'
            : 'Credit issue';
    }
    else {
        message = partner.isInShortList()
            ? 'Sign a new contract with the supplier'
            : 'Need to evaluate further';
    }
    return message;
}
