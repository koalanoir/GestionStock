import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen: boolean = false;
  userId: string | undefined;
  isAuthenticated: boolean = false;

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.isAuthenticated = !!user;
      if (user?.sub) {
        this.userId = user.sub.split('|')[1]; // Extraire l'identifiant unique
      }
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }


}
