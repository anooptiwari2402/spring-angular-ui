import { PAbout } from './model/pAbout';
import { AppService } from './service/app.service';
import { About } from './model/about';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public aboutAll: About[];
  public about_id: About;
  public about: PAbout;
  public test: string;

  constructor(private _service: AppService) { }

  ngOnInit() {
    this.cGetAbout();
  }

  public getAboutTest(): void{
    this._service.getAboutTest().subscribe(
      (response: string) => { this.test = response; console.log(response) },
      (error: HttpErrorResponse) => { console.log(error.message) }
    );
  }

  public cGetAbout(): void{
    this._service.cGetAbout().subscribe(
      (response: About[]) => { this.aboutAll = response; console.log(response) },
      (error: HttpErrorResponse) => { console.log(error.message) }
    );
  }

}
