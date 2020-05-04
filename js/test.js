let data = {
    username : {
        name:"raman"
    },
    password:"kumar"
}
let mapper = {
    uname : "username.name",
    pword : "password"
}

console.log(data[mapper.uname])