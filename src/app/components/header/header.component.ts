// header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private router: Router) { }

  searchItem() {
    // Perform search action here
    if (this.searchQuery.trim() !== '') {
      // Example: Navigate to search results page with query parameter
      this.router.navigate(['/search-results'], { queryParams: { query: this.searchQuery }});
    }
  }
}
