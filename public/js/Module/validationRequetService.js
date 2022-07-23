/**
 * Used for form validataion.
 */
 export var validation1Module = {
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
            console.log("this is input data",inputData)
            this.errors[element.id] = [];
            let validationKeys = Object.keys(element.validation).filter(data => element.validation[data]);     
            console.log("this is validation keys",validationKeys)       
            for (let params of validationKeys) {
                if (params === 'required') {
                    if (!inputData) {
                        this.errors[element.id].push(`${element.label} is required`);
                    }
                }
                if (params === 'email') {//for mobile and number validation
                    let regex = /^(\d{10})|([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                    let isMail = regex.test(inputData);
                    if (!isMail) {
                        this.errors[element.id].push(`Email or mobile format is incorrect`);
                    }
                }
                if (params === 'mobile') {
                    let mobRegex = /^\d{10}$/;
                    let isMobile = mobRegex.test(inputData);
                    if (!isMobile) {
                        this.errors[element.id].push('Enter 10 digit mobile number');                        
                    }
                }
            }
        });        
    },
    renderErrorMsg: function(){        
        Object.keys(this.errors).forEach((id, index) => {
            let $errorParent = $(`#${id}`).parent();
            $errorParent.children().remove('.error');
            if(this.errors[id].length){                
                let $error = $('<p class="error"></p>');
                $error.text(this.errors[id][0]);
                console.log("this is error",this.errors[id][0])
                $error.appendTo($errorParent);
            }
        });
    },
    checkError: function(){
        let error = false;
        let keys = Object.keys(this.errors);
        console.log("this is error keys",keys)
        for(let i=0; i<keys.length; i++){
            if(this.errors[keys[i]].length){
                error = true;
                break;
            }
        }
        console.log(" this is form supprot module error",error)
        return error;
    }
}