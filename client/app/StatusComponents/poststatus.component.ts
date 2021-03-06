import { Component,Input,Output,EventEmitter,ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusService } from "../services/status.service";
import { ProfileService } from "../services/profile.service";
import { Status } from "../DataModals/status.model";
import { Wallet } from "../DataModals/myWallet.model";
import { Profile } from "../DataModals/profile.model";
import { AuthService } from '../services/auth.service';
declare var google: any;
var geocoder = new google.maps.Geocoder();

@Component({
  moduleId: module.id,
  selector: 'poststatus',
  templateUrl: 'poststatus.component.html',
  providers: [StatusService,ProfileService]
})

export class PostStatusComponent implements OnInit { 

  constructor(private statusService: StatusService,
     private authService: AuthService,
     private profileService: ProfileService) {}

  // Variables
  map: any;
  wallets: Wallet [] = [];
  username;
  title: string;
  text: String;
  date: Number;
  price: Number;
  sentAmount: Number;
  bitcoinAddress: string;
  receivingAddress: string;
  lat: Number;
  long: Number;
  geolocationPosition: Object;
  friends: Profile [] = [];

  // On component initialization
  ngOnInit(){

        // Get wallets from profile service
        this.profileService.getMyWallets()
        .subscribe(
            response => {
                this.wallets = response;
                console.log(this.wallets);
                console.log("got wallets");
            },
            error => console.error(error)
         );

         // get friends profile 
         this.profileService.getFriends()
           .subscribe(
            res => {
                    console.log(res);
                    this.friends = res;
                    console.log(this.friends);
               },
               error => console.error("error:" + error)
            );
        
    // assign username from local storage
    this.username = this.user.username;
    console.log(this.username);
    this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
          zoom: 7,
          center: {lat: 53.1424, lng: -7.6921}
    });

    google.maps.event.addListener(this.map, 'click', (event)=> {
      console.log(event.latLng);
      var lt = event.latLng.lat;
      var ln = event.latLng.lng;
      console.log(lt());
      console.log(ln());
      this.onStatusMarker(event.latLng.lat(),event.latLng.lng());
  });
  }
   
  // add status to map as marker
  onStatusMarker(lt: number,ln: number) {
    this.lat = lt;
    this.long = ln;

    alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
}

// set address
setAddress(address: string){
  console.log("address: " + address);
  this.bitcoinAddress = address;
  console.log(this.bitcoinAddress);
}

// set target address to send to
setTargetAddress(address: string){
    console.log("address: " + address);
    this.receivingAddress = address;
    console.log(this.receivingAddress);
  }

// set lat and long
setPosition(position) {
  this.lat = position.coords.latitude;
  this.long = position.coords.longitude;
  console.log("Your Lat:" + this.lat + "\nYour Long" + this.long);
}

// get user location
getLocation() {
  if (window.navigator && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
        position => {
            this.geolocationPosition = position,
                console.log(position),
                this.setPosition(position)
        },
        error => {
            switch (error.code) {
                case 1:
                    console.log('Permission Denied');
                    break;
                case 2:
                    console.log('Position Unavailable');
                    break;
                case 3:
                    console.log('Timeout');
                    break;
            }
        }
    );
};
}

// Functions to return what is in storage
get user(): any {
    return JSON.parse(localStorage.getItem('user'));
}

// POST status
onStatusSubmit(){
    // get current date
    this.date = Date.now();
    //console.log(this.username,this.date,this.title,this.text,this.price,this.sentAmount,this.bitcoinAddress,this.receivingAddress,this.lat,this.long)
    // create new status modal
    const newStatusPost = new Status(this.username,this.date,this.title,this.text,this.price,this.sentAmount,this.bitcoinAddress,this.receivingAddress,this.lat,this.long);
    // send modal to service
    this.statusService.saveTx(newStatusPost)
      .subscribe(
          () => console.log('POST from status'),
          error => console.error(error)
    );
  }
}

