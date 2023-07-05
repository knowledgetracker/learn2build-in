import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users:[], search:string): any {
    if(!users)return [];
    if(!search)return users;
    const searchWord  = search.toLowerCase();
    return users.filter( (obj:any)=> obj.name.toLowerCase().indexOf(searchWord) !=-1 ||
    obj.username.toLowerCase().indexOf(searchWord) !=-1
    ||obj.email.toLowerCase().indexOf(searchWord) !=-1);
  }


}
