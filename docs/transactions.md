# Transactions

This document describes the transaction model of the Nexocoin protocol.
Transactions are the mechanism by which value is transferred and state changes are recorded on the blockchain.

---

## Purpose of Transactions

Transactions in Nexocoin allow participants to:

- Transfer NXC between addresses  
- Update the global protocol state  
- Interact with protocol-level features  
- Record value movements in an immutable ledger  

All transactions are processed, validated, and enforced by consensus rules.

---

## Transaction Structure

A Nexocoin transaction consists of the following components:

- Sender address  
- Recipient address  
- Amount  
- Fee (gas)  
- Optional metadata  

Each transaction is uniquely identifiable and immutable once confirmed.

---

## Transaction Validation

Before a transaction is accepted into a block, it must satisfy all validation rules:

- The sender address must be valid  
- The sender must have sufficient balance  
- The transaction amount must be positive and within protocol limits  
- The required fee must be provided  
- The transaction must respect protocol-defined constraints  

Transactions that fail any validation rule are rejected by all nodes.

---

## State Transitions

Transactions modify the global state in a deterministic manner:

- The sender balance is reduced  
- The recipient balance is increased  
- Fees are applied according to protocol rules  
- The resulting state update is committed atomically  

All nodes independently compute the same state transition.

---

## Atomicity and Determinism

Nexocoin transactions are:

- Atomic: fully applied or fully rejected  
- Deterministic: identical inputs always produce identical outputs  
- Final: confirmed transactions cannot be reverted  

These properties guarantee global consistency across the network.

---

## Fees and Execution Cost

Each transaction requires a protocol-defined fee:

- Prevents network abuse  
- Provides execution cost accounting  
- Ensures sustainable block production  

Fee rules are enforced by consensus and cannot be bypassed or modified without a protocol upgrade.

---

## Transaction Ordering

Transactions included in a block are executed sequentially:

- Ordering is explicitly defined at block creation  
- Each transaction observes the updated state from previous ones  
- Conflicts are resolved deterministically  

This guarantees predictable execution results for all nodes.

---

## Transaction Confirmation

A transaction is considered confirmed when:

- It is included in a valid block  
- The block is accepted into the canonical chain  
- The resulting state transition is finalized  

Confirmation provides strong guarantees of permanence and immutability.

---

## Transparency and Auditability

All transactions are:

- Publicly visible on-chain  
- Fully auditable by any participant  
- Cryptographically verifiable  

Anyone can independently verify transaction validity and history.

---

## Summary

- Transactions move value and update protocol state  
- Validation rules are strict and deterministic  
- Fees protect network integrity  
- All confirmed transactions are immutable and auditable  

Transactions are a fundamental building block of the Nexocoin protocol.
