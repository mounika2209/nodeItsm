let nextContexts = '';


module.exports = (intent, json, res) => {

    let intentSwitch = {

        DefaultFallbackIntent: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Oops! I missed that. I am still learning. Please call us on 222-222-2222. Thank you for contacting IT Help desk. You have a good day!"]
                        }
                    }
                ]

            }
            return res.send(response)
        },

        initial: (json, res) => {

            let session = json.session;

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Thank you for contacting IT Help Desk. I am Alice, your IT virtual assistant."]
                        }
                    },
                    {
                        "payload": {
                            "type": 'image',
                            "message": "https://demo-api.servicenext.ai/images/responses/35ccee4c20e3cb9663681cc378fa4374468d8aac.png",
                            "buttons": []
                        }
                    }
                ]

            }
            return res.send(response)


        },
        getStartedUserMobileNumber: (json, res) => {

            let contexts = json.queryResult.outputContexts;
            let context = '';

            contexts.forEach(context => {
                if (context.name.includes('sessionstart') || context.name.includes('userphn')) {
                    if (context.parameters) {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 2,
                            parameters: context.parameters
                        };
                    } else {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 2
                        };
                    }
                } else {
                    if (context.parameters) {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 0,
                            parameters: context.parameters
                        };
                    } else {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 0
                        };
                    }
                }
            });


            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["To get started, please provide your 10-digit mobile number registered with organization."]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        checkUserMobileNumber: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Please enter the OTP(One Time password) that you have received on your mobile."]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createmenuPageStart: (json, res) => {

            let contexts = json.queryResult.outputContexts;
            let contextsList = [];

            contexts.forEach(context => {
                if (context.name.includes('sessionstart') || context.name.includes('subscribeoutage') || context.name.includes('createnewusers') || context.name.includes('createresetpassword') || context.name.includes('createsharefolder') || context.name.includes('createinternetissue') || context.name.includes('createmicrosoftapp') || context.name.includes('createissuenotlisted') || context.name.includes('issuepc') || context.name.includes('showprevioustickets') || context.name.includes('otpvalid')) {
                    console.log("context:", context)
                    if (context.parameters) {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 2,
                            parameters: context.parameters
                        };
                        contextsList.push(nextContexts)
                    } else {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 2
                        };
                        contextsList.push(nextContexts)

                    }
                } else {
                    if (context.parameters) {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 0,
                            parameters: context.parameters
                        };
                        contextsList.push(nextContexts)

                    } else {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 0
                        };
                        contextsList.push(nextContexts)

                    }
                }
            });



            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Hey your mobile number has been verified"]
                        }
                    },
                    {
                        "quickReplies": {
                            "title": "How may I help you today?",
                            "quickReplies": [
                                "Subscribe To Outage Alerts",
                                "Onboard New User",
                                "My Tickets",
                                "Reset Password - Office365 ",
                                "Folder Access - Sharepoint ",
                                "Internet Issues",
                                "Microsoft Application",
                                "PC Issues",
                                "Other concerns"
                            ]
                        }
                    }
                ],
                "outputContexts": contextsList

            }
            return res.send(response)

        },

        createSubscribeOutageAlert: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Thank you for subscribing for outage resolution notification alerts. You will receive an alert once the issue is resolved. Have a good day .!"]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createSubscribeOutageAlertNo: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Thank you for contacting IT Helpdesk. Have a Good Day"]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)


        },
        createInternetRelatedIssue: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "quick_replies": {
                            "quick_replies": [
                                "Slow Internet",
                                "Wifi Issues",
                                "VPN Request"
                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)


        },
        createSlowInternetIssue: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "quick_replies": {
                            "title": "Are you facing this issue while browsing internet?",
                            "quick_replies": [
                                "Yes",
                                "No"
                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)


        },
        internetBrowsingYesIssue: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["please follow the below step to fix the issue i)please open <b>Internet Explorer</b> ii) Select Tools > Internet Options iii)Click on the General tab and then the delete..button iv) Make sure to uncheck preserve favorites website data and check both temporary internet files and cookies then click delete."]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Please let us know if we have resolved you issue",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        internetBrowsingYesIssueSolved: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                "Yes",
                                "No"
                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        internetBrowsingYesIssueNotSolved: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Apologies for the inconvience!"]
                        }
                    },
                    {
                        "text": {
                            "text": ["We have created an ticket for this issue.we will have out technical team contact you shortly."]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        internetBrowsingNoIssue: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Apologies for the inconvience!"]
                        }
                    },
                    {
                        "text": {
                            "text": ["Please describe the issue so that we can assign this ticket to the support team."]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        internetBrowsingNoIssueTicket: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["We have created an ticket for this issue.we will have out technical team contact you shortly."]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createWifiIssues: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": [" let's try quick steps to fix this issue."]
                        }
                    },
                    {
                        "text": {
                            "text": [" Step 1: Please locate the 'Fn' and 'F2' Keys on the key board<br> Step 2: Press and hold 'Fn' key and press the 'F2' key.the wireless adapter gets activated and you should be able to connect to wi-fi.<br>"]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Please let us know if your issue has been resolved",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createWifiIssuesResolved: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createWifiIssuesNotResolved: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Apologies for the inconvience!"]
                        }
                    },
                    {
                        "text": {
                            "text": ["Please describe the issue so that we can assign this ticket to the support team."]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createWifiIssuesNotResolvedTicket: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Apologies for inconvience!"]
                        }
                    },
                    {
                        "text": {
                            "text": ["We have created an ticket for this issue.we will have out technical team contact you shortly."]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createVpnIssue: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["surely I can help you that!"]
                        }
                    },
                    {
                        "text": {
                            "text": ["Please provide a business justification for VPN access."]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createVpnIssueTickets: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Thanks for contacting IT helpdesk."]
                        }
                    },
                    {
                        "text": {
                            "text": ["Your request number has been sent to the approver. We will notify you the status.The TAT for this issue is 48 hrs."]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)


        },
        createMicroSoftApplication: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "quick_replies": {
                            "title": "Can you please select which microsoft product are you having trouble  with?",
                            "quick_replies": [
                                'MS Word',
                                'MS Excel',
                                'Re-Install MS Office'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        IssueWithMsWord: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["I can surely help you fix your MS excel problem. Please follow the recommended steps:"]
                        }
                    },
                    {
                        "text": {
                            "text": ["Step1: Please open control panel,"]
                        }
                    },
                    {
                        "text": {
                            "text": ["Step2: Click 'program and features' and click on 'Microsoft Office'."]
                        }
                    },
                    {
                        "text": {
                            "text": ["Step3: On the window,click 'Repair' and then 'continue'."]
                        }
                    },
                    {
                        "text": {
                            "text": ["Step4: You can choose 'online repair' and 'quick repair'. Let the repair finish and restart your computer."]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Please let us know if we have resolved your issue",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)


        },
        issueWithMsOfficeNotResolved: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Please describe the issue so that we can assign this ticket to the support team."]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        issueWithMsOfficeNotResolvedTicket: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Apologies for inconvience!"]
                        }
                    },
                    {
                        "text": {
                            "text": ["We have created 'number'for this issue. We will have our technical team contact you shortly"]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        issuewithMsExcel: (json, res) => {


            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["I can surely help you fix your MS excel problem. Please follow the recommended steps:"]
                        }
                    },
                    {
                        "text": {
                            "text": ["Step1: Please open control panel,"]
                        }
                    },
                    {
                        "text": {
                            "text": ["Step2: Click 'program and features' and click on 'Microsoft Office'."]
                        }
                    },
                    {
                        "text": {
                            "text": ["Step3: On the window,click 'Repair' and then 'continue'."]
                        }
                    },
                    {
                        "text": {
                            "text": ["Step4: You can choose 'online repair' and 'quick repair'. Let the repair finish and restart your computer."]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Please let us know if we have resolved your issue",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        issueWithMsExcelNotResolved: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Please describe the issue so that we can assign this ticket to the support team."]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        issueWithMsExcelNotResolvedTicket: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Apologies for inconvience!"]
                        }
                    },
                    {
                        "text": {
                            "text": ["We have created 'number'for this issue. We will have our technical team contact you shortly"]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createReInstallMsOffice: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Please enter the verison of MS Project that needs to be installed:"]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createReInstallMsOfficeVersion: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Thank you for providing the business justification."]
                        }
                    },
                    {
                        "text": {
                            "text": ["Thank you details."]
                        }
                    },
                    {
                        "text": {
                            "text": ["We have submitted the request 'number' to the concerned team, the TAT for this is 24 hours."]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)


        },
        issuewithPc: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Please specify the problem."]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        issuewithPcTickets: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Thank for details. We have submitted the request 'number' to the concerned team, the TAT for this is 24 hours."]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createIssueNotListed: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Please specify the problem."]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        issueNotListedTickets: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Thank for details. We have submitted the request 'number' to the concerned team, the TAT for this is 24 hours."]
                        }
                    },
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createAnyAssistNo: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["Thank You for contacting IT Helpdesk Have a Good Day !"]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)

        },
        createIssueResolved: (json, res) => {

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "quick_replies": {
                            "title": "Is there anything else that I may assist you with?",
                            "quick_replies": [
                                'Yes',
                                'No'

                            ]
                        }
                    }
                ],
                // "outputContexts" : nextContexts

            }
            return res.send(response)


        },
        createExistingMenuPage: (json, res) => {

            let contexts = json.queryResult.outputContexts;
            let contextsList = [];

            contexts.forEach(context => {
                if (context.name.includes('sessionstart') || context.name.includes('subscribeoutage') || context.name.includes('createnewusers') || context.name.includes('createresetpassword') || context.name.includes('createsharefolder') || context.name.includes('createinternetissue') || context.name.includes('createmicrosoftapp') || context.name.includes('createissuenotlisted') || context.name.includes('issuepc') || context.name.includes('showprevioustickets')) {
                    console.log("context:", context)
                    if (context.parameters) {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 2,
                            parameters: context.parameters
                        };
                        contextsList.push(nextContexts)
                    } else {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 2
                        };
                        contextsList.push(nextContexts)

                    }
                } else {
                    if (context.parameters) {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 0,
                            parameters: context.parameters
                        };
                        contextsList.push(nextContexts)

                    } else {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 0
                        };
                        contextsList.push(nextContexts)

                    }
                }
            });
            

            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": ["I can assist you with the following"]
                        }
                    },
                    {
                        "quickReplies": {
                            "title": "How may I help you today?",
                            "quickReplies": [
                                "Subscribe To Outage Alerts",
                                "Onboard New User",
                                "My Tickets",
                                "Reset Password - Office365 ",
                                "Folder Access - Sharepoint ",
                                "Internet Issues",
                                "Microsoft Application",
                                "PC Issues",
                                "Other concerns"
                            ]
                        }
                    }
                ],
                "outputContexts" : contextsList

            }
            return res.send(response)

        },
        createMenuPage: (json, res) => {

            let contexts = json.queryResult.outputContexts;
            let contextsList = [];

            contexts.forEach(context => {
                if (context.name.includes('sessionstart') || context.name.includes('subscribeoutage') || context.name.includes('createnewusers') || context.name.includes('createresetpassword') || context.name.includes('createsharefolder') || context.name.includes('createinternetissue') || context.name.includes('createmicrosoftapp') || context.name.includes('createissuenotlisted') || context.name.includes('issuepc') || context.name.includes('showprevioustickets')) {
                    console.log("context:", context)
                    if (context.parameters) {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 2,
                            parameters: context.parameters
                        };
                        contextsList.push(nextContexts)
                    } else {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 2
                        };
                        contextsList.push(nextContexts)

                    }
                } else {
                    if (context.parameters) {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 0,
                            parameters: context.parameters
                        };
                        contextsList.push(nextContexts)

                    } else {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 0
                        };
                        contextsList.push(nextContexts)

                    }
                }
            });


            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "How may I help you today?",
                            "quickReplies": [
                                "Subscribe To Outage Alerts",
                                "Onboard New User",
                                "My Tickets",
                                "Reset Password - Office365 ",
                                "Folder Access - Sharepoint ",
                                "Internet Issues",
                                "Microsoft Application",
                                "PC Issues",
                                "Other concerns"
                            ]
                        }
                    }
                ],
                "outputContexts" : contextsList

            }
            return res.send(response)


        },
        createRestart: (json, res) => {


            let contexts = json.queryResult.outputContexts;
            let contextsList = [];

            contexts.forEach(context => {
                if (context.name.includes('sessionstart') || context.name.includes('subscribeoutage') || context.name.includes('createnewusers') || context.name.includes('createresetpassword') || context.name.includes('createsharefolder') || context.name.includes('createinternetissue') || context.name.includes('createmicrosoftapp') || context.name.includes('createissuenotlisted') || context.name.includes('issuepc') || context.name.includes('showprevioustickets')) {
                    console.log("context:", context)
                    if (context.parameters) {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 2,
                            parameters: context.parameters
                        };
                        contextsList.push(nextContexts)
                    } else {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 2
                        };
                        contextsList.push(nextContexts)

                    }
                } else {
                    if (context.parameters) {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 0,
                            parameters: context.parameters
                        };
                        contextsList.push(nextContexts)

                    } else {
                        nextContexts = {
                            name: context.name,
                            lifespanCount: 0
                        };
                        contextsList.push(nextContexts)

                    }
                }
            });


            let response = {
                "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                    {
                        "quick_replies": {
                            "quickReplies": [
                                "Subscribe To Outage Alerts",
                                "Onboard New User",
                                "My Tickets",
                                "Reset Password - Office365 ",
                                "Folder Access - Sharepoint ",
                                "Internet Issues",
                                "Microsoft Application",
                                "PC Issues",
                                "Other concerns"
                            ]
                        }
                    }
                ],
                "outputContexts" : contextsList

            }
            return res.send(response)

        }

    }
    intentSwitch[intent](json, res);

}

