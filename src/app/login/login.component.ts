import { Page } from "tns-core-modules/ui/page";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";

@Component({
    moduleId: module.id,
    providers: [ UserService ],
    selector: "app-login",
    styleUrls: [ "login.component.css" ],
    templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
    isLoggingIn = true;
    user: User;

    constructor(private page: Page, private router: Router, private userService: UserService) {
        this.user = new User();
        this.user.email = "a.b@c.com";
        this.user.password = "aaa";
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    login() {
        this.userService.login(this.user).subscribe(
            () => this.router.navigate(["/items"]),
            (error) => alert("Unfortunately we could not find your account.")
        );
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