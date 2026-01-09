// Fake blockchain data (placeholder)
const explorerData = {
  latestBlock: 128432,
  blockTime: "00:01",
  mempoolTx: 142,
  difficulty: "1.25 MH",
  blocks: [
    { height: 128432, txs: 12, time: "1 min ago" },
    { height: 128431, txs: 9, time: "2 min ago" },
    { height: 128430, txs: 15, time: "3 min ago" },
    { height: 128429, txs: 8, time: "4 min ago" },
    { height: 128428, txs: 11, time: "5 min ago" }
  ]
};

// Populate stats
document.getElementById("latest-block").innerText = explorerData.latestBlock;
document.getElementById("block-time").innerText = explorerData.blockTime;
document.getElementById("mempool").innerText = explorerData.mempoolTx;
document.getElementById("difficulty").innerText = explorerData.difficulty;

// Populate blocks list
const blocksList = document.getElementById("blocks-list");

explorerData.blocks.forEach(block => {
  const li = document.createElement("li");
  li.innerText = `Block #${block.height} — ${block.txs} txs — ${block.time}`;
  blocksList.appendChild(li);
});
