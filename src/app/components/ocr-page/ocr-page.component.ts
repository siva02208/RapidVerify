import { Component } from '@angular/core';
declare var Tesseract: { recognize: (arg0: string) => Promise<any>; };
@Component({
  selector: 'app-ocr-page',
  templateUrl: './ocr-page.component.html',
  styleUrls: ['./ocr-page.component.css']
})


export class OcrPageComponent {
  title = 'ocrAngular';
  Result = 'Recognizing...';
  constructor() {    
     this. test();     
  }
  test(){
    Tesseract.recognize('assets\Images\hello.jpg').then(function(result){         
      alert(result.text);      
      });    
  }  
}
