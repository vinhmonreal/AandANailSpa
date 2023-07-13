

import mongoose from 'mongoose';
// import { deliveryTextNumber } from './setting.js';
const extentsions = ['@tmomail.net', '@txt.att.net', '@vtext.com', '@messaging.sprintpcs.com', '@myboostmobile.com'];

import {Setting} from './setting.js';
export const Schema = mongoose.Schema;

export const OrderSchema = new Schema({
    clientName: String,
    clientStation: String,
    drinkName: String
});


export const Order = mongoose.model('Order', OrderSchema);

import nodemailer from 'nodemailer';


export function SendEmail(req, res) {
    const clientName = req.body.clientName;
    const clientStation = req.body.clientStation;
    const drinkName = req.body.drinkName;
    const time = new Date();
    let extension =''
    const transporter = nodemailer.createTransport({
        service: 'gmail',
      
        auth: {
        
            user:'majesticnaillounge2023@gmail.com',
            pass:'qqokoyugtbsuumfa'

        }
    });
    const mailOptions = {
        to: 'aandanailbar2023@gmail.com',
        subject: 'A & A Nail Bar Custumer Order',
        text: `CLIENT: ${clientName}\n${clientStation}\n ${drinkName}\n${time}\n`
    };
    console.log(mailOptions)

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            res.status(200).json({
                success: true
            });
            console.log('Email sent: ' + info.response);
        }
    });

    Setting.find({})
    .then((setting) => {

    let data =[]
    for (let i = 0; i < setting.length; i++) {
        data.push(setting[i].deliveryText)
        }
        console.log(data)
        for (let i = 0 ; i < data.length; i++) {
            const mailOptions = {
                to: `${data[i]}`,
                subject: 'A & A Nail Bar Custumer Order',
                text: `CLIENT: ${clientName}\n${clientStation}\n ${drinkName}\n${time}\n`
            };
            console.log(mailOptions)
        
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).json({
                        success: true
                    });
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err,
            success: false
        });
    });
}

//     Setting.find({})
//     .then((setting) => {
//     let data =[]
//     for (let i = 0; i < setting.length; i++) {
//         data.push([setting[i].deliveryText, setting[i].provider])
//         }
//         console.log(data)
//         for (let i = 0 ; i < data.length; i++) {
//             if (data[i][1] === 'T-Mobile') {
//                 extension = '@tmomail.net'
//                 console.log(extension)
//             }
//             else if (data[i][1] === 'AT&T') {
//                 extension = '@txt.att.net'
//                 console.log(extension)
//             }
//             else if (data[i][1] === 'Verizon') {
//                 extension = '@vtext.com'
//                 console.log(extension)
//             }
//             else if (data[i][1] === 'Sprint') {
//                 extension = '@messaging.sprintpcs.com'
//                 console.log(extension)
//             }
//             else if (data[i][1] === 'Boost Mobile') {
//                 extension = '@myboostmobile.com'
//                 console.log(extension)
//             }
//             else {
//                 console.log('no provider')
//             }

//             const mailOptions = {
//                 to: 'aandanailbar2023@gmail.com',
//                 subject: 'A & A Nail Bar Custumer Order',
//                 text: `CLIENT: ${clientName}\n${clientStation}\n ${drinkName}\n${time}\n`
//             };
//             console.log(mailOptions)

//             transporter.sendMail(mailOptions, function (err, info) {
//                 if (err) {
//                     console.log(err);
//                 }
//                 else {
//                     res.status(200).json({
//                         success: true
//                     });
//                     console.log('Email sent: ' + info.response);
//                 }
//             }
//             )
//         }
        

//     })
  
//     .catch((err) => {
//         console.log(err)
//     })

// }



// export async function SendWhatsApp(req,res){
//     const clientName = req.body.clientName;
//     const clientStation = req.body.clientStation;
//     const drinkName = req.body.drinkName;
//     const time = new Date();
//     console.log(clientName, clientStation, drinkName)

//     const response = await fetch('https://graph.facebook.com/v17.0/101111773052650/messages', {
//         method: 'POST',
//         headers: {
//             'Authorization': 'Bearer EAAOEZB0mLxxQBAK3AvpZCuWTE8avK8nfCaGXQdDmCh4GnpvxsKOd7CpG5WDgs0vEto2OEZA1hpAXPvrm5RXOzZBrJ3Xkt3Y0gjcK26n8Bqm73ZBrZCoprnVZBRfzLqpNnrtEd7jW1Pydw5GgrCL4luyS0aB29yVljA0DkXqSsZCUuAXage6PX8Qu2CcLZAtgTIsbWTfbyBUQOtLIZAlJ7OCwNV4lN5K87ZB16IZD',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             messaging_product: 'whatsapp',
//             to: '14086270754',
//             type: 'template',
//             // text: {clientName, clientStation, drinkName},
//             template: {name: 'hello_world', language: {code: 'en_US'}}
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//     }
//     )
//     .catch((error) => {
//         console.error('Error:', error);
//     }
//     );

// }

// var options = {
//   method: 'POST',
//     url: 'https://graph.facebook.com/v17.0/101111773052650/messages',
//     headers: {
//       'Authorization': 'Bearer EAAOEZB0mLxxQBAK3AvpZCuWTE8avK8nfCaGXQdDmCh4GnpvxsKOd7CpG5WDgs0vEto2OEZA1hpAXPvrm5RXOzZBrJ3Xkt3Y0gjcK26n8Bqm73ZBrZCoprnVZBRfzLqpNnrtEd7jW1Pydw5GgrCL4luyS0aB29yVljA0DkXqSsZCUuAXage6PX8Qu2CcLZAtgTIsbWTfbyBUQOtLIZAlJ7OCwNV4lN5K87ZB16IZD',
//       'Content-Type': 'application/json'
//     },
//     data: {
//       messaging_product: 'whatsapp',
//       to: '14086270784',
//       type: 'template',
//       text: {clientName, clientStation, drinkName},
//     //   template: {name: 'hello_world', language: {code: 'en_US'}}
//     }
//   };

//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// }