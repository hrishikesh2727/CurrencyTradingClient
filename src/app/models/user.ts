export class User {
    constructor
    (
        userName?: string,
        firstName?: string,
        lastName?: string,
        email?: string,
        password?: string,
        active?: string
     )
     {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.active = active;
     }
     public userName: string;
     public firstName: string;
     public lastName: string;
     public email: string;
     public password: string;
     public active: string;
}
