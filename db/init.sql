DROP TABLE IF EXISTS recipes;  -- Usunięcie starej tabeli, jeśli istnieje

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL
);

INSERT INTO recipes (name, ingredients, instructions) VALUES
-- 🍝 Dania główne
('Spaghetti Carbonara', 
 '2 szt. jajka, 200g makaronu, 100g boczku, 50g parmezanu, sól, pieprz', 
 '1. Ugotuj makaron. 2. Smaż boczek na patelni. 3. Wymieszaj jajka z parmezanem. 4. Połącz wszystkie składniki i dopraw.'),

('Kurczak w sosie śmietanowym', 
 '2 filety z kurczaka, 200ml śmietany, 1 cebula, 2 ząbki czosnku, sól, pieprz', 
 '1. Pokrój kurczaka na kawałki i podsmaż na patelni. 2. Dodaj posiekaną cebulę i czosnek, smaż przez 5 minut. 3. Wlej śmietanę, gotuj przez 10 minut. 4. Dopraw solą i pieprzem.'),

('Lasagne', 
 '10 płatów makaronu lasagne, 500g mięsa mielonego, 1 puszka pomidorów, 1 cebula, 200g sera mozzarella, 1 łyżka oliwy, sól, pieprz', 
 '1. Podsmaż mięso mielone z cebulą. 2. Dodaj pomidory, gotuj 15 minut. 3. W naczyniu układaj warstwami makaron, mięso i ser. 4. Piecz w 180°C przez 30 minut.'),

-- 🥣 Zupy
('Zupa pomidorowa', 
 '1l bulionu, 1 puszka pomidorów, 100ml śmietany, 1 cebula, 1 łyżka oliwy, sól, pieprz', 
 '1. Podsmaż cebulę na oliwie. 2. Dodaj pomidory i gotuj 10 minut. 3. Wlej bulion i gotuj kolejne 10 minut. 4. Dodaj śmietanę i dopraw solą i pieprzem.'),

('Zupa krem z dyni', 
 '1kg dyni, 500ml bulionu, 100ml śmietany, 1 cebula, 2 ząbki czosnku, sól, pieprz', 
 '1. Podsmaż cebulę i czosnek na oliwie. 2. Dodaj pokrojoną dynię i bulion. 3. Gotuj 20 minut, aż dynia zmięknie. 4. Zblenduj zupę na krem i dodaj śmietanę.'),

-- 🍰 Desery
('Szarlotka', 
 '5 jabłek, 300g mąki, 200g masła, 100g cukru, 1 łyżeczka cynamonu, 1 jajko', 
 '1. Wymieszaj mąkę, masło, cukier i jajko, aby stworzyć ciasto. 2. Pokrój jabłka i wymieszaj z cynamonem. 3. Połowę ciasta rozwałkuj na spód formy, dodaj jabłka, przykryj resztą ciasta. 4. Piecz w 180°C przez 40 minut.'),

('Brownie', 
 '200g gorzkiej czekolady, 150g masła, 3 jajka, 150g cukru, 100g mąki', 
 '1. Rozpuść czekoladę i masło w kąpieli wodnej. 2. Ubij jajka z cukrem. 3. Wymieszaj wszystkie składniki i przelej do formy. 4. Piecz w 180°C przez 25 minut.'),

('Sernik', 
 '500g twarogu, 200g herbatników, 100g masła, 3 jajka, 150g cukru, 1 łyżeczka wanilii', 
 '1. Rozkrusz herbatniki i wymieszaj z masłem, wyłóż na spód formy. 2. Wymieszaj twaróg, jajka, cukier i wanilię. 3. Wylej masę serową na spód. 4. Piecz w 170°C przez 50 minut.'),

-- 🥪 Przekąski
('Kanapki z awokado', 
 '1 dojrzałe awokado, 2 kromki chleba, sól, pieprz, 1 łyżka oliwy', 
 '1. Rozgnieć awokado i wymieszaj z oliwą, solą i pieprzem. 2. Posmaruj chleb pastą awokado. 3. Możesz dodać jajko sadzone lub pomidory.'),

('Bruschetta', 
 '4 kromki bagietki, 2 pomidory, 1 ząbek czosnku, 1 łyżka oliwy, bazylia, sól, pieprz', 
 '1. Posiekaj pomidory i wymieszaj z oliwą, czosnkiem i bazylią. 2. Opiecz bagietkę w piekarniku. 3. Nałóż pomidory na bagietkę i dopraw solą oraz pieprzem.');
