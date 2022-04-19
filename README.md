# KodTest
Programmeringsövning

Överblick

Syftet med detta test är att täcka allmän praxis, design och struktur samt
algoritmiska lösningar för ett mindre projekt.
Du kan göra antaganden om inget specifikt anges, men se till att dokumentera dessa.
Slutresultatet bör vara ett kommandoradsbaserat program som kommer att utföra enkla simuleringar av ett rörligt föremål. 
Programmet kommer att läsa från stdin och skriva till stdout enligt en viss
protokoll (se nedan).

Uppgiften

Uppgiften är att acceptera en uppsättning kommandon och sedan simulera om ett objekt kan röra sig enligt dessa kommandon utan att falla från bordet den står på.
Tabellen kan ses som en matris där objektet kommer att ha en x- och y-position.
Origo är uppe till vänster.

Protokoll

Det är viktigt att följa protokollet korrekt så att din slutliga utdata enkelt kan testas och
verifierad.
Först läser din lösning en rubrik från stdin så här:
● Tabellens storlek som två heltal [bredd, höjd]
● Objektets startposition som två heltal [x, y]
Detta följs av en godtyckligt lång ström av kommandon av heltal.
När simuleringen är klar, matar ditt program ut svaret på stdout enligt nedan:
● Om simuleringen lyckades: Objektets slutposition som två heltal [x, y].
● Om simuleringen misslyckades (objektet faller från bordet): [-1, -1] ska returneras

Kommandon

Objektet har alltid en riktning (nord, öst, syd eller väst). 
En simulering startar alltid med riktning norrut. 
Nord betyder att om objektet sitter på [2, 4] och går framåt ett steg kommer objektet nu att stå på [2, 3].
Kommandona är:
0 = avsluta simuleringen och skriv ut resultat till standard
1 = gå ett steg framåt
2 = gå ett steg bakåt
3 = rotera medurs 90 grader (t.ex. nord till öst)
4 = rotera moturs 90 grader (t.ex. väster till söder)

Exempel

Om programmet får 4,4,2,2 som indata initieras tabellen till storlek 4 x 4 med objektet i
position [2, 2] med riktning norr (vid felaktig positionsdats sätts positionen till [0,0]).
Vid felaktig initiering returneras [-1,-1].

Sedan läses kommandona 1,4,1,3,2,3,2,4,1,0 från stdin och körs. 
Resultatet skulle då vara objektets slutposition, i detta fall [0, 1]

Starta node programmet med att skriva "node app.js 4,4,2,2" i konsolen

