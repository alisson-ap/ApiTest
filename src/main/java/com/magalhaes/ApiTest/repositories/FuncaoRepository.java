package com.magalhaes.ApiTest.repositories;

import com.magalhaes.ApiTest.entity.Funcao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncaoRepository extends JpaRepository<Funcao, Long> {
}
