import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost/api.php';

  constructor(private http: HttpClient) { }

  getData(caseName: string) {
    const formData = new FormData();
    formData.append('case', caseName);

    return this.http.post(this.baseUrl, formData);
  }
}
