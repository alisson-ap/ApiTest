package com.magalhaes.ApiTest.controller;

import com.magalhaes.ApiTest.entity.Funcao;
import com.magalhaes.ApiTest.services.FuncaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/funcao")
public class FuncaoController {

    @Autowired
    private FuncaoService funcaoService;

    @GetMapping(value = "/{id}")
    public Funcao find(@PathVariable Long id){
        return funcaoService.find(id);
    }

    @GetMapping
    public List<Funcao> findAll(){
        return funcaoService.findAll();
    }

    @PostMapping
    public void insert(@RequestBody Funcao funcao){
        funcaoService.insert(funcao);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id){
        funcaoService.delete(id);
    }

    @PutMapping(value = "/{id}")
    public void update(@RequestBody Funcao funcao, @PathVariable Long id){
        funcaoService.upadate(funcao,id);
    }
}
