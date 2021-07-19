import { Component, OnInit ,Inject, OnDestroy, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Chart } from 'chart.js';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NotificationService } from '../../service/notification.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-notificationaccident',
  templateUrl: './notificationaccident.component.html',
  styleUrls: ['./notificationaccident.component.css']
})
export class NotificationAccidentComponent implements OnInit {
  submitted = false;
  @ViewChild('infoModal') public infoModal: ModalDirective;
 constructor(public crudApi: NotificationService,public fb: FormBuilder,public toastr: ToastrService) { }
 
 ngOnInit(): void {
  this.infoForm();
  var today = new Date();
  console.log(today);
 }
     
 infoForm() {
  this.crudApi.dataForm = this.fb.group({
    subject: [''],
    text: [''],
      });
  }
 
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.crudApi.dataForm.invalid) {
        return;
    }
    const notif = this.crudApi.dataForm.value;
        this.crudApi.createData(notif).subscribe( data => {
          this.toastr.success( 'email envoyé avec succées');
          this.infoModal.hide();
        });
     
}
   
}
