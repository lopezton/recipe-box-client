import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
  title = 'Dashboard';
  
  ngOnInit(): void {
    
  }
}