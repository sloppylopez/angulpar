var client = require('firebase-tools');

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