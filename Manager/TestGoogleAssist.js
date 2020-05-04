
module.exports = (intent,json,res) => {

    let intentSwitch =  {
        
        createMenu:(json,res) => {
            let response = {

                "payload": {
                    "google": {
                      "expectUserResponse": true,
                      "richResponse": {
                        "items": [
                          {
                            "simpleResponse": {
                              "textToSpeech": "This is Text Response"
                            }
                          }
                        ],
                        "suggestions" : [
                            {
                                "title" : "cards"
                            },
                            {
                                "title" : "menu"
                            },
                            {
                                "title" : "carousel"
                            }
                        ]
                      }
                    }
                  }

            }
            return res.send(response)


        },
        createCarousel:(json,res) => {

            let response = {
                "payload": {
                    "google": {
                      "expectUserResponse": true,
                      "richResponse": {
                        "items": [
                          {
                            "simpleResponse": {
                              "textToSpeech": "Choose a item"
                            }
                          }
                        ]
                      },
                      "systemIntent": {
                        "intent": "actions.intent.OPTION",
                        "data": {
                          "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
                          "listSelect": {
                            "title": "Hello",
                            "items": [
                              {
                                "optionInfo": {
                                  "key": "first title key"
                                },
                                "description": "first description",
                                "image": {
                                  "url": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                                  "accessibilityText": "first alt"
                                },
                                "title": "first title"
                              },
                              {
                                "optionInfo": {
                                  "key": "second"
                                },
                                "description": "second description",
                                "image": {
                                  "url": "https://lh3.googleusercontent.com/Nu3a6F80WfixUqf_ec_vgXy_c0-0r4VLJRXjVFF_X_CIilEu8B9fT35qyTEj_PEsKw",
                                  "accessibilityText": "second alt"
                                },
                                "title": "second title"
                              }
                            ]
                          }
                        }
                      }
                    }
                  }

            }
            return res.send(response)
        },
        createCards:(json,res) => {

            let response = {

                "payload": {
                    "google": {
                      "expectUserResponse": true,
                      "richResponse": {
                        "items": [
                          {
                            "simpleResponse": {
                              "textToSpeech": "Choose a item"
                            }
                          }
                        ]
                      },
                      "systemIntent": {
                        "intent": "actions.intent.OPTION",
                        "data": {
                          "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
                          "carouselSelect": {
                            "items": [
                              {
                                "optionInfo": {
                                  "key": "first title"
                                },
                                "description": "first description",
                                "image": {
                                  "url": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                                  "accessibilityText": "first alt"
                                },
                                "title": "first title"
                              },
                              {
                                "optionInfo": {
                                  "key": "second"
                                },
                                "description": "second description",
                                "image": {
                                  "url": "https://lh3.googleusercontent.com/Nu3a6F80WfixUqf_ec_vgXy_c0-0r4VLJRXjVFF_X_CIilEu8B9fT35qyTEj_PEsKw",
                                  "accessibilityText": "second alt"
                                },
                                "title": "second title"
                              }
                            ]
                          }
                        }
                      }
                    }
                  }

            }
            return res.send(response)
        },
        createQuickReply:(json,res) => {
            let response = {

                "payload": {
                    "google":{
                        "richResponse":{
                           "items":[
                              {
                                 "simpleResponse":{
                                    "textToSpeech":"Hey! Good to see you."
                                 }
                              },
                              {
                                 "mediaResponse":{
                                    "mediaType":"AUDIO",
                                    "mediaObjects":[
                                       {
                                          "name":"Exercises",
                                          "description":"ex",
                                          "largeImage":{
                                             "url":"http://res.freestockphotos.biz/pictures/17/17903-balloons-pv.jpg",
                                             "accessibilityText":"..."
                                          },
                                          "contentUrl":"https://freepd.com/Chill/Chill Air.mp3"
                                       }
                                    ]
                                 }
                              }
                           ],
                           "suggestions":[
                              {
                                 "title":"chips"
                              }
                           ]
                        }
                     }
                  }

            }
            return res.send(response)

        }
        }

intentSwitch[intent](json, res)


}

