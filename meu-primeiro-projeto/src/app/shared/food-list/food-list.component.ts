import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListServiceService } from 'src/app/services/food-list-service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListServiceService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res
    );
    this.foodListService.eventEmit.subscribe({
      next: (res: any) => {
        alert(`você acabou de adicionar o item => ${res.name}`);
        return this.foodList.push(res);
      }
    })
  }

  public deleteFoodAtList(id: number){
      return this.foodListService.deleteFoodAtList(id).subscribe({
        next: (res: any) => {
          this.foodList = this.foodList.filter(
            item => {
              return id !== item.id
            }
          )
        },
        error: (error) => error
      })
  }

  public putFoodAtList(id: number, name: string){
    this.foodListService.putFoodAtList(id, name).subscribe({
      next: (res) => {
        return console.log(res);
      },
      error: (error) => error
    })
  }

}
