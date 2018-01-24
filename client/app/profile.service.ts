import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Profile } from "./profile.model";

@Injectable()
export class ProfileService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

    // Create a new wallet
    createWallet(): Observable<any> {
        return this.http.get('http://localhost:3000/api/v2/create')
            .map( (data: Response) => {
                const extracted = data.json();
                const proArray: Profile[] = [];
                let profile;
                for (let element of extracted.data) {
                    console.log(element.firstName);
                    profile = new Profile(element.username, element.firstName, element.lastName, element.bitcoinAddress ,element.email,element.phone, element.lat, element.long);
                    proArray.push(profile);
                }
                return proArray;
            });
    }
}