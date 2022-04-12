export interface IUsers {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ICreateUsers {
  userId: number;
  title: string;
  body: string;
}

export interface IUpdateUsers {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IDeleteUsers {
  id: number;
}
