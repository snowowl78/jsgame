/*
var names = ['Alex','Billy','Joshua'];

for (name in names){
    console.log(names[name]);
}

for (var i = 0; i < names.length; i++) {
    console.log('for ' + names[i]);
}

*/

var stonesAtRows = [3, 4, 5],
    c = 0, 
    r = '',
    rows,
    amount,
    output = '';

while (r !== 'n'){
    build();
    promptUser();
    r = prompt('Nochmal?');
}



function build() {
    for (var j = 0; j < stonesAtRows.length; j++){
        output += 'row ' + (j+1) +': ';
        if (stonesAtRows[j] == 0) {
            output += '<br>';
        }
        else {
            for (var k = 1; k <= stonesAtRows[j]; k++) {
                output += '0 ';
                if  (k == stonesAtRows[j]) {
                    output += '<br>';
                }
            }
        }
    }
    console.log(output);
    document.write('<div>'+output+'</div');
}

function promptUser() {
    rows = prompt(output + '\n'+ 'Reihe?');
    amount = prompt('Menge');
}

function reduceStonesAtRow() {
    stonesAtRows[rows] -= amount;
    for (i=0; i<3; i++) {
        if (stonesAtRows[i] !== 0) {
            break;
        } 
        else {
            c = 1;
        }
    }
} 


