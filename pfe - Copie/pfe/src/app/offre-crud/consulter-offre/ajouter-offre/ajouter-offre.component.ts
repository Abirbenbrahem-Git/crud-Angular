import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { OffreService } from 'src/app/offre/offre.service';

@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.css']
})
export class AjouterOffreComponent implements OnInit {
  @Input() displayAddModal: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();


  offreForm = this.fb.group({
    titre: ["", Validators.required],
    description: ["", Validators.required],
    detail: [""],
    salaire: ["", Validators.required],
  });
  
  constructor(private fb: FormBuilder, private offreService: OffreService,private messageService: MessageService) { }
  ngOnInit(): void {
  }

  closeModal(){
    this.offreForm.reset();
    this.clickClose.emit(true);
  }

  addOffre(){
    if (this.offreForm.valid) {
      this.offreService.saveProduct(this.offreForm.value).subscribe(
        response => {
          this.clickAdd.emit(response);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Offre ajoutée avec succès.' });
          this.closeModal();
        },);} 
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Veuillez remplir tous les champs obligatoires.' });
    }
  }
  
}