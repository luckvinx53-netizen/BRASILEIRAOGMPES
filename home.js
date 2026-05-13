// home.js

const SUPABASE_URL =
"https://ewebwjenkeletgshhzvb.supabase.co";

const SUPABASE_KEY =
"sb_publishable_EcuCNi9XnjNfhM2VYseGuw_mVaM0Iao";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function carregarHome(){

  const { data: times } = await supabaseClient
    .from("times")
    .select("*")
    .order("pontos", { ascending:false });

  const { data: jogos } = await supabaseClient
    .from("jogos")
    .select("*")
    .order("rodada", { ascending:true });

  document.getElementById("totalTimes")
    .innerText = times.length;

  const lider = times[0];

  document.getElementById("pontosLider")
    .innerText = lider ? lider.pontos : 0;

  const maiorRodada = jogos.length > 0
    ? Math.max(...jogos.map(j => Number(j.rodada)))
    : 0;

  document.getElementById("totalRodadas")
    .innerText = maiorRodada;

  document.getElementById("rodadaAtual")
    .innerText = maiorRodada + "ª";

  const proximosJogos = jogos
    .filter(j => j.status !== "Encerrado")
    .slice(0,3);

  const areaJogos =
    document.getElementById("proximosJogos");

  areaJogos.innerHTML = "";

  proximosJogos.forEach(jogo => {

    areaJogos.innerHTML += `
      <div class="jogo-card">

        <h3>
          ${jogo.time_casa}
          x
          ${jogo.time_fora}
        </h3>

        <p>
          ${jogo.data_jogo || ""}
          •
          ${jogo.hora_jogo || ""}
        </p>

        <p>${jogo.local || ""}</p>

        <span>${jogo.status}</span>

      </div>
    `;

  });

  const tabela =
    document.getElementById("classificacaoHome");

  tabela.innerHTML = "";

  times.slice(0,5).forEach((time,index)=>{

    tabela.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${time.nome}</td>
        <td>${time.pontos}</td>
        <td>${time.jogos}</td>
        <td>${time.vitorias}</td>
        <td>${time.empates}</td>
        <td>${time.derrotas}</td>
        <td>${time.saldo}</td>
      </tr>
    `;

  });

}

carregarHome();