import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	acceptedHashes: any;
	constructor() {
		this.acceptedHashes="";
	}

	ngOnInit() {
		this.acceptedHashes= "1";
	 // 	var miner = new CoinHive.Anonymous('uUd63GzB8y8HScG132inlZqlf4T07cOr');
	 // 	miner.setAutoThreadsEnabled(true);
		// miner.start();

		// miner.on('accepted', function() {
		// 	this.acceptedHashes = miner.getAcceptedHashes();
		// })
	}

}