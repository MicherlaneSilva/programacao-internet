class Texto:
    def __init__(self, texto = "", palavra_chave = ""):
        self._texto = texto
        self._palavraChave = palavra_chave
        self._tamanhoPalavra = len(self.palavraChave)
        self._tamanhoTexto = len(self.texto)

    
    @property
    def texto(self):
        return self._texto
    
    @texto.setter
    def texto(self, texto):
        self._tamanhoTexto = len(texto)
        self._texto = texto
        

    @property
    def tamanhoPalavra(self):
        return self._tamanhoPalavra
    

    @property
    def tamanhoTexto(self):
        return self._tamanhoTexto
    


    @property
    def palavraChave(self):
        return self._palavraChave
    
    @palavraChave.setter
    def palavraChave(self, palavraChave):
        self._palavraChave = palavraChave
        self._tamanhoPalavra = len(palavraChave)
    


    def retornarCaracteresAnteriores(self, posicao):
        
        posicao_inicial = posicao - 15
        if posicao_inicial < 0:
            posicao_inicial = 0
        
        return self.texto[posicao_inicial:(posicao + 1)]
    

    def retornarCaracteresPosteriores(self, posicao):
       
        posicao_final = posicao + 15
        if posicao_final > self.tamanhoTexto:
            posicao_final = self.tamanhoTexto
        
        return self.texto[posicao:posicao_final]
    

    def visualizarOcorrencias(self):
        resultados = []

        for i in range(self.tamanhoTexto):
            if self.texto[i: (i + self.tamanhoPalavra)] == self.palavraChave:
                posicao_anterior = i - 1
                posicao_posterior = i + self.tamanhoPalavra

                resultado = self.retornarCaracteresAnteriores(posicao_anterior) + self.palavraChave + self.retornarCaracteresPosteriores(posicao_posterior)
                resultados.append(resultado)

        return resultados