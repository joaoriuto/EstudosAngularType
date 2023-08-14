import { ShowDataApiService } from './../services/show-data-api.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-show-data-again',
  templateUrl: './show-data-again.component.html',
  styleUrls: ['./show-data-again.component.css']
})
export class ShowDataAgainComponent implements OnInit{
  
  showAllData: any;
  
  constructor(private showDataApiService: ShowDataApiService){ }
  
  async ngOnInit() {
    try {
      this.showAllData = await lastValueFrom(this.showDataApiService.getData());
      
    }catch
      (error){
        console.error("Zero dados", error);
        console.log(this.showAllData);
      }
    }
  }

