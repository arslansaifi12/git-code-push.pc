
class A {
    name;
    education;
    email;

    constructor(name,education,email){

        this.name=name
        this.education=education
        this.email=email

    }
    
    
    namecheck(){       // method over riding
        return this.email  
   }

    
}

//

class B extends A{
    constructor(name,education,email,behaviour,work) {
        super(name,education,email)  // prop over ride
         this.name="kaif"
        this.behaviour=behaviour  
        this.work=work
    }
    check(a,b){
         return a*BigInt
    }
    check(a,b,c){          // method over loading 
         return a*b*c
    }

    namecheck(){
         return this.name  // method over riding
    }

}

let adetail=new A("arslan","bca","arslan@gmail.com")
console.log(adetail);

//

let bdetails=new B("B-tech","Alaham@gmail.com","good","teaching")
// console.log(bdetails.check(2,2));
console.log(bdetails);



console.log("arslan");
