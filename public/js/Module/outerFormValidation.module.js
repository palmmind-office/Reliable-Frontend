import {env} from '../../env';
export var outerFormValidation = {
  captureLeads: function (leads) {
    console.log('data', leads['emailAddress']);
    let url = `${env.protocol}://${env.server}:${env.port}${env.basePath}/leads/`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "fullname": leads['firstName'] || leads['Full Name'],
        "mobile_email": leads['emailAddress'] || leads['mobileNumber'],
        "source": "Bank ChatBot",
        "userId": env.user_id
      })
    }).catch(function(){
      $("#outerDiv #initialForm .modal-dialog").html(`<div class="alert alert-success text-center text-danger" role="alert">
       Sorry!! Form Can't be submited due to Server Problem !!
       <button type="button" class="close" data-dismiss="modal">&times;</button>
     </div>`);
      setTimeout(function () {
        $('#initialForm .modal-backdrop').toggle()
        $('#initialForm .modal').remove()
      }, 700);
    });
  },
  hanndleValidData: function (formData) {
    this.captureLeads(formData).then((data) => data.json()).then((data) => {
      console.log("LeadCaptures Data", data);
      $("#outerDiv #initialForm .form-group").remove();
      $("#outerDiv #initialForm .modal-dialog ").html(`<div class="alert alert-success text-center" role="alert">
         ${data.fullname}, Successfully Submited !!
         <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>`); 
    });
  },
  validateForm: function (e, name, email) {
    e.preventDefault();
    $(".error").remove();
    let error = true;
    if (name.length < 1) {
      $('#outerFormName').after('<span class="error">This field is required</span>');
      return error;
    }
    if (email.length < 1) {
      $('#outerFormemail').after('<span class="error">This field is required</span>');
      return error;
    } else {
      let regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      var validEmail = regex.test(email);
      if (!validEmail) {
        $('#outerFormemail').after('<span class="error">Enter a valid email</span>');
        return error;
      }
    }
  }
}