module.exports = (req, res, next) => {

   next()

    if(req.cookies.remember != undefined && req.session.loggedUser == undefined){
        const db = path.join(__dirname, "../database/usuarios.json")
        let usersJSON = fs.readFileSync(db, "utf-8")
        let users = [ ]
        if(usersJSON == " "){
            users = [ ]
        } else {
            users = JSON.parse(usersJSON)
        }
        let user_to_log = []
    }

    for(user of users){
        if(user.email == req.cookies.remember){
            user_to_log =  user
        }
    }
    
    req.session.loggedUser = user_to_log
}