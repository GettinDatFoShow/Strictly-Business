import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(
    private authService: AuthService, 
    private router: Router
    ) {}
    
    addInventory= function(){
      this.router.navigateByUrl('/add-inventory');
    }

    async logout() {
      await this.authService.logout();
      this.router.navigateByUrl('/', { replaceUrl: true });
    }
}
