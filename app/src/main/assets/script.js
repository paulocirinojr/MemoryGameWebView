var numeros = [1, 2, 3, 4, 5, 6];
            var pos = 0;
            var erros = 0;

            /// Gera a sequência ao carregar a página
            window.onload = function(){
                geraSequencia();
            }

            /// Verifica se o botão clicado foi o correto
            function verificaBotao(botao) {
                var btn = botao;
                var componente;
                var cor;
                if (botao == 1){
                    componente = "button1";
                    cor = "purple";
                }
                else{
                    if (botao == 2){
                        componente = "button2";
                        cor = "red";
                    }
                    else{
                        if (botao == 3){
                            componente = "button3";
                            cor = "green";
                        }
                        else{
                            if (botao == 4){
                                componente = "button4";
                                cor = "#00FFFF";
                            }
                            else{
                                if (botao == 5){
                                    componente = "button5";
                                    cor = "grey";
                                }
                                else{
                                    if (botao == 6){
                                        componente = "button6";
                                        cor = "orange";
                                    }
                                }
                            }
                        }
                    }

                }

                if (btn == numeros[pos]){
                    pos++;
                    document.getElementById(componente).style.display = "none";
                    document.getElementById("janela").style.backgroundColor = cor;
                }
                else{
                    reinicia();
                    pos=0;
                    erros++;
                    document.getElementById("erros").innerHTML="Erros: " + erros;
                }

                /// Todos acertos
                if (pos == 6){
                    document.getElementById("parabens").style.display = "block";
                    document.getElementById("salvarPontuacao").style.display = "block";
                }
            }

            function geraSequencia(){
                numeros = numeros.sort(() => Math.random() - 0.5);
            }

            function reinicia(){
                document.getElementById("button1").style.display = "block";
                document.getElementById("button2").style.display = "block";
                document.getElementById("button3").style.display = "block";
                document.getElementById("button4").style.display = "block";
                document.getElementById("button5").style.display = "block";
                document.getElementById("button6").style.display = "block";
                document.getElementById("janela").style.backgroundColor = "white";
                document.getElementById("parabens").style.display = "none";
                document.getElementById("salvarPontuacao").style.display = "none";
                document.getElementById("history").style.display = "none";
                document.getElementById("erros").innerHTML="";
                document.getElementById("erros").innerHTML="Erros: " + erros;
            }

            /// Salva a pontuação no histórico
            function salvarPontuacao(){
                var nome = document.getElementById("nomejogador").value;
                localStorage.setItem(nome, erros);
                erros=0;
            }

            function historico(){
                document.getElementById("parabens").style.display = "none";
                document.getElementById("salvarPontuacao").style.display = "none";
                document.getElementById("history").style.display = "block";
                var qtdeJogadores = localStorage.length;
                var chave;
                var valor;
                var string;

                /// Obtém os valores do localStorage
                var valores = [],
                        chaves = Object.keys(localStorage),
                        i = chaves.length;

                    while ( i-- ) {
                        valores.push( localStorage.getItem(chaves[i]) );
                    }
                for (i = 0 ; i < qtdeJogadores ; i++){
                    document.getElementById("history").innerHTML="Nome: " + chaves[i] + " | " + "Erros: " + valores[i];
                }
            }