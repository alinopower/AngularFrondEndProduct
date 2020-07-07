import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/produit';
import { ProduitService } from 'src/services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

produits: Produit[];
selectedProduit: Produit;


  constructor(private produitserv: ProduitService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.initProduit();
this.loadProduits();

  }

  loadProduits(){
    this.produitserv.getAllProduits()
    .subscribe(data=>{
      this.produits= data
      console.log(data)
    },error=>{
      console.log('An error was occured')},
      ()=>{
        console.log('loading products was done')
      })
  }

  addProduit(produit){
    this.produitserv.addProduit(produit)
    .subscribe(res=>{
      this.loadProduits();
      this.initProduit();
    })
  }

  edit(){

  }

  update(){
    this.produitserv.updateProduit(this.selectedProduit)
    .subscribe(res=>{
      this.loadProduits();
    })
  }

  delete(p:Produit) {
    let confirm=window.confirm("Are you realy delete the product?");
  //this.prod.ref=this.route.snapshot.params['ref'];
   // console.log(ref);
    if(confirm==true){
      //this.prod =new Produit();
      this.produitserv.deleteProduit(p.id)
      .subscribe(res=>{
        console.log(res)
        this.selectedProduit=new Produit();
        alert('produit supprimer!!')
        this.loadProduits();
      })
    }
    

  }


  initProduit(){
    this.selectedProduit=new Produit();
  }

  
}
