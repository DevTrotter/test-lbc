# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

Your job is to create the interface to consult those messages.
The interface needs to work on both desktop & mobile devices.

In addition to your code, a README explaining your thought process and your choices would be appreciated.

### API :

For a better readibility, you can view it on [https://leboncoin.tech/frontend-technical-test/](https://leboncoin.tech/frontend-technical-test/).

# TECHNIQUE :

j’ai décidé de sélectionné redux comme state manager pour des raisons de performances.

j’ai également installé stylet-component afin de gérer de manière correcte et optimisé le Css j’ai également fait une config avec styled-components pour qu’il soit pris en compte (problème graphique Next App).

J’ai fait un suivi des erreurs et j’ai étudié le comportement de l’application afin qu'elle ne tombe pas dans une erreur qui mettrait en péril l’expérience utilisateur.

J’ai réduit au maximum les requête api afin d'éviter les appels inutiles.

Le responsive a été réalisé en mobile first.

# UI / UX :

j’ai également fait une maquette figma avec une version desktop une peu différente car j’ai manqué de temps.

La maquette est disponible ici : [https://www.figma.com/file/pbD8vA0GQ4HqRmjG3Dzbny/lbc-test-conv?node-id=0%3A1](https://www.figma.com/file/pbD8vA0GQ4HqRmjG3Dzbny/lbc-test-conv?node-id=0%3A1)

# Organisation:

pour éviter de perdre trop de temps j’ai géré les différentes étapes, j’ai créé une méthode type kanban rapidement sur trello.

# STACK :

next, styled-component, react-redux, react-icon...

# INSTAlLATION & Démarage de l'app

installation des packages : `npm i`

démarer le front : `npm run dev` (port : 3000)

démarer le back : `npm run start-server` (port : 3005)
