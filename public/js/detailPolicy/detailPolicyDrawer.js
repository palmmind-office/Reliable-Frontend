import { socketModule } from '../core/socket';
import moment from 'moment';
export var detailPolicyDrawer = {
    data: {},
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
    },

    cacheDOM: function () {
        this.$message = $('#message-module');
        this.win = $('#botinitialised');
        this.body = $('body');
    },

    generateDOM: function (tag, attribute, css, text) {
        let $dom = $(tag);
        attribute && $dom.attr(attribute);
        css && $dom.css(css);
        text && $dom.html(text);
        return $dom;
    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, 'fast');
    },
    render: function () {
        if (this.$menuContainer) {
            this.$menuContainer.remove();
        }
        this.$menuContainer = $(`<div class="detailPolicyDrawer"></div>`);
        let icon = $(`<i class="fas fa-times-circle"></i>`);
        icon.appendTo(this.$menuContainer);
        icon.click(() => {
            this.$menuContainer.remove();
        })
        if (this.data.hasOwnProperty('subtitle')) {
            let title = $(`<h6 class="Dynamictitle">${this.data.subtitle}</h6>`).appendTo(this.$menuContainer);
        }
        // if (this.data.hasOwnProperty('subtitle')) {
        //     let title = $(`<h6 class="">${this.data.subtitle}</h6>`).appendTo(this.$menuContainer);
        // }

        //for checking for property to show respective contents
        if (this.data.for === "AgentPolicy") {
            this.tablemaker(this.data)
        }

        if (this.data.for === "calculation") {
            this.ajodeCalculation(this.data)
        }
         if (this.data.for === "bank detil") {
            this. tablemaker_bank_details(this.data)
        }
        this.$menuContainer.appendTo(this.win);
    },

    filtertable: function (data) {
        let table = $(`<table class="table table-bordered table-sm" id="policydetailtable"></table>`).appendTo(this.$menuContainer);
        let thead = $(`<thead>
                        <tr>
                            <th>Assured Name</th>
                            <th>Gender</th>
                            <th>Mobile</th>
                            <th>Policy No</th>
                            <th>Mature Date</th>
                            <th>Next Due Date</th>
                            <th>Mode</th>
                        </tr>
                   </thead>`).appendTo(table);
        let tbody = $(`<tbody></tbody>`).appendTo(table);
        data.forEach(e => {
            let tr = $(`<tr></tr>`);
            let trbody = $(`
            <td>${e.AssuredName}</td>
            <td>${e.Gender}</td>
            <td>${e.Mobile}</td>
            <td>${e.PolicyNumber}</td>
            <td>${moment(e.MatureDate).format("YYYY-MM-DD")}</td>
            <td>${moment(e.NextDueDate).format("YYYY-MM-DD")}</td>
            <td>${e.PayMode}</td>
            `).appendTo(tr);
            tr.appendTo(tbody);
        })
    },

    ajodeCalculation: function (data) {
        let table = $(`<table class="table table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col">Premium</th>
            <th scope="col">Account</th>
          </tr>
        </thead>
        <tbody>

          <tr >
            <th scope="row">Basic premium</th>
            <td>${data.response_data.basic}</td>
          </tr>

          <tr style=${data.response_data.thirdparty == undefined ? "Display:none" : "Display:"}>
            <th scope="row">Third Party</th>
            <td>${data.response_data.thirdparty}</td>
          </tr>

          <tr scope="row" style=${data.response_data.pool == undefined ? "Display:none" : "Display:"}>
            <th>Pool(RSD/Terrorism/Driver/Passenger)</th>
            <td>${data.response_data.pool}</td>
          </tr>

          <tr>
          <th scope="row">Stamp</th>
          <td>${data.response_data.stamp}</td>
        </tr>

        <tr>
        <th scope="row">Vat</th>
        <td>${data.response_data.vat}</td>
      </tr>
      <tr style="color:red">
            <th scope="row">Total Premium</th>
            <td>${data.response_data.total}</td>
         </tr>
        </tbody>
      </table>`);
        table.appendTo(this.$menuContainer);
        // let btns = [{
        //     title: "yes",
        //     payload: "yes"
        // },
        // {
        //     title: "No",
        //     payload: "No"
        // }
        // ];
        // let btncontainer = $(`<div class="btncontainer"></div>`);
        // btncontainer.css({ "display": "flex", "justify-content": "center" })
        // btncontainer.appendTo(this.$menuContainer);
        // btns.forEach(em => {
        //     let btn = $(`<button type="button" class="btn btn-primary">${em.title}</button>`).appendTo(btncontainer);
        //     btn.on("click", function () {
        //         socketModule.messageSend(em.payload);
        //     })
        // })

    },

    tablemaker: function (data) {
        let table = $(`<table class="table table-bordered table-sm" id="policydetailtable"></table>`).appendTo(this.$menuContainer);
        let thead = $(`<thead>
                        <tr>
                            <th>Assured Name</th>
                            <th>Gender</th>
                            <th>Mobile</th>
                            <th>Policy No</th>
                            <th>Mature Date</th>
                            <th>Next Due Date</th>
                            <th>Periodic Premium</th>
                            <th>Mode</th>
                        </tr>
                   </thead>`).appendTo(table);
        let tbody = $(`<tbody></tbody>`).appendTo(table);
        data.data[0].Pol.forEach(e => {
            let tr = $(`<tr></tr>`);
            let trbody = $(`
            <td>${e.AssuredName}</td>
            <td>${e.Gender}</td>
            <td>${e.Mobile}</td>
            <td>${e.PolicyNumber}</td>
            <td>${moment(e.MatureDate).format("YYYY-MM-DD")}</td>
            <td>${moment(e.NextDueDate).format("YYYY-MM-DD")}</td>
            <td>${e.PeriodicPremium}</td>
            <td>${e.PayMode}</td>
            `).appendTo(tr);
            tr.appendTo(tbody);
        })
    },
    tablemaker_bank_details: function (data) {
        let table = $(`<table class="table table-bordered table-sm" id="policydetailtable"></table>`).appendTo(this.$menuContainer);
        let thead = $(`<thead>
                        <tr>
                            <th>S.N</th>
                            <th>Account Name</th>
                            <th>Bank Name</th>
                            <th>Branch</th>
                            <th>Account Number</th>
                        </tr>
                   </thead>`).appendTo(table);
        let tbody = $(`<tbody></tbody>`).appendTo(table);
        data.data.forEach(e => {
            let tr = $(`<tr></tr>`);
            let trbody = $(`
            <td>${e.Sn}</td>
            <td>${e.Account_Name}</td>
            <td>${e.Bank_Name}</td>
            <td>${e.Branch}</td>
            <td>${e.AccountNumber}</td>
           
            `).appendTo(tr);
            tr.appendTo(tbody);
        })
    },
    clear: function () {
        this.data = {
            data: []
        };
        if (this.$menuContainer) {
            this.$menuContainer.remove();
        }
    }
}