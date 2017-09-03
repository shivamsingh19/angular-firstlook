import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component ({
    moduleId: module.id,
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string =  'Product Details';
    product: IProduct;
    errorMessage: string;
    private sub: Subscription;
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {

    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            products => this.product = products,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}