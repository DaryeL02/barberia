import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CajaModalComponent } from './caja-modal/caja-modal.component';

// table 1
export interface cajaData {
  id: number;
  date: string;
  shift: string;
  openingBalance: number;
  checker: string;
  income: number;
  expenses: number;
  sales: number;
  services: number;
  currentBalance: number;
  state: string;
}

// const CAJA_DATA: cajaData[] = [
//   {
//     id: 1,
//     date: '2022-01-01',
//     shift: 'Mañana',
//     openingBalance: 100,
//     checker: 'Dante',
//     income: 200,
//     expenses: 100,
//     sales: 300,
//     services: 200,
//     currentBalance: 300,
//     state: '',
//   },
//   {
//     id: 2,
//     date: '2022-01-01',
//     shift: 'Verpertino',
//     openingBalance: 100,
//     checker: 'Juan',
//     income: 200,
//     expenses: 100,
//     sales: 10,
//     services: 200,
//     currentBalance: 9999,
//     state: '',
//   },
// ];


@Component({
  selector: 'app-caja',
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './caja.component.html',
  styleUrl: './caja.component.scss'
})
export class CajaComponent {

  dataSource1 = [];
  // table 1
  displayedColumnsCaja: string[] = ['date', 'shift' ,'opening_balance', 'checker', 'income',
                                 'expenses', 'sales', 'services', 'current_balance', 
                                 'state'];

  displayedColumnsServicio: string[] = ['date', 'shift' ,'opening_balance', 'checker', 'income'];

  displayedColumnsVentas: string[] = ['date', 'shift' ,'opening_balance', 'checker'];


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CajaModalComponent, {
      data : this.dataSource1
    });
  }
  
  ngOnInit() {
    this.loadTable1();
  };
  
  
  loadTable1() {
    fetch('http://localhost:3000/caja')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.dataSource1 = data;
      });
  };

}
