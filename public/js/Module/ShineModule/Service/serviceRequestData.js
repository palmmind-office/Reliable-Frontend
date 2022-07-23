export var service_RequestValidation={
        data:{},
        errors:{},
        _hasError:false,
        init:function(data){
            console.log("inside init",data)
            this.data = data;
            this.validation();
     
    
        },
        validation:function(){
            let obj=this.data
            console.log("this is keys",obj)
            Object.keys(obj).forEach(key => {
                if (obj[key] === null || obj[key]==="") {
                    console.log("this is key",key)
                    if(key=='accountnumber'){
                        this.errors[key] = `${key} is required.`
                        let parent =$('#actNum').parent() 
                        parent.children().remove(this.errors[key]);
                        let $error = $('<p class="error"></p>');
                        $error.text(this.errors[key]);
                        $error.appendTo(parent);
                        this.errors[key]
                        console.log("this is error actnum",this.errors[key])
                    }
                
                }
              });
        },
        // renderErrorMsg: function(){        
        //     Object.keys(this.errors).forEach((id, index) => {
        //         console.log(id,"object  id")
        //         let $errorParent = $(`#${id}`).parent();
        //         console.log("id value",$errorParent)
        //         $errorParent.children().remove('.error');
        //         if(this.errors[id].length){                
        //             let $error = $('<p class="error"></p>');
        //             $error.text(this.errors[id][0]);
        //             // console.log("render error message",this.errors[id][0])
        //            $error.appendTo($errorParent);
    
        //         }
        //     });
        // },
        checkError: function(){
            let error = false;
            let keys = Object.keys(this.errors);
            console.log('this is error of gggg',keys)
            for(let i=0; i<keys.length; i++){
                if(this.errors[keys[i]].length){
                    error = true;
                    break;
                }
            }
            return error;
        }
    }
    
