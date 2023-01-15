import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { AuthComponent } from './views/auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { CarouselBannerComponent } from './components/banner/carousel-banner/carousel-banner.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminComponent } from './views/admin/admin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ShowCategoriesComponent } from './components/category/show-categories/show-categories.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ManageCategoryComponent } from './components/admin/manage-category/manage-category.component';
import { LoadingComponent } from './components/templates/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './components/category/delete-category/delete-category.component';
import { DarkOverlayComponent } from './components/templates/dark-overlay/dark-overlay.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import {MatSelectModule} from '@angular/material/select';
import { ShowProductComponent } from './components/product/show-product/show-product.component';
import { CardProductComponent } from './components/product/card-product/card-product.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ShowCartsComponent } from './components/cart/show-carts/show-carts.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ConfirmDeleteCartComponent } from './components/cart/confirm-delete-cart/confirm-delete-cart.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PaymentComponent } from './components/checkout/payment/payment.component';
import { PaymentItemComponent } from './components/checkout/payment-item/payment-item.component';
import { InfoCheckoutComponent } from './components/user/info-checkout/info-checkout.component';
import { ManageProductsComponent } from './components/product/manage-products/manage-products.component';
import { CategoryItemComponent } from './components/category/category-item/category-item.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { EditAuthComponent } from './components/account/edit-auth/edit-auth.component';
import { ChangePasswordComponent } from './components/account/change-password/change-password.component';
import { ShowBillsComponent } from './components/bill/show-bills/show-bills.component';
import { BillItemComponent } from './components/bill/bill-item/bill-item.component';
import { ChatRoomComponent } from './components/chat/chat-room/chat-room.component';
import { ChatPageComponent } from './components/chat/chat-page/chat-page.component';
import { UserChatItemComponent } from './components/chat/user-chat-item/user-chat-item.component'
import {ScrollingModule} from '@angular/cdk/scrolling';
import { UserChatInfoComponent } from './components/chat/user-chat-info/user-chat-info.component';
import { BussinessHandleComponent } from './components/product/bussiness-handle/bussiness-handle.component';
import { BillDetailComponent } from './components/bill/bill-detail/bill-detail.component';
import { RequireCommentComponent } from './components/comment/require-comment/require-comment.component';
import { OrderItemComponent } from './components/order/order-item/order-item.component';
import { AddReviewComponent } from './components/review/add-review/add-review.component';



const appRoutes: Routes = [
  {path: "auth", component: AuthComponent, children: [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent}
  ]},
  {path: "login", redirectTo: "auth/login", pathMatch: "full"},
  {path: "register", redirectTo: "auth/register", pathMatch: "full"},
  {path: "", component: HomeComponent, children: [
    {path: "", component: HomePageComponent},
    {path: "chat", component: ChatPageComponent, children: [
      {path :'room', component: ChatRoomComponent}
    ]},
    {path: "user", component: ProfileComponent, children: [
      {path: "profile", component: EditProfileComponent},
      {path: "bill", component: ShowBillsComponent}
    ]},
    {path: "bill", component: BillDetailComponent},
    {path: "addProduct", component: AddProductComponent},
    {path: "product", component: ProductDetailComponent},
    {path: "cart", component: ShowCartsComponent},
    {path: "payment", component: PaymentComponent},
    {path: "manage", component: ManageProductsComponent},
    {path: "editProduct", component: EditProductComponent}
  ]},
  {path: "admin", component: AdminComponent, children: [
    {path: "", component: DashboardComponent},
    {path: "category", component: ManageCategoryComponent}
  ]},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    CarouselBannerComponent,
    ProfileComponent,
    EditProfileComponent,
    DashboardComponent,
    AdminComponent,
    AddCategoryComponent,
    ShowCategoriesComponent,
    ManageCategoryComponent,
    LoadingComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    DarkOverlayComponent,
    AddProductComponent,
    ShowProductComponent,
    CardProductComponent,
    ProductDetailComponent,
    ShowCartsComponent,
    CartItemComponent,
    ConfirmDeleteCartComponent,
    PaymentComponent,
    PaymentItemComponent,
    InfoCheckoutComponent,
    ManageProductsComponent,
    CategoryItemComponent,
    EditProductComponent,
    EditAuthComponent,
    ChangePasswordComponent,
    ShowBillsComponent,
    BillItemComponent,
    ChatRoomComponent,
    ChatPageComponent,
    UserChatItemComponent,
    UserChatInfoComponent,
    BussinessHandleComponent,
    BillDetailComponent,
    RequireCommentComponent,
    OrderItemComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatMenuModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
