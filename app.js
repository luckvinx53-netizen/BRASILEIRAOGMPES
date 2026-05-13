
const supabase = window.supabaseClient || null;

let classificacaoPadrao = [
  {nome:"Palmeiras", pontos:29, jogos:16, vitorias:8, empates:5, derrotas:3, saldo:9},
  {nome:"Vitória", pontos:28, jogos:16, vitorias:8, empates:4, derrotas:4, saldo:4},
  {nome:"Corinthians", pontos:26, jogos:16, vitorias:6, empates:8, derrotas:2, saldo:6},
  {nome:"Internacional", pontos:25, jogos:16, vitorias:7, empates:4, derrotas:5, saldo:-1}
];

const jogos = [
  {rodada:"17ª Rodada", data:"12 de mai • 19:00", mandante:"Botafogo", visitante:"Mirassol", placar:"2 x 1", local:"Nilton Santos"},
  {rodada:"17ª Rodada", data:"12 de mai • 19:00", mandante:"Athletico-PR", visitante:"Remo", placar:"1 x 1", local:"Arena da Baixada"},
  {rodada:"18ª Rodada", data:"6 de jun • 19:30", mandante:"Athletico-PR", visitante:"Flamengo", placar:"0 x 0", local:"Arena da Baixada"},
  {rodada:"18ª Rodada", data:"7 de jun • 17:00", mandante:"Botafogo", visitante:"Santos", placar:"0 x 0", local:"Mané Garrincha"}
];

function sigla(nome){
  return String(nome || "").split(" ").map(p => p[0]).join("").slice(0,2).toUpperCase();
}

async function buscarTimes(){
  if(!supabase) return classificacaoPadrao;

  try{
    const { data, error } = await supabase
      .from("times")
      .select("*")
      .order("pontos", { ascending:false });

    if(error || !data || data.length === 0){
      console.log("Usando dados padrão:", error);
      return classificacaoPadrao;
    }

    return data;
  }catch(e){
    console.log("Erro Supabase:", e);
    return classificacaoPadrao;
  }
}

function renderClassificacao(times){
  const tabela = document.getElementById("classificacao-tabela");
  if(!tabela) return;

  tabela.innerHTML = times.map((time, index) => `
    <tr>
      <td><span class="position">${index + 1}</span></td>
      <td>
        <div class="team-row">
          <span class="shield">${sigla(time.nome)}</span>
          <b>${time.nome}</b>
        </div>
      </td>
      <td><b>${time.pontos ?? 0}</b></td>
      <td>${time.jogos ?? 0}</td>
      <td>${time.vitorias ?? 0}</td>
      <td>${time.empates ?? 0}</td>
      <td>${time.derrotas ?? 0}</td>
      <td>${(time.saldo ?? 0) > 0 ? "+" + time.saldo : (time.saldo ?? 0)}</td>
    </tr>
  `).join("");
}

function renderTimes(times){
  const lista = document.getElementById("times-lista");
  if(!lista) return;

  lista.innerHTML = times.map(time => `
    <div class="card">
      <div class="team-row">
        <span class="shield">${sigla(time.nome)}</span>
        <div>
          <b>${time.nome}</b>
          <div class="muted">${time.pontos ?? 0} pontos • ${time.jogos ?? 0} jogos</div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderJogos(){
  const lista = document.getElementById("jogos-lista");
  if(!lista) return;

  lista.innerHTML = jogos.map(jogo => `
    <div class="card">
      <div class="match">
        <div class="team">
          <b>${jogo.mandante}</b>
          <small>${jogo.rodada}</small>
        </div>

        <div class="score">${jogo.placar}</div>

        <div class="team right">
          <b>${jogo.visitante}</b>
          <small>${jogo.data}</small>
        </div>
      </div>

      <p class="muted">📍 ${jogo.local}</p>
    </div>
  `).join("");
}

function admin(){
  const form = document.getElementById("form-resultado");
  const output = document.getElementById("admin-output");

  if(!form || !output) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const dados = new FormData(form);

    output.innerHTML = `
      <div class="notice">
        ✅ Resultado salvo em modo visual:<br>
        <b>${dados.get("mandante")} ${dados.get("gols_mandante")} x ${dados.get("gols_visitante")} ${dados.get("visitante")}</b>
      </div>
    `;

    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const times = await buscarTimes();

  renderClassificacao(times);
  renderTimes(times);
  renderJogos();
  admin();
});
