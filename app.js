const SUPABASE_URL = "https://ewebwjenkeletgshhzvb.supabase.co";

const SUPABASE_KEY = "sb_publishable_EcuCNi9XnjNfhM2VYseGuw_mVaM0Iao";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function carregarTabela() {

  const tabela = document.getElementById("tabela");

  const { data, error } = await supabase
    .from("times")
    .select("*")
    .order("pontos", { ascending: false });

  console.log(data);
  console.log(error);

  if(error){
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