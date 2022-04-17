/**
 * A Lambda function that returns a static string
 */
const axios = require("axios");

exports.helloFromLambdaHandler = async (event) => {
    console.log(JSON.stringify(event))
    try{

        const bitcoinResult = await axios.get("http://api.coindesk.com/v1/bpi/currentprice.json");
        



        const result = await axios.post("https://discord.com/api/webhooks/963673376562487306/g4syYfcN1742Zg7yWu2MO_gFCa--THJsrm1MZmRCf8AnEJigLjSfIy-5Gh43E9B0exMp",{
            "content":bitcoinResult.data.bpi.USD.rate,
            "embeds": [{
                  "image": {
                    "url": "https://thecoinshark.net/uploads/750x500/2021/06/what-dogecoin-taught-us-and-how-it-influenced-the-future-of-finance.jpg"
                  }
                }]
              
        });
        
        console.info("디스코드 웹훅 성공");
    }
    catch(err){
        console.log("웹훅 실패", err);
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from lambda'),
    }
    const message = 'Hello from Lambda!';

    // All log statements are written to CloudWatch
    console.info(`${message}`);
    
    return message;
}
