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
        'Ardaraz, M. (2002). Teoría de las tres dimensiones de desarrollo sostenible: . Ecosistemas, 11(2)',
      link:
        'https://www.revistaecosistemas.net/index.php/ecosistemas/article/view/614',
    },
    {
      referencia:
        'Beltrán, D. J. (2002). La estrategia de desarrollo sostenible de la Unión Europea en el contexto global: de Río a Johannesburgo. ICE. Revista de Economía, (800).',
      link: '',
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
