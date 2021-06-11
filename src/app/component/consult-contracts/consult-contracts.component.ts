import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-contracts',
  templateUrl: './consult-contracts.component.html',
  styleUrls: ['./consult-contracts.component.css']
})


export class ConsultContractsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'fiador'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  click(){
    console.log(this.clickedRows);
    this.router.navigate(['/otp']);
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  fiador: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '15A', weight: 'Juan Garzón', symbol: 'Carlos Arango', fiador: 'Carlos'},
  {position: 2, name: '16A', weight: 'Felipe Arias', symbol: 'Juan Zapata', fiador: 'Carlos'},
  {position: 3, name: '17A', weight: 'Pedro Cifuentes', symbol: 'Oscar Sanchez', fiador: 'Carlos'},
  {position: 4, name: '18A', weight: 'Angela Arango', symbol: 'Beto Cardenas', fiador: 'Carlos'},
  {position: 5, name: '19A', weight: 'Martin Zapata', symbol: 'Camila Cifuentes', fiador: 'Carlos'},
];
