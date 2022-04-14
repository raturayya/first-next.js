export interface IComments {
    commentId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export interface ICreateComments {
    commentId: number;
    title: string;
    body: string;
  }
  
  export interface IUpdateComments {
    commentId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export interface IDeleteComments {
    id: number;
  }
  