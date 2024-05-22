import { Component, OnInit } from '@angular/core';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  imports: [SidenavItemComponent]
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
