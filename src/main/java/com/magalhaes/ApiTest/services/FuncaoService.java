package com.magalhaes.ApiTest.services;

import com.magalhaes.ApiTest.entity.Funcao;
import com.magalhaes.ApiTest.repositories.FuncaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncaoService {

    @Autowired
    private FuncaoRepository funcaoRepository;

    public Funcao find(Long id) {
        Funcao funcao;
        return funcao = funcaoRepository.findById(id).get();
    }

    public List<Funcao> findAll(){
        return funcaoRepository.findAll();
    }

    public void delete(Long id){
        funcaoRepository.deleteById(id);
    }

    public void upadate(Funcao funcao, Long id){
       Funcao obj = funcaoRepository.findById(id).get();
       obj.setNomeFuncao(funcao.getNomeFuncao());
       funcaoRepository.saveAndFlush(obj);
    }

    public void insert(Funcao funcao){
        funcaoRepository.saveAndFlush(funcao);
    }

}
