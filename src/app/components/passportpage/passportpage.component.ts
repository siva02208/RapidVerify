import { Component } from '@angular/core';

@Component({
  selector: 'app-passportpage',
  templateUrl: './passportpage.component.html',
  styleUrls: ['./passportpage.component.css']
})
export class PassportpageComponent {
  
  selectedFile: File | null = null;
  uploadedFileName: string | null = null;

  onFileSelected(event: any) {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      // Here you can implement the logic to upload the document.
      // You might want to use a service to handle the actual file upload to a server.
      // For demonstration purposes, we're just displaying the file name.

      this.uploadedFileName = this.selectedFile.name;
    }
  }

}
