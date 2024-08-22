document.getElementById("search-btn").addEventListener('click', getUser);

function getUser(){
    const username = document.getElementById('search-input').value

    if(!username) return;
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('username').textContent = data.name || data.login;
        document.getElementById('joined-date').textContent = `Joined ${new Date(data.created_at).toDateString()}`;
        document.getElementById('bio').textContent = data.bio || `This user has no bio`;
        document.getElementById('repo-count').textContent = data.public_repos;
        document.getElementById('followers-count').textContent = data.followers;
        document.getElementById('following-count').textContent = data.following;
        document.getElementById('location').textContent = data.location || `Location Not Found`;
        document.getElementById('github-link').textContent = data.blog || `Link not found`;
        document.getElementById('github-link').textContent = data.blog || `#`;
     })
     .catch(error =>
        console.error(`Error fetching the GitHub profile`));
}
const toggleButton = document.getElementById('mode-toggle')
toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if(document.body.classList.contains('light-mode')){
            toggleButton.textContent = 'Light'
        }else{
            toggleButton.textContent = 'Dark'
        }
    });



































