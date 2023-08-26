import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lista-tarefas',
    loadChildren: () => import('./lista-tarefas/lista-tarefas.module').then( m => m.ListaTarefasPageModule)
  },
  {
    path: '',
    redirectTo: 'lista-tarefas',
    pathMatch: 'full'
  },
  {
    path: 'adicionar-tarefa',
    loadChildren: () => import('./adicionar-tarefa/adicionar-tarefa.module').then( m => m.AdicionarTarefaPageModule)
  },
  {
    path: 'editar-tarefa',
    loadChildren: () => import('./editar-tarefa/editar-tarefa.module').then( m => m.EditarTarefaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
