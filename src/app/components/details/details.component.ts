import { Component, OnInit, Input } from '@angular/core';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input('dataCtrl') dataCtrl: any;
  issues: any = [];
  doneReq: boolean = false;
  issueloader: boolean = true;
  filterby: string = "All";
  moreinfo: boolean = false;
  issue: any = {};

  constructor(private issueService : IssuesService) { }

  ngOnInit() {
    
    console.log(this.dataCtrl);
    this.getIssues();
  }

  getIssues(){
    this.issueService.getIssues(this.dataCtrl.repo.owner.login, this.dataCtrl.repo.name).subscribe(result => {
      console.log("Requested", result);
      var counter = 0;
      if (result.items.length > 5){
        counter = 4;
      }else{
        counter = result.items.length -1;
      }
      for (let c = counter; c >= 0; --c) {
        this.issues.push(result.items[c])
      }
      this.issueloader = false
      this.doneReq = true;;
    });
  }

  getIssuesByState(state:string){
    this.issueService.getIssues(this.dataCtrl.repo.owner.login, this.dataCtrl.repo.name).subscribe(result => {
      console.log("Requested", result);
      var counter = 0;
      var tempCounter = 0;
      while(counter < 5 && tempCounter < result.items.length){
        if(result.items[tempCounter].state == state){
          this.issues.push(result.items[tempCounter]);
          ++counter;
        }
        ++tempCounter;
      }
      this.doneReq = true;;
      this.issueloader = false;
    });
  }

  filter(state){
    this.issues = [];
    switch (state) {
      case 'none': {
        this.filterby = "All";
        this.issueloader = true;
        this.getIssues();
        break;
      }
      case 'open': {
        this.filterby = "Open";
        this.issueloader = true;
        this.getIssuesByState('open');
        break;
      }
      case 'closed': {
        this.filterby = "Closed";
        this.issueloader = true;
        this.getIssuesByState('closed');
        break;
      }
      default:{
        this.filterby = "Alll";
        this.issueloader = true;
        this.getIssues()
        break;
      }
    }
  }

  viewData(issue){
    this.moreinfo = true
    this.issue = issue;
  }

  back(){
    this.dataCtrl.mode.home = true;
    this.dataCtrl.mode.details = false;
    this.dataCtrl.mode.reqError = false;
  }

  done(){
    this.issue = {};
    this.moreinfo = false;
  }

}
