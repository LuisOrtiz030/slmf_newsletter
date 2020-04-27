const { google } = require('googleapis');
const keys = require('./keys.json');


const client = new google.auth.JWT(

    keys.client_email,
    null,
    keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']

);

client.authorize(function(err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(`${"¡Conectado!"}`)
        gsrun(client)
    }
});


async function gsrun(cl) {

    const gsapi = google.sheets({ version: 'v4', auth: cl })
    const opt = {

        spreadsheetId: '1xZS_INQh1dKZM8q7Lje5zSj8CA3rPdskAL9vZla9g08',
        range: '1_newsletters!A1:B2'

    };


    let data = await gsapi.spreadsheets.values.get(opt)

    console.table(data.data.values);
}