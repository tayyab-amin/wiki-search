import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormGroup } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchtext: any;
  data: any = [];
  constructor() {}
  ngOnInit(): void {}

  trySearch(e, textsearch) {
    e.preventDefault();

    var url = 'https://en.wikipedia.org/w/api.php';
    var params = {
      action: 'opensearch',
      search: textsearch.value,
      namespace: '0',
      format: 'json',
    };

    url = url + '?origin=*';

    axios.get(url, { params }).then((response) => {
      this.data = response.data[1].map((name, index) => {
        return { name, url: response.data[3][index] };
      });
      debugger;
      return response;
    });
  }
}
