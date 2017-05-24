import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Drink } from './drink';

@Injectable()
export class DrinkService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) {}
  
  create(drink: Drink): Promise<Drink> {
    const url = `http://localhost:8080/drinks`;
    return this.http.post(url, JSON.stringify(drink), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
    
  delete(id: number): Promise<void> {
    const url = `http://localhost:8080/drinks/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  
  getDrink(id: number): Promise<Drink> {
    const url = `http://localhost:8080/drinks/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Drink)
      .catch(this.handleError);
  }
  
  getDrinks(): Promise<Drink[]> {
    const url = 'http://localhost:8080/drinks';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json()._embedded.drinks as Drink[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}