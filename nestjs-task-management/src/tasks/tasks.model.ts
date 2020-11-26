export interface Task{
  id:string;
  title:string;
  description:string;
  staus:TaskStatus;
}

export enum TaskStatus{
  OPEN='OPEN',
  IN_Progress='IN_PROGRESS',
  DONE='DONE'
}