import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/FrontEnd", "Accueil", "/FrontEnd/pages/home.html"),
    new Route("/FrontEnd/services", "services", "/FrontEnd/pages/services.html"),
    new Route("/FrontEnd/habitats", "habitats", "/FrontEnd/pages/habitats.html"),
    new Route("/FrontEnd/contact", "contact", "/FrontEnd/pages/contact.html"),];



//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";