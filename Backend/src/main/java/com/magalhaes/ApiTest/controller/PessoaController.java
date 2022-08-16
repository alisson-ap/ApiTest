package com.magalhaes.ApiTest.controller;


import com.magalhaes.ApiTest.entity.Pessoa;
import com.magalhaes.ApiTest.services.PessoasServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/pessoa")
public class PessoaController {

    @Autowired
    private PessoasServices pessoasServices;

    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody Pessoa pessoa){
        pessoasServices.insert(pessoa);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public List<Pessoa> findAll(){
        return pessoasServices.findAll();
    }

    @GetMapping(value = "/{id}")
    public Pessoa findById(@PathVariable Long id){
            return  pessoasServices.find(id);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        pessoasServices.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> update( @RequestBody Pessoa pessoa, @PathVariable Long id){
        pessoasServices.update(id,pessoa);
        return ResponseEntity.noContent().build();
    }
}
