<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Disgrafía'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  



      .bg-color-1.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La disgrafía es un trastorno que afecta la capacidad de escribir correctamente, dificultando la formación de letras, la organización del espacio en el papel y el uso adecuado de reglas ortográficas y gramaticales. Se considera un trastorno específico del aprendizaje y suele coexistir con otras dificultades como la dislexia o la discalculia. Su identificación y tratamiento temprano son fundamentales para evitar repercusiones en el desarrollo académico y personal del niño.

      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Características y síntomas de la disgrafía        
      p.mb-4 Este trastorno se manifiesta con una variedad de dificultades que afectan la escritura y su legibilidad.

      .row
        .col-lg-8

          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Caligrafía")
              .col-12
                p Escritura ilegible, letras mal formadas o invertidas, problemas para mantener la alineación en el papel.
            
            .row(titulo="Ortografía y gramática")
              .col-12
                p Errores frecuentes en acentuación, puntuación y uso de mayúsculas.
            
            .row(titulo="Espaciado y estructura")
              .col-12
                p Letras y palabras demasiado juntas o separadas, dificultad para respetar los márgenes y líneas del papel.
            
            .row(titulo="Coordinación motriz")
              .col-12
                p Problemas para sostener el lápiz correctamente, dificultad para realizar trazos precisos.
            
            .row(titulo="Atención y percepción")
              .col-12
                p Problemas para copiar palabras o figuras, dificultades para organizar el espacio en la hoja.

        .col-lg-4.d-none.d-lg-block.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/2.png" alt="Niña mostrando letra M").img-fluid


      h3 Clasificación de la disgrafía
            
      p.mb-4 Existen diferentes tipos de disgrafía, dependiendo de sus causas y características.

      .bg-full-width.bg-color-7.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src="@/assets/curso/tema3/3.svg" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0
            .col-lg-8
              ul.lista-ul--color
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Disgrafía primaria]. Se manifiesta sin causas aparentes, atribuida a factores madurativos o funcionales.

                li.mb-4.mb-lg-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Disgrafía secundaria]. Se relaciona con otros trastornos, como dificultades neurológicas, problemas de atención o factores pedagógicos. Un ejemplo común se observa en el síndrome hipercinético.


      .bg-full-width-2.bg-fondo-3.mb-5
        .px-4.px-md-5.pb-md-3
          h3.mb-4 Diagnóstico y detección temprana
            
          p.mb-5 El diagnóstico de la disgrafía se realiza cuando el niño ya ha comenzado a escribir formalmente, alrededor de los 7 años. Sin embargo, en etapas previas, pueden detectarse señales tempranas, conocidas como predisgrafía.

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-6.mb-4(data-aos="fade-right")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/4.png" alt="Niño escribiendo con lápiz")
                .custom-image-card__text.p-4
                  h4.mb-3.text-center Predisgrafía
                  p.mb-0.text-center Dificultades en la coordinación de movimientos finos, problemas para copiar formas o para organizar el espacio en el papel.
            
            .col-lg-6.mb-4(data-aos="fade-left")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="Niño trabajando con tarjetas de letras")
                .custom-image-card__text.p-4
                  h4.mb-3.text-center Importancia
                  p.mb-0.text-center La detección temprana permite intervenir a tiempo y desarrollar estrategias que eviten problemas mayores en el aprendizaje de la escritura.


      h3.mb-4 Causas de la disgrafía  
      p.mb-4 Las causas de la disgrafía pueden ser diversas e incluyen factores neurológicos, psicosociales, familiares y educativos.

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Factores neurológicos" :icon="require('@/assets/curso/tema2/9.svg')")
          .row.align-items-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema3/tab-1.png", alt="").img-fluid
            .col-md-7
              h4.mb-3 Factores neurológicos
              p.mb-3 Alteraciones en las áreas cerebrales encargadas del control motor y del lenguaje escrito.

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Factores genéticos" :icon="require('@/assets/curso/tema2/9.svg')")
          .row.align-items-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema3/tab-2.png", alt="").img-fluid
            .col-md-7
              h4.mb-3 Factores genéticos
              p.mb-3 Predisposición hereditaria a dificultades en la escritura.

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Factores pedagógicos" :icon="require('@/assets/curso/tema2/9.svg')")
          .row.align-items-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema3/tab-3.png", alt="").img-fluid
            .col-md-7
              h4.mb-3 Factores pedagógicos
              p.mb-3 Falta de una adecuada estimulación escolar y dificultades en la enseñanza de la lectoescritura.

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Factores socioculturales" :icon="require('@/assets/curso/tema2/9.svg')")
          .row.align-items-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema3/tab-4.png", alt="").img-fluid
            .col-md-7
              h4.mb-3 Factores socioculturales
              p.mb-3 Ambientes con carencias educativas o ausencia de hábitos de lectura y escritura.

      .bg-full-width-2.bg-fondo-4
        .px-4.px-md-5

          h3.mb-4 Tratamiento y estrategias de apoyo
            
          p.mb-5 Aunque la disgrafía no tiene cura, existen estrategias terapéuticas y educativas que ayudan a mejorar las habilidades de escritura y minimizar sus efectos.

          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/6.svg"
                  alt="Icono de Intervención psicopedagógica	"
                  style="width: 95px"
                )
                h4.mb-3.text-center Intervención psicopedagógica	
                p.mb-0.text-center Uso de técnicas de reeducación de la escritura para mejorar la motricidad fina.
            
            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/7.svg"
                  alt="Icono de escritura"
                  style="width: 95px"
                )
                h4.mb-3.text-center Métodos multisensoriales	
                p.mb-0.text-center Actividades que combinan el uso del tacto, la vista y el oído para reforzar el aprendizaje de la escritura.
            
            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/8.svg"
                  alt="Icono de memoria y atención"
                  style="width: 95px"
                )
                h4.mb-3.text-center Apoyo emocional y familiar	
                p.mb-0.text-center Los padres y docentes deben brindar un ambiente de apoyo, evitando la frustración y reforzando el esfuerzo del niño.
            
            div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/9.svg"
                  alt="Icono de coordinación motriz"
                  style="width: 95px"
                )
                h4.mb-3.text-center Uso de herramientas tecnológicas
                p.mb-0.text-center Aplicaciones y programas de dictado por voz o escritura asistida pueden facilitar la comunicación escrita.


      p.mb-4(data-aos="fade-up") La disgrafía sigue siendo un trastorno poco comprendido por muchos docentes, lo que puede derivar en dificultades académicas y abandono escolar. Una detección temprana y un tratamiento adecuado permiten mejorar significativamente la calidad de vida de quienes la padecen y potenciar su aprendizaje.

      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Causas de la disgrafía

      p.mb-4(data-aos="fade-up") La disgrafía es un trastorno multifactorial que puede originarse por diversas causas relacionadas con el desarrollo cognitivo, psicomotor y emocional. Según Agulló et al. (2021), es esencial considerar diferentes perspectivas para comprender mejor los factores que influyen en esta dificultad de escritura.


      h3.mb-4 Factores cognitivos y estratégicos
      p.mb-4 Englert (1991) sostiene que la disgrafía no solo se debe a problemas motores, sino también a dificultades en la planificación, ejecución y revisión del acto de escribir.

      .row.mb-5
        .col-lg-8
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Falta de capacidades metacognitivas")
              .col-12
                p Dificultad para reflexionar sobre el propio proceso de escritura y mejorar las estrategias utilizadas.

            .row(titulo="Ausencia de automatización")
              .col-12
                p Problemas en la ejecución fluida de la escritura, lo que genera lentitud y esfuerzo excesivo.

            .row(titulo="Deficiencia en regulación y control")
              .col-12
                p Falta de estrategias para supervisar y corregir errores durante la escritura.

            .row(titulo="Dificultades grafomotoras")
              .col-12
                p Problemas en la motricidad fina, afectando la precisión de los trazos.

        .col-lg-4.d-none.d-lg-block.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/10.png" alt="Estudiante escribiendo").img-fluid



      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.pb-md-3
          h3.mb-4 Clasificación de las causas de la disgrafía
          p.mb-4 Portellano Pérez (1985) clasifica las causas de la disgrafía en tres grandes categorías: maduración psicomotriz, personalidad y factores pedagógicos.

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/11.png" alt="Imagen de actividades psicomotrices")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Maduración psicomotriz
                  p.mb-0 Se relaciona con problemas en la coordinación motriz y la lateralidad. Incluye trastornos de eficiencia psicomotora (motricidad débil, problemas de equilibrio, retraso motor e hiperactividad). También afecta la orientación espacial y la integración visomotora.

            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/12.png" alt="Imagen de factores de personalidad")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Factores de personalidad
                  p.mb-0 Comprende rasgos como estabilidad/inestabilidad, rapidez/lentitud, autoestima, inmadurez e inseguridad. Los conflictos emocionales pueden influir en la calidad de la escritura.

            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/13.png" alt="Imagen de factores pedagógicos")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Factores pedagógicos
                  p.mb-0 Incluyen diagnósticos inadecuados, falta de atención personalizada, métodos de enseñanza poco flexibles, deficiencias en la adquisición de destrezas motoras y materiales didácticos inadecuados.



      h3.mb-4 Relevancia de la maduración en la escritura

      p.mb-5 Según Veloz-García (2019), basándose en la tipología de Portellano, la escritura es una actividad perceptivo-motriz que depende de una maduración adecuada.

      .bg-full-width.bg-color-7.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src="@/assets/curso/tema3/14.svg" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0
            .col-lg-8
              ul.lista-ul--color
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Ambidextrismo]. Puede generar problemas de lateralidad, provocando una escritura lenta y con errores.

                li.mb-4.mb-lg-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Torpeza motora]. Afecta la velocidad, el equilibrio y la coordinación, dificultando la fluidez en la escritura.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Hiperactividad]. Impide mantener la alineación en la hoja y afecta la estabilidad del trazo.

                li.mb-4.mb-lg-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Déficits viso-perceptivos]. Causa confusión de figura-fondo, rotación de figuras y problemas en la estructuración del espacio.

      .bg-full-width.PurpleContainer.pt-5
        .px-4.px-md-5
          p.mb-0 El adecuado desarrollo de estas habilidades es crucial para evitar problemas en la escritura y mejorar la calidad del aprendizaje de los niños. La identificación temprana de estos factores permite implementar estrategias de intervención para minimizar sus efectos en el desarrollo escolar.
      .bg-full-width.SplitContainer2.mb-5.pt-5
        .row.justify-content-center  
          .col-lg-9
            .bg-color-white.shadow-soft.py-4.px-lg-5(data-aos="fade-up")
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/bg-icono-link.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 La disgrafía: concepto, diagnóstico y tratamiento
                      p.mb-0 Para profundizar más en las causas de este trastorno los invitamos a leer el capítulo 3 etiología de la disgrafía del siguiente libro.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/ereader/tecnologicadeloriente/153574/?page=43" target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right
      
        
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Tipos de disgrafía    
      p.mb-4 La disgrafía se clasifica en dos grandes categorías: adquirida y evolutiva, cada una con subtipos específicos. Según Babarro (2019), la diferencia principal radica en el momento en que se manifiesta:

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-6
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/15.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Disgrafía adquirida 
                p.mb-0 Ocurre después de una lesión cerebral en personas que ya sabían escribir.

        .col-lg-6
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/15.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Disgrafía evolutiva 
                p.mb-0 Aparece durante el proceso de aprendizaje de la escritura en niños.

      p.mb-4(data-aos="fade-up") A continuación, se presentan las características de cada tipo de disgrafía y sus subtipos.


      .row.mb-5
        .col-lg-8
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Disgrafía adquirida central")
              .col-12
                p Afecta el procesamiento lingüístico de la escritura.
                p #[strong Fonológica:] Dificultad para aplicar reglas de conversión sonido-letra, errores con palabras desconocidas. Ejemplo: escribir "jato" en lugar de "gato".
                p #[strong Superficial:] Problemas en el reconocimiento global de palabras, escritura lenta y errores ortográficos. Ejemplo: confundir "valla" con "baya".
                p #[strong Profunda:] Afecta ambas rutas (visual y fonológica), con errores semánticos. Ejemplo: escribir "silla" en lugar de "sofá".

            .row(titulo="Disgrafía adquirida periférica")
              .col-12
                p Dificultad para recordar los movimientos necesarios para escribir. Ejemplo: letras ilegibles por falta de control en los trazos.

            .row(titulo="Disgrafía evolutiva fonológica")
              .col-12
                p Dificultad para relacionar sonidos con letras, problemas al escribir palabras nuevas.
                p Ejemplo: escribir "caza" en lugar de "casa".

            .row(titulo="Disgrafía evolutiva superficial")
              .col-12
                p Dificultad para recordar la forma visual de las palabras, errores ortográficos frecuentes.
                p Ejemplo: escribir "vaca" con "b".

            .row(titulo="Disgrafía evolutiva mixta")
              .col-12
                p Afecta ambas rutas (visual y fonológica) sin errores semánticos. Es la más frecuente en niños.
                p Ejemplo: un niño que confunde letras y sonidos, cometiendo múltiples errores al escribir.

        .col-lg-4.d-none.d-lg-block.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/16.png" alt="").img-fluid

      p.mb-4(data-aos="fade-up") La disgrafía adquirida surge tras una lesión cerebral en personas que ya habían desarrollado la escritura, mientras que la disgrafía evolutiva se presenta en niños durante su aprendizaje. La clasificación se basa en las rutas afectadas (fonológica y/o visual) y en la presencia de errores semánticos, los cuales son exclusivos de la disgrafía adquirida profunda.

      .bg-full-width.bg-color-5.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/17.png', alt='')
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Tratamiento y estrategias en el aula para la disgrafía
              p.mb-4(data-aos="fade-right") Los invitamos a leer el documento sobre Tratamiento y estrategias en el aula para la disgrafía, donde se presentan enfoques clave para apoyar a los estudiantes con disgrafía. Descubrirán cómo la intervención temprana, el uso de tecnologías asistidas y estrategias multisensoriales pueden mejorar el aprendizaje y la escritura, promoviendo un ambiente inclusivo y adaptado a sus necesidades.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Tratamiento y estrategias en el aula para la disgrafía


      h2.mb-4(data-aos="flip-up") La disortografía

      p.mb-4(data-aos="fade-up") La disortografía es un trastorno del aprendizaje que afecta la escritura, específicamente en la ortografía y la correcta estructuración de las palabras. Se manifiesta en dificultades para aplicar las reglas ortográficas, confusión entre sonidos similares y errores en la escritura de palabras, a pesar de una adecuada capacidad intelectual y una enseñanza convencional.


      .bg-full-width.bg-color-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-4(data-aos="fade-right") Los invitamos a leer el documento "La disortografía", donde se explica este trastorno del aprendizaje que afecta la escritura y la correcta aplicación de reglas ortográficas. A través de ejemplos, causas y tipologías, se analizan los errores más comunes y se proponen estrategias para su detección temprana e intervención. Comprender sus características permite diseñar estrategias pedagógicas adecuadas y favorecer el desarrollo de la escritura en los estudiantes.
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> La disortografía
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/18.png', alt='')


      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/ereader/tecnologicadeloriente/153575?page=19" target="_blank" rel="noopener noreferrer") Rodríguez Jorrín, D. (2018). La disortografía: prevención y corrección: (ed.). Editorial CEPE. 


            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>
<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5

.SplitContainer
  background: rgb(85,122,250)
  background: linear-gradient(0deg, rgba(232,238,253,1) 0%, rgba(232,238,253,1) 50%, rgba(255,255,255,1) 50%)

  .yellowCard
    padding: 2rem
    background-color: #FBF6DB

.PurpleContainer
  background-color: rgb(235,233,240)

.SplitContainer2
  background: rgb(85,122,250)
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(235,233,240, 1) 50%)

  .yellowCard
    padding: 2rem
    background-color: #FBF6DB
</style>
