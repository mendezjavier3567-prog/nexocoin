// Nexocoin Explorer v0.1
// Status-only explorer (protocol v0.1 frozen)

const API_BASE = "http://127.0.0.1:8080";

async function loadStatus() {
  try {
    const res = await fetch(`${API_BASE}/status`);

    if (!res.ok) {
      throw new Error("API not reachable");
    }

    const data = await res.json();

    document.getElementById("node-status").textContent = "ONLINE";
    document.getElementById("node-status").classList.add("online");

    document.getElementById("block-height").textContent =
      data.height.toLocaleString();

    document.getElementById("total-mined").textContent =
      data.totalMined.toLocaleString() + " NXC";

    document.getElementById("total-supply").textContent =
      data.totalSupply.toLocaleString() + " NXC";

    document.getElementById("active-wallet").textContent =
      data.activeWallet;

  } catch (err) {
    console.error(err);

    document.getElementById("node-status").textContent = "OFFLINE";
    document.getElementById("node-status").classList.remove("online");
    document.getElementById("node-status").classList.add("offline");
  }
}

// Auto refresh every 5 seconds
loadStatus();
setInterval(loadStatus, 5000);
