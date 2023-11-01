![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png "logotipo de The Bridge")

# :shinto_shrine: - Chauchat #

## Introducción ##

![](comic-funcionamiento.gif)

La ametralladora con mayor producción durante la Primera Guerra Mundial, la Chauchat fue la primera de este tipo de armas lo suficientemente ligera como para poder ser operada por un sólo soldado, incluso para disparar desde la cintura en marcha. Utilizada por los ejércitos franceses así como por los norteamericanos, estos últimos desvelaron una serie de fallos que la convirtieron también en probablemente la peor ametralladora de la historia.

![](funcionamiento.gif)

Sus principales problemas eran

1. El cargador estaba abierto por un lado y el lodo bloqueaba el mecanismo, haciéndola inservible.

2. Se calentaba demasiado, por lo que se recomendaba a los soldados disparar solamente en ráfagas cortas.

![](sonrisas-y-lagrimas.webp)

## Requisitos ##

- Variables

- Condicionales

- Bucles

- Operadores

- Arrays

- Funciones

## Iteraciones ##

Nuestro ejercicio, será hacer una Chauchat virtual, que reproduzca su comportamiento.

1. Por un lado habrás de crear una variable `cargador` donde habrá de guardar unos 7 **_"pium!"_**

2. El otro elemento será nuestra **chauchat**, que "hace cosas", y será donde pondremos el cargador para que haga cosas.

    `chauchat(cargador)`

    Cuando ejecutemos dicho código, veremos impresos todos los **_"pium!"_** del cargador, uno tras otro.

    En el caso de 3 **_"pium!"_** en el cargador, veremos en la consola:

    ```
    pium!
    pium!
    pium!
    ```

-------------------------------------------------------------------------------

_Zona premium:_

Representaremos los 2 principales problemas:

3. Al tener el cargador abierto, era posible que se bloquease si algo entraba, como una "ramita".

    Digamos que existe un 80% de probabilidad de que se quede "pillada":

    - Si se queda pillada, no habrá tiros y sólo mostrará un mensaje: _"Illo, me he quedao pillá!"_

    En este enlace sabrás cómo generar números aleatorios: [Math.random()](https://www.w3schools.com/js/js_random.asp)

4. Para evitar que se caliente y se bloquee, cada 3 disparos se imprimirá un espacio:

    ```
    pium!
    pium!
    pium!

    pium!
    pium!
    pium!

    pium!
    pium!
    pium!
    ```


![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png "logotipo de The Bridge")

# :shinto_shrine: - Chauchat #

## Introduction ##

![](comic-funcionamiento.gif)

The Chauchat was the most produced machine gun during World War I. It was the first of its kind to be light enough for a single soldier to operate, even firing from the hip while on the move. It was used by the French and American armies, but the latter uncovered a series of flaws that also made it probably the worst machine gun in history.


![](funcionamiento.gif)

Its main problems were:

1. The magazine was open on one side, and mud could block the mechanism, rendering it useless.

2. It overheated, so soldiers were advised to fire only in short bursts.

![](sonrisas-y-lagrimas.webp)

## Requisitos ##

- Variables

- Conditionals

- Loops

- Operators

- Arrays

- Functions

## Iterations ##

Our exercise will be to create a virtual Chauchat that replicates its behavior.

1. On one hand, you will need to create a variable magazine where you will store about 7 **_"pium!"_**

2. The other element will be our **chauchat**, which "does things," and it's where we'll put the magazine to make it do things.

    `chauchat(magazine)`

    When we execute this code, we will see all the **_"pium!"_** of the magazine printed one after the other.

    In case of 3 **_"pium!"_** in the magazine, we will see in console:

    ```
    pium!
    pium!
    pium!
    ```

-------------------------------------------------------------------------------

_Premium zone:_

We will represent the two main problems:

3. Since the magazine was open, it was possible for it to get stuck if something entered, like a "twig".

    Let´s say there is an 80% chance that it gets "stuck":

    - If it gets stuck, there will be no shots, and it will only display a message: _"Illo, me he quedao pillá!"_

    You can find out how to generate random numbers at this link: [Math.random()](https://www.w3schools.com/js/js_random.asp)

4. To prevent it from overheating and getting stuck, every 3 shots, it will print a space:

    ```
    pium!
    pium!
    pium!

    pium!
    pium!
    pium!

    pium!
    pium!
    pium!
    ```
