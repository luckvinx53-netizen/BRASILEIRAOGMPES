const SUPABASE_URL = "https://ewebwjenkeletgshhzvb.supabase.co";
const SUPABASE_KEY = "sb_publishable_EcuCNi9XnjNfhM2VYseGuw_mVaM0Iao";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function carregarDetalhes(){
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const area = document.getElementById("detalhesJogo");

  const { data: jogo, error } = await supabaseClient
    .from("jogos")
    .select("*")
    .eq("id", id)
    .single();

  if(error){
    area.innerHTML = "<p>Erro ao carregar detalhes do jogo.</p>";
    console.log(error);
    return;
  }

  area.innerHTML = `
    <div class="card">
      <h1>${jogo.time_casa} x ${jogo.time_fora}</h1>

      <div class="placar">
        ${jogo.placar_casa} x ${jogo.placar_fora}
      </div>

      <span class="status">${jogo.status}</span>

      <p>📍 <strong>Local:</strong> ${jogo.local || ""}</p>
      <p>📅 <strong>Data:</strong> ${jogo.data_jogo || ""}</p>
      <p>⏰ <strong>Horário:</strong> ${jogo.hora_jogo || ""}</p>
      <p>🏟️ <strong>Capacidade:</strong> ${jogo.capacidade || "Não informada"}</p>

      ${jogo.foto_estadio ? `<img src="${jogo.foto_estadio}" alt="Estádio">` : ""}
    </div>

    <div class="card">
      <h2>Gols</h2>
      <p><strong>${jogo.time_casa}:</strong><br>${jogo.gols_casa || "Nenhum gol informado"}</p>
      <p><strong>${jogo.time_fora}:</strong><br>${jogo.gols_fora || "Nenhum gol informado"}</p>
    </div>

    <div class="card">
      <h2>Estatísticas</h2>
      <p>${jogo.estatisticas || "Estatísticas ainda não informadas."}</p>
    </div>
  `;
}

carregarDetalhes();