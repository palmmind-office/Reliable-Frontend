export var BlockValidation ={
    data:{},
    errors:{},
    _hasError:false,
    init:function(data,val){
        this.data = data;
        console.log("data",data)
        this.validation();
        this.renderErrorMsg();

    },
    validation:function(){
        this.data.data.map(element =>{
            let inputData=$(`#${element.id}`).val()
            // console.log("length of input data",element.id)
            this.errors[element.id]=[];
            let validatioinKey=Object.keys(element.validation).filter(data=>element.validation[data])
            // console.log("this is validation key",validatioinKey)
            for(let params of validatioinKey){
                if(params === 'required'){
                    if (!inputData) {
                        this.errors[element.id].push(`${element.label} is required`);
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
        })
    },
    renderErrorMsg: function(){        
        Object.keys(this.errors).forEach((id, index) => {
            // console.log(id,"object  id")
            let $errorParent = $(`#${id}`).parent();
            // console.log("id value",$errorParent)
            $errorParent.children().remove('.error');
            if(this.errors[id].length){                
                let $error = $('<p class="error"></p>');
                $error.text(this.errors[id][0]);
                // console.log("render error message",this.errors[id][0])
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



export var BlockCardValidation ={
    data:{},
    errors:{},
    _hasError:false,
    init:function(data){
        this.data = data;
        console.log("data0000",data)
        this.validation();
        this.renderErrorMsg();

    },
    validation:function(){
        this.data.card.map(element =>{
            let inputData=$(`#${element.id}`).val()
            // console.log("length of input data",element.id)
            this.errors[element.id]=[];
            let validatioinKey=Object.keys(element.validation).filter(data=>element.validation[data])
            console.log("this is validation key",validatioinKey)
            for(let params of validatioinKey){
                if(params === 'required'){
                    if (!inputData) {
                        this.errors[element.id].push(`${element.label} is required`);
                    }
                }
            }
        })
    },
    renderErrorMsg: function(){        
        Object.keys(this.errors).forEach((id, index) => {
            // console.log(id,"object  id")
            let $errorParent = $(`#${id}`).parent();
            // console.log("id value",$errorParent)
            $errorParent.children().remove('.error');
            if(this.errors[id].length){                
                let $error = $('<p class="error"></p>');
                $error.text(this.errors[id][0]);
                // console.log("render error message",this.errors[id][0])
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



