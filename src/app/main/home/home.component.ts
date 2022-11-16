import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hasChildren = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.hasChildren = false;
    this.router.events.pipe(filter((event: Event) => event instanceof NavigationEnd)).subscribe(() => {
      this.hasChildren = this.route.children.length > 0;
      console.log('children', this.route.children)
    });
  }

  goToUsers() {
    this.router.navigate(['user-management'], {relativeTo: this.route});
  }
}
