import { Component, OnInit } from '@angular/core';
declare var tinymce: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartinymc';
  ngOnInit() { 
    
    tinymce.init(
      {
        selector: 'textarea',  // change this value according to your HTML
        menubar: false,
        toolbar: 'bullist, numlist',
        plugins: 'advlist',
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'lower-alpha,lower-roman,upper-alpha,upper-roman'
      });
    }

  
}





