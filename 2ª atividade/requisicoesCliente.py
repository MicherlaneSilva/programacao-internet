import requests
import os
import requests_cache
from time import sleep
from texto import Texto
from bs4 import BeautifulSoup

'''1) Faça o download de uma página passada pelo prompt de comando;
2) Dentro desta página, obtenha todos os 
10 primeiros links (tags <a> com atributo href 
começando com http:// ou https://);
3) Liste de forma enumerada o título dos 10 links enumerados de 1 a 10;
4) Solicite do usuário uma palavra-chave e o número de um dos links;
5) Baixe a página cujo link foi escolhido ;
6) Faça a busca no texto da página por todas as 
ocorrências da palavra-chave;
7) Exiba as ocorrências exibindo os 15 caracteres antes 
e 15 caracteres depois de cada palavra chave encontrada;
8) Possibilite ao usuário voltar ao menu anterior e repetir o processo.
requests_cache.install_cache('banco')'''

links = {}

def limparTela():
    os.system('clear') or None


def baixarSite(nameSite):
    return requests.get(nameSite)

def obterLinks(response, qLinks):
    soup = BeautifulSoup(response.text, 'html.parser')
    

    link = soup.find_all('a')
    
    i = 1
    for l in link:
        if l.get('href') != None:
            links[i] = l.get('href')
            i += 1

       
        if i > qLinks:
           break
        

def listarLinks():
    print('\nLINKS\n')

    for key in links:
        if links[key] != "#":
            print(f'{key} - {links[key]}')


def obterTexto(nameSite):
    response = baixarSite(nameSite)
    soup = BeautifulSoup(response.text, 'html.parser')
    texto = ""

    tags = soup.find_all('p')
    for p in tags:
        texto += p.getText()
    
    return texto


def obterResultado(texto, palavra):
    t = Texto(texto, palavra)
    resultados = t.visualizarOcorrencias()
    return resultados


def listarResultados(resultados):
    if len(resultados) != 0:
        for item in resultados:
            print(item)
    else:
        print('Nenhum resultado encontrado correspondente a palavra solicitada.')


def main():
    requests_cache.install_cache('banco')
    obterLinks(baixarSite('https://www.megacurioso.com.br/'), 100)

    while True:
       
            listarLinks()
            print('0 - para sair')

            while True:
                try:
                    opcao = int(input('Digite a opção: '))
                    break
                except:
                    print('\nPreencha com um valor inteiro.')

            limparTela()

            if opcao == 0:
                break

            nameSite = links[opcao]

            print(links[opcao])

            tipoDeBusca = input('\nBusca aproximada ou exata(A/E)? ').upper()
            palavraChave = input('\nDigite a palavra chave: ')

            if tipoDeBusca ==  'E':        
                palavraChave = " " + palavraChave + " "

            texto = obterTexto(nameSite)
            resultados = obterResultado(texto, palavraChave)
            limparTela()
            listarResultados(resultados)
            
            input('\nPress Enter>> ')
            limparTela()
        
       

    print("Obrigado por usar este script.")
main()


