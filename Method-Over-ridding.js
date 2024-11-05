

class a {

    constructor(name,email,education){

        this.naam=name
        this.email=email
        this.padhai=education
    }
    
    area(){
        return`${this.naam}`
    }
}

let adetails= new a ("arslan","arslan@gmail.com","12thpass")



class b extends a{
    constructor(name,email,education,behaviour,college){
        super();
        this.naam=name
        this.email=email 
        this.padhai=education
        this.pesonality=behaviour
        this.collegename=college
    }
    
    area(){
        return`${this.email}`
    }
}

let bdetails= new b("kaif","kaif@gmail.com","ba","Good","amitycollge")

console.log(bdetails.area());

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


class user {
    constructor(username,email){
        this.naam=username
        this.email=email
    }
}

let detailuser=new user("kaif","kaifgmail.com")

class seconduser extends user{
    constructor(naam,email,education,behaviour,){
        super(naam,email)
        this.padhai=education
        this.personlaty=behaviour

    }
}

let seconduserdetails = new seconduser ("arslan","arslangmail.com","b-tech","Good")
console.log(seconduserdetails);
