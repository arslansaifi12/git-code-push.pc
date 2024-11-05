
class user {
    #naam;
    email;
    password;
    constructor(name,email,password){
        this.#naam=name
        this.email=email
        this.password=password

    }
    getnaam(){
        return this.#naam
    }
}

let userdetails= new user("arslan","arslangmail.com",123)

console.log(userdetails.getnaam());
