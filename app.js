const SUPABASE_URL = "https://ewebwjenkeletgshhzvb.supabase.co";

const SUPABASE_KEY = "sb_publishable_EcuCNi9XnjNfhM2VYseGuw_mVaM0Iao";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function carregarTabela() {

  const tabela = document.getElementById("tabela");

  try {

    const { data, error } = await supabaseClient
      .from("times")
      .select("*")
      .order("pontos", { ascending: false });

    if (error) throw error;

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

  } catch (err) {

    console.log(err);

    tabela.innerHTML = `
      <tr>
        <td colspan="4">
          Erro ao carregar
        </td>
      </tr>
    `;
  }

}

carregarTabela();