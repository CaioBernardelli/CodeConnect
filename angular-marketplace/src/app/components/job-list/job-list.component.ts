import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../../services/service-api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit{
  jobs: any[] = [];
  constructor( private JobList: ServiceApiService){


    


  }
  ngOnInit(): void {
   this.JobList.getJobs().subscribe((data)=>
  this.jobs = data);
  }

}
