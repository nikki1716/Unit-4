import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  players: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.mongodb.com/v1/models/players').subscribe(
      (response) => {
        this.players = response.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
