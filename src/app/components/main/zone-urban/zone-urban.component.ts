import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-zone-urban',
  templateUrl: './zone-urban.component.html',
  styleUrls: ['./zone-urban.component.css']
})
export class ZoneUrbanComponent implements OnInit {
  step: any = 1;

  regionMaroc: any = [
    {
      id: "1",
      region: "طنجة-تطوان الحسيمة"
    },
    {
      id: "2",
      region: "الشرق"
    },
    {
      id: "3",
      region: "فاس- مكناس"
    },
    {
      id: "4",
      region: "الرباط- سلا- القنيطرة"
    },
    {
      id: "5",
      region: "بني ملال- خنيفرة"
    },
    {
      id: "6",
      region: "الدار البيضاء الكبرى- سطات"
    },
    {
      id: "7",
      region: "مراكش- آسفي"
    },
    {
      id: "8",
      region: "درعة- تافيلالت"
    },
    {
      id: "9",
      region: "سوس-ماسة"
    },
    {
      id: "10",
      region: "كلميم- واد نون"
    },
    {
      id: "11",
      region: "العيون- الساقية الحمراء"
    },
    {
      id: "12",
      region: "الداخلة- وادي الذهب"
    }
  ];

  kmUrban = 9.825;
  kzg = 0;

  score = 0;
  minScore = 9.3264284;

  varSelect = 0;

  V3 = 0;
  nbrV3 = 1;
  nbrFamille = 1;

  varAll: Array<number> = new Array(36).fill(0);

  constructor() {
  }

  ngOnInit(): void {
  }

  OnSubmit() {
    let sigma = 0;
    for (let i = 0; i < 35; i++) {
      sigma = sigma+  (+this.varAll[i]);
    }
    this.score = sigma + this.kmUrban + this.kzg;

    // this.score = sigma;
  }

  OnPrevious() {
    this.step -= 1;
  }

  OnNext() {
    this.step += 1;
  }

  SelectV1OrV2(event: any) {

    this.varSelect = event.target.value;

    this.varAll[1] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV3Cas1(event: any) {
    this.V3 = event.target.value;

    if (this.V3 == 0) {
      this.varAll[2] = 0;
    } else if (this.V3 == 1) {

      this.varAll[2] = 0.0475;
    } else if (this.V3 == 2) {
      this.varAll[2] = this.nbrV3 * 0.0475;
    }
  }

  SelectV3Cas2(event: any) {
    this.nbrV3 = event.target.value;

    if (this.V3 == 1) {
      this.varAll[2] = 0.0475;
    } else if (this.V3 == 2) {
      this.varAll[2] = this.nbrV3 * 0.0475;
    }
  }

  SelectV4(event: any) {
    this.varSelect = event.target.value;

    this.varAll[3] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV5(event: any) {
    this.varSelect = event.target.value;

    this.varAll[4] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV6(event: any) {
    this.varSelect = event.target.value;

    this.varAll[5] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV7(event: any) {
    this.varSelect = event.target.value;

    this.varAll[6] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV8(event: any) {
    this.varSelect = event.target.value;

    this.varAll[7] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV9(event: any) {
    this.varSelect = event.target.value;

    this.varAll[8] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV10(event: any) {
    this.varSelect = event.target.value;

    this.varAll[9] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV11(event: any) {
    this.varSelect = event.target.value;

    this.varAll[10] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV12(event: any) {
    this.varSelect = event.target.value;

    this.varAll[11] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV13(event: any) {
    this.varSelect = event.target.value;

    this.varAll[12] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV14(event: any) {
    this.varSelect = event.target.value;

    this.varAll[13] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV15(event: any) {
    this.varSelect = event.target.value;

    this.varAll[14] = this.varSelect;

    this.varSelect = 0;
  }

  SelectV16(event: any) {
    this.varSelect = event.target.value;

    this.varAll[15] = this.varSelect;

    this.varSelect = 0;
  }

  SelectP2V1(event: any) {
    this.nbrFamille = event.target.value;
    let res = (-0.177) * this.nbrFamille + 0.00533 * Math.pow(this.nbrFamille, 2);

    this.varAll[16] = res;
  }

  SelectP2V2(event: any) {
    this.varSelect = event.target.value;
    let res = (-0.0104) * this.varSelect + 0.0000771 * Math.pow(this.varSelect, 2);

    this.varAll[17] = res;
    this.varSelect = 0;
  }

  SelectP2V3(event: any) {
    this.varSelect = event.target.value;
    let res = 0.105 * this.varSelect;

    this.varAll[18] = res;
    this.varSelect = 0;
  }

  SelectP2V4(event: any) {
    this.varSelect = event.target.value;
    let res = -0.0319 * this.varSelect;

    this.varAll[19] = res;
    this.varSelect = 0;
  }

  SelectP2V5(event: any) {
    this.varSelect = event.target.value;
    let res = -0.0557 * (this.varSelect / this.nbrFamille);

    this.varAll[20] = res;
    this.varSelect = 0;
  }

  SelectP2V6(event: any) {
    this.varSelect = event.target.value;
    let res = 0.120 * (this.varSelect / this.nbrFamille);

    this.varAll[21] = res;
    this.varSelect = 0;
  }

  SelectP2V7(event: any) {
    this.varSelect = event.target.value;
    let res = 0.139 * (this.varSelect / this.nbrFamille);

    this.varAll[22] = res;
    this.varSelect = 0;
  }

  SelectP2V8(event: any) {
    this.varSelect = event.target.value;
    let res = 0.307 * (this.varSelect / this.nbrFamille);

    this.varAll[23] = res;
    this.varSelect = 0;
  }

  SelectP2V9(event: any) {
    this.varSelect = event.target.value;
    let res = 0.180 * (this.varSelect / this.nbrFamille);

    this.varAll[24] = res;
    this.varSelect = 0;
  }

  SelectP2V10(event: any) {
    this.varSelect = event.target.value;
    let res = 0.0516 * this.varSelect;

    this.varAll[25] = res;
    this.varSelect = 0;
  }

  SelectP2V11(event: any) {
    this.varSelect = event.target.value;
    let res = 0.226 * this.varSelect;

    this.varAll[26] = res;
    this.varSelect = 0;
  }

  SelectP2V12(event: any) {
    this.varSelect = event.target.value;
    let res = 0.0598 * this.varSelect;

    this.varAll[27] = res;
    this.varSelect = 0;
  }

  SelectP2V13(event: any) {
    this.varSelect = event.target.value;
    let res = 0.000422 * this.varSelect;

    this.varAll[28] = res;
    this.varSelect = 0;
  }

  SelectP2V14(event: any) {
    this.varSelect = event.target.value;
    let res = 0.00011 * this.varSelect;

    this.varAll[29] = res;
    this.varSelect = 0;
  }

  SelectP2V15(event: any) {
    this.varSelect = event.target.value;
    let res = 0.00011 * this.varSelect;

    this.varAll[30] = res;
    this.varSelect = 0;
  }

  SelectP3V1(event: any) {
    this.varSelect = event.target.value;

    if (this.varSelect == 1) {
      this.kzg = 0.107;
    } else if (this.varSelect == 2) {

      this.kzg = 0.196;
    } else if (this.varSelect == 3) {

      this.kzg = 0.123;
    } else if (this.varSelect == 4) {

      this.kzg = 0.0555;
    } else if (this.varSelect == 5) {

      this.kzg = 0;
    } else if (this.varSelect == 6) {

      this.kzg = 0.220;
    } else if (this.varSelect == 7) {

      this.kzg = 0.197;
    } else if (this.varSelect == 8) {

      this.kzg = 0;
    } else if (this.varSelect == 9) {

      this.kzg = 0;

    } else if (this.varSelect == 10) {

      this.kzg = 0.285;

    } else if (this.varSelect == 11) {

      this.kzg = 0.285;
    } else if (this.varSelect == 12) {

      this.kzg = 0.285;
    }


    this.varSelect = 0;
  }

}
