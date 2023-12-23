import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Menu } from 'src/app/models/menu/menu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuLinks: Set<string> = new Set<string>();

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getMenuLinks(2).subscribe((response: Set<string>) => {
      this.menuLinks = response;
    });
  }

  
}
  

 




