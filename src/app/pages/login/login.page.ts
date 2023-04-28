import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

    email;
    password;

    constructor(private router: Router) { }

    ngOnInit() { }

    /**
     * Authenticate user and redirect to home page
     */
    login(): void {
        // alert('authenticate and login');
        this.router.navigate(['/tabs/home'])
    }






    /**
     * Reset the users password
     * NK?? Does ionic or angular have API to manage this?
     */
    resetPassword(): void {
        alert('reset password');
    }

}
