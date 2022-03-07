Project E-Wallet
Made by:
Andreé Köhlner
Caisa Flodin
Asami Jönsson
Oscar Hederlig

Text follow in Swedish

Projektarbete - E-wallet
Beskrivning: Du ska skapa en applikation där användaren kan hantera olika betalkort. Användaren ska kunna ha upp till max 4 kort, och måste alltid minst ha ett kort i sin e-wallet. Tekniker du ska använda i denna app är följande:

Create-react-app
Inherited properties ( props )
State
Redux
De-structuring
Array methods (map, sort, etc.)
React Router
Life Cycle Hooks
API calls (VG)
Applikationen ska ha två routes (du får ändra namnet på dessa om du vill) :

/home
Högst upp ska du visa ett aktivt kort.
Om användaren har fler kort, ska dessa finnas listade under det aktiva kortet.
Det ska finnas en Add new card -knapp, som routar användaren vidare till /addcard.
Vid klick på kort i listan så ska den läggas som active card högst upp i vyn.
/addcard
Ett nytt kort ska kunna läggas till med följande information: Vendor, card number, cardholder, expire month, expire year, CCV. (Se bild nedan).
För kortutgivare ska du hårdkoda in minst tre alternativ man kan välja mellan. Den användaren väljer ska stå på kortet uppe till höger (t.ex. Mastercard, Visa, American Express etc. Eller om ni vill hitta på något roligare!).
Högst upp ska en förhandsvisning av kortet finnas, som uppdateras automatiskt när användare fyller i informationen.