import { Injectable } from '@angular/core';
import { BService } from './b.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CService extends BService {

  constructor(
    protected http: HttpClient,
  ) {
    super(http, 'C');
  }
}
