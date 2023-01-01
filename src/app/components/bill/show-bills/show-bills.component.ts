import { Component, OnInit } from '@angular/core';
import { PaginationBills } from 'src/app/interfaces/bill';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-show-bills',
  templateUrl: './show-bills.component.html',
  styleUrls: ['./show-bills.component.css']
})
export class ShowBillsComponent implements OnInit {

  page: number = 1;
  num: number = 3;

  billItems: PaginationBills | undefined

  constructor(
    private billService: BillService
  ) { }

  getBills(){
    this.billService.getMyBills(this.page, this.num).subscribe(response => {
      this.billItems = response
      console.log(response)
    })
  }

  ngOnInit(): void {
    this.getBills()
  }

}
