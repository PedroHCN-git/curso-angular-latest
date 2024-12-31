import { Component, OnInit } from '@angular/core';
import { FoodListServiceService } from 'src/app/services/food-list-service.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService: FoodListServiceService) { }

  ngOnInit(): void {
  }

  public addFoodToList(value: string): void{
    this.foodListService.addFoodToList(value)
  }

}
