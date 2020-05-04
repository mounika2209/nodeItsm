const botNameFinder = require('./BotFinderController');

module.exports = {

    dialogflowResponse:(req,res) => {
        
        let appId = req.params.appId;

        botNameFinder(appId,req.body,res);

    }
}