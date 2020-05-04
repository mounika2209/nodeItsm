
const dialog = require('../controller/DialogflowController');

const sample = require('../controller/SampleController');


module.exports = (app) => {

    app.post('/dialogflow/fullfillment/:appId/webhook',dialog.dialogflowResponse);

    app.get('/first',sample.first);
    app.get('/second',sample.second);
    app.get('/name:name1',sample.name);

}