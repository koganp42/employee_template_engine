const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        // if (!name) {
        //     throw new Error("You are missing the employee's name.");
        //   }
        //   if (!id) {
        //     throw new Error("You are missing the employee's id.");
        //   }
        //   if (!email) {
        //     throw new Error("You are missing the employee's email.");
        //   }
        //   if (!github) {
        //     throw new Error("You are missing the employee's Github username.");
        //   }
        super(name, id, email, "Engineer");
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
};

module.exports = Engineer;