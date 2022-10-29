import { Component, Input, OnInit } from '@angular/core';
import { QrServiceService } from '../qr-service.service';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.css'],
})
export class QrGeneratorComponent implements OnInit {
  textBox: any;
  imageSpot: string = '';
  generateButtonText: string = 'Générer';
  qrCodeContentLabel = 'Contenu du Code';
  @Input()
  title: string = '';

  constructor(private readonly qrService: QrServiceService) {}

  ngOnInit(): void {}

  public generateQrCode(): void {
    const qrCode = this.qrService.generateQrCode(this.textBox);
    this.imageSpot = qrCode;
  }

  public clear(): void {
    this.imageSpot = '';
    this.textBox = '';
  }
}
