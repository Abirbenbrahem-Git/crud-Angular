import { Component ,OnInit} from '@angular/core';
import { offre } from 'src/app/offre/offre';
import { OffreService } from 'src/app/offre/offre.service';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-consulter-offre',
  templateUrl: './consulter-offre.component.html',
  styleUrls: ['./consulter-offre.component.css']
})
export class ConsulterOffreComponent implements OnInit{

  offres: offre[] = [];
  displayAddModal = false;
  displayEditModal = false;
  selectedOffre :any =null;
  originalSelectedOffre: any = null;
 constructor(private offreService:OffreService,private confirmationService:ConfirmationService,private messageService: MessageService){ }

  ngOnInit(): void {
    this.getoffres();
  }

  getoffres() {
    this.offreService.getoffres().subscribe(
      response => {
        console.log(response);
        this.offres = response;
      }
    )
  } 
  
  showAddModal() {
    this.displayAddModal = true;
  }

  hideAddModal(isClosed: boolean) {
    this.displayAddModal = !isClosed;
  }

  showEditModal(offre:offre) {
    this.displayEditModal = true;
    this.selectedOffre =offre;
  }

  hideEditModal(isClosed: boolean) {
    this.displayEditModal = !isClosed;
  }

  saveOffre(newData: any) {
    this.offres.unshift(newData); 
  }
  
  updateOffre(updatedData: any) {
  this.getoffres();
    
    const index = this.offres.findIndex(offre => offre.id_offre === updatedData.id_offre);
    if (index !== -1) {
      this.offres[index] = updatedData;
    } 
  }

  
  deleteOffre(offre: offre){
    this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir supprimer cette offre ?',
        accept: () => {
            this.offreService.deleteOffre(Number(offre.id_offre)).subscribe(
                response => {
                    this.offres = this.offres.filter(data => data.id_offre !== offre.id_offre);
                    this.messageService.add({severity:'success', summary:'Success', detail:'Offre supprimée'});
                },
            )
        }
    });
  }

  
}
