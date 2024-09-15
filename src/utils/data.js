/* --------------------- DATOS DEL DOFA ---------------------------- */
export const dofa_data = [
    {
        id: 1,
        type: "Debilidades",
        items: [
            { 
                id: 1, 
                name: "Competencia Intensa",
                description: `
                    El mercado de smartphones de gama media está saturado con muchas marcas 
                    ofreciendo especificaciones similares, lo que puede hacer que el Redmi 
                    Note 11 se pierda entre la competencia.
                ` 
            },
            { 
                id: 2, 
                name: "Sin Carga Rápida Avanzada",
                description: `
                    A pesar de su batería de gran capacidad, el Redmi Note 11 no ofrece carga 
                    rápida a niveles superiores, lo que podría ser un inconveniente para los 
                    usuarios que necesitan recargar rápidamente.
                ` 
            },
            { 
                id: 3, 
                name: "Capacidades de Cámara Limitadas",
                description: `
                    Aunque la cámara de 50 MP es competente, puede no estar a la par con los 
                    dispositivos de gama alta en términos de calidad fotográfica y características 
                    avanzadas.
                ` 
            }
        ]
    },
    {
        id: 2,
        type: "Oportunidades",
        items: [
            { 
                id: 1, 
                name: "Expansión en Nuevos Mercados",
                description: `
                    El Redmi Note 11 tiene el potencial de penetrar en mercados emergentes y 
                    en desarrollo donde la demanda de smartphones asequibles y de alta calidad 
                    está en aumento.
                ` 
            },
            { 
                id: 2, 
                name: "Actualizaciones de Software",
                description: `
                    Mejorar y mantener actualizaciones periódicas del sistema operativo puede 
                    atraer a los usuarios interesados en un dispositivo que siempre esté al día 
                    con las últimas funciones y seguridad.
                ` 
            },
            { 
                id: 3, 
                name: "Ampliación de la Línea de Productos",
                description: `
                    Xiaomi puede aprovechar el éxito del Redmi Note 11 para lanzar versiones 
                    mejoradas o modelos relacionados, capturando una mayor cuota de mercado.
                ` 
            }
        ]
    },
    {
        id: 3,
        type: "Fortalezas",
        items: [
            { 
                id: 1, 
                name: "Pantalla AMOLED de Alta Calidad",
                description: `
                    La pantalla AMOLED de 6.43 pulgadas proporciona colores vibrantes y negros 
                    profundos, mejorando la experiencia visual y el consumo de contenido multimedia.
                ` 
            },
            { 
                id: 2, 
                name: "Batería de Larga Duración",
                description: `
                    Con una capacidad de 5000 mAh, el Redmi Note 11 asegura una duración prolongada de la 
                    batería, permitiendo un uso intensivo durante todo el día sin necesidad de recargar.
                ` 
            },
            { 
                id: 3, 
                name: "Rendimiento Eficiente",
                description: `
                    Equipado con el procesador Snapdragon 680 y 4GB de RAM, el dispositivo ofrece un 
                    rendimiento fluido y eficiente para tareas diarias y multitarea sin sobresaltos.
                ` 
            }
        ]
    },
    {
        id: 4,
        type: "Amenazas",
        items: [
            { 
                id: 1, 
                name: "Fluctuaciones de Precio en el Mercado",
                description: `
                    Cambios en el precio de los componentes y la economía global pueden afectar el 
                    precio final del dispositivo y su competitividad en el mercado.
                ` 
            },
            { 
                id: 2, 
                name: "Cambios en las Preferencias del Consumidor",
                description: `
                    Las tendencias del mercado pueden cambiar rápidamente, y las preferencias de los 
                    consumidores pueden inclinarse hacia características o tecnologías nuevas que el 
                    Redmi Note 11 no ofrezca.
                ` 
            },
            { 
                id: 3, 
                name: "Problemas de Suministro",
                description: `
                    Problemas en la cadena de suministro o dificultades logísticas podrían afectar la 
                    disponibilidad del producto y su capacidad para satisfacer la demanda.
                ` 
            }
        ]
    }
]

/* --------------------- DATOS DE IDENTIDAD ORGANIZACIONAL ---------------------------- */
export const org_iden_data = [
    {
        name: "Misión",
        description: `
            Nuestra misión es ofrecer tecnología avanzada a precios accesibles, mejorando la vida 
            cotidiana de las personas a través de productos innovadores y de alta calidad. Buscamos 
            ser una marca de confianza que inspire y conecte a los usuarios con el futuro digital.
        `
    },
    {
        name: "Visión",
        description: `
            Aspiramos a ser el líder global en tecnología accesible, creando dispositivos que combinan innovación, 
            rendimiento y diseño a la vanguardia. Nos comprometemos a transformar la forma en que las personas 
            interactúan con la tecnología y a fomentar una sociedad más conectada y avanzada.
        `
    },
    {
        name: "Políticas",
        description: `
            Nos comprometemos a mantener los más altos estándares de calidad en todos nuestros productos, asegurando 
            durabilidad, funcionalidad y satisfacción del cliente, fomentando la innovación continua en el diseño y 
            desarrollo de productos, buscando siempre nuevas formas de mejorar la experiencia del usuario, para promover 
            prácticas sostenibles y responsables en nuestra cadena de suministro y en el impacto ambiental de nuestros 
            productos, contribuyendo positivamente a la comunidad global.
        `
    }
]

/* --------------------- DATOS DE OBJETIVOS ESTRATEGICOS ---------------------------- */
export const objectives_data = {
    columns: ["Código", "Objetivo", "Meta", "Avance", "Cumplimiento", "Estado"],
    data: [
        { 
            id: 1, 
            goal: `
                Ampliar la distribución del Xiaomi Redmi Note 11 en nuevos mercados internacionales, 
                aumentando su disponibilidad y penetración global en el próximo año.
            `, 
            target: 10000000, 
            progress: 2000000 
        },
        { 
            id: 2, 
            goal: `
                Implementar actualizaciones periódicas de software y soporte técnico 
                eficiente para asegurar una experiencia de usuario fluida y actualizada.
            `, 
            target: 5000000, 
            progress: 100000
        },
        { 
            id: 3, 
            goal: `
                Captar una mayor participación en el mercado de smartphones de gama media, 
                superando a la competencia en términos de ventas y reconocimiento de marca.
            `, 
            target: 8000000, 
            progress: 5000000
        },
        { 
            id: 4, 
            goal: `
                Mejorar la eficiencia en la cadena de suministro y reducir costos operativos para 
                mantener precios competitivos y garantizar una oferta constante del Redmi Note 11.
            `, 
            target: 6000000, 
            progress: 4500000 
        },
        { 
            id: 5, 
            goal: `
                Desarrollar nuevas características y mejoras en el diseño del dispositivo para mantener 
                la relevancia en el mercado y satisfacer las cambiantes expectativas de los consumidores.
            `, 
            target: 3000000, 
            progress: 2700000 
        }
    ].map((item) => {
        item.compliance = 100 * item.progress / item.target
        return item
    })
}