import { Component } from '@angular/core';
import { QrServiceService } from './qr-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  textBox: any;

  title = 'qr-code-web';
  imageSpot: string = '';

  constructor(private readonly qrService: QrServiceService) {
    this.title = 'QR Code Generator';
  }

  public generateQrCode(): void {
    const qrCode = this.qrService.generateQrCode(this.textBox);
    this.imageSpot = qrCode;
  }
}
