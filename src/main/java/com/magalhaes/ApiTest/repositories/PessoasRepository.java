package com.magalhaes.ApiTest.repositories;


import com.magalhaes.ApiTest.entity.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoasRepository extends JpaRepository<Pessoa, Long> {
}
