import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class DirectoryObject {
	/*
    this.fname: string;
    this.lname: string;
	this.address: string;
	this.type: string;
	this.tele_num: string;
	*/

	constructor() {
        this.fname = '';
        this.lname = '';
		this.address = '';
		this.type = '';
		this.tele_num = '';
    	
    }

    setData(nfname: string, nlname: string, naddress: string, ntype: string, ntele_num: string){
		this.fname = nfname;
        this.lname = nlname;
		this.address = naddress;
		this.type = ntype;
		this.tele_num = ntele_num;
    }

    getfname(){
    	return this.fname;
    }


}
