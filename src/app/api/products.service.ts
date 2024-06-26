import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@envs/environment.development';
import { tap } from 'rxjs';
import { Product } from '@shared/models/product.interface';




@Injectable({providedIn: 'root'})
export class ProductsService {
  public products = signal<Product[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;

  constructor () {
    this.getProducts();
  }

  public getProducts(): void {
    this._http
      .get<Product[]>(`${this._endPoint}/products/?sort=desc`)
      .pipe(tap((data: Product[]) => this.products.set(data)))
      .subscribe();
  }

  public getProductById(id: number) {
    return this._http.get<Product>(`${this._endPoint}/products/${id}`);
  }

}


