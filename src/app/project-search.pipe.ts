import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectSearch'
})
export class ProjectSearchPipe implements PipeTransform {

  transform(projects:[], search:string): any {
    if(!projects)return [];
    if(!search)return projects;
    const searchWord  = search.toLowerCase();
    return projects.filter( (obj:any)=> obj.name.toLowerCase().indexOf(searchWord) !=-1 ||
    obj.assignedTo.toLowerCase().indexOf(searchWord) !=-1);
  }

}
