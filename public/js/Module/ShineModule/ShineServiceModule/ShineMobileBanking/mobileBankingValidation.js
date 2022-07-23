export var mobileBankingValidation = {
    data:{},
    errors:{},
    init(data){
        this.data = data;
        this.validation();
        this.renderErrorMsg();

    },
    validation(){

        this.data.CRN.map(element => {
            let inputData= $('#' +element.id).val()
            this.errors[element.id]=[];
            let validatioinKey=Object.keys(element.validation).filter(data=>element.validation[data])
            for(let params of validatioinKey){
                if(params === 'required'){
                    if (!inputData) {
                        this.errors[element.id].push(`${element.label} is required`);
                    }
                }
                if (params === 'email') {
                    let regex = /^(\d{10})|([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                    let isMail = regex.test(inputData);
                    if (!isMail) {
                        this.errors[element.id].push(`Email format is incorrect`);
                    }
                }
            }
        })
        let val=$('#' + this.data.e_type.id).val()
        this.errors[this.data.e_type.id]=[];
       let validatioinKey=Object.keys(this.data.e_type.validation).filter(data=>this.data.e_type.validation[data])
        for(let params of validatioinKey){
            if(params === 'required'){
                if (!val) {
                    this.errors[this.data.e_type.id].push(`${this.data.e_type.label} is required`);
                }
            }
        }

            let type=$('#' + this.data.CRN_type.id).val()
            this.errors[this.data.CRN_type.id]=[];
            let validatioinKeys=Object.keys(this.data.CRN_type.validation).filter(data=>this.data.CRN_type.validation[data])
            for(let params of validatioinKeys){
                if(params === 'required'){
                    if (!type) {
                        this.errors[this.data.CRN_type.id].push(`${this.data.CRN_type.label} is required`);
                    }
                }
            }

            let branch=$('#'+ this.data.Branch.id ).val()
            this.errors[this.data.Branch.id]=[];
            let branch_validatioinKeys=Object.keys(this.data.Branch.validation).filter(data=>this.data.Branch.validation[data])
            for(let params of branch_validatioinKeys){
                if(params === 'required'){
                    if (!branch) {
                        this.errors[this.data.Branch.id].push(`${this.data.Branch.label} is required`);
                    }
                }
            }
            
            this.data.subData.map(elem=>{
                let info=$('#'+elem.id).val()
                this.errors[elem.id]=[];
                let info_validatioinKeys=Object.keys(elem.validation).filter(data=>elem.validation[data])
                for(let params of info_validatioinKeys){
                    if(params === 'required'){
                        if (!info) {
                            this.errors[elem.id].push(`${elem.label} is required`);
                        }
                    }
                }
            })  
    },
    renderErrorMsg: function(){        
        Object.keys(this.errors).forEach((id, index) => {
            let $errorParent = $(`#${id}`).parent();
            $errorParent.children().remove('.error');
            if(this.errors[id].length){                
                let $error = $('<p class="error"></p>');
                $error.text(this.errors[id][0]);
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
