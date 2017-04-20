import { Component, OnInit, Input } from '@angular/core';
import { BackendService} from '../backend-service'

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {

  @Input() backend_service: BackendService;
  expanded:string;
  constructor() { }

  ngOnInit() {
  }
  
  expand(){
    this.expanded = "I'am expanded bitches"
  }
}
