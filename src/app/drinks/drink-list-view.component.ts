import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Drink } from './drink';
import { DrinkService } from './drink.service';

@Component({
  selector: 'drink-list-view',
  templateUrl: './drink-list-view.component.html',
  styleUrls: [ './drink-list-view.component.css' ],
})
export class DrinkListViewComponent implements OnInit {
  drinks: Drink[];
  drinkToDelete: Drink;
  
  constructor(
    private drinkService: DrinkService,
    private router: Router,
    private modalService: NgbModal
  ) {}
  
  ngOnInit(): void {
    this.getDrinks();
  }
    
  getDrinks(): void {
    this.drinkService.getDrinks().then(drinks => this.drinks = drinks);
  }
      
  gotoDetails(drink: Drink): void {
    const url = `/manage/drinks/${drink.id}/detail`;
    this.router.navigateByUrl(url);
  }
    
  gotoEditDrink(drink: Drink): void {
    
  }
  
  openModal(content: any) {
    this.modalService.open(content);
  }
    
  deleteDrink(drink: Drink): void {
    this.drinkService.delete(drink.id)
      .then(() => {
        this.drinks = this.drinks.filter(d => d !== drink);
      });
  }
}