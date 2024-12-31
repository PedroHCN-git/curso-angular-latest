import { Component, OnInit } from '@angular/core';
import { FoodListServiceService } from 'src/app/services/food-list-service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<string> = [];

  constructor(private foodListService: FoodListServiceService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.getFoodList();
    this.foodListService.eventEmit.subscribe(
      res => alert(`você acabou de adicionar o item => ${res}`)
    )
  }

}
