import{h as t,p as f}from"./hooks.module.ee390651.js";import{h as p}from"./http.e11c6b00.js";import{o as e}from"./jsxRuntime.module.760e3403.js";import{_ as x}from"./preact.module.e54f245b.js";import"./jwt.1d42f94f.js";const y="/_astro/verify-letter.fe971718.svg";function k(){const[s,h]=t(".."),[a,r]=t(""),[l,n]=t(!1),[o,i]=t(!1);f(()=>{const c=new URLSearchParams(window.location.search);h(c.get("email"))},[]);const d=()=>{p("https://api.roadmap.sh/v1-send-verification-email",{email:s}).then(({response:c,error:m})=>{if(m){i(!1),r(m?.message||"Something went wrong."),n(!1);return}i(!0)}).catch(()=>{i(!1),n(!1),r("Something went wrong. Please try again later.")})};return e("div",{className:"mx-auto max-w-md text-center",children:[e("img",{alt:"Verify Email",src:y,class:"mx-auto mb-4 h-20 w-40 sm:h-40"}),e("h2",{class:"my-2 text-center text-xl font-semibold sm:my-5 sm:text-2xl",children:"Verify your email address"}),e("div",{class:"text-sm sm:text-base",children:[e("p",{children:["We have sent you an email at"," ",e("span",{className:"font-bold",children:s}),". Please click the link to verify your account. This link will expire shortly, so please verify soon!"]}),e("hr",{class:"my-4"}),!o&&e(x,{children:[l&&e("p",{className:"text-gray-400",children:"Sending the email .."}),!l&&!a&&e("p",{children:["Please make sure to check your spam folder. If you still don't have the email click to"," ",e("button",{disabled:!s,className:"inline text-blue-700",onClick:d,children:"resend verification email."})]}),a&&e("p",{class:"text-red-700",children:a})]}),o&&e("p",{class:"text-green-700",children:"Verification email has been sent!"})]})]})}export{k as VerificationEmailMessage};
