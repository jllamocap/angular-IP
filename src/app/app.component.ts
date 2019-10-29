import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getIP().subscribe((data)=>{
      console.log(data);
    });
  }
}
