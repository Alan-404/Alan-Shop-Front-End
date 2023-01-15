import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillDetail, InfoBill } from 'src/app/interfaces/bill';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {

  billId: string = ''

  billInfo: BillDetail = new BillDetail()
  constructor(
    private activatedRoute: ActivatedRoute,
    private billService: BillService
  ) { }

  getBill(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.billId = params['id']
      this.billService.getBillById(this.billId).subscribe(response => {
        this.billInfo = response
      })
    })
  }

  ngOnInit(): void {
    this.getBill()
  }

}
