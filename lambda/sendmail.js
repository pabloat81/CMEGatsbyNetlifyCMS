const sgMail = require('@sendgrid/mail')

let { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env

if(!SENDGRID_TO_EMAIL)
    SENDGRID_TO_EMAIL = 'pablo.tierno@cmeargentina.com'

exports.handler =  async (event, context, callback) => {

    const payload = JSON.parse(event.body)
    const { email, message, name } = payload

    sgMail.setApiKey(SENDGRID_API_KEY)

    const body = Object.keys(payload).map((k) => {
        return `${k}: ${payload[k]}`
    }).join("<br><br>");

    const msg = {
        to: SENDGRID_TO_EMAIL,
        from: SENDGRID_TO_EMAIL,
        subject: 'CME Formulario de contacto',
        html: body,
    };
    
    console.log(body)
    console.log(SENDGRID_API_KEY)
    console.log(SENDGRID_TO_EMAIL)

    try{
        await sgMail.send(msg)
        console.log('Mensaje enviado')
        return {
            statusCode: 200,
            body: "Message sent"
        }
    } catch(e){
        console.log('Error enviando mail:', e)

        if (e.response) {
            const {message, code, response} = e;
            const {headers, body} = response;
            console.error('Body Error:', body);
          }

        return {
            statusCode: e.code,
            body: e.message
        }
    }
};