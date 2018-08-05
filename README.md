# REPO_WEWORK 💚💚💚
Proyecto Final Common Core
Preámbulo
El registro de visitantes en una empresa en América Latina es un proceso tedioso y manual. Lo común es que una persona esté en la recepción tomando nota - a veces con papel y lápiz - de cada visitante. Por razones de seguridad, usualmente piden a cada visitante dejar una identificación. Si vivimos en la era digital, ¿por qué seguimos registrando visitantes como si fuera 1985? ¿Qué tal si sustituimos a la persona en recepción por una tablet? ¿Qué tal si en lugar de pedir una identificación, tomamos una foto?

Introducción
En este proyecto la empresa de coworking donde opera Laboratoria en tu ciudad ha decidido contratarte a ti y a dos compañeras para reinventar su proceso de registro de visitantes. Con la entrada de WeWork al mercado latinoamericano, tienen mucha más competencia y necesitan invertir en tecnología para mejorar su servicio; el registro de visitantes es un primer acercamiento. Te dan la referencia de Envoy en EEUU (un servicio que ofrece un sistema digital de registro de visitantes) y ustedes tienen que desarrollar una versión mínima viable (ver anexo I).

Objetivos de aprendizaje
El objetivo principal de este proyecto es que pongas en práctica todo lo aprendido durante el common core, con foco en la calidad, trabajando en un equipo multifuncional y presentando tu solución a una audiencia.

Consideraciones generales
Para completar este proyecto deberás trabajar en un equipo de tres y seguir las siguientes consideraciones:

Planificación y organización
Roles, squad multifuncional
Cada integrante del equipo debe asumir alguno de los siguientes “roles” (*) liderando las siguientes áreas de trabajo:

Diseñadora UX Diseñar la experiencia de la aplicación (flujo, interacción, etc.). Identificar, documentar y priorizar las historias de usuario. Crear el diseño visual de la interfaz.
Desarrolladoras Front-end Implementar la interfaz de usuario diseñada (HTML/CSS/JS). Deben dividirse las funcionalidades entre las dos desarrolladoras. Todas los desarrollos deben incluir pruebas unitarias.
Al no haber rol de Product Manager, las responsabilidades de gestión son compartidas entre todas las integrantes.

Planificación inicial
Es muy importante que al dividirse/distribuir/repartir el trabajo, lo hagan pensando de manera ágil y no en cascada. Es decir, si una de ustedes está esperando a que otra termine “su parte” para empezar a trabajar, algo anda mal, ¡eso se parece a la organización del trabajo industrial!. Todas son responsables del producto final y todas pueden (y deben) colaborar en el diseño, el desarrollo y la planificación.

TIPS:
Recuerda a nuestras nuevas BFFs, las historias de usuario
Ten siempre en mente evitar el desperdicio. Por ejemplo: ¿de qué sirve que tengas el prototipo del 100% de un proyecto en Figma (alta definición) si solamente implementas el 50% del proyecto? El otro 50% del prototipo se podría considerar como desperdicio.
Limitar el trabajo en progreso. Si son 3 personas, procuren no tener más de 3 tareas a la vez en “doing”.
¿Estás segura de que quieren seguir invirtiendo más minutos de tu vida (que no volverán) en discutir los colores del logotipo? Aquí hay algo que te puede ayudar a decidir.
Detalles sobre la implementación
La lógica del proyecto debe estar implementada completamente en JavaScript (ES6), HTML y CSS.
Está permitido usar librerías o frameworks tanto de CSS como de JS, pero no es obligatorio. Elige bien las batallas que quieres luchar.
En este proyecto, no contamos con un boilerplate, por lo que deberás definir la estructura de carpetas y archivos que consideres necesaria, puedes guiarte de los proyectos anteriores.
Los tests y el setup necesario para ejecutarlos serán hechos enteramente por ti.
Para armar las interfaces visuales utiliza como base alguna de estas guías de componentes:
Guía Desktop 1
Guía Desktop 2
Guía Mobile 1
Guía Mobile 2
Guardar la data de los visitantes de forma remota usando Firebase.
A nivel de arquitectura:
El uso de Firebase implica que debes trabajar bajo una arquitectura serverless.
Te sugerimos que desacoples el proyecto en componentes y manejo de estados para que trabajes de forma ordenada y facilite la implementación de tus tests. Revisa la charla y el blog post de Lupo sobre este tema ;)
Tiempo
Tendrán 3 días para trabajar en este proyecto. Este tiempo es un poco corto para iterar y hacer las ceremonias que usualmente hacemos. Puedes elegir hacer tus sprints o simplemente correr un único sprint con “hitos”. Es decisión del equipo. Lo que sí les recomendamos es asegurar que usan bien los dailys, esto les permitirá hacer “mini” iteraciones cada 24 horas.

Entregables obligatorios
Los criterios mínimos de aceptación para considerar que has completado este proyecto son:

Diseño:
Entregables de diseño :

Haber realizado y documentado (con fotos, videos, aprendizajes, etc.) al menos 3 entrevistas con usuarios diferentes.
Haber probado de “cliente incógnito” el registro de visitas en WeWork y compararla con tu solución y con la referencia que te brindaron (Envoy).
Entregar un prototipo clickeable de alta fidelidad hecho en Figma u otro editor gráfico como Illustrator, Photoshop, PowerPoint, Keynote, etc. linkeado con Marvel / Invision.
Haber hecho y documentado (con fotos, videos, aprendizajes, lista de cambios realizados, etc.) sesiones de testing del prototipo con usuarios.
Implementación:
Tu producto final debe estar desplegado en la web y, como mínimo, debe:
Permitir al usuario visitante registrarse con sus datos personales, incluyendo su foto.
Permitir al usuario visitante seleccionar a la persona a quien viene a visitar.
Notificar a la persona a quien vienen a visitar. Para esto te recomendamos revisar:
Los servicios de Sendgrid
El API de Mandrill para mandar correos de forma automática
El API de notificaciones de HTML 5
Permitir al usuario administrador visualizar la data de los visitantes, incluyendo la fecha y hora de registro de cada uno
Los tests unitarios deben cubrir un mínimo del 70% de statements, functions y lines, y un mínimo del 50% de branches.
Presentación:
Deberás hacer dos presentaciones ante un jurado que te dará feedback inmediatamente. La primera será a mitad de semana para compartir tu avance y la segunda será al final de la semana para compartir tu producto final.

Las reglas para las dos presentaciones son:
Tendrás 3 minutos de presentación, ni un segundo más.
Habrán 2 minutos para preguntas del jurado.
Te recomendamos que la mayoría del tiempo lo enfoque en demostrar cómo se utiliza tu producto, el cual debe estar desplegado en la web.
NO se permite presentar cosas en tu local ni videos previamente grabados.
NO inviertas tiempo presentándote, ni listando al equipo, ni dando una introducción que ya el jurado conoce. Como al hacer el producto, en la presentación también debes priorizar qué decir.
NO utilices slides de powerpoint, enfócate en presentar tu DEMO.
Durante el DEMO, enfócate en narrar y explicar el valor que tu producto le brinda al usuario.
Cuida tu lenguaje no verbal; recuerda mirar al público y tener un tono de voz adecuado para que toda la audiencia te pueda escuchar.
Idealmente debe presentar una sola integrante del equipo. Si deciden que presenta más de una persona, asegúrense de haber coordinado bien el flujo de la presentación.
Hacker edition
Features/características extra sugeridas:

Como el WiFi a veces es nuestro peor enemigo, ¿es posible que tu aplicación pueda, sin Internet, registrar los datos del visitante, guardar los datos localmente y cuando tenga Internet mandarlos a la base de datos? Si te animas a hacer esto dale una revisada a los siguientes recursos:
Progressive Web Apps
Offline first manifesto
También sería ideal poder registrar la firma del visitante en el registro.
Sería genial también permitir generar un “pase” para el visitante, así fácilmente a la vista se sabe quién está de visita.
Al administrador le interesa tener un dashboard de “analíticas” de los visitantes: # de visitantes por día, horarios frecuentes de visita, a quién vienen a visitar, etc.
Anexo I: Construyendo un MVP
Una modelo mental común para representar el desarrollo de productos es visualizarlo como una pirámide: el producto que construyes consiste en una serie de funcionalidades que le dan beneficios al usuario, los cuales le generan valor. El detalles está en que no todas las funcionalidades que creas le agregan la misma cantidad de valor al usuario. Es más, muchas funcionalidades le agregan cero valor. Son cosas que creemos que generan valor, pero que no terminan haciéndolo (recuerda que vivimos en un mundo incierto, donde no podemos predecir). Por lo tanto, al definir tu producto mínimo viable (MVP), tu misión es crear las mínimas funcionalidades que maximicen el valor que entregas. Menos es más ;) 
