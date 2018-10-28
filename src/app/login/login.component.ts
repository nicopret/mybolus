import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-login",
    styleUrls: [ "login.component.css" ],
    templateUrl: "login.component.html"
})
export class LoginComponent {
    email = "niconchat@yahoo.com";
    isLoggingIn = true;

    submit() {
        alert(`You are using: ${this.email}`);
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
    
}