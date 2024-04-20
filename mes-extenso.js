function mesExtenso() {
    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    const guiaDados = planilha.getSheetByName("EFETIVO");
    const dadosMenu2 = guiaDados.getRange(8, 7, guiaDados.getLastRow() - 7, 1).getValues();
    const meses = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
    const updates = [];
  
    for (let i = 0; i < dadosMenu2.length; i++) {
      if (dadosMenu2[i][0] !== "") {
        const Data = new Date(dadosMenu2[i][0]);
        const mestexto = meses[Data.getMonth()];
        updates.push([mestexto]);
      } else {
        updates.push([""]); // Manter sincronia das linhas ao colocar uma string vazia
      }
    }
  
    // Só faz atualização se realmente tiver dados a atualizar
    if (updates.length > 0) {
      guiaDados.getRange(8, 8, updates.length, 1).setValues(updates);
    } else {
      Browser.msgBox("Não há registros válidos para atualizar.");
    }
  }
  