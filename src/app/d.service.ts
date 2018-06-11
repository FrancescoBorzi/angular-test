import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BService } from './b.service';

@Injectable()
export class DService extends BService {

  constructor(
    protected http: HttpClient,
  ) {
    super(http, 'D');
  }
}
