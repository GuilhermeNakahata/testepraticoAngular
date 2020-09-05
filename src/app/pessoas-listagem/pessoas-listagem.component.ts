import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoas-listagem',
  templateUrl: './pessoas-listagem.component.html',
  styleUrls: ['./pessoas-listagem.component.css']
})
export class PessoasListagemComponent implements OnInit {

   pessoas : Array<any>;
   pessoa : any;
   id : any;
   pessoacriacao : Pessoa;
   btneditar : boolean;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoacriacao = new Pessoa();
    this.pessoa = new Pessoa();
    this.btneditar = true;
    this.listar();
  }

  listar(){
    this.pessoaService.listar().subscribe(retorno => this.pessoas = retorno)
  }

  listarUnico(){
    this.pessoaService.listarUnico(this.id).subscribe(retorno => {
      this.pessoa = retorno
      this.btneditar = false;
      alert("Código: " + this.pessoa.codigo + " Nome: " + this.pessoa.nome + " CPF:" + this.pessoa.cpf);
    }, (error) => {
        alert("Error");
    })
  }

  deletar(){
    this.pessoaService.delete(this.id).subscribe(retorno => {
      alert("Pessoa excluida com sucesso!");
    }, (error) => {
      alert("Error");
    })
  }
  
  criar(){
    this.pessoaService.criar(this.pessoacriacao).subscribe(retorno => {
      alert("Pessoa criada com sucesso!");
    }, (error) => {
      alert("Error");
    })
  }

  alterar(){
    this.pessoaService.alterar(this.pessoa).subscribe(retorno => {
      alert("Pessoa alterada com sucesso!");
    }, (error) => {
      alert("Error");
    })
  }

}
