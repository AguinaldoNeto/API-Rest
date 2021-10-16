package br.com.elo.cadastro.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Contato {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    @NotBlank
    @Column(nullable = false, length = 255)
    private String nome;
    
    @NotBlank
    @Column(nullable = false, length = 255)
    private String telefone;
    
    @Email
    @NotBlank
    @Column(nullable = false, length = 255)
    private String email;
    
    @Column
    private Integer pessoa;
}
