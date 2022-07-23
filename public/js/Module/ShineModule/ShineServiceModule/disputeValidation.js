export var DisputeValidation = {
    data:{},
    errors:{},
    _hasError:false,
    init:function(data){
        this.data = data;
        this.validation();
        this.renderErrorMsg();
    },
    validation:function(){
        this.data.disputeCard.map(element =>{
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
            }
        })
   
            // let inputData1=$('#terminalId').val()
            // console.log("length of input data",inputData1)
            // if(!inputData1){
            //     this.errors['terminalId']=[];
            //     this.errors['terminalId'].push('Our  type is required'); 
            //     console.log("this is error 00000000000",this.errors['#terminalId'])
            // }
     
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
                // $error.text(this.errors['#devicetype']);
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