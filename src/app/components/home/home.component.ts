import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input('dataCtrl') dataCtrl: any;

  data : any = [];
  repo: string = '';
  
  constructor(private mainservice: MainService ) {
  }

  ngOnInit() {
    this.dataCtrl.mode.loading = false;
  }

  search(){
    console.log('napoooo', this.repo)
    this.dataCtrl.mode.loading = true;
    this.mainservice.getByRepo(this.repo).subscribe(result =>{
      console.log(result);
      this.data = result;
      //this.dataCtrl.mode.loading = false;
      this.dataCtrl.reqError = false;
    },error => {
      error = error.json();
      console.log(error.message);
      this.dataCtrl.mode.reqError = true;
      this.dataCtrl.mode.loading = false; 
    }, ()=>{
      console.log('done');
      this.dataCtrl.mode.loading = false;
      this.dataCtrl.mode.reqDone = true;
      this.dataCtrl.mode.reqError = false;
    });
  }

  
  viewData(repo:string){
    this.dataCtrl.repo = repo;
    this.dataCtrl.mode.home = false;
    this.dataCtrl.mode.details = true;
  }

}
