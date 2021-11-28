export type Maybe<T> = T | null | undefined;

export interface User {
  id: string;
  name: Maybe<string>;
  pictureUrl: Maybe<string>;
}

export interface CardDoc {
  id: string;
  front: string;
  back: string;
}
