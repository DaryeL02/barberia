import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { CajaComponent } from './caja/caja.component';
import { StockComponent } from './stock/stock.component';
import { ProductosComponent } from './productos/productos.component';
import { BarberosComponent } from './barberos/barberos.component';
import { ReporteComponent } from './reporte/reporte.component';

export const PagesRoutes: Routes = [
  {
    
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Starter Page' },
      ],
    },
  },
  { 
    path: 'caja', 
    component: CajaComponent, 
    data: {
      title: 'Sector de cajas',
      urls: [
        { title: 'Dashboard', url: '/dashboards/caja' },
        { title: 'Sector de cajas' },
      ],
    },  
  },
  { 
    path: 'stock', 
    component: StockComponent, 
  },
  { 
    path: 'productos', 
    component: ProductosComponent, 
  },
  { 
    path: 'barberos', 
    component: BarberosComponent, 
  },
  { 
    path: 'reporte', 
    component: ReporteComponent, 
  },
  
  
];
