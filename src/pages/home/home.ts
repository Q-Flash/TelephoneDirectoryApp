import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { IndexPage } from '../index/index';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';
import { DirectoryProvider } from '../../providers/directory/directory';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
	items: any[];
	public records : any[] = [];
	constructor(public navCtrl: NavController, public directoryProvider : DirectoryProvider){
		this.items = new Array();
		this.directoryProvider = new DirectoryProvider();	
	}



	ionViewDidEnter(){
		console.log('Ion view did enter');

		this.directoryProvider.createPouchDB();

		
		this.directoryProvider.read()
		.then(records => {
			this.records = records;
		})
		.catch((err)=>{});
		
	}



	//Button to go to telephone index
	index(){
		this.navCtrl.push(IndexPage);
	}


	//Function to read data from firebase and update the local SQL Database for offline use
	sync_data(){
	  	let newArray = new Array();

	  	//Retrieve telephone directory records from firebase database 
	 	let directoryRecords = firebase.database().ref('Directory_Records');

		directoryRecords.once('value').then(function(snapshot){
			snapshot.forEach(function(childSnapshot) {
				let record = childSnapshot.val(); //record holds one directory record as an object {Address, Name, Number, Type}
				newArray.push(record);
		    });
		});
		this.items = newArray;

	}
}





