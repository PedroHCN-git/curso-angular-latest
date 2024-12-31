import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListServiceService {

  public eventEmit = new EventEmitter();

  // private foodList: Array<string> = [
  //   "Arroz",
  //   "Feijão",
  //   "Batata",
  //   "Macarrão"
  // ]

  private list: Array<string> = []
  private url: string = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  public addFoodToList(value: string): Observable<FoodList>{
    return this.httpClient.post<FoodList>(this.url + '/foods', {name: value}).pipe(
      res => res,
      error => error
    )
    
  }

  public putFoodAtList(id: number, value: string): Observable<FoodList>{
    return this.httpClient.put<FoodList>(this.url + `/foods/${id}`, {name: value}).pipe(
      res => res,
      error => error
    )
    
  }

  public deleteFoodAtList(id: number): Observable<FoodList>{
    return this.httpClient.delete<FoodList>(this.url + `/foods/${id}`).pipe(
      res => res,
      error => error
    )
    
  }

  public foodListAllert(value: FoodList){
    return this.eventEmit.emit(value);
  }

  public foodList(): Observable<Array<FoodList>>{
    return this.httpClient.get<Array<FoodList>>(this.url + '/foods').pipe(
      res => res,
      error => error
    )
  } 
}
