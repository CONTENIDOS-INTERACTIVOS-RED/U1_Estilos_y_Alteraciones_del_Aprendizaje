<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Dislexia'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p(data-aos="fade-left") La dislexia es un trastorno del aprendizaje que afecta la lectura, la escritura y el procesamiento del lenguaje. Se manifiesta en dificultades para reconocer palabras, comprender textos y recordar secuencias. Para ilustrar esta condición, se presenta el siguiente caso:


      .bg-full-width.bg-color-6.mb-5
        .px-4.px-md-5
          .row.justify-content-center
            .col-lg-8
              .py-4
                h4.my-2(data-aos="fade-right") Caso de estudio
                p.mb-1(data-aos="fade-right") #[strong Nombre:] Juan Pérez
                p.mb-1(data-aos="fade-right") #[strong Edad:] 8 años
                p.mb-2(data-aos="fade-right") Juanito es un niño de 8 años que asiste a la escuela primaria. Desde temprana edad, sus padres y maestros notaron que presentaba dificultades para aprender a leer y escribir, a pesar de tener una inteligencia y creatividad acordes con su edad. Tiene problemas para reconocer palabras escritas y suele confundir letras con formas similares, como "b" y "d" o "p" y "q". Su lectura es más lenta que la de sus compañeros y, con frecuencia, omite o cambia palabras al leer en voz alta.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/1.svg', alt='')
                
      .row.mb-5
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
          p(data-aos="fade-right").mb-4 En la escritura, invierte letras y números, presenta dificultades ortográficas y sus oraciones carecen de una estructura clara. Sus textos tienden a ser desorganizados y difíciles de comprender. Además, le resulta complicado recordar secuencias, como el alfabeto o los días de la semana, y seguir instrucciones que impliquen múltiples pasos.

          p(data-aos="fade-right").mb-4 Estas dificultades generan en Juanito sentimientos de frustración y vergüenza, especialmente cuando se compara con sus compañeros. Sin embargo, sus padres y maestros trabajan en conjunto para brindarle apoyo y fortalecer su confianza en el aprendizaje.
          
          .bg-color-white.shadow-soft.p-4.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 ¿Cómo funciona en el cerebro?
                    p.mb-0 Según el caso anterior, ¿qué crees que puede estar pasando con Juanito? Para responder a ello les invitamos a ver el siguiente vídeo y a tomar nota de lo que más les llame la atención.
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=bNhowO8msp4" target="_blank")
                      span Ver video
                      i.fas.fa-arrow-right

      p(data-aos="fade-right").mb-4 La dislexia es un trastorno del aprendizaje que afecta la adquisición de la lectura y la escritura sin que existan déficits sensoriales asociados. Se estima que entre el 5 y el 20% de la población la presenta, lo que representa uno de cada cuatro casos de fracaso escolar (Magaña & Ruiz-Lázaro, 2005).


      .row.mb-5
        .col-lg-8

          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Este trastorno implica dificultades en la transición del lenguaje oral, basado en imágenes y experiencias tridimensionales, al lenguaje escrito, representado por símbolos gráficos. Los individuos con dislexia leen lentamente, repiten palabras y omiten puntuaciones, lo que puede generar confusión entre grafemas con similitudes fonéticas o visuales.

          p(data-aos="fade-left") A continuación, se presentan las principales características de la dislexia y sus implicaciones:

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")


      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0

        .col-lg-8

          AcordionA(tipo="b")
            .div(titulo="Dificultades en la lectura")
              .ps-4
                ul.lista-ul--color.color-dark
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Confusión de letras con formas similares (b/d, p/q). 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Omisión, adición, inversión o sustitución de letras. 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Ritmo de lectura fragmentado, sin pausas adecuadas.



            .div(titulo="Dificultades en la escritura")
              .ps-4
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Errores ortográficos persistentes. 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Escritura desorganizada. 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Problemas para estructurar oraciones.

            .div(titulo="Dificultades en la memoria y procesamiento")
              .ps-4
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Problemas para recordar secuencias como el alfabeto o los días de la semana. 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Dificultad para seguir instrucciones complejas. 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Necesidad de leer varias veces para comprender un texto.

            .div(titulo="Impacto emocional y social")
              .ps-4
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Frustración y baja autoestima. 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Distracción frecuente. 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Bajo rendimiento académico si no se recibe apoyo adecuado.


      .row.align-items-start.mb-5

        .col-lg-8

          AcordionA(tipo="b")
            .div(titulo="Dificultades motoras y espaciales ")
              .ps-4
                ul.lista-ul--color.color-dark
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Coordinación motora deficiente (atarse los zapatos, andar en bicicleta). 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Torpeza en los movimientos, dificultad para diferenciar izquierda y derecha. 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Problemas de equilibrio y orientación espacial.



            .div(titulo="Dificultades en matemáticas y tiempo")
              .ps-4
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Problemas para memorizar la tabla de multiplicar. 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Confusión con símbolos matemáticos básicos (+, -, ×). 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Dificultad para leer la hora y recordar fechas o números.

            .div(titulo="Procesamiento de la información ")
              .ps-4
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Problemas para integrar información verbal, numérica y visoespacial. 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Bloqueos en el procesamiento al cambiar de una tarea a otra. 
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Falta de atención y concentración.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/6.png", alt="").mb-4.mb-lg-0


      h2(data-aos="fade-left") Causas y tratamiento

      p(data-aos="fade-right").mb-4 La dislexia tiene una base genética y puede presentarse en niños con inteligencia normal o superior. Su tratamiento implica un proceso de reeducación individualizado con técnicas multisensoriales y estrategias específicas de lectoescritura.


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
        .col-lg-8

          .bg-color-7.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Según Magaña y Ruiz-Lázaro (2005), el diagnóstico y la intervención temprana , preferiblemente antes de los siete años, son fundamentales para evitar un retraso académico significativo. Sin una identificación y tratamiento adecuados, los estudiantes pueden compensar sus dificultades con un esfuerzo extraordinario de memoria, lo que resulta insostenible a largo plazo.

          p(data-aos="fade-left") Es importante destacar que la dislexia no es una enfermedad, sino un estilo de aprendizaje que muchas veces no se considera en el sistema educativo. No desaparece con el tiempo, por lo que requiere un enfoque estructurado para garantizar que los estudiantes desarrollen sus habilidades de lectura y escritura y puedan acceder a la información de manera equitativa.




      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Tipos de dislexia

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
