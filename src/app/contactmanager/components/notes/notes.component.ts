import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Note } from '../../models/note';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MatPaginator, MatSort } from '@angular/material'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() notes : Note[]
  
  displayedColumns = ['id', 'title', 'date'];
  dataSource : MatTableDataSource<Note>;
  constructor() { }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource= new MatTableDataSource<Note>(this.notes)
    console.log(this.notes)
    console.log(this.dataSource)
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
