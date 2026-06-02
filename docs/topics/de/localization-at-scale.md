---
title: "Lokalisierung im großen Maßstab"
summary: "Warum Lokalisierung im großen Maßstab eine Frage von Engineering, Barrierefreiheit, Governance und Veröffentlichung ist und nicht nur ein letzter Übersetzungsschritt."
topic_category: localization-at-scale
topics:
  - localization
  - continuous-localization
  - governance
related:
  blog:
    - localization-at-scale
  learning:
    - how-to-build-a-localization-pipeline
  wiki:
    - localization-at-scale
---

# Lokalisierung im großen Maßstab

Lokalisierung im großen Maßstab ist die Disziplin, mehrsprachige Inhalte nachhaltig zu machen, wenn die Zahl der Seiten, Sprachen, Mitwirkenden und Release-Zyklen über ad hoc manuelle Koordination hinauswächst. Es geht nicht nur um das Übersetzen von Strings. Es geht darum, Drift zwischen Quellinhalten, generiertem Output, Designentscheidungen, Terminologie, Validierung und Veröffentlichungs-Workflows zu kontrollieren.

Kleine Projekte können Lokalisierung manchmal informell umsetzen. Eine Person schreibt Inhalte, eine andere übersetzt sie, und der Output wird manuell geprüft. In größerem Maßstab wird dieses Modell fragil. Änderungen passieren zu häufig, und die Qualität schwankt zu stark, wenn der Prozess selbst nicht strukturiert ist.

Deshalb wird Lokalisierung im großen Maßstab meist als Systemproblem behandelt. Teams brauchen Quellkonventionen, Terminologiesteuerung, Übersetzungs-Workflows, Paritätsprüfungen, Veröffentlichungsregeln und Validierung in CI. Sie müssen auch entscheiden, welche Inhaltstypen vollständige Abdeckung brauchen und welche einen gestuften Rollout tolerieren können. Der Learning-Guide zum [Aufbau einer Lokalisierungs-Pipeline](/docs/learning/de/how-to-build-a-localization-pipeline.html) erklärt die praktische Workflow-Ebene.

In Let Books ist Lokalisierung im großen Maßstab Teil der Projektidentität, weil das Produkt ausdrücklich mehrsprachig angelegt ist, sowohl in der UI als auch in seinen Ambitionen für die Wissensbasis. Das betrifft nicht nur künftige Anwendungs-Strings, sondern auch Dokumentation, Diagramme, Druckausgabe und sprachübergreifende Navigation. Die Referenzseite im Wiki [Lokalisierung im großen Maßstab](/docs/wiki/de/localization-at-scale.html) beschreibt die dauerhaften Prinzipien, während der gleichnamige Blogartikel einen narrativen Rahmen liefert.

Die allgemeine Lehre lautet, dass mehrsprachige Arbeit verlässlicher wird, wenn sie wie Infrastruktur behandelt wird: bewusst entworfen, kontinuierlich validiert und als Teil des Produkts gepflegt statt erst im Nachhinein.
