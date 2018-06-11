import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AService {

  constructor(protected http: HttpClient) { }

}
