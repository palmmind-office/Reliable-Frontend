export var ServiceRequestValidation = {
    data: {},
    errors: {},
    init: function (data) {
        this.data = data;
        this.Servicevalidation();
        this.renderErrors();
    },
    Servicevalidation: function () {
        // for service  request form validation  start here
        let value = this.data.verifyData

        // maping to get input id
        value.map(element => {
            let inputField = $(`#${element.id}`).val();
            // console.log("this is service input filed", inputField)
            this.errors[element.id] = []
            let validationkey = Object.keys(element.validation).filter(data => element.validation[data])
            // console.log("this is validation key of service request", validationkey)

            for (let params of validationkey)
                if (params === 'required') {
                    if (!inputField) {
                        this.errors[element.id].push(`${element.label} is required.`)
                    }

                }
        })
    },
    renderErrors: function () {
        Object.keys(this.errors).map((id) => {
            let $errorParent = $(`#${id}`).parent();
            // console.log("id value",$errorParent)
            $errorParent.children().remove('.error');
            if (this.errors[id].length) {
                let $error = $('<p class="error"></p>');
                // $error.addClass('alert alert-primary')
                $error.text(this.errors[id][0]);
                console.log("render error message",this.errors[id][0])
                $error.appendTo($errorParent);
            }
        });
    },
    checkError: function(){
        let error = false;
        let keys = Object.keys(this.errors);
        
        for(let i=0; i<keys.length; i++){
            if(this.errors[keys[i]].length){
                error = true;
                break;
            }
        }
        return error;
    }

}