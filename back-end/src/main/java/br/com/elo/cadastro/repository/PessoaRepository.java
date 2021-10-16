package br.com.elo.cadastro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.elo.cadastro.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {

}
