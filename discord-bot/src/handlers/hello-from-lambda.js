/**
 * A Lambda function that returns a static string
 */
const axios = require("axios");

exports.helloFromLambdaHandler = async (event) => {
    console.log(JSON.stringify(event))
    try{

        const bitcoinResult = await axios.get("http://api.coindesk.com/v1/bpi/currentprice.json");
        



        const result = await axios.post("https://discord.com/api/webhooks/963673376562487306/g4syYfcN1742Zg7yWu2MO_gFCa--THJsrm1MZmRCf8AnEJigLjSfIy-5Gh43E9B0exMp",{
            "username":"제가 1994년 LA다저스에 있었을때..",
            "avatar_url":"https://post-phinf.pstatic.net/MjAyMTAxMTNfMTI2/MDAxNjEwNTIzMDM0MzU2.2doMPH4L1wuZm9An07CT4u7NMtLkpap7dUowUeIeDwwg.29Dugauct2nQ6MfcRt0hB7pFj8dXGRPDijpJffWp4U0g.JPEG/images.jpg",
            "content":"",
            "embeds": [{
                  "image": {
                    "url": "https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/201905/11/mksports/20190511170600736cewm.jpg"
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
