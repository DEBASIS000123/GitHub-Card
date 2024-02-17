const BASE_URL="https://api.github.com/users";
const useridele=document.getElementById("inputuser");
const userbutton=document.getElementById("searchbtn");
const cardcontainer=document.getElementById("card-dataa");

userbutton.addEventListener("click",async()=>{
    try{
        userid=useridele.value;
        const res=await fetch(`${BASE_URL}/${userid}`);
        const data=await res.json();
        console.log(data);
        if(data.bio){
            cardcontainer.innerHTML=generateprofile(data);
        }
        else{
            cardcontainer.innerHTML="<h1>Data Not Found Check UserName.</h1>";
        }
    }
    catch(error){
        console.log(error);
    }
});

const generateprofile=(profile)=>{
    return(
        `
        <div class="card">
            <div class="header">
                <div class="avtar">
                    <img src="${profile.avatar_url}" alt="avtar">
                </div>
                <div class="username">
                    <h3>${profile.name}</h3>
                    <h4>${profile.login}</h4>
                </div>
                <div class="checkprofilebtn">
                   <a target="_blank" href="${profile.repos_url}">
                    <button id="profilebtn" class="profilebtn">Visit profile</button>
                   </a>
                </div>
            </div>
            <div class="about">
                <h2>About</h2>
                ${profile.bio}
            </div>
            <div class="reports">
                <div class="report-item">
                    <h3>Followers</h3>
                    <p>${profile.followers}</p>
                </div>
                <div class="report-item">
                    <h3>Following</h3>
                    <p>${profile.following}</p>
                </div>
                <div class="report-item">
                    <h3>Public Repos</h3>
                    <p>${profile.public_repos}</p>
                </div>
            </div>
        </div>
        `
    );
};