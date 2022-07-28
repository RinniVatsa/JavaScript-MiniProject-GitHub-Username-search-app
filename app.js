const input = document.querySelector('input')
const btn = document.querySelector('button')
const card = document.querySelector('.card')

user('RinniVatsa')
async function user (username) {
    const resp = fetch(`https://api.github.com/users/${username}`)
    const respData = (await resp).json()
    console.log(respData);
    return respData
}

btn.addEventListener('click', async() => {
    const input_val = input.value
    const search_result = await user(input_val)
    console.log(search_result);
    if(!search_result.login){
        alert('No User Found')
    }else{
        card.innerHTML = `
        <div class="avatar">
            <img src="${search_result.avatar_url}" alt="">
        </div>
            
        <div class="info">
            <h2>${search_result.name}</h2>
            <p>${search_result.login}</p>

        <div class="follow-info">
        <div class="single">
            <span>${search_result.followers}</span>
            <span>Followers</span>
        </div>
        <div class="single">
            <span>${search_result.following}</span>
            <span>Following</span>
        </div>
        </div>

        <div class="single">
            <span>${search_result.public_repos}</span>
            <span>Repositories</span>
        </div>
        </div>
            <a href="${search_result.html_url}" target="_blank">Visit Github Profile ></a>
        </div>
        </div>
        `
    }
})
