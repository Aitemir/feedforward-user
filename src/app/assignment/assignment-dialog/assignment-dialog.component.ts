import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-assignment-dialog',
  templateUrl: './assignment-dialog.component.html',
  styleUrls: ['./assignment-dialog.component.css']
})
export class AssignmentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AssignmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      dialogRef.disableClose = true;
     }

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
