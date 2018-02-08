# [Candidati Liberi e Uguali 2018 - Web page](http://nomecognome.info)

[Possibile](http://possibile.com) mette a disposizione dei candidati delle elezioni Politiche 2018, una pagina web da usare come sito di riferimento del singolo candidato. 
Per usarla e installarla non sono necessaire particolari conoscenze informatiche.

## Cosa serve

Prima di iniziare a pensare a come installare il sito web, per il quale puoi sempre chiedere un aiuto a [ufficiotecnico@possibile.com](mailto:ufficiotecnico@possibile.com) procurati queste cose.
* Foto profilo
* Foto Cartolina/foto cover per i social
* Biografia Sintetica (due frasi)
* Biografia Estesa (lunga quanto vuoi, ma non esagerare!)
* "Perchè mi candido": scrivi in un breve testo i motivi della tua candidatura e cosa può significare
* Temi: quali sono i temi programmatici che ti stanno più a cuore e come intendi affrontarli. Non devi scrivere il programma politico completo, quello c'è già. Limitati ai 3/4 punti che senti più vicini a te

### Sul Gestionele [Viva](https://viva.possibile.com) devi avere:

* un Gruppo a cui far riferimento per i contatti e per gli eventi dell'agenda
* una raccolta fondi


## Scarica e installa sul server web


Per usare questo template, semplicemente scarica i file in questo Git

![how-to-download Preview](http://nomecognome.info/img/how-to-download.png)

Procedi alla personalizzazione dei parametri, come spiegato nel paragrafo successivo e carica il tutto nella cartella web del tuo dominio.
Se hai bisogno di aiuto a completare questi passaggi non esitare a contattare [ufficiotecnico@possibile.com](mailto:ufficiotecnico@possibile.com).
Consigliamo di acquistare un dominio su [Tophost](https://www.tophost.it) con il pacchetto [Topname](https://www.tophost.it/home/acquista-dominio-economico/) da 5,99€.

La pagina web non ha bisogno di un Data Base, si appoggia a **Viva** per recuperare le informazioni. Mentre i testi andranno modificati solo unatantum la prima volta. 

## Personalizzazione

### Imposta le definizioni

Nel file `js/define.js` devi importare le variabili pricipali, a partire dal **nome e cognome**, e tutte le altre cose che vedrai nel file. Alcuni valori sono impostati di default, come lo **slogan**, ma anche quello può essere personalizzato.
Sempre nel file `js/define.js` devi impostare i parametri di **Viva**.

### Aggiugi i file immagine

Nella cartella `img` devi aggiugere le tue immagini. Mantieni i nomi delle immagini di esempio. Semplicemente sovrascrivile.

**Attenzione** devono rispettare lo stesso formato e dimenisone:
* `profile.png`: foto profilo rotonda in .png con sfondo trasparente, dimensione 256x256 px
* `social_cover.png`: foto che sarà visualizzata sui social quando viene condiviso il sito. Dimensione 1200x630 px Formato .jpeg o .png
* le altre immagini sono predefinite per il sito

### Aggiugi i file

Nella cartella `/docs` trovi i file che andranno a popolare la pagina. Puoi usare i tag **html** per definire paragrafi, grassetti e corsivi. Ma ricordati che devono essere testi brevi.

Per il file `/docs/my_issues.html` bisogna prestare più attenzione e seguire lo schema dei tag necessari a creare le animazioni di copri/scopri che caratterizza la sezione **Perchè mi candido**. Almeno fino al un prossimo aggiornamento del sito. 

Per trasformare i file scritti con word o altri editor di testo in semplice Html consigliamo [word2cleanhtml.com](https://word2cleanhtml.com).


## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/BlackrockDigital/startbootstrap-freelancer/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](http://startbootstrap.com/template-overviews/freelancer/).

## Custom Builds

You can hire Start Bootstrap to create a custom build of any template, or create something from scratch using Bootstrap. For more information, visit the **[custom design services page](https://startbootstrap.com/bootstrap-design-services/)**.

## About

Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

* https://startbootstrap.com
* https://twitter.com/SBootstrap

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* http://davidmiller.io
* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2018 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/gh-pages/LICENSE) license.
