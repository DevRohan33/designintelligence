export interface BlogPost {
    id: string;
    title: string;
    content: string;
    image: string;
    
    date: string;
    isDraft?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }