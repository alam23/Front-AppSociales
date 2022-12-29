import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

type responseTypeHttp = 'text' | 'json' | 'arraybuffer' | 'blob';
type observeHttp = 'body' | 'events' | 'response';

type requestOptions = {
  body?: any;
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  observe?: observeHttp;
  reportProgress?: boolean;
  responseType?: responseTypeHttp;
  withCredentials?: boolean;
};

type HeaderCustom = {
  name: string;
  value: string | string[];
};

export abstract class BasicService {
  constructor(public _http: HttpClient) {}

  getOptionsRest(headersCustomList?: HeaderCustom[]): requestOptions {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log('!!headersCustomList', !!headersCustomList);

    if (!!headersCustomList)
      for (let header of headersCustomList) {
        if (header != null && header.value != '' && header.value != null && header.value != 'undefined' && header.value != undefined) {
          headers = headers.append(header.name, header.value);
        }
      }

    let responseType: responseTypeHttp = 'json';

    return { headers, responseType };
  }

  get(url: string, options: requestOptions): Observable<Object> {
    return this.performRequest('GET', url, options);
  }

  post(url: string, options: requestOptions, body?: any): Observable<Object> {
    if (!!body) options.body = body;
    return this.performRequest('POST', url, options);
  }

  put(url: string, options: requestOptions, body?: any): Observable<Object> {
    if (!!body) options.body = body;
    return this.performRequest('PUT', url, options);
  }

  delete(url: string, options: requestOptions, body?: any): Observable<Object> {
    if (!!body) options.body = body;
    return this.performRequest('DELETE', url, options);
  }

  private performRequest(method: string, url: string, options: requestOptions): Observable<Object> {
    console.log(method);
    console.log(url);
    console.log(options);
    return this._http.request(method, url, options);
  }

  manageError(): void {}

}
