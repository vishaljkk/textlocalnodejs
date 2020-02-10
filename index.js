var request = require('request');
const TEXT_LOCAL_HOST = 'https://api.textlocal.in/send/';
const TEXT_LOCAL_API_KEY ='BL3yo+0E1oY-vgCcgLlfniqpWdzz42JDXnikzTKx3V';
//const TEXT_LOCAL_USERNAME = 'vishal.kk@somaiya.edu';
const TEXT_LOCAL_SENDER =  'txtlcl';//BASIC SENDER ID (REPLACE IT WITH YOUR SENDER ID LATER)
var MSG_TEMPLATE = "TEXTLOCAL"


function sendTextLocalSMS(mobileNumber, MSG_TEMPLATE) {
    console.log('entered');
    let options = {
        'apikey': TEXT_LOCAL_API_KEY,
        'message': MSG_TEMPLATE,
        'sender': TEXT_LOCAL_SENDER,
        'numbers': mobileNumber
    }
    return new Promise((resolve, reject) => {
        request.post({ url: TEXT_LOCAL_HOST, form: options }, (error, response, body) => {
            if (error) {
                console.log(error);
                return reject(error);
            }
            console.log("succeded");
            resolve({ response, body });
        })
    })
}


var k=sendTextLocalSMS('9137779691',MSG_TEMPLATE);
//BL3yo+0E1oY-vgCcgLlfniqpWdzz42JDXnikzTKx3V	