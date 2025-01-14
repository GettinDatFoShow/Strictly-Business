import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController, 
    private alertController: AlertController, 
    private authService: AuthService,
    private router: Router
  ) {}

  // Getters for form fields
  get email(){
    return this.credentials.get('email');
  }
  get password(){
    return this.credentials.get('password');
  }
  ngOnInit(): void {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();
    const user =  this.authService.register(this.credentials.value);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/home', {replaceUrl: true });
    }else{
      this.showAlert('Registration was unsuccessful', 'Please try again');
    }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    const user =  this.authService.login(this.credentials.value);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/home', {replaceUrl: true });
    }else{
      this.showAlert('login was unsuccessful', 'Please try again');
    }
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header, message, buttons: ['OK'],
    });
    await alert.present();
  }
}
