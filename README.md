# FrontKick

> As Front Dev I want to start a new project from scratch, I can have an assets generator toolbox in order to improve fluidity of my workflow

Set of gulp tasks that allow to run a local server with sass compilation, js and images optimizations.
Perfect for small front projects.


## Usage

First you need to have node and npm on your machine to run this toolbox.

Then,

### Install gulp globally :

```
npm install -g gulp-cli
```

### Install project's devDependencies :

```
npm install
```

### Run gulp to start the project :
```
gulp watch
```

And **VOILA !**



## Available tasks

To optimize images located in src/img repertory, run :

```
gulp imagemin
```

To make a bower install, run :

```
gulp bower
```

To evaluate impact of a css optimization and compile sass, run :

```
gulp sass
```

To uglify js, run:

```
gulp uglify
```

