package br.com.elo.cadastro.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import br.com.elo.cadastro.model.Contato;
import br.com.elo.cadastro.repository.ContatoRepository;


@RestController
@RequestMapping("/api/contatos")
public class ContatoController {

    public final ContatoRepository repository;
    
    @Autowired
    public ContatoController(ContatoRepository repository) {
        this.repository = repository;
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Contato salvarContato(@RequestBody @Valid Contato contato) {
        System.out.println(contato.getPessoa());
        return repository.save(contato);
    }
    
    @GetMapping
    public List<Contato> listarContatos() {
        return repository.findAll();
    }
    
    @GetMapping("{id}")
    public Contato buscarContatoPorId( @PathVariable Integer id ) {
        return repository
                .findById(id)
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND) );
    }
    
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarContato( @PathVariable Integer id, @RequestBody @Valid Contato contatoAtualizado) {
        repository
            .findById(id)
            .map( contato -> {
                contato.setNome(contatoAtualizado.getNome());
                contato.setTelefone(contatoAtualizado.getTelefone());
                contato.setEmail(contatoAtualizado.getEmail());
                contato.setPessoa(contatoAtualizado.getPessoa());
                return repository.save(contato);
            })
            .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND) );

    }
    
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarContato ( @PathVariable Integer id ) {
        repository
        .findById(id)
        .map( contato -> {
            repository.delete(contato);
            return Void.TYPE;
        })
        .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND)); 
    }
    
}
