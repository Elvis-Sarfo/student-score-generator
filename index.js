var classes = [];
var sumOfAvr =[];


for (let x = 0; x < 9; x++) {
    var _class = [];
    for (let y = 0; y < 9; y++) {
        var subMarksArray = [];
        for (let z = 0; z < 3; z++) {
            if ((x == 0 || x == 1 || x == 2) && (y == 1 || y == 4)) { // y == 1 || y == 4 ||  y == 8
                subMarksArray.push(0);
            } else if ((x == 0 || x == 1 || x == 2 || x == 3 || x == 4 || x == 5)
                && (y == 8)) { // y == 1 || y == 4 ||  y == 8
                subMarksArray.push(0);
            } else if ((x == 8)
                && (z == 1 || z == 2)) { // y == 1 || y == 4 ||  y == 8
                subMarksArray.push(0);
            }
            else {
                subMarksArray.push(Math.floor(getRandomArbitrary(70, 95)));
            }
        }
        _class.push(subMarksArray);
    }
    classes.push(_class);
}


// todo: gen array of number
for (let x = 0; x < classes.length; x++) {
    const _class = classes[x];
    var _sum = 0, sumAvr, tracker = 0;
    for (let y = 0; y < _class.length; y++) {
        const subject = _class[y];
        var sum = 0, _sum = 0, avr, sumAvr, tracker = 0;
        subject.forEach((subjectMark, z)=> {
            sum += subjectMark;
        });
        if ((x == 8) && 1) {
            avr = classes[x][y][0];
        } else {
            avr = sum / subject.length;
        }
        subject.push(Math.floor(avr));
    }
    // if (subject[3] != 0) {
    //     _sum += subject[3];
    //     ++tracker
    // }
    // sumOfAvr.push(Math.floor(_sum / tracker));
}



// for (let x = 0; x < classes.length; x++) {
//     const _class = classes[x];
//     var sumAvr
//     if (_class[x][3]) {
        
//     }
//     _class[x][3];
    
// }




console.log(classes, sumOfAvr);


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}