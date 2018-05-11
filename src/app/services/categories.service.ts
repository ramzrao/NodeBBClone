import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategoriesService {
    /**
     *
     */
    constructor(private http: HttpClient) {

    }
    getCategories(): any {
        return this.http.get('./assets/categories.json');
    }
}

