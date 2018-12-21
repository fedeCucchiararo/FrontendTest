# Marfeel Front-end Test

# Instructions

1. Launch the web application, for example with:

Unix:
```bash
$ python -m SimpleHTTPServer 1337
```

Windows:
```bash
$ python -m http.server 1337
```

2. Open the browser with http://localhost:1337/

# Author

Federico Gomez Cucchiararo https://github.com/fedeCucchiararo

# Notes for the reviewer:

1. This test allowed me to work with the JS DOM api. I've been learning since 3 months ago and I couldn't quite practice with this api since then. So this was new to me.

    After reading lots of documentation I was able to start but it took me the whole wednesday to understand how it works.

2.  Due to point 1. I decided to skip unit testing. It deserves full attention. You can visit https://github.com/fedeCucchiararo (e.g. Borgames Hub) to check how I implemented TDD in previous projects. I've worked in the past with **Jasmine**, **Mocha** and **Chai** assertion library.

3. Build System (browseriy, webpack, parcel..)

    I hace incipient knowledge about these bundlers. I would have used browserify, for example, to avoid using global variables (as with ***.services.js**). I understand it is not the right way to go but as I said, as an incipient developer my mind was focus on other aspects of the application. 

4. Keep in consideration browsers support

    Again, related to point 4, I could have used some library to transpile the code to ES5.

5. SASS

    I've used it in the past for some small projects/tasks during ny education at SkylabCoders. Not having used a pre-processor is also related to points 1. and 3. I will certainly use it for future projects.