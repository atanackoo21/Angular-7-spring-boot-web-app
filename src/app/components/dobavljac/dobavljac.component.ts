import { Component, OnInit, ViewChild } from '@angular/core';
import { Dobavljac } from '../../models/dobavljac';
import { DobavljacService } from '../../services/dobavljac.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DobavljacDialogComponent } from '../dialogs/dobavljac-dialog/dobavljac-dialog.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dobavljac',
  templateUrl: './dobavljac.component.html',
  styleUrls: ['./dobavljac.component.css']
})
export class DobavljacComponent implements OnInit {
  // displayedColumns = ['id', 'adresa', 'naziv', 'kontakt', 'actions'];
  // dataSource: MatTableDataSource<Dobavljac>;

  dobavljaci: Dobavljac[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public dobavljacService: DobavljacService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  drop(event: CdkDragDrop<Dobavljac[]>) {
    moveItemInArray(this.dobavljaci, event.previousIndex, event.currentIndex);
  
    console.log("Previous: " + event.previousIndex + " Curr: " + event.currentIndex);
  }

  public loadData() {
    const artiklsObservable = this.dobavljacService.getAllDobavljac();

    artiklsObservable.subscribe((data: Dobavljac[]) => {
        this.dobavljaci = data;
    });
}

  public openDialog(flag: number, id: number, adresa: string, naziv: string, kontakt: string) {
    const dialogRef = this.dialog.open(DobavljacDialogComponent, { data: { id: id, adresa: adresa, naziv: naziv, kontakt: kontakt } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
        this.loadData();
    });
  }

 
}