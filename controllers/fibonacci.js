'use strict';

function serieFib(n){
    try {
        let fibon;
        let fibon0;
        let fibon1;
        let i;

        fibon0 = 0;
        fibon1 = 1;

        for (i = 1; i < n; i++) {
            fibon=fibon0+fibon1;
            fibon1=fibon0;
            fibon0=fibon;
        }
        return fibon;
    } catch (error) {
        console.log(error);
        return 0;
    }
    
}

module.exports = {
    serieFib
};