const SUPABASE_URL = "https://ewebwjenkeletgshhzvb.supabase.co";
const SUPABASE_KEY = "sb_publishable_EcuCNi9XnjNfhM2VYseGuw_mVaM0Iao";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function carregarJogos(){
  const lista = document.getElementById("listaJogos");

  const { data, error } = await supabaseClient
    .from("jogos")
    .select("*")
    .order("rodada", { ascending:true });

  if(error){
    lista.innerHTML = "<p>Erro ao carregar jogos.</p>";
    console.log(error);
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

  Object.keys(rodadas).forEach(rodada => {
    lista.innerHTML += `
      <div class="rodada">
        <h2>${rodada}ª Rodada</h2>
        <div id="rodada-${rodada}"></div>
      </div>
    `;

    const div = document.getElementById(`rodada-${rodada}`);

    rodadas[rodada].forEach(jogo => {
      div.innerHTML += `
        <div class="jogo-card" onclick="abrirDetalhes('${jogo.id}')">
          <div class="times">
            <span>${jogo.time_casa}</span>
            <span class="placar">${jogo.placar_casa} x ${jogo.placar_fora}</span>
            <span>${jogo.time_fora}</span>
          </div>

          <div class="info">
            📍 ${jogo.local || ""}<br>
            📅 ${jogo.data_jogo || ""} • ${jogo.hora_jogo || ""}
          </div>

          <span class="status">${jogo.status}</span>
        </div>
      `;
    });
  });
}

function abrirDetalhes(id){
  window.location.href = `jogo.html?id=${id}`;
}

carregarJogos();