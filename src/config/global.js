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
        'Escobar, J. P., & Tenorio, M. (2022). Trastornos específicos del aprendizaje: origen, identificación y acompañamiento. Revista Médica Clínica Las Condes, 33(5), 473-479.',
      link: 'https://doi.org/10.1016/j.rmclc.2022.09.001',
    },
    {
      referencia:
        'Pulgarín, D.A. Ospina, F.P (2023). Madi Sonrió. Fondo Editorial EIA.',
      link: 'MADI SONRIO COMPLETO-1.pdf - Google Drive',
    },
    {
      referencia:
        'Teruel Romero, J. & Latorre Latorre, Á. (2015). Dificultades de aprendizaje: intervención en dislexia y discalculia: (ed.). Difusora Larousse - Ediciones Pirámide',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49080?page=20',
    },
    {
      referencia:
        'Portellano Pérez, J. A. (2014). La disgrafía: concepto, diagnóstico y tratamiento de los trastornos de escritura: (ed.). Editorial CEPE.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/153574?page=43',
    },
    {
      referencia:
        'Rodríguez Jorrín, D. (2018). La disortografía: prevención y corrección: (ed.). Editorial CEPE.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/153575?page=19',
    },
    {
      referencia:
        'Benedicto-López, P., & Rodríguez-Cuadrado, S. (2019). Discalculia: manifestaciones clínicas, evaluación y diagnóstico. Perspectivas actuales de intervención educativa. RELIEVE. Revista Electrónica de Investigación y Evaluación Educativa, 25(1), 10125.',
      link: 'https://doi.org/10.7203/relieve.25.1.10125',
    },
    {
      referencia:
        'Bravo Mendoza, A. M., López Vargas, A. R., & Pérez Palmett, G. R. (2021). La discalculia es una dificultad silenciosa. Universidad de San Buenaventura.',
      link:
        'https://bibliotecadigital.usb.edu.co/server/api/core/bitstreams/420f1fc0-e983-4832-983a-d9a4753aa256/content?form=MG0AV3',
    },
    {
      referencia:
        'RevistaMSP [@RevistaMSP]. (8 de octubre, 2023). Día mundial de la dislexia: ¿Cómo funciona en el cerebro? - [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=bNhowO8msp4',
    },
    {
      referencia:
        'Neurociencias, D. [@DiegoNeurociencias]. (22 julio, 2021). Dislexia, disgrafía y discalculia. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=pVnW_5w8c4M',
    },
    {
      referencia:
        'Babarro, N. (2 de septiembre, 2024). Qué es la dislexia: síntomas, tipos, causas y tratamiento. Psicología-Online.',
      link:
        'https://www.psicologia-online.com/que-es-la-dislexia-sintomas-tipos-causas-y-tratamiento-4456.html',
    },
    {
      referencia:
        'Expertos en Educación, E. (2022, febrero 18). Los distintos tipos de disgrafía: características y consecuencias para el aprendizaje. VIU España.',
      link:
        'https://www.universidadviu.com/es/actualidad/nuestros-expertos/los-distintos-tipos-de-disgrafia-caracteristicas-y-consecuencias-para',
    },
    {
      referencia:
        'Puerta, A. R. (14 de marzo, 1(2021). Disortografía. Lifeder.',
      link: 'https://www.lifeder.com/disortografia/',
    },
    {
      referencia: 'Briceño V., G. (2018). Discalculia. De Euston96:',
      link: 'https://www.euston96.com/discalculia/',
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
