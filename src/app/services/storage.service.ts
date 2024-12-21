import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as bcrypt from 'bcryptjs';

export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  constructor(private storage: Storage) { 
    this.init();
  }
  
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async set(key: string, value: any){
    await this._storage?.set(key, value);
  }

  public async get(key: string){
    const value = await this._storage?.get(key);
    console.log(`Getting key: ${key} with value`,value);
    return value;
  }

  public async isEmpty(): Promise<boolean>{
    const keys = await this._storage?.keys();
    return !keys || keys.length === 0;
  }

  public async registerUser(email: string, password: string, firstName: string, lastName: string){
    const hashPassword = await bcrypt.hash(password, 10);
    const user: User = {
      email,
      password: hashPassword,
      firstName,
      lastName
    }
    const users = await this.get('users') || [];
    users.push(user);
    await this.set('users', users);
  }

  public async loginUser(email: string, password: string){
    const users = await this.get('users') || [];
    const user = users.find((user: User) => user.email === email);
    if(user && await bcrypt.compare(password, user.password)){
      return true;
    } else {
      return false;
    }
  }
}
