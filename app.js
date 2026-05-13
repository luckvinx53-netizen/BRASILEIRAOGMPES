const supabase = window.supabaseClient || null;

async function carregarTimes() {
  const tabela = document.getElementById("classificacao-tabela");

  if (!tabela) return;

  if (!supabase) {
    tabela.innerHTML = "<tr><td colspan='6'>Supabase não conectado</td></tr>";
    return;
  }

  const { data, error } = await supabase
    .from("times")
    .select("*")
    .order("pontos", { ascending: false });

  if (error) {
    tabela.innerHTML = "<tr><td colspan='6'>Erro ao carregar times</td></tr>";
    console.log(error);
    return;
  }

  if (!data || data.length === 0) {
    tabela.innerHTML = "<tr><td colspan='6'>Nenhum time cadastrado</td></tr>";
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
        <td>${time.vitorias}</td>
        <td>${time.saldo}</td>
      </tr>
    `;
  });
}

document.addEventListener("DOMContentLoaded", carregarTimes);