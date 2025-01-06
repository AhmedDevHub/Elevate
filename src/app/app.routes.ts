import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      loadComponent: () =>
        import('./components/home/home.component').then((m) => m.HomeComponent),
    },
    {
      path: 'product',
      loadComponent: () =>
        import('./components/product/product.component').then(
          (m) => m.ProductComponent
        ),
    },
    {
      path: 'productdetails/:id',
      loadComponent: () =>
        import('./components/productdetails/productdetails.component').then(
          (m) => m.ProductdetailsComponent
        ),
    },
    {
      path: '**',
      loadComponent: () =>
        import('./components/notfound/notfound.component').then(
          (m) => m.NotfoundComponent
        ),
    },
  ];
