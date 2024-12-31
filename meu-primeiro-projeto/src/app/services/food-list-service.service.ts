import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListServiceService {

  public eventEmit = new EventEmitter();

  private foodList: Array<string> = [
    "Arroz",
    "Feijão",
    "Batata",
    "Macarrão"
  ]

  constructor() { }

  public getFoodList(): Array<string>{
    return this.foodList;
  }

  public addFoodToList(food: string): void{
    this.foodListAllert(food);
    this.foodList.push(food);
  }

  public foodListAllert(value: string){
    return this.eventEmit.emit(value);
  }
}
