"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.email = "niconchat@yahoo.com";
        this.isLoggingIn = true;
    }
    LoginComponent.prototype.submit = function () {
        alert("You are using: " + this.email);
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-login",
            styleUrls: ["login.component.css"],
            templateUrl: "login.component.html"
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBUTFDO0lBTkE7UUFPSSxVQUFLLEdBQUcscUJBQXFCLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7SUFVdkIsQ0FBQztJQVJHLCtCQUFNLEdBQU47UUFDSSxLQUFLLENBQUMsb0JBQWtCLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFWUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLENBQUUscUJBQXFCLENBQUU7WUFDcEMsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO09BQ1csY0FBYyxDQVkxQjtJQUFELHFCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWxvZ2luXCIsXHJcbiAgICBzdHlsZVVybHM6IFsgXCJsb2dpbi5jb21wb25lbnQuY3NzXCIgXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICAgIGVtYWlsID0gXCJuaWNvbmNoYXRAeWFob28uY29tXCI7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGFsZXJ0KGBZb3UgYXJlIHVzaW5nOiAke3RoaXMuZW1haWx9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==