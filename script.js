function myFunction() {
    var form = document.getElementById("search").value;
    var originalRepo = form.split(' ').join('');
    console.log(originalRepo)

    function getUsers() {
        fetch("https://api.github.com/users/" + originalRepo + "/repos", {
                method: "GET"

            })
            .then((data) => {
                console.log(data);
                return data.json();
            })
            .then((users) => loadUsers(users));
    }

    function loadUsers(users) {
        const userList = document.createElement("div");
        userList.className = "user-list";
        users.forEach((user) => {
            const userContainer = document.createElement("div");
            userContainer.className = "user-container";

            userContainer.innerHTML = `
          <img class="user-image"  src=${user.owner.avatar_url}> </img>
          <div>
          
           <h3 class="user-name">Name : ${user.name}</h3>
          <a> <link>repos_url : ${user.owner.repos_url}</link></a>
          <p class="forks_count">forks_count : ${user.forks_count}</p>
          <p class="url">Repo url : ${user.url}</p>
          <p class="count">Stars_count : ${user.stargazers_count}</p>
          </div>
          `;

            userList.append(userContainer);
        });

        document.body.append(userList);
    }
    getUsers();
}