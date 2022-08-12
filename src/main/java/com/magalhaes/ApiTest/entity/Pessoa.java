package com.magalhaes.ApiTest.entity;

import javax.persistence.*;

@Entity
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Integer idade;
    @ManyToOne
    @JoinColumn(name = "funcao_id")
    private Funcao funcao;


    public Pessoa() {

    }

    public Pessoa(Long id, String name, Integer idade, Funcao funcao) {
        this.id = id;
        this.name = name;
        this.idade = idade;
        this.funcao = funcao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public Funcao getFuncao() {
        return funcao;
    }

    public void setFuncao(Funcao funcao) {
        this.funcao = funcao;
    }
}
