# Nexocoin

Nexocoin is a native Layer-1 cryptocurrency with its own blockchain, consensus mechanism, and economic model.  
It is not a token and does not rely on any external network.

Nexocoin is a decentralized blockchain protocol designed to provide a secure, efficient, and transparent digital value system.

The project focuses on protocol simplicity, deterministic behavior, and long-term sustainability, following proven principles established by first-generation blockchain networks while introducing a modern and modular architecture.

---

## Smart Contracts Status

Nexocoin includes a native smart contract architecture composed of:

- NEXO VM (deterministic virtual machine)
- NEXO Script (native execution language)
- Integrated gas model denominated in NXC

The smart contract system has been fully designed and specified at protocol level.

At the current stage:
- Smart contracts are **defined and frozen at design level**
- The execution environment exists internally
- Gas rules and limits are established

Smart contract execution is **not yet enabled on mainnet**.

Activation is scheduled for a future protocol upgrade (v0.2.0),
after additional auditing, tooling, and ecosystem readiness.

This staged activation ensures long-term stability and security of the Nexocoin network.

---

## Software Status

Nexocoin is currently in a specification and early development phase.

This repository defines the protocol rules, architecture, and economic model.
It does not yet provide a production-ready node implementation or a public mainnet.

Future releases will introduce reference implementations, testnet deployments,
and network tooling.

---

## Overview

Nexocoin is a Layer-1 blockchain with its own native network, consensus rules, and execution model.  
It is not a token and does not rely on external blockchains.

Core design goals:

- Deterministic and transparent protocol rules
- Native consensus and mining process
- Simple and auditable economic model
- Clear separation between protocol, network, and documentation
- Long-term stability over short-term complexity

---

## Key Characteristics

- Independent blockchain network
- Native coin (NXC)
- On-chain state model
- Peer-to-peer network
- Public and verifiable ledger
- Protocol-first design

---

## Documentation

The complete technical documentation of the Nexocoin protocol is available in the `/docs` directory:

 **[Protocol Documentation](./docs/README.md)**

It includes detailed specifications of:
- Protocol architecture
- Consensus mechanism
- Mining and emissions
- Transactions
- Networking
- Security model
- Economic and supply model
- Fees and gas system
- Wallet structure

---

## Project Status

Nexocoin is an active blockchain project under continuous development and documentation.

This repository serves as the **official reference implementation and documentation source** for the Nexocoin protocol.

---

## Philosophy

Nexocoin follows a conservative and transparent approach:

- No hidden protocol rules
- No privileged protocol behavior
- No opaque mechanisms
- Everything defined by code and documentation

The protocol is designed to be understandable, auditable, and reproducible.

---

## License


This project is licensed under the Apache License 2.0.

See the LICENSE file for full license text.

---

## Disclaimer

This repository is provided for informational and technical purposes only.  
Nothing in this repository constitutes financial, legal, or investment advice.

This documentation describes the Nexocoin protocol as implemented.
It may be updated only if the protocol itself changes.

## Protocol Status

Nexocoin protocol version v0.1.0 is frozen.

This version defines:
- Consensus rules
- Monetary supply
- Mining logic
- Network behavior
- Transaction validation

No backward-incompatible changes will be introduced.
All future development will target v0.2.0 and above.
