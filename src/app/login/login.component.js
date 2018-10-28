"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_model_1 = require("../shared/user/user.model");
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.email = "niconchat@yahoo.com";
        this.isLoggingIn = true;
        this.user = new user_model_1.User();
    }
    LoginComponent.prototype.submit = function () {
        alert("You are using: " + this.user.email);
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
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLHdEQUFpRDtBQVFqRDtJQUtJO1FBSkEsVUFBSyxHQUFHLHFCQUFxQixDQUFDO1FBQzlCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBSWYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLEtBQUssQ0FBQyxvQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFmUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLENBQUUscUJBQXFCLENBQUU7WUFDcEMsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDOztPQUNXLGNBQWMsQ0FpQjFCO0lBQUQscUJBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXIubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxyXG4gICAgc3R5bGVVcmxzOiBbIFwibG9naW4uY29tcG9uZW50LmNzc1wiIF0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsb2dpbi5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBlbWFpbCA9IFwibmljb25jaGF0QHlhaG9vLmNvbVwiO1xyXG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgdXNlcjogVXNlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICBhbGVydChgWW91IGFyZSB1c2luZzogJHt0aGlzLnVzZXIuZW1haWx9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==