import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-browsefile',
  templateUrl: './browsefile.component.html',
  styleUrls: ['./browsefile.component.css']
})

export class BrowsefileComponent implements OnInit {
  @ViewChild('labelImport')
  labelImport: ElementRef;
  fileToUpload: File = null;
  constructor() {
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }

  import(): void {
    console.log('import ' + this.fileToUpload.name);
  }
  ngOnInit() {
  }

}
