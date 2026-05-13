
const jogos = [
  {rodada:"17ª Rodada", data:"12 de mai • 19:00", mandante:"Botafogo", visitante:"Mirassol", placar:"2 x 1", local:"Nilton Santos"},
  {rodada:"17ª Rodada", data:"12 de mai • 19:00", mandante:"Athletico-PR", visitante:"Remo", placar:"1 x 1", local:"Arena da Baixada"},
  {rodada:"17ª Rodada", data:"12 de mai • 19:30", mandante:"RB Bragantino", visitante:"Coritiba", placar:"0 x 1", local:"Cícero de Souza Marques"},
  {rodada:"18ª Rodada", data:"6 de jun • 19:30", mandante:"Athletico-PR", visitante:"Flamengo", placar:"0 x 0", local:"Arena da Baixada"},
  {rodada:"18ª Rodada", data:"7 de jun • 16:30", mandante:"Coritiba", visitante:"RB Bragantino", placar:"0 x 0", local:"Arena Couto Pereira"},
  {rodada:"18ª Rodada", data:"7 de jun • 17:00", mandante:"Botafogo", visitante:"Santos", placar:"0 x 0", local:"Mané Garrincha"},
  {rodada:"18ª Rodada", data:"7 de jun • 19:30", mandante:"Atlético-MG", visitante:"Fluminense", placar:"0 x 0", local:"Arena MRV"},
  {rodada:"19ª Rodada", data:"11 de mai • 19:30", mandante:"Coritiba", visitante:"Atlético-MG", placar:"1 x 0", local:"Arena Condá"},
  {rodada:"19ª Rodada", data:"11 de mai • 19:30", mandante:"Vitória", visitante:"Botafogo", placar:"3 x 2", local:"Barradão"},
  {rodada:"19ª Rodada", data:"11 de mai • 20:00", mandante:"Coritiba", visitante:"Cruzeiro", placar:"2 x 0", local:"Couto Pereira"}
];

const classificacao = [
  {pos:1,time:"Palmeiras",pts:29,j:16,v:8,e:5,d:3,gp:20,gc:11,sg:9},
  {pos:2,time:"Vitória",pts:28,j:16,v:8,e:4,d:4,gp:15,gc:11,sg:4},
  {pos:3,time:"Corinthians",pts:26,j:16,v:6,e:8,d:2,gp:14,gc:8,sg:6},
  {pos:4,time:"Internacional",pts:25,j:16,v:7,e:4,d:5,gp:11,gc:12,sg:-1},
  {pos:5,time:"Chapecoense",pts:24,j:16,v:7,e:3,d:6,gp:20,gc:20,sg:0},
  {pos:6,time:"Coritiba",pts:23,j:16,v:6,e:5,d:5,gp:11,gc:11,sg:0},
  {pos:7,time:"Remo",pts:23,j:16,v:4,e:11,d:1,gp:11,gc:8,sg:3},
  {pos:8,time:"Fluminense",pts:22,j:16,v:6,e:4,d:6,gp:10,gc:16,sg:-6},
  {pos:9,time:"Flamengo",pts:22,j:16,v:5,e:7,d:4,gp:15,gc:10,sg:5},
  {pos:10,time:"Botafogo",pts:21,j:16,v:5,e:6,d:5,gp:15,gc:15,sg:0},
  {pos:11,time:"Bahia",pts:20,j:16,v:5,e:5,d:6,gp:16,gc:14,sg:2},
  {pos:12,time:"Vasco",pts:20,j:16,v:4,e:8,d:4,gp:12,gc:7,sg:5},
  {pos:13,time:"Athletico-PR",pts:20,j:16,v:4,e:8,d:4,gp:13,gc:13,sg:0},
  {pos:14,time:"Mirassol",pts:18,j:16,v:4,e:6,d:6,gp:18,gc:18,sg:0},
  {pos:15,time:"Cruzeiro",pts:18,j:16,v:4,e:6,d:6,gp:12,gc:12,sg:0},
  {pos:16,time:"Atlético-MG",pts:18,j:16,v:4,e:6,d:6,gp:10,gc:10,sg:0},
  {pos:17,time:"Grêmio",pts:18,j:16,v:4,e:6,d:6,gp:14,gc:14,sg:0},
  {pos:18,time:"RB Bragantino",pts:17,j:16,v:4,e:5,d:7,gp:11,gc:12,sg:-1},
  {pos:19,time:"São Paulo",pts:16,j:16,v:4,e:4,d:8,gp:11,gc:13,sg:-2},
  {pos:20,time:"Santos",pts:14,j:16,v:3,e:5,d:8,gp:9,gc:14,sg:-5}
];

const times = [
  {nome:"Palmeiras", tecnico:"—", jogadores:0},
  {nome:"Vitória", tecnico:"—", jogadores:0},
  {nome:"Corinthians", tecnico:"—", jogadores:0},
  {nome:"Internacional", tecnico:"—", jogadores:0},
  {nome:"Chapecoense", tecnico:"—", jogadores:0},
  {nome:"Coritiba", tecnico:"—", jogadores:0},
  {nome:"Remo", tecnico:"—", jogadores:0},
  {nome:"Fluminense", tecnico:"—", jogadores:0},
  {nome:"Flamengo", tecnico:"—", jogadores:0},
  {nome:"Botafogo", tecnico:"—", jogadores:0},
  {nome:"Bahia", tecnico:"—", jogadores:0},
  {nome:"Vasco", tecnico:"—", jogadores:0},
  {nome:"Athletico-PR", tecnico:"—", jogadores:0},
  {nome:"Mirassol", tecnico:"—", jogadores:0},
  {nome:"Cruzeiro", tecnico:"—", jogadores:0},
  {nome:"Atlético-MG", tecnico:"—", jogadores:0},
  {nome:"Grêmio", tecnico:"—", jogadores:0},
  {nome:"RB Bragantino", tecnico:"—", jogadores:0},
  {nome:"São Paulo", tecnico:"—", jogadores:0},
  {nome:"Santos", tecnico:"—", jogadores:0}
];

const artilheiros = [
  {nome:"Dados não informados", time:"Brasileirão Betano", gols:0}
];

function shield(name){
  return name.split(" ").map(p=>p[0]).join("").slice(0,2).toUpperCase();
}

function renderJogos(limit=null){
  const el = document.querySelector("#jogos-lista");
  if(!el) return;
  const lista = limit ? jogos.slice(0, limit) : jogos;
  el.innerHTML = lista.map(j => `
    <div class="card">
      <div class="match">
        <div class="team">
          <b>${j.mandante}</b>
          <small>${j.rodada}</small>
        </div>
        <div class="score">${j.placar}</div>
        <div class="team right">
          <b>${j.visitante}</b>
          <small>${j.data}</small>
        </div>
      </div>
      <p class="muted" style="margin:12px 0 0">📍 ${j.local}</p>
    </div>
  `).join("");
}

function renderClassificacao(limit=null){
  const el = document.querySelector("#classificacao-tabela");
  if(!el) return;
  const lista = limit ? classificacao.slice(0, limit) : classificacao;
  el.innerHTML = lista.map(t => `
    <tr>
      <td><span class="position">${t.pos}</span></td>
      <td>
        <div class="team-row">
          <span class="shield">${shield(t.time)}</span>
          <b>${t.time}</b>
        </div>
      </td>
      <td><b>${t.pts}</b></td>
      <td>${t.j}</td>
      <td>${t.v}</td>
      <td>${t.e}</td>
      <td>${t.d}</td>
      <td>${t.sg > 0 ? "+" + t.sg : t.sg}</td>
    </tr>
  `).join("");
}

function renderTimes(){
  const el = document.querySelector("#times-lista");
  if(!el) return;
  el.innerHTML = times.map(t => `
    <div class="card">
      <div class="team-row">
        <span class="shield">${shield(t.nome)}</span>
        <div>
          <b>${t.nome}</b>
          <div class="muted">Brasileirão Betano 2026</div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderArtilharia(){
  const el = document.querySelector("#artilharia-lista");
  if(!el) return;
  el.innerHTML = artilheiros.map((p, i) => `
    <div class="card player">
      <div class="player-info">
        <span class="avatar">${i+1}</span>
        <div>
          <b>${p.nome}</b>
          <div class="muted">${p.time}</div>
        </div>
      </div>
      <span class="goals">${p.gols} gols</span>
    </div>
  `).join("");
}

function simularAdmin(){
  const form = document.querySelector("#form-resultado");
  const output = document.querySelector("#admin-output");
  if(!form || !output) return;
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const dados = new FormData(form);
    output.innerHTML = `
      <div class="notice">
        ✅ Resultado salvo no modelo estático:<br>
        <b>${dados.get("mandante")} ${dados.get("gols_mandante")} x ${dados.get("gols_visitante")} ${dados.get("visitante")}</b><br>
        Em uma versão real, esse envio iria para sua API e atualizaria classificação, artilharia e resumo com IA.
      </div>
    `;
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderJogos(document.body.dataset.page === "home" ? 2 : null);
  renderClassificacao(document.body.dataset.page === "home" ? 3 : null);
  renderTimes();
  renderArtilharia();
  simularAdmin();
});
