<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. La discalculia'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p(data-aos="fade-up") En esta última sección de la primera unidad, se analizará un caso real para reflexionar sobre las dificultades en matemáticas.

      h2(data-aos="fade-up") Caso de Pablo: dificultades en matemáticas

      p(data-aos="fade-up") Pablo, un estudiante de 9 años con talento en actividades artísticas, presenta dificultades significativas en matemáticas. Entre sus principales problemas se encuentran:


      .bg-full-width.bg-color-7.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src="@/assets/curso/tema4/1.svg" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0
            .col-lg-8
              ul.lista-ul--color
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Disgrafía primaria]. Se manifiesta sin causas aparentes, atribuida a factores madurativos o funcionales.


                li.mb-4.mb-lg-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Disgrafía secundaria.] Se relaciona con otros trastornos, como dificultades neurológicas, problemas de atención o factores pedagógicos. Un ejemplo común se observa en el síndrome hipercinético.



      p(data-aos="fade-up") A pesar del apoyo familiar y escolar, Pablo evita las actividades numéricas en clase, delegándolas a sus compañeros y mostrando desmotivación en esta área.

      .row.mb-5
        .col-lg-8
          .bg-color-white.shadow-soft.p-4.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Dislexia, disgrafía y discalculia
                    p.mb-0 Ahora, se invita a revisar el video en el minuto 36:32 donde hablarán de la discalculia.
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=pVnW_5w8c4M" target="_blank")
                      span Ver video
                      i.fas.fa-arrow-right

          p.mb-0 La discalculia es un trastorno del aprendizaje que afecta la capacidad de comprender y manipular números, realizar cálculos matemáticos y desarrollar habilidades espaciales y cuantitativas. Según Babarro (2024), las matemáticas son esenciales en la vida diaria, por lo que la discalculia impacta significativamente a quienes la padecen. A menudo, esta dificultad se confunde con el bajo rendimiento en matemáticas, lo que lleva a un subdiagnóstico y a la falta de un tratamiento adecuado.

        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in").mb-4.mb-lg-0



      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
        .col-lg-8

          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Teruel y Latorre (2015) explican que la palabra discalculia proviene del griego dis (dificultad) y calculia (cálculo), refiriéndose a la dificultad para realizar operaciones matemáticas, contar objetos y comprender el pensamiento espacial. Kosc (1974) propuso una definición neuropsicológica, describiéndola como una dificultad en el procesamiento matemático de origen cerebral, sin afectar otras áreas del aprendizaje. Se estima que afecta entre el 3 y el 6% de la población escolar.

          p(data-aos="fade-left") Al igual que la dislexia, la discalculia puede presentarse en personas con inteligencia normal o superior, pero con dificultades específicas en matemáticas. Esta condición no solo impacta el rendimiento académico, sino que puede generar ansiedad, baja autoestima y problemas conductuales.

      #t_4_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.1] Características y síntomas de la discalculia
      
      p.mb-4(data-aos="fade-up") Este trastorno se manifiesta con una variedad de dificultades que afectan el aprendizaje matemático.

      .row.mb-5
        .col-lg-8
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Dificultad en el reconocimiento numérico")
              .col-12
                p(data-aos="fade-up") Problemas para identificar el significado de los números y agrupar objetos en cantidades específicas.

            .row(titulo="Errores en el conteo")
              .col-12
                p(data-aos="fade-up") Dificultad para contar en orden correcto o emparejar números con cantidades.

            .row(titulo="Problemas en la memorización de secuencias")
              .col-12
                p(data-aos="fade-up") Dificultad para recordar secuencias numéricas como las tablas de multiplicar o su número de teléfono.

            .row(titulo="Errores en operaciones básicas")
              .col-12
                p(data-aos="fade-up") Uso excesivo de los dedos para contar, confusión en la alineación de números y dificultad para aplicar estrategias de cálculo.

        .col-lg-4.d-none.d-lg-block.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/5.png" alt="Niña con dificultades matemáticas").img-fluid

      .row.mb-5
        .col-lg-4.d-none.d-lg-block.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/6.png" alt="Niño trabajando con ábaco").img-fluid
            
        .col-lg-8
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Dificultades en la comprensión de problemas")
              .col-12
                p(data-aos="fade-up") Problemas para interpretar enunciados matemáticos y aplicar razonamiento lógico en la resolución de ejercicios.

            .row(titulo="Falta de orientación espacial y secuencial")
              .col-12
                p(data-aos="fade-up") Problemas para comprender gráficos, leer relojes analógicos o interpretar mapas.

            .row(titulo="Baja autoestima y ansiedad matemática")
              .col-12
                p(data-aos="fade-up") Sentimientos de frustración, evitación de actividades numéricas y disminución del interés en las matemáticas.


      p(data-aos="fade-up") Si no se detecta y trata a tiempo, la discalculia puede afectar el rendimiento académico en otros niveles y generar desmotivación hacia el aprendizaje de las matemáticas.

      #t_4_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.2] Causas y tipología de la discalculia
      
      p.mb-4(data-aos="fade-up") Las causas de la discalculia pueden ser diversas y están relacionadas con factores genéticos, neurológicos y ambientales.

      .bg-full-width.bg-color-info.mb-5
        .px-4.px-md-5.pt-4.pt-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema4/info1.png', alt='', style='max-width: 1032px')
                    
                .bg-color-white.box-shadow.p-3(x="5%" y="60%" numero="+")
                  h5 Evolutivo
                  p Destaca la importancia de la estimulación temprana en el desarrollo de habilidades matemáticas. La falta de exposición a conceptos numéricos puede afectar el aprendizaje posterior.
                  
                .bg-color-white.box-shadow.p-3(x="21%" y="22%" numero="+")
                  h5 Educativo
                  p Se centra en cómo se enseña la matemática y en la dificultad de la asignatura. La falta de metodologías adaptadas puede agravar los problemas de los estudiantes con discalculia.
                  
                .bg-color-white.box-shadow.p-3(x="78%" y="20%" numero="+")
                  h5 Neurológico
                  p Relaciona la discalculia con alteraciones en el surco intraparietal del cerebro. Se cree que ciertas funciones matemáticas se localizan en el hemisferio derecho, mientras que el izquierdo procesa el lenguaje y la escritura de números.
                  
                .bg-color-white.box-shadow.p-3(x="95%" y="60%" numero="+")
                  h5 Cognitivo
                  p Explica la discalculia como un problema en los procesos mentales para resolver problemas matemáticos. Incluye deficiencias en la memoria, razonamiento lógico y reconocimiento de patrones numéricos.


      h2(data-aos="fade-up") Clasificación de la discalculia

      p(data-aos="fade-up") Según Kosc (1974), la discalculia se clasifica en seis tipos principales:

      .titulo-figura.mb-2
        h5 Tabla 1.
        span Clasificación de la discalculia
      //- .tabla-a debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      .tabla-a.color-acento-botones.mb-5
        table
          caption Clasificación de la discalculia
          thead
            tr(style="background-color: #453179")
              th(style="background-color: #453179; color: #fff") Tipo de discalculia
              th(style="background-color: #453179; color: #fff") Descripción
              th(style="background-color: #453179; color: #fff") Ejemplo
          tbody
            tr
              td Verbal
              td Dificultad para comprender conceptos matemáticos expresados oralmente.
              td No entender instrucciones como "suma tres a cinco".
            tr
              td Practognóstica
              td Problemas para manipular objetos con un propósito matemático.
              td No poder ordenar palitos por tamaño.
            tr
              td Léxica
              td Dificultad para leer números y símbolos matemáticos.
              td Confundir "+" con "x".
            tr
              td Gráfica
              td Problemas para escribir correctamente los números.
              td Escribir los números de forma invertida o con grafía incorrecta.
            tr
              td Ideognóstica
              td Problemas para entender conceptos matemáticos y resolver problemas mentalmente.
              td No comprender el concepto de resta sin apoyo visual.
            tr
              td Operacional
              td Dificultad para realizar operaciones matemáticas.
              td Cometer errores constantes al sumar, restar, multiplicar o dividir.


      p(data-aos="fade-up") Otros autores, como Hécaen et al. (1962) y Berger (1926), distinguen entre:

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
                  | #[strong Discalculia primaria]. Trastorno del cálculo puro, debido a una lesión cerebral sin afectar el lenguaje o el razonamiento.

                li.mb-4.mb-lg-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Discalculia secundaria]. Se asocia con otras alteraciones verbales, espaciales o de razonamiento.


      p(data-aos="fade-up") En conclusión, la discalculia es un trastorno del aprendizaje que afecta significativamente el desempeño en matemáticas y puede generar dificultades en la vida diaria. Un diagnóstico temprano y una enseñanza adaptada pueden marcar la diferencia en el desarrollo de estas habilidades. 


      .bg-full-width.bg-color-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-7
              h2.mb-4(data-aos="flip-up") Tratamiento y estrategias en el aula de la discalculia
              p.mb-4(data-aos="fade-right") Los invitamos a leer el documento Tratamiento y estrategias en el aula de la discalculia , donde se presentan enfoques clave para apoyar a los estudiantes con esta dificultad en el aprendizaje matemático. Descubrirán estrategias didácticas como el uso de materiales manipulativos, enseñanza visual y refuerzo positivo, fundamentales para promover un entorno educativo inclusivo y favorecer el desarrollo de habilidades numéricas con confianza y autonomía.
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Tratamiento y estrategias en el aula de la discalculia
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/7.png', alt='')

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
      
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.psicologia-online.com/que-es-la-discalculia-sintomas-causas-y-tratamiento-4459.html?form=MG0AV3" target="_blank" rel="noopener noreferrer") Babarro, N. (2 de septiembre, 2024) Qué es la discalculia: síntomas, causas y tratamiento. Psicología-Online

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://institutojubones.edu.ec/ojs/index.php/societec/article/view/147/434" target="_blank" rel="noopener noreferrer") González, A. G. Á., & Freire, J. F. R. (2021). La discalculia en alumnos de la educación básica. Sociedad & Tecnología, 4(3), 432-446.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/ereader/tecnologicadeloriente/49080?page=110" target="_blank" rel="noopener noreferrer") Teruel Romero, J. & Latorre Latorre, Á. (2015). Dificultades de aprendizaje: intervención en dislexia y discalculia: (ed.). Difusora Larousse - Ediciones Pirámide.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Estilos y alteraciones del aprendizaje',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la discalculia es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Solo afecta a la capacidad de realizar operaciones matemáticas complejas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Es un trastorno que únicamente se presenta en la edad adulta',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Afecta la capacidad de comprender y trabajar con números y conceptos matemáticos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Es un trastorno que se cura completamente con medicación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'La disgrafía se caracteriza principalmente por:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Dificultades en la comprensión lectora',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Problemas en la expresión escrita y la coordinación motora fina',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Problemas exclusivamente en el deletreo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Dificultades únicamente en la lectura',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué característica es propia de la disortografía?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Dificultades exclusivamente en la lectura en voz alta',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Problemas únicamente en el cálculo matemático',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Dificultades en la coordinación motora',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Dificultades específicas en la escritura correcta de las palabras',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'La dislexia se manifiesta principalmente como:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un trastorno que afecta únicamente la escritura',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Una dificultad específica en el aprendizaje de la lectura',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Un problema exclusivamente de pronunciación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Una dificultad que solo afecta al cálculo matemático',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes NO es una característica común de los trastornos específicos del aprendizaje?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Se presentan en individuos con capacidad intelectual normal',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Pueden manifestarse en diferentes grados de severidad',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Son causados únicamente por falta de motivación',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Requieren intervención específica y personalizada',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

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
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(232,238,253,1) 50%)

  .yellowCard
    padding: 2rem
    background-color: #FBF6DB
</style>
