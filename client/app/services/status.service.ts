import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Status } from "../DataModals/status.model";
import { BalStatus } from "../DataModals/status.model";
import { StatsStatus } from "../DataModals/blockstats.modal";
import { PostPools } from "../DataModals/pools.modal";
import { PostTicker } from '../DataModals/blockticker.modal';
import { FlagStatus } from "../DataModals/status.model";
import { ReqStatus } from "../DataModals/request.modal";

@Injectable()
export class StatusService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

    getAllStatus(): Observable<any> {
        return this.http.get('http://localhost:3000/Tx/Local/All')
            .map( (data: Response) => {
                console.log("got here 1!");
                const extracted = data.json();
                const msgArray: Status[] = [];
                console.log("got extracted here!");
                let status;
                for (let element of extracted.data) {
                    status = new Status(element.username, element.date, element.title, element.text,element.valueAtTime, element.sentAmount,  element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getStatusByUsername(user: string) {
        return this.http.get('http://localhost:3000/Tx/Local/' + user)
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let status;
                for (let element of extracted.data) {
                    status = new Status(element.username, element.date, element.title, element.text,element.valueAtTime, element.sentAmount,  element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getBalStatusByUsername(user: string) {
        return this.http.get('http://localhost:3000/Tx/Local/bal/' + user)
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: BalStatus[] = [];
                let status;
                for (let element of extracted.data) {
                    status = new BalStatus(element.username, element.date, element.title, element.text,element.balance, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getStatsStatusByUsername(user: string) {
        return this.http.get('http://localhost:3000/Tx/Local/stats/' + user)
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: StatsStatus[] = [];
                let status;
                for (let element of extracted.data) {
                    status = new StatsStatus(element.username, element.date, element.title, element.text,element.market_price_usd, element.hash_rate, element.total_fees_btc, element.n_btc_mined, element.n_tx,element.n_blocks_mined, element.totalbc, element.n_blocks_total, element.estimated_transaction_volume_usd, element.blocks_size,element.miners_revenue_usd, element.nextretarget, element.difficulty, element.estimated_btc_sent, element.miners_revenue_btc,element.total_btc_sent, element.trade_volume_btc, element.trade_volume_usd, element.timestamp,  element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getPoolStatusByUsername(user: string) {
        return this.http.get('http://localhost:3000/Tx/Local/pools/' + user)
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: PostPools[] = [];
                let status;
                for (let element of extracted.data) {
                    status = new PostPools(element.username, element.date, element.title, element.text,element.Unknown, element.GBMiners, element.SlushPool, element.KanoCKPool, element.BitFury,element.AntPool, element.F2Pool, element.ViaBTC, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getPriceStatusByUsername(user: string) {
        return this.http.get('http://localhost:3000/Tx/Local/price/' + user)
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: PostTicker[] = [];
                let status;
                for (let element of extracted.data) {
                    status = new PostTicker(element.username, element.date, element.title, element.text,element.last, element.buy, element.sell, element.symbol, element.lat,element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getFlagsStatusByUsername(user: string) {
        return this.http.get('http://localhost:3000/Tx/Local/flag/' + user)
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: FlagStatus[] = [];
                let status;
                for (let element of extracted.data) {
                    status = new FlagStatus(element.username, element.date, element.title, element.text,element.locationName, element.contact, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getReqStatusByUsername(user: string) {
        return this.http.get('http://localhost:3000/Tx/Local/requests/' + user)
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: ReqStatus[] = [];
                let status;
                for (let element of extracted.data) {
                    status = new ReqStatus(element.username, element.date, element.title, element.text,element.amount, element.address, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getTxById(id: string): Observable<any> {
        return this.http.get('http://localhost:3000/Tx/' + id)
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let message;
                for (let element of extracted.data) {
                    message =new Status(element.username,  element.date, element.title, element.text, element.valueAtTime, element.sentAmount, element.bitcoinAddress ,element.receivingAddress , element.lat, element.long);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }

    saveBalPost(Tx: BalStatus): Observable<any> {
        console.log(Tx);
        const body = JSON.stringify(Tx);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/Tx/Status/bal', body, {headers: headers});
    }

    saveStatsPost(Tx: StatsStatus): Observable<any> {
        console.log(Tx);
        const body = JSON.stringify(Tx);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/Tx/Status/stats', body, {headers: headers});
    }

    savePoolPost(Tx: PostPools): Observable<any> {
        console.log(Tx);
        const body = JSON.stringify(Tx);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/Tx/Status/pool', body, {headers: headers});
    }

    savePricePost(Tx: PostTicker): Observable<any> {
        console.log(Tx);
        const body = JSON.stringify(Tx);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/Tx/Status/price', body, {headers: headers});
    }

    saveFlagPost(Tx: FlagStatus): Observable<any> {
        console.log(Tx);
        const body = JSON.stringify(Tx);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/Tx/Status/flag', body, {headers: headers});
    }

    saveReqPost(Tx:ReqStatus): Observable<any> {
        console.log(Tx);
        const body = JSON.stringify(Tx);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/Tx/Status/request', body, {headers: headers});
    }

    saveTx(Tx: Status): Observable<any> {
        console.log(Tx);
        const body = JSON.stringify(Tx);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/Tx/Status/reg', body, {headers: headers});
    }

    deleteStatusWithTitle(t: string): Observable<any> {
        console.log(t);
        return this.http
          .delete('http://localhost:3000/Tx/Status/Remove/'+ t);
    }

    deleteBalStatusWithTitle(t: string): Observable<any> {
        console.log(t);
        return this.http
          .delete('http://localhost:3000/Tx/BalStatus/Remove/'+ t);
    }

    deleteStatsStatusWithTitle(t: string): Observable<any> {
        console.log(t);
        return this.http
          .delete('http://localhost:3000/Tx/StatsStatus/Remove/'+ t);
    }

    deletePoolStatusWithTitle(t: string): Observable<any> {
        console.log(t);
        return this.http
          .delete('http://localhost:3000/Tx/PoolStatus/Remove/'+ t);
    }

    deletePriceStatusWithTitle(t: string): Observable<any> {
        console.log(t);
        return this.http
          .delete('http://localhost:3000/Tx/PriceStatus/Remove/'+ t);
    }

    deleteFlagStatusWithTitle(t: string): Observable<any> {
        console.log(t);
        return this.http
          .delete('http://localhost:3000/Tx/FlagStatus/Remove/'+ t);
    }

    deleteReqStatusWithTitle(t: string): Observable<any> {
        console.log(t);
        return this.http
          .delete('http://localhost:3000/Tx/ReqStatus/Remove/'+ t);
    }
}