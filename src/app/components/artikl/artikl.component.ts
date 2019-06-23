import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtiklService } from '../../services/artikl.service';
import { Artikl } from '../../models/artikl';
import { Observable } from 'rxjs';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort, MatCard } from '@angular/material';
import { ArtiklDialogComponent } from '../dialogs/artikl-dialog/artikl-dialog.component';


@Component({
  selector: 'app-artikl',
  templateUrl: './artikl.component.html',
  styleUrls: ['./artikl.component.css']
})
export class ArtiklComponent implements OnInit {

  artikls: Artikl[] = [];

  //testiranje virtual-scrolla
  //numbers: Number [] = []

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient, public artiklService: ArtiklService, public dialog: MatDialog) {
    //testiranje virtual-scrolla
    /*for (let index = 0; index < 1000; index++) {
      this.numbers.push(index);
    }*/
  }

  ngOnInit() {
    this.loadData();
    
  }

  public loadData() {
    
    const artiklsObservable = this.artiklService.getAllArtikli();

        artiklsObservable.subscribe((data: Artikl[]) => {
            this.artikls = data;
        });
      
}

  public openDialog(flag: number, id: number, naziv: string, proizvodjac: string){
    const dialogRef = this.dialog.open(ArtiklDialogComponent,
                                        {data:{id: id, naziv: naziv, proizvodjac: proizvodjac}}
    );

    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result =>{
      if (result == 1)
        this.loadData();
    })
  }

}
