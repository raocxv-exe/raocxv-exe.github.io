export const languages = {
  en: 'English',
  es: 'Español'
};

export const defaultLang = 'en';

export const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.design': 'Proceso de Diseño',
    'nav.about': 'Sobre mí',
    'nav.cv': 'Descargar CV',
    'nav.theme.light': 'Modo Claro',
    'nav.theme.dark': 'Modo Oscuro',
    'nav.lang.toggle': 'EN | ES',
    'nav.back': 'Volver',

    // Page Titles
    'page.title.home': 'Portfolio | Rolando Aguilar Ordaz',
    'page.title.proyectos': 'Proyectos | Rolando Aguilar Ordaz',
    'page.title.design-process': 'Proceso de Diseño | Rolando Aguilar Ordaz',
    'page.title.about-me': 'Sobre mí | Rolando Aguilar Ordaz',

    // Home - Hero
    'hero.hi': '¡Hola! Soy Rolando',
    'hero.title': 'Diseño y construyo cosas para las personas.',
    'hero.desc': '"Ingeniero de Software con un enfoque en UI/UX. Mi meta es crear interfaces donde la belleza visual y la intuición coexistan, permitiendo que todos disfruten de un gran diseño sin fricciones."',

    // Home - Projects
    'home.projects.title': 'Proyectos',
    'home.projects.intro': 'Estos son algunos proyectos que quiero poner como destacados para una vista rápida de mí. En la sección de proyectos los encontrarás con más detalle.',
    'home.projects.viewAll': 'Ver todos los proyectos',
    'home.projects.readMore': 'Leer más',

    // Bento (Home/About)
    'bento.title': '¿Por qué yo?',
    'bento.approach.title': 'Enfoque Humano y Colectivo',
    'bento.approach.text1': 'Mi enfoque nace de una fascinación por el diseño centrado en el humano, viendo al usuario no solo como individuo, sino como parte de un colectivo. Creo firmemente que una interfaz bien diseñada tiene el poder de elevar la satisfacción y el empoderamiento grupal. Mi meta es cerrar la brecha entre la funcionalidad técnica y las necesidades colectivas, creando experiencias fluidas y colaborativas.',
    'bento.approach.text2': 'Formado en la UAZ, combino mi sólida base técnica con un ojo creativo para la estética. Entiendo que un diseño óptimo requiere investigación, prototipado e iteración constante basada en feedback. Más allá del código, soy un gamer apasionado y un cinéfilo que valora las conexiones humanas (como las forjadas en la universidad) y el tiempo con mis perros, lo que me permite diseñar con una perspectiva empática y real.',
    
    'bento.gamification.title': 'Dominio de la Gamificación',
    'bento.gamification.text': 'Como gamer, me apasiona aplicar estructuras de diseño de juegos en entornos que no lo son. En esta década de los 2020s, aplicaciones como Duolingo o Waze han demostrado que la gamificación es clave para transformar interacciones tediosas en viajes gratificantes y efectivos.',
    
    'bento.eng.title': 'Ingeniería con Corazón UX',
    'bento.eng.text': 'Ser Ingeniero de Software me permite ir más allá de la construcción de interfaces. Integro principios de psicología humana para entender profundamente al usuario y facilitar su usabilidad. Mi formación técnica me permite diseñar soluciones dinámicas y viables, cerrando la brecha entre la arquitectura del sistema y una experiencia de usuario fluida y bella.',
    
    'bento.ai.title': 'Pensando sobre IA',
    'bento.ai.text': 'Aunque no soy para nada un fan de los chatbots ni de la IA generativa para imágenes o videos (postura que no cambiará), creo firmemente que en el desarrollo de código es donde reside su mayor utilidad. La veo como un compañero para optimizar el trabajo, permitiendo que el ingeniero tenga una vida fuera de la pantalla y que el trabajo sea solo una parte de ella, no su totalidad.',

    // About Me
    'about.title': 'Sobre mí',
    'about.bio.hi': '¡Hola! Soy Rolando 👋',
    'about.bio.p1': 'Soy un Ingeniero de Software con un enfoque especializado en UI/UX y un gran interés por la psicología humana. Mi pasión es integrar los principios de la mente con la ingeniería para construir productos que no solo sean funcionalmente perfectos, sino también visualmente bellos e intuitivos para que cualquier usuario pueda apreciar el valor de un buen diseño.',
    'about.bio.p2': 'A lo largo de los años, he estado transitando constantemente entre el frontend más pulido y la arquitectura backend. Disfruto desarmar problemas complejos y ensamblar soluciones dinámicas para usuarios reales.',
    'about.bio.q': '¿Qué planeo hacer?',
    'about.bio.ans': 'Mi objetivo es liderar la creación de experiencias digitales donde el diseño excepcional y la ingeniería se unan para servir al usuario no solo como individuo, sino como un colectivo. Busco democratizar la belleza visual haciéndola intuitiva y accesible para todos, resolviendo necesidades comunes a través de herramientas que inspiren y empoderen.',
    'about.skills.title': 'Tech & Skills Stack',
    'about.fun.title': 'Fun Facts',
    'about.fun.1': 'Tengo dos perros adoptados que amo con todo mi corazón 🐶',
    'about.fun.2': 'Soy un apasionado de la música del siglo pasado (70s, 80s, 90s) 🎸',
    'about.fun.3': 'Para mí, Halo y Star Wars (Andor específicamente) son la cima de la ciencia ficción 🪐',
    'about.hobbies.title': 'Hobbies',
    'about.hobbies.1': '🎮 Videojuegos',
    'about.hobbies.2': '🧠 Absorber información',
    'about.hobbies.3': '🔍 Psicología humana',
    'about.hobbies.4': '📚 Movimientos sociales de la humanidad',
    'about.edu.title': 'Educación',
    'about.edu.degree': 'Ingeniería en Software',
    'about.edu.uni': 'Universidad Autónoma de Zacatecas "Francisco García Salinas"',
    'about.edu.date': 'Diciembre 2023',

    // Design Process
    'design.title': 'Proceso de Diseño',
    'design.lead': 'Integro el Design Thinking con el ciclo de vida de desarrollo de software tradicional (Software Development Life Cycle). Mi interés por el usuario, la comunidad y la empatía se refleja directamente en esta metodología, la cual se adapta según las necesidades pero sirve como la base sólida sobre la que construyo cada solución.',
    'design.step1.title': 'DT: Indagación y Empatía',
    'design.step1.desc': 'Fase de Design Thinking para conectar con el usuario real. Ideamos soluciones creativas (incluso las más "ridículas") y definimos casos de uso involucrando a los usuarios desde el inicio.',
    'design.step2.title': 'DT: Prototipado y Selección',
    'design.step2.desc': 'Construimos dos prototipos competitivos y seleccionamos la solución ganadora basada en pruebas de concepto y los mejores resultados obtenidos.',
    'design.step3.title': 'SDLC: Ingeniería y Documentación',
    'design.step3.desc': 'Rigor técnico de ingeniería: Elaboración de SRS/SDS, selección de tecnologías internacionales, definición de estándares de código y arquitectura robusta.',
    'design.step4.title': 'SDLC: Flujos y Wireframes',
    'design.step4.desc': 'Traducción de historias de usuario a diagramas de flujo y wireframes de baja fidelidad para validar la estructura lógica antes del diseño visual.',
    'design.step5.title': 'Design: Alta Fidelidad',
    'design.step5.desc': 'Diseño de la interfaz final aplicando mi filosofía de belleza intuitiva para democratizar la estética en cada interacción funcional.',
    'design.step6.title': 'SDLC: Desarrollo Iterativo',
    'design.step6.desc': 'Codificación por sprints con validaciones constantes. Tomamos la retroalimentación del usuario en tiempo real para pulir el sistema durante el desarrollo.',
    'design.step7.title': 'Lanzamiento y Entrega',
    'design.step7.desc': 'Consolidación de toda la documentación técnica, investigación y el sistema codificado para una entrega satisfactoria y un lanzamiento robusto.',
    
    'design.principles.title': 'Principios de Diseño',
    'design.principles.1.title': 'Psicología Cognitiva',
    'design.principles.1.desc': 'El diseño no es solo estética, es entender cómo funciona la mente. Integro principios psicológicos para asegurar que cada interfaz sea intuitiva por naturaleza, reduciendo la carga cognitiva y permitiendo que cualquier persona aprecie la belleza del producto sin esfuerzo.',
    'design.principles.2.title': 'Impacto Colectivo',
    'design.principles.2.desc': 'Diseño pensando en el usuario no solo como individuo, sino como parte de un colectivo. Creo herramientas que resuelven necesidades comunes y fomentan el empoderamiento grupal, transformando la burocracia en experiencias lúdicas y colaborativas.',
    'design.principles.3.title': 'Estética Democratizada',
    'design.principles.3.desc': 'La belleza visual debe ser accesible para todos. Mi enfoque es crear lenguajes visuales que inspiren y sean fáciles de navegar, democratizando un diseño de alta fidelidad que se adapte dinámicamente a las necesidades reales del mercado.',

    // Projects Page
    'projects.title': 'Proyectos',
    'projects.practice.title': 'Diseños de Practica UI/UX',
    'projects.practice.intro': 'Conceptos y desafíos divertidos de UI/UX que diseño por pura práctica. Aunque algunos puedan ser irreales, me ayudan a explorar mi creatividad y estilo visual.',
    'projects.real.title': 'Proyectos Reales Destacados',
    'projects.real.intro': 'Aplicaciones y plataformas reales que he programado. Estas son soluciones completamente funcionales, con código backend/frontend y desplegadas en producción.',
    'projects.archive.title': 'Otros Proyectos Desarrollados',
    'projects.details': 'Ver detalles',

    // Project Cards - Practice
    'projects.card.timemachine.title': 'Time Machine UI',
    'projects.card.timemachine.desc': 'Interfaz futurista para ajustar paradojas temporales y seleccionar eras históricas con precisión de nanosegundos.',
    'projects.card.health.title': 'Holographic Health',
    'projects.card.health.desc': 'Dashboard médico donde los signos vitales se muestran como proyecciones holográficas y otorgan recompensas.',
    'projects.card.comms.title': 'Intergalactic Comms',
    'projects.card.comms.desc': 'Concepto de chat y gestión de contactos para razas extraterrestres con soporte para traducciones universales.',
    'projects.card.mirror.title': 'Smart Mirror OS',
    'projects.card.mirror.desc': 'Sistema operativo gestual diseñado para espejos inteligentes mientras te preparas para tu día en la mañana.',
    'projects.card.magic.title': 'Magical Inventory',
    'projects.card.magic.desc': 'Una app de realidad aumentada para catalogar artefactos mágicos y organizar baúles de recursos infinitos.',
    'projects.card.dreams.title': 'Dream Recorder UI',
    'projects.card.dreams.desc': 'Editor de video y timeline visual para reproducir, guardar y categorizar los sueños que tuviste anoche.',
    'projects.card.quantum.title': 'Quantum Browser OS',
    'projects.card.quantum.desc': 'Interfaz de un hipotético navegador impulsado por computación cuántica, capaz de ver el futuro de múltiples links a la vez.',
    'projects.card.pet.title': 'Virtual Pet Core',
    'projects.card.pet.desc': 'Cuidado y evolución de mascotas mediante un panel de control avanzado enfocado en bienestar infantil y aprendizaje.',

    // Project Cards - Real
    'projects.card.portfolio.title': 'Portfolio Engine',
    'projects.card.portfolio.desc': 'Un portafolio completamente operativo construido desde cero enfocado en rendimiento, SEO y renderizado nativo de CSS.',
    'projects.card.ecommerce.title': 'E-Commerce API',
    'projects.card.ecommerce.desc': 'Una API REST escalable diseñada para manejar transacciones de comercio electrónico y analíticas de alto tráfico.',
    'projects.card.tasks.title': 'Tasks & Analytics',
    'projects.card.tasks.desc': 'Una aplicación de tablero receptiva que conecta múltiples capas de datos para generar gráficos en tiempo real.',
    'projects.card.ai.title': 'AI Content Engine',
    'projects.card.ai.desc': 'Motor generador de contenidos enfocado en SEO optimizado dinámicamente mediante inteligencia artificial.',
    'projects.card.devii.title': 'Devii - Journaling App',
    'projects.card.devii.desc': 'App móvil para personas con trastornos alimenticios. Fomenta hábitos saludables y autocontrol emocional mediante journaling e interacción con mascotas. Desarrollada bajo ISO 29110.',
    'projects.card.sicz.title': 'SICZ - Instituto de Cultura',
    'projects.card.sicz.desc': 'Sistema para el Instituto Zacatecano de Cultura enfocado en la preservación y modernización de datos culturales. Optimizado para hardware de bajos recursos y máxima accesibilidad.',
    
    'projects.archive.satca.title': 'SATCA UAZ',
    'projects.archive.satca.d1': 'Sistema web CRUD integral para la gestión de oferta académica y créditos universitarios.',
    'projects.archive.satca.d2': 'Permite la visualización de datos académicos por carrera y seguimiento curricular.',
    'projects.archive.satca.d3': 'Desarrollado con Django, Docker y estándares de ingeniería de software.',
    
    'projects.archive.createhammer.title': 'Create: Easier Sheets',
    'projects.archive.createhammer.d1': 'Mod de Minecraft desarrollado para NeoForge 1.21.1 que se integra con el ecosistema de "Create".',
    'projects.archive.createhammer.d2': 'Introduce el "Sturdy Hammer", una herramienta que permite prensar lingotes manualmente en un Depot.',
    'projects.archive.createhammer.d3': 'Ofrece una alternativa para la fase inicial del juego sin requerir configuraciones complejas de energía cinética.',
    
    // Tech labels
    'projects.tech.uiux': 'UI/UX',
    'projects.tech.concept': 'Concepto',
    'projects.tech.developed': 'Desarrollado',
    'projects.tech.backend': 'Backend',
    'projects.tech.tools': 'Tecnologías y herramientas',

    // Archive Projects
    'projects.archive.codecraft.title': 'CodeCraft',
    'projects.archive.codecraft.d1': 'Desarrollé una plataforma de e-commerce a gran escala para desarrolladores de juegos independientes.',
    'projects.archive.codecraft.d2': 'Diseñé e implementé la interfaz de usuario, el backend y la arquitectura de la base de datos.',
    'projects.archive.codecraft.d3': 'Contribuí al diseño de la API RESTful y GraphQL.',
    'projects.archive.codecraft.d4': 'Lideré un equipo de tres ingenieros durante varios meses.',
    
    'projects.archive.cloudmason.title': 'CloudMason',
    'projects.archive.cloudmason.d1': 'Contribuí al diseño de la arquitectura de microservicios para el sistema de distribución de correo electrónico.',
    'projects.archive.cloudmason.d2': 'Creé una infraestructura de backend con colas y un bus de eventos.',
    'projects.archive.cloudmason.d3': 'Diseñado para manejar un alto volumen de ~3 millones de correos electrónicos por día.',

    // Project Details Page
    'details.back': 'Volver a Proyectos',
    'details.asked': '¿Qué se pidió?',
    'details.done': '¿Qué hice?',
    'details.tech': 'Tecnologías',
    'details.analysis': 'Análisis y Desarrollo',
    'details.results': 'Resultados y Aprendizaje',
    'details.hero.alt': 'Visualización del Proyecto',
    'details.placeholder.results': 'Impacto final del proyecto. Logros alcanzados, feedback del cliente o métricas de éxito.',
    'projects.practice.empty': 'Actualmente diseñando nuevas experiencias...',

    // SICZ Details
    'details.sicz.title': 'SICZ - Instituto Zacatecano de Cultura',
    'details.sicz.lead': 'Sistema enfocado en la preservación, actualización y modernización de datos culturales del estado de Zacatecas.',
    'details.sicz.asked': 'Se solicitó un sistema para el Instituto Zacatecano de Cultura (IZC) que permitiera digitalizar y centralizar la información cultural del estado, con un diseño extremadamente minimalista para usuarios con poca experiencia técnica y hardware limitado.',
    'details.sicz.done': 'Diseñador de Producto y Desarrollador. Implementé una interfaz minimalista basada en Bootstrap, optimizada para equipos de bajos recursos. Desarrollé el backend con Django para una gestión de datos eficiente y segura.',
    'details.sicz.analysis.p1': 'El principal desafío fue equilibrar la modernización funcional con las restricciones de hardware. Al ser una dependencia gubernamental, el diseño debía alinearse con la identidad institucional, resultando en una estética sobria y directa.',
    'details.sicz.analysis.p2': 'Dada la demografía de los usuarios internos (mayores de 40 años), cada decisión de diseño buscó la simplicidad radical. Eliminamos animaciones y elementos pesados para garantizar que el sistema corriera fluido en cualquier terminal de la oficina, permitiendo una transición suave del papel a lo digital.',
    'details.sicz.results.p1': 'El sistema resolvió eficazmente la falta de acceso centralizado a la información cultural del estado de Zacatecas. Los clientes quedaron sumamente satisfechos con la facilidad de uso del inventario y la rapidez de respuesta del software en sus equipos actuales.',
    'details.sicz.results.p2': 'Este proyecto reforzó mi capacidad para diseñar bajo restricciones técnicas estrictas, demostrando que la accesibilidad y el rendimiento son pilares fundamentales de una buena ingeniería de software.',
    
    // Devii Details
    'details.devii.title': 'Devii - Mobile App',
    'details.devii.lead': 'Aplicación móvil de journaling y gamificación diseñada para apoyar a personas con trastornos alimenticios.',
    'details.devii.asked': 'Se solicitó una solución creativa bajo el marco de la materia de Ingeniería de Software (ISO 29110) para resolver un problema real. El reto era crear una herramienta que ayudara en el tratamiento de trastornos alimenticios de forma no intrusiva y motivadora.',
    'details.devii.done': 'Diseñador de Producto y Desarrollador. Ideé el concepto desde cero, realicé investigación de usuarios, diseñé la interfaz (UX/UI) con gamificación y desarrollé la aplicación para Android usando Flutter y Firebase.',
    'details.devii.analysis.p1': 'El diseño se inspiró en los Tamagotchis, donde el usuario cuida una mascota virtual. Al registrar comidas y sentimientos (Journaling), el usuario no solo lleva un control para su especialista, sino que también interactúa con su mascota, transformando una tarea tediosa en un ciclo de retroalimentación gratificante.',
    'details.devii.analysis.p2': 'Fue crucial asegurar un diseño "trigger-free" (sin detonantes). Trabajé con el apoyo de un psicólogo para validar que los elementos visuales y el lenguaje no reforzaran conductas negativas. La arquitectura se basó en los estándares de la ISO 29110, asegurando una documentación y procesos de calidad desde el inicio.',
    'details.devii.results.p1': 'El proyecto pasó por múltiples iteraciones (3 sprints) hasta alcanzar un estilo visual que mezcla Material Design con toques personales únicos. Es uno de mis proyectos favoritos por el desafío de aplicar gamificación a un tema tan sensible como la salud mental.',
    'details.devii.results.p2': 'Aunque sigue en desarrollo, el prototipo funcional demostró que la gamificación puede mejorar significativamente la retención del usuario en terapias de largo plazo, abriendo puertas a nuevas formas de intervención digital.',
    'details.devii.connection.title': 'Un Caso de Estudio en Empatía',
    'details.devii.connection.p1': 'Devii no es solo un proyecto técnico; es una pieza profundamente personal. Al diseñar una aplicación para personas con depresión y falta de motivación, me encontré identificándome directamente con los usuarios a los que buscaba ayudar.',
    'details.devii.connection.p2': 'Descubrí que la gamificación puede ser una herramienta poderosa en la salud mental. Al transformar las tareas diarias en interacciones gratificantes con una mascota virtual, podemos proporcionar ese "pequeño empujón" de dopamina necesario para superar la inercia de la depresión.',
    'details.devii.connection.p3': 'Este vínculo emocional fue tan fuerte que me llevó a convertir este proyecto en mi tesis de universidad. Debido a que es una investigación en constante evolución y de gran importancia profesional y personal para mí, he decidido mantener esta sección bajo construcción mientras los resultados finales se consolidan. Por ello, algunas imágenes aún no están listas.',
    
    // Details Commons
    'details.construction.title': 'Proyecto Bajo Construcción',
    'details.construction.desc': 'Aún no listo para mostrar'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.design': 'Design Process',
    'nav.about': 'About me',
    'nav.cv': 'Download CV',
    'nav.theme.light': 'Light Mode',
    'nav.theme.dark': 'Dark Mode',
    'nav.lang.toggle': 'ES | EN',
    'nav.back': 'Back',

    // Page Titles
    'page.title.home': 'Portfolio | Rolando Aguilar Ordaz',
    'page.title.proyectos': 'Projects | Rolando Aguilar Ordaz',
    'page.title.design-process': 'Design Process | Rolando Aguilar Ordaz',
    'page.title.about-me': 'About me | Rolando Aguilar Ordaz',

    // Home - Hero
    'hero.hi': "Hi! I'm Rolando",
    'hero.title': 'I design and build things for the people.',
    'hero.desc': '"Software Engineer with a focus on UI/UX. My goal is to create interfaces where visual beauty and intuition coexist, allowing everyone to enjoy great design without friction."',

    // Home - Projects
    'home.projects.title': 'Projects',
    'home.projects.intro': 'These are some projects I want to highlight for a quick overview of me. You can find them in more detail in the projects section.',
    'home.projects.viewAll': 'View all projects',
    'home.projects.readMore': 'Read more',

    // Bento
    'bento.title': 'Why me?',
    'bento.approach.title': 'Human & Collective Approach',
    'bento.approach.text1': 'My approach is driven by a deep fascination with human-centered design, seeing the user not just as an individual, but as part of a collective. I believe that well-designed interfaces have the power to elevate both satisfaction and group empowerment. My goal is to bridge the gap between technical functionality and collective needs, creating seamless and collaborative experiences.',
    'bento.approach.text2': "Educated at UAZ, I blend a strong technical foundation with a creative flair for aesthetics. I know that optimal UX requires research, prototyping, and iterating based on real feedback. Beyond coding, I'm a gamer and movie enthusiast who values human connections (like those forged at university) and time with my dogs, allowing me to design with an empathetic and down-to-earth perspective.",
    
    'bento.gamification.title': 'Mastery of Gamification',
    'bento.gamification.text': 'As a gamer myself, I love applying game design structures to non-game environments. In our current 2020s context, the success of apps like Duolingo and Waze has proven that gamification is essential for transforming tedious interactions into rewarding and effective journeys.',
    
    'bento.eng.title': 'Engineering with a UX Heart',
    'bento.eng.text': 'Being a Software Engineer allows me to go beyond just building interfaces. I integrate principles of human psychology to deeply understand the user and facilitate usability. My technical background enables me to design dynamic and viable solutions, bridging the gap between system architecture and a seamless, beautiful user experience.',
    
    'bento.ai.title': 'Thinking about AI',
    'bento.ai.text': "While I'm not a fan of chatbots or generative AI for images and videos—a stance that remains firm—I believe AI is exceptionally useful in software development. I see it as a companion to optimize tasks, ensuring that the engineer can have a life outside of work, rather than letting work become their entire life.",

    // About Me
    'about.title': 'About Me',
    'about.bio.hi': "Hi! I'm Rolando 👋",
    'about.bio.p1': 'I am a Software Engineer with a specialized focus on UI/UX and a deep interest in human psychology. My passion is to integrate the principles of the mind with engineering to build products that are not only functionally perfect, but also visually beautiful and intuitive so that any user can appreciate the value of good design.',
    'about.bio.p2': 'Over the years, I have been constantly moving between the most polished frontend and backend architecture. I enjoy taking apart complex problems and assembling dynamic solutions for real users.',
    'about.bio.q': 'What do I plan to do?',
    'about.bio.ans': 'My goal is to lead the creation of digital experiences where exceptional design and engineering unite to serve the user not just as an individual, but as a collective. I seek to democratize visual beauty by making it intuitive and accessible to everyone, solving common needs through tools that inspire and empower.',
    'about.skills.title': 'Tech & Skills Stack',
    'about.fun.title': 'Fun Facts',
    'about.fun.1': 'I have two adopted dogs that I love with all my heart 🐶',
    'about.fun.2': 'I am deeply passionate about music from the last century (70s, 80s, 90s) 🎸',
    'about.fun.3': 'To me, Halo and Star Wars (specifically Andor) are the peak of science fiction 🪐',
    'about.hobbies.title': 'Hobbies',
    'about.hobbies.1': '🎮 Video Games',
    'about.hobbies.2': '🧠 Absorbing information',
    'about.hobbies.3': '🔍 Human Psychology',
    'about.hobbies.4': '📚 Humanitarian Social Movements',
    'about.edu.title': 'Education',
    'about.edu.degree': 'B.S. in Software Engineering',
    'about.edu.uni': 'Universidad Autónoma de Zacatecas "Francisco García Salinas"',
    'about.edu.date': 'December 2023',

    // Design Process
    'design.title': 'Design Process',
    'design.lead': 'I integrate Design Thinking with the traditional Software Development Life Cycle. My interest in the user, the community, and empathy is directly reflected in this methodology, which adapts based on needs but serves as the solid foundation upon which I build every solution.',
    'design.step1.title': 'DT: Inquiry & Empathy',
    'design.step1.desc': 'Design Thinking phase to connect with real users. We ideate creative solutions (even "ridiculous" ones) and define use cases involving users from day one.',
    'design.step2.title': 'DT: Prototyping & Selection',
    'design.step2.desc': 'Building two competitive prototypes and selecting the winning solution based on proof-of-concept tests and the best results achieved.',
    'design.step3.title': 'SDLC: Engineering & Documentation',
    'design.step3.desc': 'Technical engineering rigor: Creating SRS/SDS, selecting international technologies, and defining code standards and robust architecture.',
    'design.step4.title': 'SDLC: Flows & Wireframes',
    'design.step4.desc': 'Translating user stories into flow diagrams and low-fidelity wireframes to validate logic before moving to visual design.',
    'design.step5.title': 'Design: High Fidelity',
    'design.step5.desc': 'Final interface design applying my philosophy of intuitive beauty to democratize aesthetics in every functional interaction.',
    'design.step6.title': 'SDLC: Iterative Development',
    'design.step6.desc': 'Sprint-based coding with constant validations. We integrate user feedback in real-time to polish the system during development.',
    'design.step7.title': 'Delivery & Launch',
    'design.step7.desc': 'Consolidating all technical documentation, research, and the coded system for a successful delivery and robust launch.',

    'design.principles.title': 'Design Principles',
    'design.principles.1.title': 'Cognitive Psychology',
    'design.principles.1.desc': 'Design isn\'t just about aesthetics; it\'s about understanding how the mind works. I integrate psychological principles to ensure every interface is intuitive by nature, reducing cognitive load and allowing anyone to appreciate the beauty of the product effortlessly.',
    'design.principles.2.title': 'Collective Impact',
    'design.principles.2.desc': 'I design with the user in mind not just as an individual, but as part of a collective. I create tools that solve common needs and foster group empowerment, transforming bureaucracy into playful and collaborative experiences.',
    'design.principles.3.title': 'Democratized Aesthetics',
    'design.principles.3.desc': 'Visual beauty should be accessible to everyone. My approach is to create visual languages that inspire and are easy to navigate, democratizing high-fidelity design that dynamically adapts to real market needs.',

    // Projects Page
    'projects.title': 'Projects',
    'projects.practice.title': 'UI/UX Practice Designs',
    'projects.practice.intro': 'Fun UI/UX challenges and concepts that I design for pure practice. Though some might be surreal, they help me explore my creativity and visual style.',
    'projects.real.title': 'Highlighted Real Projects',
    'projects.real.intro': 'Real applications and platforms that I have programmed. These are fully functional solutions, with backend/frontend code and deployed in production.',
    'projects.archive.title': 'Other Developed Projects',
    'projects.details': 'View details',

    // Project Cards - Practice
    'projects.card.timemachine.title': 'Time Machine UI',
    'projects.card.timemachine.desc': 'Futuristic interface to adjust temporal paradoxes and select historical eras with nanosecond precision.',
    'projects.card.health.title': 'Holographic Health',
    'projects.card.health.desc': 'Medical dashboard where vital signs are displayed as holographic projections and award prizes.',
    'projects.card.comms.title': 'Intergalactic Comms',
    'projects.card.comms.desc': 'Chat concept and contact management for alien races with support for universal translations.',
    'projects.card.mirror.title': 'Smart Mirror OS',
    'projects.card.mirror.desc': 'Gestural operating system designed for smart mirrors while you get ready for your day in the morning.',
    'projects.card.magic.title': 'Magical Inventory',
    'projects.card.magic.desc': 'An augmented reality app to catalog magical artifacts and organize infinite resource chests.',
    'projects.card.dreams.title': 'Dream Recorder UI',
    'projects.card.dreams.desc': 'Visual timeline and video editor to play, save, and categorize the dreams you had last night.',
    'projects.card.quantum.title': 'Quantum Browser OS',
    'projects.card.quantum.desc': 'Interface of a hypothetical browser powered by quantum computing, capable of seeing the future of multiple links at once.',
    'projects.card.pet.title': 'Virtual Pet Core',
    'projects.card.pet.desc': 'Taking care of and evolving pets through an advanced control panel focused on children\'s well-being and learning.',

    // Project Cards - Real
    'projects.card.portfolio.title': 'Portfolio Engine',
    'projects.card.portfolio.desc': 'A fully operational portfolio built from scratch focusing on performance, SEO, and native CSS rendering.',
    'projects.card.ecommerce.title': 'E-Commerce API',
    'projects.card.ecommerce.desc': 'A scalable REST API backend meant to handle high-traffic e-commerce transactions and analytics.',
    'projects.card.tasks.title': 'Tasks & Analytics',
    'projects.card.tasks.desc': 'A responsive dashboard application connecting multiple data layers to render real-time charts.',
    'projects.card.ai.title': 'AI Content Engine',
    'projects.card.ai.desc': 'Content generator engine focused on dynamically optimized SEO through artificial intelligence.',
    'projects.card.devii.title': 'Devii - Journaling App',
    'projects.card.devii.desc': 'Mobile app for individuals with eating disorders. Encourages healthy habits and emotional monitoring through journaling and pet interaction. Developed following ISO 29110.',
    'projects.card.sicz.title': 'SICZ - Cultural Institute',
    'projects.card.sicz.desc': 'System for the Zacatecas Cultural Institute focused on cultural data preservation and modernization. Optimized for low-resource hardware and maximum accessibility.',
    
    'projects.archive.satca.title': 'SATCA UAZ',
    'projects.archive.satca.d1': 'Comprehensive CRUD web system for managing academic offerings and university credits.',
    'projects.archive.satca.d2': 'Visualizes academic data by career and enables tracking of departmental curricula.',
    'projects.archive.satca.d3': 'Built with Django, Docker, and rigorous software engineering standards.',
    
    'projects.archive.createhammer.title': 'Create: Easier Sheets',
    'projects.archive.createhammer.d1': 'Minecraft mod developed for NeoForge 1.21.1 that integrates with the "Create" mod ecosystem.',
    'projects.archive.createhammer.d2': 'Introduces the "Sturdy Hammer", a tool to manually press ingots into sheets on a Depot.',
    'projects.archive.createhammer.d3': 'Provides an early-game alternative for sheet production without requiring initial kinetic energy setups.',
    
    // Tech labels
    'projects.tech.uiux': 'UI/UX',
    'projects.tech.concept': 'Concept',
    'projects.tech.developed': 'Developed',
    'projects.tech.backend': 'Backend',
    'projects.tech.tools': 'Technologies & tools',

    // Archive Projects
    'projects.archive.codecraft.title': 'CodeCraft',
    'projects.archive.codecraft.d1': 'Developed a large-scale e-commerce platform for indie game developers',
    'projects.archive.codecraft.d2': 'Designed and implemented UI, backend, and database architecture',
    'projects.archive.codecraft.d3': 'Contributed to RESTful API and GraphQL design',
    'projects.archive.codecraft.d4': 'Led a team of three engineers for several months',
    
    'projects.archive.cloudmason.title': 'CloudMason',
    'projects.archive.cloudmason.d1': 'Contributed to microservices architecture design for email distribution system',
    'projects.archive.cloudmason.d2': 'Created a backend infrastructure with queues and an event bus',
    'projects.archive.cloudmason.d3': 'Designed to handle a high volume ~3 million emails per day',

    // Project Details Page
    'details.back': 'Back to Projects',
    'details.asked': 'The Brief',
    'details.done': 'What I did',
    'details.tech': 'Technologies',
    'details.analysis': 'Analysis & Development',
    'details.results': 'Results & Lessons',
    'details.hero.alt': 'Project Visualization',
    'details.placeholder.asked': 'Description of the initial client requirement or the problem that was sought to be solved with this development.',
    'details.placeholder.done': 'Details of my responsibilities, from UI/UX design to backend implementation or architecture.',
    'details.placeholder.analysis': 'Here goes a deeper explanation of the process. How the problem was approached, the technical challenges encountered, and the design decisions made.',
    'details.placeholder.results': 'Final impact of the project. Achievements, client feedback, or success metrics.',
    'projects.practice.empty': 'Currently designing new experiences...',
    // SICZ Details
    'details.sicz.title': 'SICZ - Zacatecas Cultural Institute',
    'details.sicz.lead': 'System focused on the preservation, updating, and modernization of cultural data for the state of Zacatecas.',
    'details.sicz.asked': "A system was requested for the Zacatecas Cultural Institute (IZC) to digitize and centralize the state's cultural information, with an extremely minimalist design for users with little technical experience and limited hardware.",
    'details.sicz.done': 'Product Designer and Developer. I implemented a minimalist interface based on Bootstrap, optimized for low-resource equipment. I developed the backend with Django for efficient and secure data management.',
    'details.sicz.analysis.p1': 'The main challenge was balancing functional modernization with hardware constraints. As a government dependency, the design had to align with the institutional identity, resulting in a sober and direct aesthetic.',
    'details.sicz.analysis.p2': 'Given the demography of internal users (over 40 years old), every design decision sought radical simplicity. We eliminated animations and heavy elements to ensure the system ran smoothly on any office terminal, allowing a smooth transition from paper to digital.',
    'details.sicz.results.p1': 'The system effectively resolved the lack of centralized access to cultural information in the state of Zacatecas. Clients were extremely satisfied with the ease of use of the inventory and the fast response of the software on their current equipment.',
    'details.sicz.results.p2': 'This project reinforced my ability to design under strict technical constraints, proving that accessibility and performance are fundamental pillars of good software engineering.',
    
    // Devii Details
    'details.devii.title': 'Devii - Mobile App',
    'details.devii.lead': 'Mobile journaling and gamification app designed to support individuals with eating disorders.',
    'details.devii.asked': 'A creative solution was requested as part of a Software Engineering course (ISO 29110) to solve a real-world problem. The challenge was to create a tool to assist in the treatment of eating disorders in a non-intrusive and motivating way.',
    'details.devii.done': 'Product Designer and Developer. I ideated the concept from scratch, conducted user research, designed the UI/UX with gamification principles, and developed the Android application using Flutter and Firebase.',
    'details.devii.analysis.p1': 'The design was inspired by Tamagotchis, where the user cares for a virtual pet. By recording meals and feelings (Journaling), the user not only maintains records for their specialist but also interacts with their pet, transforming a tedious task into a rewarding feedback loop.',
    'details.devii.analysis.p2': "It was crucial to ensure a 'trigger-free' design. I worked with guidance from a psychologist to validate that visual elements and language did not reinforce negative behaviors. The architecture followed ISO 29110 standards, ensuring high-quality documentation and processes from the start.",
    'details.devii.results.p1': 'The project went through multiple iterations (3 sprints) until reaching a visual style that blends Material Design with unique personal touches. It remains one of my favorite projects due to the challenge of applying gamification to a sensitive topic like mental health.',
    'details.devii.results.p2': 'While still in development, the functional prototype demonstrated that gamification can significantly improve user retention in long-term therapies, opening doors to new forms of digital intervention.',
    'details.devii.connection.title': 'A Case Study in Empathy',
    'details.devii.connection.p1': 'Devii is more than just a technical project; it is a deeply personal piece of work. While designing an application for individuals struggling with depression and a lack of motivation, I found myself identifying directly with the users I was aiming to help.',
    'details.devii.connection.p2': 'I discovered that gamification can be a powerful tool in mental health. By transforming routine daily records into rewarding interactions with a virtual pet, we can provide that "small push" of dopamine needed to overcome the inertia associated with depression.',
    'details.devii.connection.p3': "This emotional connection was so strong that it led me to turn this project into my university thesis. Because this remains an evolving research topic of great professional and personal significance to me, I have chosen to keep this section under construction while the final results are being consolidated. For this reason, some visuals are not ready yet.",
    
    // Details Commons
    'details.construction.title': 'Project Under Construction',
    'details.construction.desc': 'Not ready to show yet'
  }
};
