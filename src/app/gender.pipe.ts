import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value1: any,value2:any): any {
    if(value2=='Male'){
      return 'Mr.'+value1;
    }
    else{
      return 'Miss.'+value1;
    }
  }

}
