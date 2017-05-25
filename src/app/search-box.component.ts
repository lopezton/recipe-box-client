import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  template: `
    <div class="search-box">
      <div class="form-group">
        <label for="search-text">{{searchLabelText}}</label>
        <input #searchText 
          name="search-text" 
          type="text" 
          class="form-control" 
          placeholder="{{searchPlaceholderText}}"
          (input)="update.emit(searchText.value)">
      </div>
    </div>
  `
})
export class SearchBoxComponent {
  @Input() searchLabelText: string;
  @Input() searchPlaceholderText: string;
  
  @Output() update = new EventEmitter();
  
  ngOnInit() {
    this.update.emit('');
  }
} 