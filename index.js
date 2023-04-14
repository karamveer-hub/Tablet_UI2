


// import {exporting_data} from '/feedback_page_data.js'



// console.log(exporting_data.a)

// let wanted_yes=document.querySelectorAll(".want")
let feed_yes = document.querySelectorAll(".feed_want")
let tellus_more_page = document.querySelector(".tellus_more_page")
let tellus_more = document.querySelector(".tellus_more")
let contactDetails = document.querySelector(".contactDetails")
let buttonDiv = document.querySelector("#no_feedback_submit")
let no_feedback_submit_button = document.querySelector("#no_feedback_submit_button")
let sbmbutton=document.querySelector(".sbmbutton")
let did_u_get=document.getElementsByName("wanted")
let user_info = document.querySelectorAll(".user_info")

const shopping_experience = document.querySelectorAll(".shopping_experience")
const radioButtons = document.querySelectorAll('input[name="wanted"]');
const radioButtons2 = document.querySelectorAll('input[name="feedback_wanted"]');


// let emoji_react;
let user_name_data=document.querySelector("#user_name");
let user_number_data=document.querySelector("#user_number");

let user_feed;
let user_did_u_get;
let user_shopping_experience;

// console.log(user_number_data.value)





let p = document.querySelectorAll("p")
p.forEach(p => {
    console.log(p)
    if (p.innerText.includes("₹")) {
        p.style.fontFamily = "noto_sans_tamilregular"
    }
    else {

    }
})












let feeback_img_outline = document.querySelectorAll(".feeback_img_outline")
let ciagrette_feedback_name = document.querySelector("#ciagrette_feedback_name")

let user_ciagrette_name;
    
let click = 0;
feeback_img_outline.forEach(elem => {
    elem.addEventListener("click", (e) => {
        e.preventDefault()
        // console.log(elem.alt)
        user_ciagrette_name = elem.alt
        if (click == 0 || click < 1) {
            click++;
            console.log("clicked else upar", click)
            elem.classList.add("outline_selected")
            ciagrette_feedback_name.innerText = `B. How was your experience smoking
            ${elem.alt}? `
        }
        else {
            if (click == 1) {

                if (elem.classList.contains("outline_selected")) {

                    console.log("clicked if", click)
                    click--;
                    elem.classList.remove("outline_selected")
                    ciagrette_feedback_name.innerText = "B. How was your experience smoking?"
                }
            }
        }
    })
})





















// let user_info=document.querySelectorAll(".user_info")


// wanted_yes.forEach(elem=>{
//     elem.addEventListener("click",(e)=>{
//         e.preventDefault()
//         if(elem.value==='yes'){
//           console.log("asjkkjak")
//         }
//     else if(elem.value==='no'){

//     }

// })
// })
feed_yes.forEach(elem => {
    elem.addEventListener("click", (e) => {
        // e.preventDefault()
        if (elem.value === 'feed_yes') {
            tellus_more_page.classList.add("form_page")
            tellus_more.classList.add("form")
            tellus_more_page.classList.remove("submit_page")
            tellus_more.classList.remove("submit")
            // window.location.href = 'form.html';
            contactDetails.style.display = "block"
            buttonDiv.style.display = "none"


        }
        else {
            // submit = true
            tellus_more_page.classList.add("submit_page")
            tellus_more.classList.add("submit")
            tellus_more_page.classList.remove("form_page")
            tellus_more.classList.remove("form")
            // window.location.href = 'submit.html';
            buttonDiv.style.display = "block"
            contactDetails.style.display = "none"




        }

    })
})




// let that = []
// let count=0
// feeback_img_outline.forEach(elem => {
//     elem.addEventListener("click", () => {

//         for (let i = 0; i < feeback_img_outline.length; i++) {
//             if(that.length)
//             if(feeback_img_outline[i]==elem){
//                 elem
//             }

//         }
//     })
// })









// let count = 0
// let test = document.querySelectorAll('.prateek_class img')
// for (let i = 0; i < feeback_img_outline.length; i++) {

//     feeback_img_outline[i].addEventListener('click', e =>{
//         if(count < 3){
//             test[i].style.border = '2px solid red'
//             count++
//         }else{
//             test[i].style.border = 'none'
//             --count
//         }
//     })  
// }

shopping_experience.forEach(elem => {
    elem.addEventListener("click", (e) => {
        console.log(elem.children[1].alt)
        e.preventDefault()
        user_shopping_experience = elem.children[1].alt;
        // getData()
    })
})


let feedback_emoji = document.querySelectorAll(".feedback_redirect")

var feeback_page_emoji;

feedback_emoji.forEach(elem => {
    elem.addEventListener("click", (e) => {
        e.preventDefault()
        feeback_page_emoji = elem.children[1].alt;
        // console.log(feeback_page_emoji)
        // exporting_data(user_ciagrette_name,feeback_page_emoji)
        // getData()
        // setTimeout(() => {
            window.location.href = 'tellus_more.html';
        // }, 100);
    })
});











user_info.forEach(elem => {

    elem.addEventListener('keyup', (e) => {
        if (user_name.value != ' ' && user_number.value != ' ') {

            e.preventDefault()
            sbmbutton.style.background = " linear-gradient(270deg, #447AEC 0%, #2A5CDC 100%"
           

        }

    })
})


sbmbutton.addEventListener('click', (e) => {
    e.preventDefault()
  
// console.log(user_ciagrette_name)
    // user_name.value == ' ' && user_number.value == ' '

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            user_did_u_get = radioButton.value;
            break;
        }
    }
    for (const radioButton of radioButtons2) {
        if (radioButton.checked) {
            user_feed = radioButton.value;
            break;
        }
    }

    getData()

  setTimeout(() => {
    window.location.href = 'thanku.html';
  }, 100);  


})





   no_feedback_submit_button.addEventListener("click", (e) => {
    e.preventDefault()
              

    // user_name.value == ' ' && user_number.value == ' '

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            user_did_u_get = radioButton.value;
            break;
        }
    }
    for (const radioButton of radioButtons2) {
        if (radioButton.checked) {
            user_feed = radioButton.value;
            break;
        }
    }

    getData()

    setTimeout(() => {
        window.location.href = 'thanku.html';
      }, 100);  
    
    })






    const sb = supabase.createClient('https://qopwvyhgswjzhujqqbfa.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvcHd2eWhnc3dqemh1anFxYmZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzNzUxODksImV4cCI6MTk5Njk1MTE4OX0.kksfMR19xFb5CZkYw9MOb8tFF8p3UE5uAtIPGgT2t4g')



async function getData() {
    // if(user_number_data.value=="") user_number_data.value == "No Details"
    // if(user_name_data.value=="") user_name_data.value == "No Details"

    const { data, error } = await sb
        .from('users_feedback')
        .insert(
            {
                emoji_react: feeback_page_emoji,
                ciagrette_name: user_ciagrette_name,
                customer_number:user_number_data.value,
                did_you_get:user_did_u_get,
                customer_name:user_name_data.value,
                contact:user_feed,
                shopping_exp:user_shopping_experience
            }
        )

    if (data) {
        console.log(data);
    }
}
