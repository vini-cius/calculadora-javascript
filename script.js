function calcular(tipo, valor) {
    if (tipo === 'acao') {

      if (valor === 'c') {
        //lmpar visor
        document.getElementById('resultado').value = ''
      }

      if (valor === '<') {
          var backspace = document.getElementById('resultado').value
          backspace = backspace.substring(0, (backspace.length - 1))
          document.getElementById('resultado').value = backspace
      }

      if (valor === '+' || valor ==='-' || valor ==='*' || valor ==='/' || valor ==='.' ) {
        document.getElementById('resultado').value += valor
      }

      if(valor === 'raiz') {
        var raiz = Math.sqrt(document.getElementById('resultado').value)
        document.getElementById('resultado').value = raiz
      }

      if (valor === '=') {
        var valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_campo
      }
    }

    else if (tipo === 'valor') {
      document.getElementById('resultado').value += valor
    }
  }