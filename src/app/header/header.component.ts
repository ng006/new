import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
active = '';

showChat: boolean = false; // Define showChat property
  showUpload: boolean = false; // Define showUpload property

  toggleChat() {
    this.showChat = !this.showChat; // Toggle showChat property
    this.showUpload = false; // Ensure showUpload is false when showChat is toggled
  }

  toggleUpload() {
    this.showUpload = !this.showUpload; // Toggle showUpload property
    this.showChat = false; // Ensure showChat is false when showUpload is toggled
  }

}
