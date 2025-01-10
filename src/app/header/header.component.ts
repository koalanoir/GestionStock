import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen: boolean=false;
  constructor(@Inject(DOCUMENT) public document: Document,public auth: AuthService) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
