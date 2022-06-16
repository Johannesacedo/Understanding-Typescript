"use strict";
function AddandHandle(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
AddandHandle(10, 20, (result) => {
    console.log(result);
});
