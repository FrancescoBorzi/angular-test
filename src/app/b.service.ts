import { AService } from './a.service';
import { HttpClient } from '@angular/common/http';


export abstract class BService extends AService {

  constructor(
    protected http: HttpClient,
    protected myParam: string,
  ) {
    super(http);
  }

}
