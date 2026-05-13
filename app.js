const supabase = window.supabaseClient;

const jogos = [
  {
    rodada: "17ª Rodada",
    mandante: "Botafogo",
    visitante: "Mirassol",
    placar: "2 x 1"
  },
  {
    rodada: "18ª Rodada",
    mandante: "Flamengo",
    visitante: "Palmeiras",
    placar: "1 x 0"
  }
];

console.log("Supabase conectado:", supabase);
console.log("Jogos:", jogos);
