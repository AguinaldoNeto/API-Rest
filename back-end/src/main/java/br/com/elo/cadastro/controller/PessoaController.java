package br.com.elo.cadastro.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.elo.cadastro.model.Pessoa;
import br.com.elo.cadastro.repository.PessoaRepository;


@RestController
@RequestMapping("/api/pessoa")
public class PessoaController {

    private final PessoaRepository repository;
    
    @Autowired
    public PessoaController (PessoaRepository repository) {
        this.repository = repository;
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Pessoa salvarPessoa(@RequestBody @Valid Pessoa pessoa) {
        return repository.save(pessoa);
    }
    
    @GetMapping
    public List<Pessoa> obterListaCadastro() {
        return repository.findAll();
    }
    
    @GetMapping("{id}")
    public Pessoa buscarPessoaPorId( @PathVariable Integer id ) {
        return repository
                .findById(id)
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND) );
    }
    
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarCadastroPessoa( @PathVariable Integer id, @RequestBody @Valid Pessoa pessoaAtualizada) {
        repository
            .findById(id)
            .map( pessoa -> {
                pessoa.setNome(pessoaAtualizada.getNome());
                pessoa.setCpf(pessoaAtualizada.getCpf());
                pessoa.setDataNascimento(pessoaAtualizada.getDataNascimento());
                return repository.save(pessoa);
            })
            .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND) );

    }
    
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarPessoa ( @PathVariable Integer id ) {
        repository
        .findById(id)
        .map( pessoa -> {
            repository.delete(pessoa);
            return Void.TYPE;
        })
        .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND)); 
    }
}