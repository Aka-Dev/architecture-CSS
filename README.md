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
    - Base: 
    - Layout: 
    - Modules: 
    - States: 

##Javascript
J'ai utilisé requireJs, pour charger les fichiers et les modules Javascript, l'utilisation d'un modular script loader nous permettra 
d'améliorer la vitesse et la qualité de notre code. 

Organisation des fichiers:
JS:
    - modules: contient nos modules.
    - vendor: contient les dépendances.
    - main.js: contient l'appel des modules.

##Gulp (Automatisation des tâches)
Pour l'automatisation des tâches j'ai utilisé Gulp.
Le Starter Kit contient les plugins Gulp suivant:
    - gulp-sass-lint: Checking the Syntax of SCSS.
    - gulp-sass: Compile Sass.
    - gulp-sourcemaps: Generating sourcemaps for easier debugging.
    - gulp-clean-css: Minify css.
    - gulp.spritesmith: Generateing Sprite image.
    - gulp-imagemin: Minify PNG, JPEG, GIF and SVG images.
    - psi: PageSpeed Insights.