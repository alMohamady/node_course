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

getText('./content/almohamadyXxcz.txt')
     .then((result) => console.log(result))
     .catch((err) => console.log(err));
