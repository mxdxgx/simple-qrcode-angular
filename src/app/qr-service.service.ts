import { Injectable } from '@angular/core';
import * as qrcode from 'qrcode-generator';

@Injectable({
  providedIn: 'root',
})
export class QrServiceService {
  constructor() {}

  public generateQrCode(data: string): string {
    let qr = qrcode(3, 'L');
    qr.addData(data);
    qr.make();

    return qr.createDataURL(10, 4);
  }
}
