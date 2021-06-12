import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-create-contracts',
  templateUrl: './create-contracts.component.html',
  styleUrls: ['./create-contracts.component.css']
})
export class CreateContractsComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Ángela Arango', 'Beto Cárdenas', 'Camila Cifuentes', 'Carlos Arango', 'Felipe Arias', 'Juan Garzón', 'Juan Zapata', 'Martín Zapata', 'Óscar Sánchez', 'Pedro Cifuentes'];
  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
