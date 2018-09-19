import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthorService } from '../../author.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authorService: AuthorService
  ) { }

  newAuthor: any;
  messages: any;
  ngOnInit() {
    this.newAuthor = {}
    this.messages = { author: "" };
  }

  goHome() {
    this._router.navigate(['/']);
  }

  createAuthor() {
    let obs = this._authorService.create(this.newAuthor);
    obs.subscribe(response => {
      if (response['status'] == false) {
        this.messages = response['messages'];
      }
      else {
        this.messages = response['messages'];
        console.log(this.messages);
        setTimeout(() => { this.goHome() }, 2000);
      }
    })
  }
}
