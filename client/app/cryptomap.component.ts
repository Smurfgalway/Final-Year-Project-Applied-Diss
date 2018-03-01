import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from "./profile.service";
import { Profile } from "./profile.model";
import { StatusService } from "./status.service";
import { Status } from "./status.model";

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'cryptomap.component.html',
  providers: [ProfileService,StatusService]
})

export class CryptoMapComponent  {

//   constructor(private profileService: ProfileService,private statusService: StatusService) {}
//   // Variables
//   map: any;
//   profile: Profile[] = [];
//   status: Status[] = [];
//   username: string;
//   MyAddress: string;
//   price: Number;
//   value: Number;
//   TargetAddress: string;
//   lat: string;
//   long: string;
//   ngOnInit() {
    
//     this.username = "test";
//     this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
//           zoom: 7,
//           center: {lat: 53.1424, lng: -7.6921}
//     });

//     // this.profileService.getDetailsByUsername(this.username)
//     //     .subscribe(
//     //         userProfile => {
//     //             this.profile = userProfile;
//     //             console.log('GET username');
                
//     //             userProfile.forEach(store => {
//     //               this.onAddMarker(userProfile.username, userProfile.lat, userProfile.long);
//     //               console.log(userProfile.username + "added");
//     //             })  
//     //         },
//     //         error => console.error(error)
//     // );

//     this.statusService.getAllStatus()
//        .subscribe(
//             status  => {
//                this.status = status;
//                console.log('GET from stores');
               
//                status.forEach(store => {
//                   this.onAddMarker(status.username, status.lat, status.long);
//                   console.log(status.username + "added");
//                })  
//            },
//            error => console.error(error)
//     );
    
//       google.maps.event.addListener(this.map, 'click', (event)=> {
//         console.log(event.latLng);
//         var lt = event.latLng.lat;
//         var ln = event.latLng.lng;
//         console.log(lt());
//         console.log(ln());
//         this.onStatusMarker(event.latLng.lat(),event.latLng.lng(), this.MyAddress, this.TargetAddress);
//     });
   
//    }
   
//    onStatusMarker(lt: number,ln: number, myAdd: string, targetAdd: string) {
//        var newStatus = prompt("Please enter your transaction status", "Status");
//        console.log(newStatus);
//        if(newStatus != null){
//        var location = {lat: lt, lng: ln};
//        var marker = new google.maps.Marker({
//            position: location, 
//            map: this.map,
//            title: newStatus,
//        });
       
       
           
//        marker.addListener('click', ()=> {
//             // Stuff for when Tx is clicked goes here
//            });
//        }
//    }
   
//    onAddMarker(name: string,lt: string,ln: string) {
//            var lat = lt;
//            var long = ln;
//            var myLatLng = {lat: lat, lng: long},
//                map = this.map,
//                marker = new google.maps.Marker({
//                    position: myLatLng,
//                    map: map,
//                    title: name,
//                });
               
//                marker.addListener('click', ()=> {
//                    // Stuff for when Tx is clicked goes here
//            });
//        }
  
 }