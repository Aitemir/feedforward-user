import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AssignmentDialogComponent } from '../assignment-dialog/assignment-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  disableSelect = new FormControl(false);

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(AssignmentDialogComponent, {
      width: '450px',
      height: '225x',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  trackControl = new FormControl('', Validators.required);
  epaControl = new FormControl('', Validators.required);
  docControl = new FormControl('', Validators.required);
  competencyControl = new FormControl('', Validators.required);
  rotationControl = new FormControl('', Validators.required);
  evaluatorControl = new FormControl('', Validators.required);

  tracks: any[] = [
    {name: 'Family Medicine'},
    {name: 'Neuro'},
    {name: 'OBGYN'}
  ];
  
  epas: any[] = [
    {name: 'Preventive Care', trackId: 1},
    {name: 'Chronic Care Management', trackId: 1},
    {name: 'Evidence Based Spectrum of Care', trackId: 1},
    {name: 'Documentation Proficiency', trackId: 1},
    {name: 'Procedure Prep', trackId: 1},
    {name: 'Clinical Scenarios', trackId: 2},
    {name: 'Procedures', trackId: 2}
  ];

  docs: any[] = [
    {name: 'Vaccination', epaId: 1},
    {name: 'History and Physical', epaId: 1},
    {name: 'Preventative screenings', epaId: 1},
    {name: 'Diagnostic', epaId: 2},
    {name: 'Treatment', epaId: 2},
    {name: 'Clinical Setting', epaId: 3},
    {name: 'Evidence Based Medicine', epaId: 3},
    {name: 'Electronic Medical Record Utilization', epaId: 4} ,
    {name: 'Documentation', epaId: 4},
    {name: 'Hospital Presentations', epaId: 4},
    {name: 'Womens Health', epaId: 5},
    {name: 'Musculoskeletal', epaId: 5},
    {name: 'Medical Interviewing Skills', epaId: 6},
    {name: 'Neurological exam skills', epaId: 6},
    {name: 'Humanistic Qualities/Professionalism', epaId: 6},
    {name: 'Overall', epaId: 6},
    {name: 'Pre LP Procedure', epaId: 7},
    {name: 'Pre LP Data review', epaId: 7},
    {name: 'LP Procedure', epaId: 7}
  ];

  competencies: any[] = [
     {name: 'Recommends appropriate pediatric vaccines at well child visit with utilizing vaccine schedule', docId: 42},
     {name: 'Recommends appropriate adult vaccines at annual visit with utilizing vaccine schedule', docId: 42},
     {name: 'Recommends pneumococcal vaccine appropriately in smokers/DM/65+/lung disease/etc', docId: 42},
     {name: 'Recommends tdap vaccine in pregnancy', docId: 42},
     {name: 'Aware of and utilizes Developlental questionnaire appropriately', docId: 43},
     {name: 'Aware of and utilizes HEADS assessment', docId: 43},
     {name: 'Performed appropriate focused exam ', docId: 43},
     {name: 'Presents abnormal physical exam findings effectively', docId: 43},
     {name: 'Appropriate Shoulder Exam', docId: 43},
     {name: 'Appropriate Knee Exam', docId: 43},
     {name: 'Appropriate complete newborn/wellchild exam', docId: 43},
     {name: 'Appropriate cardiovascular exam', docId: 43},
     {name: 'Appropriate pulmonary exam', docId: 43},
     {name: 'Appropriate abdominal Exam', docId: 43},
     {name: 'Breast Cancer screening recommended correctly with USPSTF vs AAFP vs other society opinions', docId: 44},
     {name: 'Colon cancer screening recommended correctly', docId: 44},
     {name: 'Cervical cancer screening recommended correctly', docId: 44},
     {name: 'Lung cancer screening recommended correctly', docId: 44},
     {name: 'AAA screening recommended correctly', docId: 44},
     {name: 'Osteoporosis screening recommended correctly', docId: 44},
     {name: 'HIV screening recommended correctly', docId: 44},
     {name: 'Hep C screening recommended correctly', docId: 44},
     {name: 'STD screening recommended correctly', docId: 44},
     {name: 'Anemia screening recommended correctly in child', docId: 44},
     {name: 'Lead screening recommended correctly', docId: 44},
     {name: 'Utilizes Diagnostic Criteria of  Asthma correctly', docId: 45},
     {name: 'Utilizes Diagnostic Criteria of  HTN correctly', docId: 45},
     {name: 'Utilizes Diagnostic Criteria of  HLD correctly', docId: 45},
     {name: 'Utilizes Diagnostic Criteria of DM correctly', docId: 45},
     {name: 'Utilizes Diagnostic Criteria of Anxiety correctly', docId: 45},
     {name: 'Utilizes Diagnostic Criteria of Depression', docId: 45},
     {name: 'Creates plan for Asthma management with 1st / 2nd line options correctly with discussion of step up therapy', docId: 46},
     {name: 'Creates plan for HTN management with 1st / 2nd line options correctly with reviewing JNC vs other guidelines ', docId: 46},
     {name: 'Creates plan for HLD management with 1st / 2nd line options correctly with utilizing ASCVD Risk', docId: 46},
     {name: 'Creates plan for DM management with 1st / 2nd line options correctly', docId: 46},
     {name: 'Creates plan for Anxiety management with 1st / 2nd line options correctly', docId: 46},
     {name: 'Creates plan for Depression management with 1st / 2nd line options correctly', docId: 46},
     {name: 'Presents appropriate A/P of changes', docId: 46},
     {name: 'Perform inpatient handoffs correctly', docId: 47},
     {name: 'Perform appropriate H&P in ED for new admission', docId: 47},
     {name: 'Prioritized differential diagnosis of a new problem', docId: 48},
     {name: 'Presentation to team on evidence-based topic', docId: 48},
     {name: 'Exercise EB decision in plan with backed reasoning', docId: 48},
     {name: 'Order placement for admission suggestions correctly', docId: 49},
     {name: 'Order placement for Medication refill suggestions correctly', docId: 49},
     {name: 'Order placement for Appropriate diagnostic test suggestions correctly', docId: 49},
     {name: 'Order placement for Medication dose change suggstions  correctly', docId: 49},
     {name: 'Full H&P documented effectively', docId: 50},
     {name: 'Review prior H&P', docId: 50},
     {name: 'Present approproately at bedside', docId: 51},
     {name: 'Pap smear indications', docId: 52},
     {name: 'Pap smear interpretations', docId: 52},
     {name: 'Consent for pap smear', docId: 52},
     {name: 'Performed GYN exam including pap smear correctly', docId: 52},
     {name: 'Aware of indications/contraindications for Knee / Shoulder steroid injection', docId: 53},
     {name: 'Aware of risk/benefits for Knee / Shoulder steroid injection', docId: 53},
     {name: 'Performed Consent for Knee / Shoulder steroid injection correctly', docId: 53},
     {name: 'Performed Physical exam/and define landmarks for Knee / Shoulder steroid injection correctly', docId: 53},
     {name: 'Did the resident introduce himself/herself appropriately to the patient and others accompanying patient?', docId: 54},
     {name: 'Did the resident display appropriate listening skills?', docId: 54},
     {name: 'Presenting complaint (s):', docId: 54},
     {name: 'History of Present Illness:', docId: 54},
     {name: 'Past History:', docId: 54},
     {name: 'Review of systems', docId: 54},
     {name: 'medications', docId: 54},
     {name: 'allergies', docId: 54},
     {name: 'Mental Status', docId: 55},
     {name: 'Cranial Nerves', docId: 55},
     {name: 'Sensory', docId: 55},
     {name: 'Motor Exam', docId: 55},
     {name: 'Reflexes', docId: 55},
     {name: 'Cerebellar', docId: 55},
     {name: 'Station and Gait', docId: 55},
     {name: 'Did the resident demonstrate appropriate humanistic qualities and professionalism?', docId: 56},
     {name: 'Did the resident adequately counsel the patient in the nature of their diagnosis and evaluation approach?', docId: 56},
     {name: 'Is the patient / family provided an opportunity to ask questions?', docId: 56},
     {name: 'Closure with patient / family appropriate?', docId: 56},
     {name: 'Overall Evaluation', docId: 57},
     {name: 'Oral presentation', docId: 57},
     {name: 'Clinical Documentation', docId: 57},
     {name: 'Discuss the procedure Risks and benefits', docId: 58},
     {name: 'Potential risks of headache, back pain, infection bleeding', docId: 58},
     {name: 'Consent the patient', docId: 58},
     {name: 'Review pertinent data', docId: 59},
     {name: 'Head imaging (non-contrast head CT - no contraindications (posterior fossa mass/hemorrhage)', docId: 59},
     {name: 'CBC (platelets >100,000, PT/INR)', docId: 59},
     {name: 'Position the patient (lateral decubitus position)', docId: 60},
     {name: 'Identify landmarks (L4L5)', docId: 60},
     {name: 'Prep the area', docId: 60},
     {name: 'Perform Time out', docId: 60},
     {name: 'Use sterile technique', docId: 60},
     {name: 'Use appropriate anesthetic', docId: 60},
     {name: 'LP needle technique', docId: 60},
     {name: 'Measure opening pressure', docId: 60},
     {name: 'Collection of CSF', docId: 60},
     {name: 'Discuss post procedure instructions (lay flat x 1hr), drink fluids  ', docId: 60}
  ];

  rotations: any[] = [
    {name: 'Rotation 1', id: 0},
    {name: 'Rotation 2', id: 0},
    {name: 'Rotation 3', id: 0},
    {name: 'Rotation 4', id: 0},
    {name: 'Rotation 5', id: 0},
    {name: 'Rotation 6', id: 0}
  ];

  evaluators: any[] = [
    {id: 1, firstName: 'Molly', lastName: 'Evans', Role: 'Faculty'},
    {id: 2, firstName: 'Bill', lastName: 'Collins', Role: 'Resident'},
    {id: 3, firstName: 'Laith', lastName: 'Smith', Role: 'Resident'},
    {id: 4, firstName: 'Harvey', lastName: 'No Shot', Role: 'Faculty'}
  ];
}
