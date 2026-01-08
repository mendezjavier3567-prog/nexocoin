# Monetary Supply
# Supply Model

This document describes the monetary supply model of the Nexocoin protocol.

Nexocoin is designed as a native blockchain with a deterministic and transparent issuance mechanism enforced at the protocol level.

---

## Total Supply

The Nexocoin protocol defines a **maximum total supply of 100,000,000 NXC**.

This cap is enforced by consensus rules and cannot be exceeded.

---

## Issuance Model

Nexocoin follows a **block-based emission model**, where new coins are created as a reward for block production.

- Each valid block produces a fixed emission.
- Emission is deterministic and verifiable by any node.
- Rewards are applied directly at the state level.

---

## Block Reward

- **Base block reward:** 1 NXC per block
- Rewards are credited to the block producer according to consensus rules.
- The reward value is protocol-defined and cannot be modified without a consensus upgrade.

---

## Supply Growth

Supply increases linearly with block production until the maximum supply is reached.

Key properties:
- Predictable issuance
- No hidden inflation
- No discretionary minting

Once the maximum supply is reached, block rewards cease.

---

## State Accounting

Supply-related values are tracked in the global state:

- `TotalMined`: total number of NXC issued
- `TotalSupply`: maximum allowed supply
- `Height`: current block height

All values are publicly auditable.

---

## Transparency

The supply model is fully transparent and enforced by code.

Any node can independently verify:
- Current circulating supply
- Remaining issuance
- Block reward correctness

---

## Protocol Integrity

There are:
- No external minting mechanisms
- No off-chain issuance
- No manual supply adjustments

All supply changes occur exclusively through block validation.

---

## Summary

- Fixed maximum supply
- Deterministic issuance
- Fully on-chain accounting
- Consensus-enforced monetary policy

The Nexocoin supply model prioritizes simplicity, predictability, and verifiability.
