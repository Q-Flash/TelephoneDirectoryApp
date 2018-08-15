import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';  
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';


@Injectable()
export class DirectoryProvider {
	public pdb; 
	public records;

	constructor() {
		console.log('Hello DirectoryProvider Provider');

	}
	
	createPouchDB() {
		PouchDB.plugin(cordovaSqlitePlugin);
		this.pdb = new PouchDB('records.db', 
		{ adapter: 'cordova-sqlite' });
	}


	create(record) {  
		return this.pdb.post(record);
	}  

	update(record) {  
    	return this.pdb.put(record);
	}   

	delete(record) {  
		return this.pdb.delete(record);
	}

	
	read() {  
		function allDocs(): Promise<any[]>{
			this.pdb.allDocs({ include_docs: true})
			.then(docs => {
				return new Promise((resolve) => {
					this.records = docs.rows.map(row => {
						row.doc.Date = new Date(row.doc.Date);
						return row.doc;
					});
					resolve(this.records);
				});
			});
			return new Promise((resolve) => {
				resolve(this.records);
			});
		}

		this.pdb.changes({ live: true, since: 'now', include_docs: true})
		.on('change', ()=>{
			allDocs().then((recs)=>{
				this.records = recs;
			});
		});
		return allDocs();
	}


}
