package com.magalhaes.ApiTest.services;

import com.magalhaes.ApiTest.entity.Pessoa;
import com.magalhaes.ApiTest.repositories.PessoasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoasServices {

    @Autowired
    private PessoasRepository pessoasRepository;

    public List<Pessoa>findAll(){
        return pessoasRepository.findAll();
    }


    public Pessoa find(Long id) {
        Pessoa pessoa = pessoasRepository.findById(id).get();
        return pessoa;
    }

    public void insert(Pessoa pessoa) {
        pessoasRepository.saveAndFlush(pessoa);
    }

    public void delete(Long id) {
        pessoasRepository.deleteById(id);
    }
    public void update(Long id, Pessoa pessoa){
        Pessoa obj = find(id);
        obj.setName(pessoa.getName());
        obj.setIdade(pessoa.getIdade());
        pessoasRepository.saveAndFlush(obj);
    }
}
