// jogos.js

const SUPABASE_URL =
"https://ewebwjenkeletgshhzvb.supabase.co";

const SUPABASE_KEY =
"sb_publishable_EcuCNi9XnjNfhM2VYseGuw_mVaM0Iao";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function carregarJogos(){

  const lista =
    document.getElementById("listaJogos");

  const { data, error } = await supabaseClient
    .from("jogos")
    .select("*")
    .order("rodada", { ascending:true });

  if(error){
    console.log(error);

    lista.innerHTML = `
      <p>Erro ao carregar jogos.</p>
    `;

    return;
  }

  lista.innerHTML = "";

  const rodadas = {};

  data.forEach(jogo => {

    if(!rodadas[jogo.rodada]){
      rodadas[jogo.rodada] = [];
    }

    rodadas[jogo.rodada].push(jogo);

  });

  Object.keys(rodadas).forEach(numeroRodada => {

    lista.innerHTML += `
      <div class="rodada">

        <h2>
          ${numeroRodada}ª Rodada
        </h2>

        <div id="rodada-${numeroRodada}">
        </div>

      </div>
    `;

    const rodadaDiv =
      document.getElementById(`rodada-${numeroRodada}`);

    rodadas[numeroRodada].forEach(jogo => {

      rodadaDiv.innerHTML += `

        <div class="jogo-card">

          <div class="times">

            <span>
              ${jogo.time_casa}
            </span>

            <span class="placar">

              ${jogo.placar_casa}
              x
              ${jogo.placar_fora}

            </span>

            <span>
              ${jogo.time_fora}
            </span>

          </div>

          <div class="info">

            <div>
              📍 ${jogo.local || ""}
            </div>

            <div>
              📅 ${jogo.data_jogo || ""}
            </div>

            <div>
              ⏰ ${jogo.hora_jogo || ""}
            </div>

          </div>

          <span class="status">
            ${jogo.status}
          </span>

        </div>

      `;

    });

  });

}

carregarJogos();