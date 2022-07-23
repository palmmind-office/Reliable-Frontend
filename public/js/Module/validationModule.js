/**
 * Used for form validataion.
 */
export var validationModule = {
    data: {},
    errors: {},
    _hasError: false,
    init: function (data) {
        this.data = data;
        this.validate();
        this.renderErrorMsg();
    },
    validate: function () {
        this.data.data.forEach(element => {
            let inputData = $(`#${element.id}`).val();
            $(`#${element.id}`).focus((e) => {
                $(`#${element.id}`).parent().children().remove('.error');
                // $(`#${element.id}`).next().remove();
            })
            // console.log("this is input validation",inputData)
            this.errors[element.id] = [];
            let validationKeys = Object.keys(element.validation).filter(data => element.validation[data]);
            for (let params of validationKeys) {
                if (params === 'required') {
                    if (!inputData) {
                        if (this.data.f_id === 'nepali') {
                            this.errors[element.id].push(`${element.label} प्रविष्टि गर्नुहोस्`);
                        } else {
                            this.errors[element.id].push(`${element.label} is required`);
                        }
                    }
                }
                if (params === 'atm') {
                    if (inputData) {
                        // console.log("here input data is ",inputData)
                        let attm = inputData.length
                        // console.log('validation check for atm',attm)
                        if (!(attm === 16)) {
                            if (this.data.f_id === 'nepali') {
                                this.errors[element.id].push(`${element.label} सोह्र अक्षर हुनुपर्छ`);
                            } else {
                                this.errors[element.id].push(`${element.label} must be 16 character.`);
                            }
                        }
                    }
                }
                if (params === 'account') {
                    if (inputData) {
                        // console.log("here input data is ",inputData)
                        let attm = inputData.length
                        // console.log('validation check for atm',attm)
                        if (!(attm === 20)) {
                            if (this.data.f_id === 'nepali') {
                                this.errors[element.id].push(`${element.label} बीस अक्षर हुनुपर्छ`);
                            } else {
                                this.errors[element.id].push(`${element.label} must be 20 character.`);
                            }
                        }
                    }
                }

                if (params === 'complain') {
                    if (inputData) {
                        // console.log("here input data is ",inputData)
                        let attm = inputData.length
                        // console.log('validation check for atm',attm)
                        if (attm < 5) {
                            if (this.data.f_id === 'nepali') {
                                this.errors[element.id].push(`${element.label} कम्तिमा पाँच अक्षर हुनुपर्छ`);
                            } else {
                                this.errors[element.id].push(`${element.label} is at least 5 character.`);
                            }
                        }
                        else if (attm > 200) {
                            if (this.data.f_id === 'nepali') {
                                this.errors[element.id].push(`${element.label} अधिकतम दुई सय अक्षर हुनुपर्छ`);
                            } else {
                                this.errors[element.id].push(`${element.label} is maximum 200 character.`);
                            }
                        }
                    }
                }

                if (params === 'fullname') {
                    if (inputData) {

                        let attm = inputData.length
                        if (attm < 5) {
                            this.errors[element.id].push(`${element.label} is at least 5 character.`);
                        }else if(!(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(inputData)))
                        {
                            this.errors[element.id].push(`Invalid ${element.label}`);
                            if (this.data.f_id === 'nepali') {
                                this.errors[element.id].push(`${element.label} कम्तिमा पाँच अक्षर हुनुपर्छ`);
                            } else {
                                this.errors[element.id].push(`${element.label} is at least 5 character.`);
                            }
                        } else if (!(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(inputData))) {
                            if (this.data.f_id === 'nepali') {
                                this.errors[element.id].push(`अवैध ${element.label}.`)
                            } else {
                                this.errors[element.id].push(`Invalid ${element.label}.`);
                            }
                        }
                    }
                }

                if (params === 'email') {
                    let regex = /^(\d{10})|([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                    let isMail = regex.test(inputData);
                    if (!isMail) {
                        if (this.data.f_id === 'nepali') {
                            this.errors[element.id].push(`सही ${element.label} ढाँचा भर्नुहोस्`);
                        } else {
                            this.errors[element.id].push(`Email format is incorrect`);
                        }
                    }
                }
                if (params === 'mobile') {
                    let mobRegex = /^\d{10}$/;
                    let isMobile = mobRegex.test(inputData);
                    if (!isMobile) {
                        if (this.data.f_id === 'nepali') {
                            this.errors[element.id].push(`${element.label} १० अंकको मोबाइल नम्बर प्रविष्ट गर्नुहोस्`);
                        } else {
                            this.errors[element.id].push('Enter 10 digit mobile number.');
                        }
                    }
                }
            }
        });
        // console.log("this is problem validation",this.data.problem[0].id)
        let elements = this.data.problem[0]
        let inputDatas = $(`#${elements.id}`).val();
        $(`#${elements.id}`).focus((e) => {
            $(`#${elements.id}`).parent().children().remove('.error');
            // $(`#${element.id}`).next().remove();
        })
        this.errors[elements.id] = [];
        let validationKey = Object.keys(elements.validation).filter(data => elements.validation[data]);
        console.log("this is validation key", validationKey)
        for (let param of validationKey) {
            if (param === 'problem') {
                if (inputDatas) {
                    let attm01 = inputDatas.length
                    if (attm01 < 20) {
                        if (this.data.f_id === 'nepali') {
                            this.errors[elements.id].push(`${elements.label} बीस अक्षर हुनुपर्छ`);
                        } else {
                            this.errors[elements.id].push(`${elements.label} must be 20 character.`);
                        }
                    }
                    else if (attm01 > 200) {
                        if (this.data.f_id === 'nepali') {
                            this.errors[elements.id].push(`${elements.label} एक दुई सय अक्षर भन्दा कम नाम प्रविष्ट गर्नुहोस्`);
                        } else {
                            this.errors[elements.id].push(`${elements.label} must be 200 character.`);
                        }
                    }
                }
                else {
                    if (this.data.f_id === 'nepali') {
                        this.errors[elements.id].push(`${elements.label}  प्रविष्ट गर्नुहोस्`);
                    } else {
                        this.errors[elements.id].push(`${elements.label} must be required.`);
                    }

                }
            }
            if (param === 'suggestion') {
                if (inputDatas) {
                    let attm = inputDatas.length
                    if (attm < 20) {
                        if (this.data.f_id === 'nepali') {
                            this.errors[elements.id].push(`${elements.label} बीस अक्षर हुनुपर्छ`);
                        } else {
                            this.errors[elements.id].push(`${elements.label} must be 20 character.`);
                        }
                    }
                    else if (attm > 200) {
                        if (this.data.f_id === 'nepali') {
                            this.errors[elements.id].push(`${elements.label} दुई सय अक्षर भन्दा कम नाम प्रविष्ट गर्नुहोस्`);
                        } else {
                            this.errors[elements.id].push(`${elements.label} must be 200 character.`);
                        }
                    }
                }
                else {
                    if (this.data.f_id === 'nepali') {
                        this.errors[elements.id].push(`${elements.label}  प्रविष्ट गर्नुहोस्`);
                    } else {
                        this.errors[elements.id].push(`${elements.label} must be required.`);
                    }
                }
            }
        }
    },
    renderErrorMsg: function () {
        Object.keys(this.errors).forEach((id, index) => {
            // console.log(id,"object  id")
            let $errorParent = $(`#${id}`).parent();
            console.log("id value", $errorParent)
            $errorParent.children().remove('.error');
            if (this.errors[id].length) {
                let $error = $('<p class="error"></p>');
                $error.text(this.errors[id][0]);
                // console.log("render error message",this.errors[id][0])
                $error.appendTo($errorParent);
                //    console.log("error selected ",avc)
            }
        });
    },
    checkError: function () {
        let error = false;
        let keys = Object.keys(this.errors);

        for (let i = 0; i < keys.length; i++) {
            if (this.errors[keys[i]].length) {
                error = true;
                break;
            }
        }
        return error;
    }
}