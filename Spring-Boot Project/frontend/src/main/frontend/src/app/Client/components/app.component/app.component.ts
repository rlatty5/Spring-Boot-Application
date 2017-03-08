import { Component } from '@angular/core';
import '../../../rxjs-extensions'
  //' /rxjs-extensions';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <nav>
      
    
     <ul class="widget-tabs">
     <li class="widget-tab">
        <a routerLink="/ViewAll" routerLinkActive="active" class="widget-tab-link">View All</a>
      <li class="widget-tab">
        <a routerLink="/SignUp" routerLinkActive="active" class="widget-tab-link">Sign Up</a>
      <li class="widget-tab">
        <a routerLink="/Home" routerLinkActive="active" class="widget-tab-link">Home</a>
    </ul>
    </nav>
  
    <div class="header-bar"></div>
    <!--<nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>-->
    
     
  
    
    <router-outlet></router-outlet>
    
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {

}


