#Starter Kit Pyxicom 
Je me suis inspiré de plusieurs Starter Kit (Evernote, DBM, Fullsix et Google).<br>
Voici un Starter Kit de développement frontend conçu comme point de départ pour de nouveaux projets.<br>
le but de Starter Kit est d'être un point de départ pour les nouveaux projets et aussi de nous permettre de respecter les 4 objectifs 
suivant:<br>
    - Prédictable,<br>
    - Modulable - Réutilisable<br>
    - Maintenable<br>
    - Evolutif<br>
Tant côté CSS que Javascript.<br>

##Architecture CSS 
Structure SCSS: <br>
    - Base: <br>
    - Layout: <br>
    - Modules: <br>
    - States: <br>

##Javascript
J'ai utilisé requireJs, pour charger les fichiers et les modules Javascript, l'utilisation d'un modular script loader nous permettra 
d'améliorer la vitesse et la qualité de notre code. <br>

Organisation des fichiers:<br>
JS:<br>
    - modules: contient nos modules.<br>
    - vendor: contient les dépendances.<br>
    - main.js: contient l'appel des modules.<br>

##Gulp (Automatisation des tâches)
Pour l'automatisation des tâches j'ai utilisé Gulp.<br>
Le Starter Kit contient les plugins Gulp suivant:<br>
    - gulp-sass-lint: Checking the Syntax of SCSS.<br>
    - gulp-sass: Compile Sass.<br>
    - gulp-sourcemaps: Generating sourcemaps for easier debugging.<br>
    - gulp-clean-css: Minify css.<br>
    - gulp.spritesmith: Generateing Sprite image.<br>
    - gulp-imagemin: Minify PNG, JPEG, GIF and SVG images.<br>
    - psi: PageSpeed Insights.<br>