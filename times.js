const SUPABASE_URL = "https://ewebwjenkeletgshhzvb.supabase.co";

const SUPABASE_KEY = "sb_publishable_EcuCNi9XnjNfhM2VYseGuw_mVaM0Iao";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function carregarTimes() {
  const listaTimes = document.getElementById("listaTimes");

  try {
    const { data, error } = await supabaseClient
      .from("times")
      .select("*")
      .order("nome", { ascending: true });

    if (error) throw error;

    listaTimes.innerHTML = "";

    data.forEach((time) => {
      listaTimes.innerHTML += `
        <div class="time-card">
          <h2>${time.nome}</h2>
          <p>${time.pontos} pontos</p>
          <p>${time.jogos} jogos</p>
        </div>
      `;
    });

  } catch (err) {
    console.log(err);

    listaTimes.innerHTML = `
      <p>Erro ao carregar os times.</p>
    `;
  }
}

carregarTimes();