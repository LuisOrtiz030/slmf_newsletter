const { google } = require('googleapis');
const keys = require('./keys.json');
const infoSheet = require('./infoGS.json')


windows.addEventListener('load', () => {

    const vm = new Vue({
        el: '#app',

        data: {

            mensaje: "Hola Vue"

        }

    })


})





const client = new google.auth.JWT(

    keys.client_email,
    null,
    keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']

);

client.authorize(async function(err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(`${"¡Conectado!"}`)
        await gsrun(client, "A1")
    }
});



async function gsrun(cl, celda) {

    const gsapi = google.sheets({ version: 'v4', auth: cl })
    const opt = {

        spreadsheetId: infoSheet.ssId,
        range: `${infoSheet.nameSheet}${celda}`

    };

    let data = await gsapi.spreadsheets.values.get(opt)

    console.log(data.data.values);
}