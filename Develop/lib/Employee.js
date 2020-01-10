class Employee{
    constructor(name, id, title){
        if (!name) {
            throw new Error("You are missing the name.");
          }
          if (!id) {
            throw new Error("You are missing the employee's id.");
          }
          if (!title) {
            throw new Error("You are missing the employee's title.");
          }
        this.name = name;
        this.id = id;
        this.title = title;
    }
    function getName(){
        return this.name;
    };
    function getId(){
        return this.id;
    };
    function getEmail(){
        return this.email;
    }
    function getRole(){
        return this.role;
    } 
}

export