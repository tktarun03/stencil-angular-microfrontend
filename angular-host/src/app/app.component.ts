import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Angular Micro Frontend Host</h1><my-widget title="Hello from Stencil"></my-widget>`,
  styles: ['h1 { text-align: center; }']
})
export class AppComponent { }