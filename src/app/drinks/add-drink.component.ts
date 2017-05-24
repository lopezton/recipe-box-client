import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { Drink } from './drink';
import { DrinkService } from './drink.service';
import { Ingredient } from './ingredient';

@Component({
  selector: 'add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: [ './add-drink.component.css' ]
})
export class AddDrinkComponent {
  drink = new Drink();
  drinkForm: NgForm;
  @ViewChild('drinkForm') currentForm: NgForm;
  
  formErrors = {
    'name': '',
    'imageUrl': '',
    'description': ''
  };
    
  validationMessages = {
    'name':         { 'required': 'Name is required.' },
    'imageUrl':     { 'required': 'Image URL is required.' },
    'description':  { 'required': 'Description is required.' }
  };
  
  constructor(
    private drinkService: DrinkService,
    private location: Location
  ) {}
  
  addNewIngredient(): void {
    this.drink.ingredients.push(new Ingredient());
  }
  
  removeIngredient(ingredient: Ingredient): void {
    this.drink.ingredients = this.drink.ingredients.filter(i => i !== ingredient);
  }
    
  trackByIdx(index: number, obj: any): any {
    return index;
  }
  
  onSubmit(): void {
    this.drink.ingredients = this.drink.ingredients.filter(ingredient => ingredient.name);
    this.drinkService.create(this.drink).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngAfterViewChecked() {
    this.formChanged();
  }
  
  formChanged() {
    if (this.currentForm === this.drinkForm) { return; }
    this.drinkForm = this.currentForm;
    if (this.drinkForm) {
      this.drinkForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }
  }
    
  onValueChanged(data?: any) {
    if (!this.drinkForm) { return; }
    const form = this.drinkForm.form;
  
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
  
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  
  hasErrors() {
    for (const field in this.formErrors) {
      if (this.formErrors[field] !== '') { return true; }
    }
    return false;
  }
}