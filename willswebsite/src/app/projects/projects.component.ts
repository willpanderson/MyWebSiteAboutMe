import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
  githubProjects: any[] = [];

  constructor(private projectsService: ProjectsService) {}

  public ngOnInit() {
    this.projectsService.getApiProjects().subscribe(
      (res) => (this.githubProjects = res),
      (err) => console.error(err)
    );
  }
}
