

function login(req, res){

    res.send("You are logged in");

}

function register(req, res){

    res.send("You are registeredn ");

}

function check(req, res){

    res.send("user checked");

}

module.exports = {register, login, check}