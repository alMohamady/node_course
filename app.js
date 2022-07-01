const {readFile} = require('fs');

const getText = (pass) => {
    return new Promise((resolve, reject) => {
        readFile(pass, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

/*getText('./content/almohamadyXxcz.txt')
     .then((result) => console.log(result))
     .catch((err) => console.log(err));*/
const start = async() => {
    try {
        const file1 = await getText('./content/almohamady.txt');
        const file2 = await getText('./content/myFolder/test.txt');
        console.log(file1, file2);
    }
    catch(err) {
        console.log(err);
    }
}

start();