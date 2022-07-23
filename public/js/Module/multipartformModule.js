import { env } from '../../env';

 export var multipartformModule={
     data:{},
      files:[],
    init:function(data){
       this.data=data;
       this.postURL= function(spesific_url){
        let url=spesific_url;
        if(url.startsWith('http:') || url.startsWith('https:')){
           let action=url;
            return action
        }
        else{
            let action1=`${env.protocol}://${env.server}:${env.port}${url}`
            return action1
        }  
    },
       this.cacheDOM();
       this.render();  
    },
    
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    cacheDOM: function () {
        this.$parent = $('#message-module');
    },
    render: function () {
        this.$formContainer = $(`<div class="multifileuploader"></div>`);
        this.$formContainer.appendTo(this.$parent);
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$parent.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p><li></li></li>`);
            node.appendTo(parentElem);
        }

        if(this.data.data.length>0){
            const multiform=$(`<div class="multipart"></div>`).appendTo(this.$formContainer);
            if(Object.keys(this.data).includes("subtitle")){
                $(`<h6>${this.data.subtitle}</h6>`).appendTo(multiform);
            }
            
            this.data.data.forEach((file,index)=>{
                const parent=$(`<div></div>`);
                $(`<p>${file.title}</p>`).appendTo(parent);
               const input= $(`<input type="file" id="${file.id}" />`);
                input.appendTo(parent); 
                parent.appendTo(multiform);
                $(`#${file.id}`).MultiFile({
                    accept:file.accept,
                    max:file.maxlength,
                      afterFileRemove: function(element, value, master_element) {  
                        multipartformModule.files.pop(master_element.files)
                      },
                      afterFileAppend: function(element, value, master_element) {
                        console.log(master_element.files,"added");
                        multipartformModule.files=[];
                        multipartformModule.files.push(master_element.files)
                      },
                })

                if(file.hasOwnProperty("button")){
                    let submit_btn=$(`<button class="btn btn-primary"> ${file.button.title}</button>`).appendTo(multiform);
                    submit_btn.css({
                        "font-size": "10px",
                        "padding": "3px"
                    });
                    submit_btn.on("click",function(event){
                        event.preventDefault();
                        if(this.files.length>0){
                            let posturl=this.postURL(file.action);
                            this.postDetail(this.files,posturl);
                        }
                        else{
                          return false
                        }
                        
                    }.bind(this))
                }

            })
        }
    },

    postDetail:async function(formData,posturl){
        console.log(formData,"posting url");
        let removearray=formData[0];
        let formdata  = new FormData();
        let i=0;
        for(i==0;i<=removearray.length;i++){
            formdata.append("palmform"+i,removearray[i])
        }
        
        const response = await fetch(posturl, {
            method: 'POST',
            body: formdata
          });
          if(!response){
            console.log("failed to  post")
             return
          }
         console.log("successfully posted")

    },

    clear: function () {
        if (this.$formContainer) {
            this.$formContainer.remove();
        }
    },

}