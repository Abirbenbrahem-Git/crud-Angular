import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { offre } from 'src/app/offre/offre';
import { OffreService } from 'src/app/offre/offre.service';

@Component({
  selector: 'app-modifier-offre',
  templateUrl: './modifier-offre.component.html',
  styleUrls: ['./modifier-offre.component.css']
})
export class ModifierOffreComponent implements OnInit,OnChanges {
  @Input() displayEditModal: boolean = true;
  @Input() selectedOffre: any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickEdit: EventEmitter<any> = new EventEmitter<any>();
  
  offreForm = this.fb.group({
    titre: [""],
    description: [""],
    detail: [""],
    salaire: [""],
  });

  constructor(private fb: FormBuilder, private offreService: OffreService,private messageService: MessageService) { }
  ngOnInit(): void {
  }

  ngOnChanges():void {
    if(this.selectedOffre){
      this.offreForm.patchValue(this.selectedOffre);
    }
    else{
      this.offreForm.reset();
    }
  }
  
  closeModal(){
    this.offreForm.reset();
    this.clickClose.emit(true);
  }

  editOffre() {
    const updatedData = this.offreForm.value;
    const id_offre = this.selectedOffre.id_offre;
    this.offreService.updateOffre(updatedData, id_offre).subscribe(
      response => {
        this.clickEdit.emit(updatedData);
        
        this.messageService.add({severity:'success', summary:'Success', detail:'Offre modifiée'});
        this.closeModal();
      },
    );
  }
  
  
  
  

}
