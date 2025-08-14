import { Component } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EcuaFut';

  ngOnInit() {
  }
  async ngAfterViewInit() {
    let body = document.body;
    let script = document.createElement('script');

    script.innerHTML = '';    

    script.src = '../../../../assets/js/nifty.min.js';

    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }  
}