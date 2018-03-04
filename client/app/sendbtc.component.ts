import { Component } from '@angular/core';
import { ProfileService } from "./profile.service";
import { BlockchainService } from "./blockchain.service";
import { Wallet } from "./myWallet.model";
import { OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'SendBTC',
  templateUrl: 'sendbtc.component.html',
  providers: [ProfileService, BlockchainService]
})

export class SendBTCComponent implements OnInit { 

  constructor(private profileService: ProfileService,private blockchainService: BlockchainService) {}
  
  wallets: Wallet [] = [];
  guid: string;

  ngOnInit() {
    this.profileService.getMyWallets()
    .subscribe(
      messages => this.wallets = messages,
      error => console.error(error)
      );
    console.log(this.wallets);
  }

  onSendBTC() {
  this.blockchainService.sendBTC(this.guid)
          .subscribe(
            messages => this.wallets = messages,
            error => console.error(error)
        );
        console.log(this.wallets);
    }
}
