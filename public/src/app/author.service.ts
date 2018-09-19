import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('/authors');
  }

  getOneAuthor(id) {
    return this._http.get('/author/' + id);
  }

  create(author) {
    return this._http.post('/author', author)
  }

  update(author) {
    return this._http.put('/author/' + author._id, author);
  }

  delete(author) {
    return this._http.delete('/author/' + author._id);
  }

}
