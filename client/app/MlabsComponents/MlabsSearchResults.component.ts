import { Component, OnInit } from '@angular/core';
import { Profile } from "../DataModals/profile.model";
import { Wallet } from "../DataModals/mywallet.model";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { ProfileService } from "../services/profile.service";
import { MlabsService } from "../services/mlabs.service";

@Component({
  moduleId: module.id,
  selector: 'MlabsSearchResult',
  templateUrl: 'MlabsSearchResults.component.html',
  providers: [ProfileService]
})

export class MlabsSearchComponent implements OnInit {

    constructor(private route:ActivatedRoute, private mlabsService: MlabsService) {}
    test:string;
    profiles: Profile [] = [];

    ngOnInit(){
    this.route.queryParams.subscribe(params =>{
        this.test = params['word'];
        console.log(this.test);

        this.mlabsService.searchUsers(this.test)
       .subscribe(
        res => {
                console.log(res);
                this.profiles = res;
                console.log(this.profiles);
           },
           error => console.error("error:" + error)
        );
        })
    }

 }