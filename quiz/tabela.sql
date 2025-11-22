CREATE DATABASE IF NOT EXISTS quiz_medicina;
USE quiz_medicina; 

CREATE TABLE pontuacoes_quiz (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_jogador VARCHAR(100) NOT NULL,
    pontuacao TINYINT UNSIGNED NOT NULL,
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_placar_geral (pontuacao DESC, data_registro ASC) 
    
);