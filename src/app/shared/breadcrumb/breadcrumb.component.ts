import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event, ActivatedRouteSnapshot, Data } from '@angular/router';
import { filter, distinctUntilChanged, Observable } from 'rxjs';
import { IBreadCrumb } from './ibread-crumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd),
      distinctUntilChanged()
    ).subscribe(() => {
      const root = this.router.routerState.snapshot.root; 
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    })
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    let label = route.routeConfig && route.routeConfig.data
    ? route.routeConfig.data['breadcrumb']
    : "";

    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : "";

    if(path) {
      const lastRoutePart = path.split("/").pop();
      if(lastRoutePart) {
        const isDynamicRoute = lastRoutePart.startsWith(":");
        if (isDynamicRoute && !!route.snapshot) {
          const paramName = lastRoutePart.split(":")[1];
          path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
          label = route.snapshot.params[paramName];
        }
      }

      const nextUrl = path ? `${url}/${path}` : url;
      const breadcrumb: IBreadCrumb = {
        label: label,
        url: nextUrl
      };

      const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];

      if (route.firstChild) {
        //If we are not on our current path yet,
        //there will be more children to look after, to build our breadcumb
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
      }

      return newBreadcrumbs;
    }

    return [];
  }

}
