const SUPABASE_URL = "SUA_URL";
const SUPABASE_KEY = "SUA_CHAVE_ANON";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function carregarTabela() {
  const { data, error } = await supabase
    .from("times")
    .select("*")
    .order("pontos", { ascending: false });

  console.log(data);
  console.log(error);

  const tabela = document.getElementById("tabela");

  if (error) {
    tabela.innerHTML = `
      <tr>
        <td colspan="4">Erro ao carregar</td>
      </tr>
    `;
    return;
  }

  tabela.innerHTML = "";

  data.forEach((time, index) => {
    tabela.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${time.nome}</td>
        <td>${time.pontos}</td>
        <td>${time.jogos}</td>
      </tr>
    `;
  });
}

carregarTabela();