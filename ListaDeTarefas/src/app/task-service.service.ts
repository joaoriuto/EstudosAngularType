import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  //CRUD - CREATE READ UPDATE DELETE
  //       POST   GET  PUT    DELETE

  //Endereço da url de consulta
  private taskUrl = 'http://localhost:3000/tasks';

  //Atribuir o HttpClient para realizar o get()
  constructor( private http: HttpClient ) { }

  //A requisição deve esperar o retorno.
  //Não esquecer o <any[]>
  async getTasks() {
     const requisicao = await lastValueFrom(this.http.get<any[]>(this.taskUrl));
     return requisicao;
  }

  public async criar(task: any) {
    return await lastValueFrom(
      this.http.post(this.taskUrl, task)
    );
  }

  async editar(task: any){
    return await lastValueFrom( this.http.put(`${this.taskUrl}/${task.id}`, task) )
  }

  async excluir(taskId: number) {
    return await lastValueFrom( this.http.delete(`${this.taskUrl}/${taskId}`));

  }


}
