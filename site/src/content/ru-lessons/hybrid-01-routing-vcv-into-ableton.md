---
title: "Урок 01 (Гибрид): Маршрутизация VCV Rack в Ableton"
summary: "Как настроить аудио-маршрутизацию между VCV Rack и Ableton через VCV Audio или виртуальный кабель."
track: "hybrid"
order: 1
---

## Теория

Есть два основных способа передать аудио из VCV Rack в Ableton Live:

1. **VCV Audio → физическая звуковая карта → Ableton**: Самый простой, но требует физического кабеля или интерфейса.
2. **Виртуальный кабель** (Loopback, VB-Cable, BlackHole): Программный маршрут без физического соединения.

## Рекомендуемая схема

```text
VCV Rack (VCV Audio модуль)
  -> VB-Cable / Blackhole Virtual Input
     -> Ableton Live (Audio Track с Input)
        -> Запись или FX
```

## Зачем это нужно

Как только вы можете писать VCV в Ableton:
- Ableton управляет темпом, аранжировкой и чистовой записью
- VCV занимается синтезом, модуляцией и генерацией
- Вы получаете лучшее из обоих миров

## Практика

1. Установите VB-Cable (Windows) или BlackHole (Mac)
2. В VCV Rack направьте выход через Audio модуль на Virtual Input
3. В Ableton добавьте Audio Track с входом VB-Cable/BlackHole
4. Включите мониторинг трека и запустите воспроизведение VCV
