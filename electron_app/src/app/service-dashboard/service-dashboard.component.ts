import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../backend-service'

@Component({
  selector: 'app-service-dashboard',
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.css']
})
export class ServiceDashboardComponent implements OnInit {

  @Input() backend_services: Array<BackendService>;

  constructor() { }

  ngOnInit() {
  }

}
