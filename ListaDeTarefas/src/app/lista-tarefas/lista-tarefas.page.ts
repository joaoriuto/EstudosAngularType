import { TaskServiceService } from './../task-service.service';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.page.html',
  styleUrls: ['./lista-tarefas.page.scss'],
})
export class ListaTarefasPage implements OnInit {

  // Varíavel deve ser tipo any
  tasks: any[] = [];
  registro: string = '';

  //Importar o service para comunicação
  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {
     this.fetchTaks()
  }
  // Sempre utilizar o async/await para retornar os dados.
  async fetchTaks(){
    try {
      this.tasks =  await this.taskService.getTasks();
    } catch (error) {
      console.log(error)
    }
  }

num: any = uuidv4();

async  criar() {
    if (this.registro.trim() !== ''){
      const novoJob = {
        id: this.tasks.length * this.num,
        name: this.registro,
        completed: false
      };
      await this.taskService.criar(novoJob);
      this.registro = ''; //Limpar
      await this.fetchTaks(); //Atualiza a lista
      console.log('Tarefa add ok')
      console.log(this.num)

    }
    console.log(this.registro)
    console.log('Criando')
  }

 async editar(task: any) {

  if (this.registro.trim() !== ''){
    const novoJob = {
      id: task.id,
      name: this.registro,
      completed: false
    };
    await this.taskService.editar(novoJob);
    this.registro = ''; //Limpar
    await this.fetchTaks(); //Atualiza a lista
    console.log('Tarefa Atualizada!')

    }

  }

  async excluir(task: any) {
    const msg = confirm(`Tem certeza em deletar "${ task.name }"?`);
    if (msg) {
      this.taskService.excluir(task.id);
      await this.fetchTaks();
      console.log('Foi pro beleleu!')
      console.log(task.id)
    }


  }



  opa(){
    console.log('opa')
  }

}
