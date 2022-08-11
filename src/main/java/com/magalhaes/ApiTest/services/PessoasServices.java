package com.magalhaes.ApiTest.services;

import com.magalhaes.ApiTest.entity.Pessoa;
import com.magalhaes.ApiTest.repositories.PessoasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PessoasServices {

    @Autowired
    private PessoasRepository pessoasRepository;

    public Pessoa find(Long id){
        Pessoa pessoa = pessoasRepository.findById(id).get();
        return pessoa;
    }

    public void Insert(Pessoa pessoa){
        pessoasRepository.saveAndFlush(pessoa);
    }
}
