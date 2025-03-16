<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Trastornos específicos del aprendizaje'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El término trastorno proviene del latín trāns- (a través de, más allá) y tornare (girar). Inicialmente, se utilizaba para referirse a un estado de confusión o desorden; con el tiempo, su significado se especializó en los ámbitos médicos y psicológicos para describir alteraciones en la salud mental y el comportamiento.

        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según Pérez (2023), la palabra trastorno tiene múltiples aplicaciones, especialmente en salud, donde se asocia con alteraciones psicológicas y mentales que afectan el comportamiento. También puede referirse a cambios drásticos en el funcionamiento de objetos o procesos. En términos psicológicos, se vincula con desequilibrios que pueden tratarse mediante psicoterapia, con resultados positivos para los pacientes.

        p(data-aos="fade-left") Los trastornos pueden ser congénitos o desarrollarse debido a anomalías cerebrales, influencias externas o factores biológicos. Existe una relación entre los trastornos físicos y psicológicos, ya que las alteraciones mentales pueden desencadenar afecciones físicas. Aunque la definición de trastorno es clara, es esencial analizar sus características, tipos y riesgos en la vida cotidiana.

    h2(data-aos="fade-left") Trastornos específicos del aprendizaje

    .row.mb-5

      .col-lg-8
        p(data-aos="fade-left") Los trastornos del aprendizaje afectan el rendimiento académico en niños y adolescentes, manifestándose cuando los resultados educativos están por debajo de sus capacidades intelectuales, a pesar de poseer inteligencia promedio (Magaña & Ruiz-Lázaro, 2005).

        .bg-color-5.p-4(data-aos="fade-left").mb-4
          p.mb-0 Estos trastornos pueden afectar diversas áreas, como la lectura, las matemáticas y la expresión escrita. Aunque quienes los padecen tienen un coeficiente intelectual normal y se esfuerzan en sus actividades, suelen enfrentar dificultades para asimilar conceptos de manera adecuada. Su origen es multifactorial e involucra aspectos genéticos y psicosociales, como el entorno familiar, escolar y cultural.

        p(data-aos="fade-left") Para entender mejor los trastornos específicos del aprendizaje (TEA), se presenta a continuación:

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")

    
    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/4.png', alt='')

          .col-lg-8

            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/icon-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Clasificación según el DSM-V
                p.text-center Se consideran trastornos del neurodesarrollo con un origen biológico.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/icon-2.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Principales tipos
                p.text-center Dislexia, discalculia y disgrafía.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/icon-3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Prevalencia
                p.text-center Entre el 5 y 17% de los niños en edad escolar y del 15 al 23% de los adultos 
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/icon-4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Factores causales
                p.text-center Componente genético, interacción con factores epigenéticos y ambientales.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/icon-5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Impacto
                p.text-center Entre el 5 y 17% de los niños en edad escolar y del 15 al 23% de los adultos 
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/icon-6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Intervención
                p.text-center Diagnóstico temprano, estrategias de identificación e intervención interdisciplinaria.

    p(data-aos="fade-left") Dado que los TEA tienen una base biológica que influye en las dificultades cognitivas y conductuales, su abordaje debe centrarse en estrategias de identificación temprana y en la implementación de programas de apoyo adaptados a las necesidades de cada individuo.

    .bg-full-width.bg-color-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Trastornos específicos del aprendizaje
            p.mb-4(data-aos="fade-right") En este punto les invitamos a leer el siguiente artículo, de los autores mencionados en el párrafo anterior, para profundizar en la definición de los trastornos específicos del aprendizaje.

            a.anexo.mb-4.bg-white.w-fit(href="https://www.sciencedirect.com/science/article/pii/S0716864022000992" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Trastornos específicos del aprendizaje

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/5.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.56712/latam.v5i1.1612" target="_blank" rel="noopener noreferrer") Arteaga, F., Solorzano, S. E. M., García, C. A. V., Gualán, R. R. A., Bailón, L. R. G., Laz, A. M. P., & Rivera, J. M. M. (2024). Estrategias pedagógicas para el abordaje educativo de la dislexia: Revisión sistemática de la literatura. Latam: revista latinoamericana de Ciencias Sociales y Humanidades, 5(1), 43.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span Dansilo. (2010). La lectura y sus dificultades: dislexia evolutiva. Ciencias Psicológicas 2010; IV (2): 275 – 276. Prensa Médica Latinoamericana 2010 - ISSN 1688-4094.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://dislexianeurodesarrollo.blogspot.com/2020/07/introduccion-la-dislexia-la-dislexia-es.html" target="_blank" rel="noopener noreferrer") López, C. (28 de julio de 2020) ¿Qué es la dislexia?

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span Magaña, M., & Ruiz-Lázaro, P. (2005). Trastornos específicos del aprendizaje. Sociedad española de Pediatría Extrahospitalaria y Atención primaria (SEPEAP), 21-28.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://conceptodefinicion.de/trastorno/" target="_blank" rel="noopener noreferrer") Pérez, M. (15 de agosto, 2023). Definición de Trastorno.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/49080?page=20" target="_blank" rel="noopener noreferrer") Teruel Romero, J. & Latorre Latorre, Á. (2015). Dificultades de aprendizaje: intervención en dislexia y discalculia: ( ed.). Difusora Larousse - Ediciones Pirámide.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
