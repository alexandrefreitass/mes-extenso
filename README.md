## Script de Conversão de Data para Mês por Extenso

<div align="center">
    <img src="https://github.com/alexandrefreitass/salvar-googlesheets/assets/109884524/282d50eb-9a94-463d-8dc3-3b778e1a669d" />
</div>

### Descrição

Este script foi criado para automatizar a conversão de datas de aniversário do pessoal efetivo em uma planilha do Google Sheets, extraindo o mês e convertendo-o para o nome por extenso em português. Destinado a poupar tempo e automatizar atualizações, o script é perfeito para gerenciamentos de aniversários em grandes equipes, onde atualizações manuais seriam demoradas e sujeitas a erro.

### Funcionalidade

O script `mesExtenso` realiza as seguintes operações:

- **Leitura de Dados**: Extrai datas de aniversário da coluna específica (7ª coluna) na guia "EFETIVO".
- **Conversão de Data**: Converte cada data lida para o nome do mês correspondente em português.
- **Atualização de Planilha**: Salva os nomes dos meses na coluna adjacente (8ª coluna), substituindo quaisquer valores anteriores.
- **Gestão de Erros**: Caso não encontre dados válidos para conversão, exibe uma mensagem alertando a ausência de registros válidos.

### Como Usar

1. **Abra a Planilha**: Certifique-se de que está trabalhando na planilha do Google Sheets com a guia chamada "EFETIVO".
2. **Verifique as Colunas**: As datas de aniversário devem estar na 7ª coluna (Coluna G) e a conversão será salva na 8ª coluna (Coluna H).
3. **Execute o Script**: No menu de Scripts do Google Sheets, execute a função `mesExtenso`.

### Instalação

Para adicionar e executar este script em sua planilha do Google Sheets:

1. Abra sua planilha do Google Sheets.
2. Vá em `Extensões > Apps Script`.
3. Cole o código do script na janela do editor de Apps Script.
4. Salve e nomeie o projeto.
5. Volte à planilha para rodar o script através do menu de extensões ou configure um gatilho para automação.

### Limitações

O script assume que todas as datas estão em formato reconhecível pelo construtor `Date` do JavaScript. Formatos inconsistentes ou dados corrompidos podem não ser convertidos corretamente.

### Código

**Acesso ao Dashboard**: O dashboard pode ser acessado através de [este link](https://docs.google.com/spreadsheets/d/1M3S--xWsa_mcFEGvKT1JeAvlEuLhMv-_jfSm2NnxzaY/edit#gid=712832960).


### Contribuições

Contribuições para o aprimoramento do script são bem-vindas. Se deseja sugerir melhorias, sinta-se à vontade para clonar o projeto, fazer suas alterações e submeter um pull request.

### Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/alexandrefreitass/mes-extenso/blob/master/LICENSE) para mais detalhes.