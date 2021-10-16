package br.com.elo.cadastro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.elo.cadastro.model.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Integer> {

}
