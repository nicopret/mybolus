import { Component } from "@angular/core";

import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";

@Component({
    moduleId: module.id,
    providers: [ UserService ],
    selector: "app-login",
    styleUrls: [ "login.component.css" ],
    templateUrl: "login.component.html"
})
export class LoginComponent {
    isLoggingIn = true;
    user: User;

    constructor(private userService: UserService) {
        this.user = new User();
        this.user.email = "a.b@c.com";
        this.user.password = "aaa";
    }

    login() {

    }

    signUp() {
        this.userService.register(this.user).subscribe(() => {
            alert("Your account was successfully created");
            this.toggleDisplay();
        }, () => alert("Unfortunetaly your account was not created"));
    }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
    
}