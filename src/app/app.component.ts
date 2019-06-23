import { Component, HostListener, ViewChild, AfterContentInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { MatSidenav, MatDrawer } from '@angular/material';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent implements AfterViewChecked {
  title = 'frontend-rva4';
  show = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  @ViewChild('drawer') drawer: MatDrawer;

  get stateName() {
    return this.show ? 'show' : 'hide';
   }

  ngAfterViewChecked() {
    this.toggle();
    this.cdRef.detectChanges();
  }


   toggle() {
    this.show = !this.show;
   }

  isMobile(): boolean {
    if (window.screen.width < 500) {
      return true;
    } else if (window.screen.width > 500) {
      this.drawer.open();
      return false;
    }
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
