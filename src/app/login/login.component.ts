import { Component } from "@angular/core";

import { User } from "../shared/user/user.model";

@Component({
    moduleId: module.id,
    selector: "app-login",
    styleUrls: [ "login.component.css" ],
    templateUrl: "login.component.html"
})
export class LoginComponent {
    email = "niconchat@yahoo.com";
    isLoggingIn = true;
    user: User;

    constructor() {
        this.user = new User();
    }

    submit() {
        alert(`You are using: ${this.user.email}`);
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
    
}