const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(response => response.json())
    .then(data => displayUser(data))
}

const displayUser = user =>{
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
    // console.log(user.results[0].name);

    const name = user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;
}

loadUser();