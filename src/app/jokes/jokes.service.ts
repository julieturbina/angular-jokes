import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';   //import the map operator from the rxjs library 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: Http) { }


  getRandom(): Observable<string> {
    return this.http.get('http://api.icndb.com/jokes/random').pipe(
      map((res) => res.json().value.joke)
    );
  }

  getRandomUsingPromise(): Promise<string> {
    return this.http.get('http://api.icndb.com/jokes/random')
      .toPromise()
      .then((res: Response) => res.json().value.joke)
  }
}