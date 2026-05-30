---
title: "Sledljivost Dokumentacije"
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Sledljivost Dokumentacije

## Povzetek

Sledljivost dokumentacije je praksa, pri kateri je pomembne trditve, opise potekov dela in pričakovanja glede kakovosti mogoče slediti nazaj do stabilnih dokazov v repozitoriju in eksplicitnih odločitev.

## Zakaj je pomembna

Brez sledljivosti dokumentaciji težko zaupamo.

Bralci ne morejo zanesljivo vedeti:

- ali je trditev aktualna
- ali je vedenje namerno
- ali trditev izhaja iz produktne specifikacije ali implementacijskega naključja
- ali javni članek odraža odobreno produktno smer

## Kako je sledljivost videti

Dobra sledljivost običajno vključuje:

- znano verigo avtoritete
- stabilne reference na ustrezne dokumente ali specifikacije
- jasno ločitev med trenutnim stanjem in prihodnjimi načrti
- eksplicitno razlikovanje med kanonično dokumentacijo in statusom implementacije
- opombe o virih ali zemljevidih dokazov za pomembnejše javne članke

## Preprost model avtoritete

Uporaben model je:

1. produktna specifikacija
2. implementacijska navodila
3. dokumentacija trenutnega stanja
4. demo ali vedenje implementacije
5. testi in rezultati validacije

## Kontekst Let Books

Repozitorij Let Books že podpira sledljivost prek:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/README.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- zemljevidov virov v `docs/sources/`
