var unknownRole = function (role) {
    throw new Error("Invalid role: ".concat(role));
};
var authorize = function (role) {
    switch (role) {
        case 'admin':
            return 'You can do anything';
        case 'user':
            return 'You can do something';
        case 'guest':
            return 'You can do nothing';
        default:
            return unknownRole(role);
    }
};
console.log(authorize('admin'));
