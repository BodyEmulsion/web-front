export interface AuthInfo {
  id: number;
  username: string;
  role: Role;
}

export enum Role {
  USER,
  SUPER_USER
}
