import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  backend_services: Array<BackendService>= [
    {
      name: 'Service1',
      command: 'test_command',
      description: 'This service will be tested',
      log_dir: 'Directory for the logs',
      log_file: 'The log file',
      process_id: null,
      root_dir:'Folder where to start the process'
    },
    {
      name: 'Service2',
      command: 'test_command',
      description: 'This service will be tested',
      log_dir: 'Directory for the logs',
      log_file: 'The log file',
      process_id: null,
      root_dir:'Folder where to start the process'
    },
        {
      name: 'Service3',
      command: 'test_command',
      description: 'This service will be tested',
      log_dir: 'Directory for the logs',
      log_file: 'The log file',
      process_id: null,
      root_dir:'Folder where to start the process'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
