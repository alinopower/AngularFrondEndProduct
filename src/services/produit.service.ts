import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

private URL_base='http://localhost:8080/produit';


  constructor(private http: HttpClient) { }

  getAllProduits(): Observable<any>{
    return this.http.get<any>(this.URL_base);
  }
  getProduitById(): Observable<any>{
    return this.http.get<any>(this.URL_base+'/${ref}');
  }

  addProduit(produit:Produit): Observable<any> {
      return this.http.post<any>(this.URL_base, produit);
  }

  updateProduit(produit:Produit): Observable<any> {
    return this.http.put<any>("http://localhost:8080/produit/"+produit.id , produit);
}

deleteProduit(id:number): Observable<any> {
  return this.http.delete<any>("http://localhost:8080/produit/"+ id);
}

saveProduit(produit:Produit): Observable<any>{
  
  return this.http.post<any>("http://localhost:8080/produit",produit);

}

}
