(()=>{"use strict";const e=[{id:1,name:"Jenifer",age:"2 months",breed:"Dog - Labrador",description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",picture:"pets-jennifer.png"},{id:2,name:"Sophia",age:"",breed:"Dog - Shih tzu",description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",picture:"pets-sophia.png"},{id:3,name:"Woody",age:"3,5 year",breed:"Dog - Golden Retriever",description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",picture:"pets-woody.png"},{id:4,name:"Scarlett",age:"",breed:"Dog - Jack Russell Terrier",description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",picture:"pets-scarlett.png"},{id:5,name:"Katrine",age:"",breed:"Cat - British Shorthair",description:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",picture:"pets-katrine.png"},{id:6,name:"Timmy",age:"",breed:"Cat - British Shorthair",description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",picture:"pets-timmy.png"},{id:7,name:"Freddie",age:"",breed:"Cat - British Shorthair",description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",picture:"pets-freddie.png"},{id:8,name:"Charly",age:"3 years",breed:"Dog - Jack Russell Terrier",description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",picture:"pets-charly.png"}],t=(e,t)=>{t&&(t.innerHTML="",e.forEach((e=>{const n=document.createElement("div");n.innerHTML=`\n      <div>  \n      <img src='./img/${e.picture}'>\n      </div>\n      <h4>${e.name}</h4>\n      `;const i=document.createElement("button");i.innerHTML="Learn more",i.className="ourpets-buttons hover",n.append(i),n.classList.add("ourpets-card"),t.append(n)})))};window.addEventListener("load",(()=>{const n=document.querySelector(".burger"),i=document.querySelector("nav"),a=document.querySelector(".pets-grid");(function(){const e=document.querySelector(".nav-menu").getElementsByTagName("a"),t=document.location.href;for(let n=0;n<e.length;n++)t===e[n].href&&e[n].classList.add("active")})(),t(e,a),function(e){const t=document.querySelector(".right-button"),n=document.querySelector(".left-button");if(!document.querySelector(".ourpets-card"))return;const i=document.querySelector(".pets-grid");let a=i.clientWidth,o=0;window.addEventListener("resize",(()=>{a=i.clientWidth,o=Math.max(o,-280*e.length+a),i.style.left=`${o}px`})),t.addEventListener("click",(function(){o-=280,o=Math.max(o,-280*e.length+a),i.style.left=`${o}px`})),n.addEventListener("click",(function(){o+=280,o=Math.min(o,0),i.style.left=`${o}px`}))}(e),n.addEventListener("click",(()=>function(e){e&&e.classList.toggle("open")}(i)))}));const n=(e,t)=>{t&&(t.innerHTML="",e.forEach((e=>{new class{constructor(e,t,n,i,a){this.picture=e,this.name=t,this.breed=n,this.age=i,this.description=a,this.modalWindow=this.modalWindow.bind(this)}init(e){const t=document.createElement("div");t.innerHTML=`\n      <div>  \n      <img src='../img/${this.picture}'>\n      </div>\n      <h4>${this.name}</h4>\n      `;const n=document.createElement("button");n.innerHTML="Learn more",n.className="ourpets-buttons hover",t.append(n),n.addEventListener("click",this.modalWindow),t.classList.add("ourpets-card"),e.append(t)}modalWindow(){const e=document.querySelector(".modal-content"),t=document.createElement("button");t.innerHTML="X",t.className="close-modal",e.append(t),e.innerHTML=`\n      <div>\n        <img src='../img/${this.picture}'>\n      </div>\n      <div class = "modal-text">\n        <h4>${this.name}</h4>\n        <p>${this.age}</p>\n        <p>${this.breed}</p>\n        <p>${this.description}</p>\n      </div>\n    `,t.addEventListener("click",this.render)}}(e.picture,e.name,e.breed,e.age,e.description).init(t)})))};window.addEventListener("load",(()=>{const i=document.querySelector(".ourpets-content"),a=document.querySelector(".petsForm");n(e,i),a&&a.addEventListener("change",(n=>function(e,n,i){if(!n||!i)return;const{value:a}=e.target,o=[...n];"ASC"===a?o.sort(((e,t)=>e.name>=t.name?1:-1)):o.sort(((e,t)=>e.name>=t.name?-1:1)),t(o,i)}(n,e,i)))}))})();