/**
 * A Lambda function that returns a static string
 */
const axios = require("axios");

exports.helloFromLambdaHandler = async () => {
    // If you change this message, you will need to change hello-from-lambda.test.js
    try{
        const result = await axios.post("https://discord.com/api/webhooks/963673376562487306/g4syYfcN1742Zg7yWu2MO_gFCa--THJsrm1MZmRCf8AnEJigLjSfIy-5Gh43E9B0exMp", {
            "content":"Welcome rupin Wolrd!"
        });
        console.info("디스코드 웹훅 성공");
    }
    catch(err){
        console.err("웹훅 실패", err);
    }
    const message = 'Hello from Lambda!';

    // All log statements are written to CloudWatch
    console.info(`${message}`);
    
    return message;
}
