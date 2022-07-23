import moment from 'moment';
export var PrintSection = {
        data: {},
           init:function(data){
            this.data = data;
            this.cacheDOM();
            this.render();
           },
           cacheDOM: function () {
            this.$message = $('#message-module');
            this.win=$('#botinitialised');
            this.body=$('body');
        },
        render:function(){
            
            console.log(this.data,"from print js module")
            // if (this.$menuContainer) {
            //     this.$menuContainer.remove();
            // }
           this.$menuContainer=`<div class="detailPolicyDrawer">
                  <div  style="display:flex;justify-content: space-between;">
                            <div><img src="images/imelife-logo.jpg"></div>
                            <div><img src="images/imelogo.PNG"></div>
                            <div>
                              <ul style="list-style:none">
                                 <li><h3 style="color:#dc1921">IME Life Insurance Company Limited</h3></li>
                                 <li><i class="fas fa-home"></i><p>Hathway Complex, Lainchaur, Kathmandu, Nepal</p></li>
                                 <li><i class="fas fa-phone-alt"></i><p>Toll Free No. 16600168888, Tel: +97714024072</p></li>
                                 <li><i class="fas fa-envelope"></i><p>Info@imelifeinsurance.com</p></li>
                                 <li><i class="fas fa-globe-europe"></i><p>www.imelifeinsurance.com</p></li>
                                 <li><p>PAN No. : 303053398</p></li>
                              </ul>
                            </div>
                  </div>
                  <div >
                      <h2>Date : ${moment().format("YYYY-MM-DD")}</h2>
                  </div>
                  <div class="mainbody" style="margin: 20px auto;display:block;text-align:center; padding:20px">
                       <h2  style="text-decoration: underline;">To Whom It May Concern</h2>
                       <p style="font-size:25px">This is to certify that ${this.data.data[0].TaxPayer_Name}  payer of premium against below  detailed life insurance policy.</p>
                       <ul style="list-style:none ;width:90%; font-size:20px">
                               <li style="display:flex;justify-content: space-between;"> <span>PolicyNumber:</span><span>${this.data.code}</span></li>
 	                           <li style="display:flex;justify-content: space-between;"><span>Plan:</span> <span>${this.data.data[0].d[0].PlanName}</span></li>
                                <li style="display:flex;justify-content: space-between;"><span>Life Assured:</span><span> ${this.data.data[0].AssuredName}</span></li>
                                <li style="display:flex;justify-content: space-between;"><span>Mode of Payment:</span> <span>${this.data.data[0].d[0].PayMode}</span></li>
                                <li style="display:flex;justify-content: space-between;"><span>Premium:</span>  <span>${this.data.data[0].d[0].ThisFYPremiumPaid}</span></li>
                                <li style="display:flex;justify-content: space-between;"><span>Premium Paid date:</span> <span> ${moment(this.data.data[0].d[0].PremiumPaidDate).format("YYYY-MM-DD")}</span></li>
                       </ul>
                  </div>
                  <h2 style="text-align:center;display:block"> This is auto system generated certificate  no signature and stamp required.</h2>
           </div>`;
           var a = window.open('', '', 'height=1200, width=1200'); 
        //    a.document.write('<html>'); 
        //    a.document.write('<body > <h1>Div contents are <br>'); 
           a.document.write(this.$menuContainer); 
        //    a.document.write('</body></html>'); 
           a.document.close(); 
           a.print(); 
         
        }
}