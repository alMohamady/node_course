const {readFile, writeFile} = require('fs');


readFile('./content/almohamady.txt','utf-8', (err, result) => {

    var myResult, myResult2;
    if (err) {
        console.log(err);
        return;
    } else {
        myResult = result;
        console.log(result);
        readFile('./content/myFolder/test.txt', 'utf-8', (err2, result2) => {

            if (err2) {
                console.log(err2);
                return;
            }
            myResult2 = result2;
            console.log(myResult2);
            writeFile( "./content/result-async.txt", `1 : ${myResult} , 2 : ${myResult2}`,{flag: 'a'} , (wErr, wResult) => {
                 if (wErr){
                     console.log(wErr);
                     return;
                 }
                 console.log(wResult);
                 console.log('Done :)');
            });
        });
    } 
});


