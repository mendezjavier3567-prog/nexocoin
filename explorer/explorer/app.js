// Nexocoin Explorer v0.1.0
// Reads public data from Nexocoin RPC

const RPC_ENDPOINT = "http://localhost:8080"; 
// luego se cambiará a dominio público

async function fetchJSON(path) {
  const res = await fetch(`${RPC_ENDPOINT}${path}`);
  if (!res.ok) {
    throw new Error("RPC error");
  }
  return res.json();
}

// ----------------------------
// Network status
// ----------------------------
async function loadStatus() {
  try {
    const status = await fetchJSON("/status");

    document.getElementById("block-height").textContent =
      status.height ?? "—";

    document.getElementById("total-supply").textContent =
      status.totalSupply ?? "—";

    document.getElementById("peer-count").textContent =
      status.peers ?? "—";
  } catch (e) {
    console.error("Status error", e);
  }
}

// ----------------------------
// Latest blocks
// ----------------------------
async function loadBlocks() {
  try {
    const data = await fetchJSON("/blocks/latest");
    const tbody = document.getElementById("blocks-table-body");
    tbody.innerHTML = "";

    data.forEach(block => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${block.height}</td>
        <td class="mono">${block.hash.slice(0, 16)}…</td>
        <td>${new Date(block.timestamp * 1000).toLocaleString()}</td>
        <td>${block.txCount}</td>
      `;

      tbody.appendChild(tr);
    });
  } catch (e) {
    console.error("Blocks error", e);
  }
}

// ----------------------------
// Init
// ----------------------------
async function initExplorer() {
  await loadStatus();
  await loadBlocks();

  // refresh every 10 seconds
  setInterval(loadStatus, 10000);
  setInterval(loadBlocks, 15000);
}

document.addEventListener("DOMContentLoaded", initExplorer);
