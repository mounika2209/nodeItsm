const ItsmFolder = require('../Manager/ItsmFolder');
const Quad = require('../Manager/QuadManager');
const TestGoogle = require('../Manager/TestGoogleAssist');

module.exports = (botName,json,res) => {

    let intent = json.queryResult.intent.displayName;

    let appName = {
        testITSM:(intent,json,res) => {
            return ItsmFolder(intent,json,res);
        },
        testQuad:(intent,json,res) => {
            return Quad(intent,json,res);
        },
        testGoogleAssist:(intent,json,res) => {
            return TestGoogle(intent,json,res);
        }
    }

    appName[botName](intent,json,res);

}