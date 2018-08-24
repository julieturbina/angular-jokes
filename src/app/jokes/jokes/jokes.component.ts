import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/throttleTime';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
  providers: [JokesService]
})
export class JokesComponent implements OnInit {
  joke: any;
  constructor(private jokes: JokesService) { }
  
  ngOnInit() {
}
  getRandomJoke() {
    this.jokes.getRandom().subscribe((joke) => this.joke = joke);
  }
}

