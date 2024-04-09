import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { tap } from 'rxjs';



@Injectable({providedIn: 'root'})
export class ProductsService {
  public products = signal<any[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;

  constructror () {
    this.getProducts();
  }

  public getProducts(): void {
    this._http
      .get<any[]>(`${this._endPoint}?sort = desc`)
      .pipe(tap((data: any[]) => this.products.set(data)))
      .subscribe();
  }

  public getProductById(id: number) {
    return this._http.get<any>(`${this._endPoint} / ${id}`);
  }

}


