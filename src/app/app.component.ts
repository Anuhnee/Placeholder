import { Component, ViewChild } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';
import { MatTableDataSource } from '@angular/material/table';
import { ITodo } from './interfaces/itodo';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Placeholder';
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  dataSource: MatTableDataSource<ITodo>;

  @ViewChild(MatSort)sort: MatSort;
  @ViewChild(MatPaginator)page: MatPaginator;
  constructor(private service: PlaceholderService){}

  async ngOnInit(){
    this.dataSource = new MatTableDataSource<ITodo>(await this.service.get())
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.page;
  }

  filterKeyUp(value: string){
    this.dataSource.filter = value;
  }
}
