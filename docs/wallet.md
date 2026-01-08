# Wallets

This document describes how wallets work in the Nexocoin protocol.

Wallets are the primary interface between users and the Nexocoin network.

---

## Wallet Definition

A Nexocoin wallet is defined by:

- A cryptographic key pair
- A public address
- A private signing key

Wallets do not exist as accounts on the network.  
They are cryptographic identities.

---

## Addresses

A Nexocoin address:

- Is derived from a public key
- Is represented as a hexadecimal string
- Identifies the recipient or sender of transactions

Example format:
Addresses contain no embedded balance data.

---

## Private Keys

Private keys:

- Are used to sign transactions
- Must remain secret
- Are never transmitted over the network

Loss of a private key results in permanent loss of access to funds.

---

## Public Keys

Public keys:

- Are derived from private keys
- Are used to verify transaction signatures
- Can be shared safely

Nodes validate signatures using public keys.

---

## Wallet Creation

Wallets can be created:

- Offline
- Deterministically
- Without network interaction

No registration or approval is required.

---

## Balance Model

Balances are:

- Stored at protocol level
- Associated with addresses
- Updated by validated transactions

Wallet software reads balances from the blockchain state.

---

## Transaction Signing

To create a transaction:

1. Inputs and outputs are defined
2. The transaction is signed with the private key
3. The signed transaction is broadcast to the network

Unsigned transactions are rejected.

---

## Wallet Types

Nexocoin supports multiple wallet types:

- CLI wallets
- Desktop wallets
- Mobile wallets
- Hardware wallets
- Programmatic wallets (SDK)

All wallet types follow the same protocol rules.

---

## CLI Wallet Interface

The Nexocoin CLI allows:

- Balance inspection
- Transaction creation
- Transaction broadcasting

CLI tools interact directly with the node.

---

## Security Considerations

Wallet security depends on:

- Private key protection
- Secure backups
- Offline key storage
- User operational discipline

The protocol does not store or recover keys.

---

## Future Wallet Features

Planned wallet features include:

- Multi-signature wallets
- Hardware wallet integration
- Smart contract interaction
- Delegated permissions

All future features remain backward-compatible.

---

## Summary

- Wallets are cryptographic identities
- Private keys control funds
- The network enforces all rules
- Wallets do not require registration
- Users remain fully sovereign

Wallets are a fundamental component of the Nexocoin ecosystem.
