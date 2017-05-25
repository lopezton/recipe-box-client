import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Drink } from './drink';
import { DrinkService } from './drink.service';

@Component({
  selector: 'drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: [ './drink-detail.component.css' ]
})
export class DrinkDetailComponent implements OnInit {
  drink: Drink;
  
  constructor(
    private drinkService: DrinkService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.drinkService.getDrink(+params['id']))
      .subscribe(drink => this.drink = drink);
  }
        
  goBack(): void {
    this.location.back();
  }
  
  gotoEdit(): void {
    const url = `/manage/drinks/${this.drink.id}/edit`;
    this.router.navigateByUrl(url);
  }
}