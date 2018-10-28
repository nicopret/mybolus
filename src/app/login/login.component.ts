import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-login",
    styleUrls: [ "login.component.css" ],
    templateUrl: "login.component.html"
})
export class LoginComponent {

    submit() {
        console.log('hello');
    }
    
}