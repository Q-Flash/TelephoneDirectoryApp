import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { IndexPage } from '../index/index';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';
;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //items: FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController, private db: AngularFireDatabase ,private sqlite: SQLite) {

  }

  arrData = [];
  index(){
  	this.navCtrl.push(IndexPage);
  }

  sync_data(){
  	//Pull data from firebase and store in local sql storage

  	var database = firebase.database();
 
 	var directoryRecords = database.ref('Directory_Records');
	directoryRecords.on('value', function(snapshot) {
	    snapshot.forEach(function(childSnapshot) {
	      var childData = childSnapshot.val();
	      console.log(childData);
	    });
	});
	}

}
