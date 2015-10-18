var client = require('firebase-tools');

console.log(process.env.FIREBASE_TOKEN);

client.login({
    email: process.env.FIREBASE_USER,
    password: process.env.FIREBASE_PASSWORD
}).then(function () {
    console.log('Firebase has logged');
    client.deploy({
        firebase: 'sloppy',
        token: process.env.FIREBASE_TOKEN,
        cwd: '.'
    }).then(function () {
        console.log('Angulpar has been deployed in production!');
        process.exit(0);
    }).catch(function (err) {
        // handle error
        console.log(err);
        process.exit(1);
    });
}).catch(function (err) {
    // handle error
    console.log(err);
    process.exit(1);
});

