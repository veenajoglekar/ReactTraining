import { person2 } from './person.js';

export class Teacher2 extends person2
{
  constructor(name, degree)
  {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}
