{/* <div id="joke" class="joke"> awsome joke loading.........</div>
            <button id="jokeBtn"> click here for next joke</button> */}



/// Endpoints
/// Fetch a random dad joke
/// GET https://icanhazdadjoke.com/ fetch a random dad joke.




///
//const jokeBtn = document.querySelector('#jokeBtn');
const jokes = document.querySelector('#ram');
const jokeBtn = document.querySelector('#jokeBtn');
const parentElem = document.getElementById('ramm');
const generateJokes = () => {
    // --------- handling fetch api with the help of promises
//     const setHeader = {
//         headers: {
             
//             Accept: 'application/json',
             
             
             
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', setHeader)
//         .then((res) => {
//             //console.log(res.json());
//             return res.json();
//         }).then((data) => {
//             console.log(data);
//             jokes.innerHTML = `JOKE IS : ${data.joke}`; ///
//             //  if (data.status <= 365) {
//             //      renderElem = $(`<ul class='classs' style=''>
//             //                         <li class="sent"><img src='' alt="" /><p>Enter your email address please: </p>  <input></input>  </li>'
                                      
                                 
//             //                      </ul>`);
//             //  } else {
//             //      renderElem = $('<li class="sent"><p>hello ram</p></li>');
                 
//             //  }
            
//             renderElem.appendTo(parentElem);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }
    var base64 = require('base-64');

    basicAuth=`ssb:ime123`
    let AgentCode={
        PolicyNumber: 307000001
      }
      fetch('http://124.41.240.54:7272/siddhilife/ime/tPHL/GetPolLoanBal/103/3574544377',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Basic ${base64.encode(basicAuth)}`
        },
        body: JSON.stringify(AgentCode)
      }).then(res =>res.json())
          .then(data => {
              console.log(data)
              jokes.innerHTML = `JOKE IS : ${data}`;
         //submission(mailid,mailfor,data,title,mode,req,res)
        })
        .catch(err=>console.log(err))
    



}





//{method:'GET', 
//headers: {'Authorization': 'Basic ' + btoa('login:password')}})


















 
    ///--------- async function ram(){} /// this is the syntax to write a async function
    ///--------- handling fetch api with the help of async-awsit---------
// const generateJokes = async () => {
//     /// async await ma chai lofic lai try ra catch block bhitra lekhnu parxa hai ta

    

//     try {
//         const setHeader = {
//             headers: {
//                 Accept: 'application/json'
//             }
//         }
//         const res = await fetch(' https://icanhazdadjoke.com/j/R7UfaahVfFd', setHeader);
//         const data = await res.json();
//         ///const daTa = data.joke;
//         jokes.innerHTML =`the joke is :${data.joke} , the status is :${data.status} , the id is :${data.id}` ;

//     } catch(error) {
//         console.log(`the error is ${error}`);
//     }


// }

jokeBtn.addEventListener('click', generateJokes);






















