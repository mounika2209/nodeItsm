
module.exports = (intent,json,res) => {
    

    let intentSwitch =  {

        DefaultFallbackIntent:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["Oops! I missed that. I am still learning. Please call us on 222-222-2222. Thank you for contacting IT Help desk. You have a good day!"]
                        }
                    }
                ]
            
            }
            return res.send(response)
        },
        
        initial:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["Hi Chirag,I am Quincy , your IT Assistant.To assist you better,Please confirm the computer Operating System."]
                        }
                    },
                    {
                        "quickReplies" : {
                            "quickReplies" : [
                                "Microsoft Windows",
                                "Apple Mac"
                            ]
                        }
                    }
                ]
            
            }
            return res.send(response)
        },
        createRestart:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["Hi Chirag,I am Quincy , your IT Assistant.To assist you better,Please confirm the computer Operating System."]
                        }
                    },
                    {
                        "quickReplies" : {
                            "quickReplies" : [
                                "Microsoft Windows",
                                "Apple Mac"
                            ]
                        }
                    }
                ]
            
            }
            return res.send(response)
        },
        createMicroSoftAppleSelected:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["Great! thank you for confirming the OS.I can help your with the following"]
                        }
                    },
                    {
                        "quickReplies" : {
                            "quickReplies" : [
                                'Application Issue',
                                'Application Installation /Access',
                                'Internet/Network',
                                'Email/Outlook issues',
                                'eCommerce (EDI/PaniNet)',
                                'Printer/Copier/Scanner Issues',
                                'Microsoft Applications',
                                'Hardware Issue',
                                'Hardware Installation/Setup/Replace'
                            ]
                        }
                    }
                ]
            
            }
            return res.send(response)

            
        },
        createInternetNetworkIssue:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["We are almost there !.Please choose from below"]
                        }
                    },
                    {
                        "quickReplies" : {
                            "quickReplies" : [
                                'WIFI Issues',
                                'Wifi slowness/drop down issue',
                                'VPN Issues',
                                'Etherent Issues',
                                'Request for VPN',
                                'Request for VPN-External User',
                                'Guest Wifi access'
                            ]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createEmailOutLookIssue:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["We are almost there !.Please choose from below"]
                        }
                    },
                    {
                        "quickReplies" : {
                            "quickReplies" : [
                                'Unable to Send/Receive Emails',
                                'Spam/Phishing Emails',
                                'Connection Issues',
                                'Account Configuration',
                                'Credential Pop up issue',
                                'Outlook performance issues',
                                'Password Reset',
                                'Access/Revoke/Change'
                            ]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createECommerceIssue:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["We are almost there !.Please choose from below"]
                        }
                    },
                    {
                        "quickReplies" : {
                            "quickReplies" : [
                                'Paper EDI transfers',
                                'ftp.qp.com',
                                'quaddisk.qp.com',
                                'MassTransit',
                                'Other EDI solutions'
                            ]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createPrinterCopierScannerIssue:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["We are almost there !.Please choose from below"]
                        }
                    },
                    {
                        "quickReplies" : {
                            "quickReplies" : [
                                'First time Setup',
                                'Reconfiguration',
                                'Issue'
                            ]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createMicroSoftApplicationIssue:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["We are almost there !.Please choose from below"]
                        }
                    },
                    {
                        "quickReplies" : {
                            "quickReplies" : [
                                'Microsoft Excel',
                                'Microsoft Word',
                                'Microsoft OneNote',
                                'Microsoft OneDire',
                                'Microsoft PowerPoint'
                            ]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createHardWareInstallSetupReplaceIssue:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["We are almost there !.Please choose from below"]
                        }
                    },
                    {
                        "quickReplies" : {
                            "quickReplies" : [
                                'General Hardware',
                                'Mobile Devices',
                                'Television',
                                'VPN Client',
                                'Workstation',
                                'Desk Phone Related'
                            ]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createIssuesResponse:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["flow under construction"]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createSearchHardwareIssue:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["flow under construction"]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createSearchPrinterCopierScanner:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["flow under construction"]
                        }
                    }
                ]
            
            }
            return res.send(response)


        },
        createSearchNetworkInternet:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["flow under construction"]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createSearchEmailOutlook:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["flow under construction"]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createSearchECommerce:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["flow under construction"]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createSearchMicroApplication:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["flow under construction"]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createSearchApplicationInstallation:(json,res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text" : {
                            "text" : ["flow under construction"]
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        createApplicationInstallationIssue:(json,res) => {

          let selectIssue = applicationIssueDropdown();

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "payload": {
                            "type" : "dropdown-list",
                            "message" : {
                                "title" : "We are almost there !.Please choose from below",
                                'list' : selectIssue
                            }
                        }
                    }
                ]
            
            }
            return res.send(response)

        },
        applicationIssueDropdown:() => {
            let selectIssue = [
                {
                    'name' : 'Accounting',
                    'id' : 'Accounting'
                },
                {
                    'name' : 'ACE',
                    'id' : 'ACE'
                },
                {
                    'name' : 'Antivirus',
                    'id' : 'Antivirus'
                },
                {
                    'name' : 'Book',
                    'id' : 'Book'
                },
                {
                    'name' : 'Business Intelligence',
                    'id' : 'Business Intelligence'
                },
                {
                    'name' : 'Commercial/Specialty',
                    'id' : 'Commercial/Specialty'
                },
                {
                    'name' : 'CRM',
                    'id' : 'CRM'
                },
                {
                    'name' : 'DDMS',
                    'id' : 'DDMS'
                },
                {
                    'name' : 'Digital Print',
                    'id' : 'Digital Print'
                }
            ]
            return selectIssue;
        }

    }

    intentSwitch[intent](json, res)
}