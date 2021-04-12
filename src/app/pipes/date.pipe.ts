import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, arg: any): any {
     const resultPosts = [];
    for (const post of value){
    //   if(post.date == arg){
        resultPosts.push(post)
      }
    // }
     return resultPosts

  }

}
