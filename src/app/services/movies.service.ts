// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";
// tslint:disable-next-line: quotemark
import { HttpClient } from "@angular/common/http";
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root",
})
export class MoviesService {

  constructor(private http: HttpClient ) {}

  getFeacture() {
    return this.http.get<RespuestaMDB>(
      `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-04-28&api_key=65b1acb65b6dd0ef68117f97aa7bcb46`
    );
  }

}
