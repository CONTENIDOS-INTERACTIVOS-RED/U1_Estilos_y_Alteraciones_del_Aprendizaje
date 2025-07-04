export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Estilos y alteraciones del aprendizaje',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Trastornos específicos del aprendizaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Dislexia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de dislexia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '¿Cómo detectar y tratar la dislexia?',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '3. Disgrafía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características y síntomas de la disgrafía',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Causas de la disgrafía',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipos de disgrafía',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'La discalculia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arteaga, F., Solorzano, S. E. M., García, C. A. V., Gualán, R. R. A., Bailón, L. R. G., Laz, A. M. P., & Rivera, J. M. M. (2024). Estrategias pedagógicas para el abordaje educativo de la dislexia: Revisión sistemática de la literatura. Latam: revista latinoamericana de Ciencias Sociales y Humanidades, 5(1), 43.',
      link: 'https://doi.org/10.56712/latam.v5i1.1612',
    },
    {
      referencia:
        'Dansilo. (2010). La lectura y sus dificultades: dislexia evolutiva. Ciencias Psicológicas 2010; IV (2): 275 – 276. Prensa Médica Latinoamericana 2010 - ISSN 1688-4094.',
      link:
        'http://www.scielo.edu.uy/scielo.php?script=sci_arttext&pid=S1688-42212010000200009',
    },
    {
      referencia: 'López, C. (28 de julio de 2020) ¿Qué es la dislexia?',
      link:
        'https://dislexianeuorodesarrollo.blogspot.com/2020/07/introduccion-la-dislexia-la-dislexia-es.html',
    },
    {
      referencia:
        'Magaña, M., & Ruiz-Lázaro, P. (2005). Trastornos específicos del aprendizaje. Sociedad española de Pediatría Extrahospitalaria y Atención primaria (SEPEAP), 21-28.',
      link:
        'https://dolorsmaspsicologa.com/wp-content/uploads/2015/10/Ps_inf_trastornos_especificos_aprendizaje.pdf',
    },
    {
      referencia: 'Pérez, M. (15 de agosto, 2023). Definición de Trastorno.',
      link: 'https://conceptodefinicion.de/trastorno/',
    },
    {
      referencia:
        'Teruel Romero, J. & Latorre Latorre, Á. (2015). Dificultades de aprendizaje: intervención en dislexia y discalculia: (ed.). Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49080?page=20',
    },
    {
      referencia:
        'Agulló, L. G., Sánchez, M. R., & Azuaga, J. L. L. (2021). Disgrafía en los procesos educativos. Portal de la Ciencia, 2(1), 1-14.',
      link:
        'https://institutojubones.edu.ec/ojs/index.php/portal/article/view/295/577',
    },
    {
      referencia:
        'Babarro, N. (26 de marzo 2019) Disgrafía: definición, tipos, causas, tratamiento y ejemplos. Psicología-Online.',
      link:
        'https://www.psicologia-online.com/disgrafia-definicion-tipos-causas-tratamiento-y-ejemplos-4458.html?form=MGOAV3',
    },
    {
      referencia:
        'Morin, A. (22 octubre,2020). Adaptaciones en el aula para la disgrafía. Understood.',
      link:
        'https://www.understood.org/es-mx/articles/at-a-glance-classroom-accommodations-for-dysgraphia?form=MGOAV3',
    },
    {
      referencia:
        'Portellano Pérez, J. A. (2014). La disgrafía: concepto, diagnóstico y tratamiento de los trastornos de escritura: ( ed.). Editorial CEPE.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/153574?page=43',
    },
    {
      referencia:
        'Torres, A. (10 de noviembre, 2017) Disgrafía: causas, síntomas y tratamiento. Psicología clínica.',
      link: 'https://psicologicamente.com/clinica/disgrafia',
    },
    {
      referencia:
        'Babarro, N. (29 de agosto, 2024) Qué es la disortografía: síntomas, causas, tratamiento y ejemplos. Psicología-Online.',
      link:
        'https://www.psicologia-online.com/que-es-la-disortografia-sintomas-causas-tratamiento-y-ejemplos-4460.html',
    },
    {
      referencia:
        'Serrano, M. C. (2010). ¿EN QUÉ CONSISTE LA DISORTOGRAFÍA? Temas para la Educación.',
      link: 'https://disfam.org/wp-content/uploads/2023/06/disortografia-1.pdf',
    },
    {
      referencia:
        'Rodríguez Jorrín, D. (2018). La disortografía: prevención y corrección: ( ed.). Editorial CEPE.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/153575?page=19',
    },
    {
      referencia:
        'Babarro, N. (2 de septiembre, 2024) Qué es la discalculia: síntomas, causas y tratamiento. Psicología-Online',
      link:
        'https://www.psicologia-online.com/que-es-la-discalculia-sintomas-causas-y-tratamiento-4459.html?form=MGOAV3',
    },
    {
      referencia:
        'González, A. G. Á., & Freire, J. F. R. (2021). La discalculia en alumnos de la educación básica. Sociedad & Tecnología, 4(3), 432-446.',
      link:
        'https://institutojubones.edu.ec/ojs/index.php/societec/article/view/147/434',
    },
    {
      referencia:
        'Teruel Romero, J. & Latorre Latorre, Á. (2015). Dificultades de aprendizaje: intervención en dislexia y discalculia: (ed.). Difusora Larousse - Ediciones Pirámide.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/49080?page=110',
    },
  ],
  glosario: [
    {
      termino: 'Acalculia',
      significado:
        'Dificultad en el aprendizaje de las matemáticas y el procesamiento numérico.',
    },
    {
      termino: 'Afasia',
      significado:
        'Pérdida de la capacidad de comprender o producir lenguaje, debido a una lesión cerebral.',
    },
    {
      termino: 'Agrafia',
      significado:
        'Pérdida de la capacidad de escribir, debido a una lesión cerebral.',
    },
    {
      termino: 'Alexia',
      significado:
        'pérdida de la capacidad de leer, debido a una lesión cerebral',
    },
    {
      termino: 'Ambidextrismo',
      significado:
        'Uso indistinto de ambas manos, lo que puede dificultar la lateralización.',
    },
    {
      termino: 'Atención',
      significado:
        'Capacidad para concentrarse en un estímulo específico. su déficit afecta el aprendizaje.',
    },
    {
      termino: 'Automatización',
      significado:
        'Capacidad de realizar tareas de forma automática, sin esfuerzo consciente. Su déficit dificulta la fluidez en lectura y escritura.',
    },
    {
      termino: 'Cognición',
      significado:
        'Conjunto de procesos mentales involucrados en el conocimiento, como la memoria, el lenguaje y el razonamiento.',
    },
    {
      termino: 'Decodificación',
      significado: 'Proceso de convertir letras en sonidos para leer.',
    },
    {
      termino: 'Discalculia',
      significado: 'Dificultad específica en el aprendizaje de las matemáticas',
    },
    {
      termino: 'Disgrafía',
      significado: 'Dificultad específica en la escritura.',
    },
    {
      termino: 'Dislalia',
      significado: 'Trastorno en la articulación de los sonidos del habla.',
    },
    {
      termino: 'Dislexia',
      significado: 'Dificultad específica en la lectura.',
    },
    {
      termino: 'Disortografía',
      significado:
        'Dificultad en la ortografía y la aplicación de las reglas de escritura.',
    },
    {
      termino: 'Fonema',
      significado: 'Unidad mínima de sonido en una lengua.',
    },
    {
      termino: 'Percepción',
      significado: 'Proceso de interpretación de la información sensorial.',
    },
  ],
}
