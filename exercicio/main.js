document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('user-profile-avatar');
    const name = document.getElementById('user-profile-name');
    const username = document.getElementById('user-profile-username');
    const repos = document.getElementById('user-profile-repos');
    const followers = document.getElementById('user-profile-followers');
    const following = document.getElementById('user-profile-following');
    const link = document.getElementById('user-profile-link');

    fetch('https://api.github.com/users/JhonattandH')
        .then(function(res){
            return res.json();
        })
        .then(function(json) {
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            username.innerText = json.login;
            repos.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;

        })
});