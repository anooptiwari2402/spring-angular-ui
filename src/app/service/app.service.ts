import { About } from '../model/about';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl:string = "http://localhost:8080/about";

  constructor(private _http: HttpClient) { }

  public getAboutTest(): Observable<string> {
    return this._http.get<string>(`${this.apiUrl}/test`,{responseType:'text'});
  }
  public cGetAbout(): Observable<About[]> {
    return this._http.get<About[]>(`${this.apiUrl}/getAbout`);
  }
  public cGetAboutById(id:number): Observable<About> {
    return this._http.get<About>(`${this.apiUrl}/getAboutById/${id}`);
  }
  public cPostAbout(about:About): Observable<About> {
    return this._http.post<About>(`${this.apiUrl}/postAbout`, about);
  }
  public cPutUser(about:About): Observable<About> {
    return this._http.put<About>(`${this.apiUrl}/putAbout`, about);
  }
  public cDeleteUser(id:number): Observable<void> {
    return this._http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

}
