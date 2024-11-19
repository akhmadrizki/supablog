export interface Tag {
  id: number;
  name: string;
  createdAt: Date;
}

export type TagCreate = Pick<Tag, "name">;
