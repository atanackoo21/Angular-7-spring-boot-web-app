import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { PorudzbinaService } from '../../services/porudzbina.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort, MatRow } from '@angular/material';
import { Porudzbina } from '../../models/porudzbina';
import { Observable } from 'rxjs';
import { Dobavljac } from '../../models/dobavljac';
import { PorudzbinaDialogComponent } from '../dialogs/porudzbina-dialog/porudzbina-dialog.component';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
 selector: 'app-porudzbina',
 templateUrl: './porudzbina.component.html',
 styleUrls: ['./porudzbina.component.css'],
 animations: [
  trigger('popOverState', [
    state('show', style({
      opacity: 1
    })),
    state('hide',   style({
      opacity: 0
    })),
    transition('show => hide', animate('600ms ease-out')),
    transition('hide => show', animate('1000ms ease-in'))
  ])
]
})
export class PorudzbinaComponent implements OnInit {
 show = false;
 prethSelektovaniId = -1;
 trenutnoSelektovaniId = -1;
 displayedColumns = ['id', 'datum', 'isporuceno', 'iznos', 'placeno', 'dobavljac', 'actions'];
 dataSource: MatTableDataSource<Porudzbina>;
 selektovanaPorudzbina: Porudzbina;


 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 constructor(public porudzbinaService: PorudzbinaService, public dialog: MatDialog) { }

 ngOnInit() {
   this.loadData();
 }

 get stateName() {
  return this.show ? 'show' : 'hide';
 }

 toggle() {
  this.show = !this.show;
 }

 public loadData() {
  this.porudzbinaService.getAllPorudzbina().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);

    //pretraga po nazivu ugnježdenog objekta
    this.dataSource.filterPredicate = (data, filter: string) => {
      const accumulator = (currentTerm, key) => {
        return key === 'dobavljacBean' ? currentTerm + data.dobavljacBean.naziv : currentTerm + data[key];
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };

     //sortiranje po nazivu ugnježdenog objekta
    this.dataSource.sortingDataAccessor = (data, property) => {
      switch (property) {
        case 'dobavljacBean': return data.dobavljacBean.naziv.toLocaleLowerCase();
      default: return data[property];
      }
    };

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });

}

 public openDialog(flag: number, id: number, datum: Date, isporuceno: Date, placeno: boolean, iznos: number, dobavljac: Dobavljac ) {
   const dialogRef = this.dialog.open(PorudzbinaDialogComponent, { data: { id: id, datum: datum, isporuceno: isporuceno, placeno: placeno, iznos: iznos, dobavljacBean: dobavljac  } });
   dialogRef.componentInstance.flag = flag;

   dialogRef.afterClosed().subscribe(result => {
     if (result === 1){
        this.loadData();
     }

   });
 }

 selectRow(row) {
  this.selektovanaPorudzbina = row;

  this.prethSelektovaniId = this.trenutnoSelektovaniId;
  this.trenutnoSelektovaniId = row.id;

  if (this.prethSelektovaniId === -1 || document.getElementById('stavka').style.opacity === '0') {
    if (this.prethSelektovaniId === this.trenutnoSelektovaniId) {
      this.toggle();
    }
    this.toggle();
  }
 }

 applyFilter(filterValue: string){
  filterValue = filterValue.trim();
  filterValue = filterValue.toLocaleLowerCase();
  this.dataSource.filter = filterValue;
}
}
