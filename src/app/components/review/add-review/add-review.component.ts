import { Component, OnInit, Input } from '@angular/core';
import { InfoOrder } from 'src/app/interfaces/order';
import { ReviewProductDTO } from 'src/app/interfaces/reviewProduct';
import { convertNum2Vec } from 'src/app/utils/lib';
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  @Input() orderInfo: InfoOrder = new InfoOrder()
  review: ReviewProductDTO = new ReviewProductDTO()

  starLight: number = 0
  numStars : number = 5
  constructor() { }

  arrNum = convertNum2Vec

  ngOnInit(): void {
  }

  getStars(index: number){
    this.starLight = index + 1
    this.review.star = index + 1
  }

  getInfo(event: Event){
    this.review.content = (event.target as HTMLInputElement).value
  }

  submitReview(){
    this.review.billId = this.orderInfo.order.billId
    this.review.productId = this.orderInfo.product.id
    console.log(this.review)
  }


}
