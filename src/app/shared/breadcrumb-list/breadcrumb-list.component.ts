import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbService } from '../breadcrumb/breadcrumb.service';
import { IBreadCrumb } from '../breadcrumb/ibread-crumb';

@Component({
  selector: 'app-breadcrumb-list',
  templateUrl: './breadcrumb-list.component.html',
  styleUrls: ['./breadcrumb-list.component.scss']
})
export class BreadcrumbListComponent implements OnInit {
  breadcrumbs$: Observable<IBreadCrumb[]>; 

  constructor(
    private breadcrumbService: BreadcrumbService
  ) { 
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }

  ngOnInit(): void {
  }

}
