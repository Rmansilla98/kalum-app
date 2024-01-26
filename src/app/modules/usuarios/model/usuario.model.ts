export class Usuario{
    username: string;
    password: string;
    email: string;
    normalizedUserName: string;
    identificationId: string;
    roles: string[] = []; // esto es un vector ya que un usuario podria tener diferentes roles 
   


}
