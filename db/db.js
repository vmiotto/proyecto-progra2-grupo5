
const datos = [
    {
        id: 1,
        foto: "../imagenes/mercedes.jpg",
        nombre: 'Mercedes-Benz Clase S',
        descripcion: 'El Mercedes-Benz Clase S es una obra maestra de la ingeniería automotriz que encarna el lujo en cada detalle. Con un diseño elegante y sofisticado, este sedán de alta gama ofrece un interior meticulosamente diseñado con materiales de primera calidad y tecnología de vanguardia que redefine la experiencia de conducción. Desde su suave y potente motor hasta sus innovadoras características de seguridad y confort, el Clase S es simplemente sublime en todos los sentidos.',
        comentarios: [
            {
                usuario: '@lujo_extremo',
                texto: '¡El Mercedes-Benz Clase S es simplemente sublime!',
                perfil: '../imagenes/persona1.jpg'
            },
            {
                usuario: '@auto_enthusiast',
                texto: 'Nada supera al Clase S en términos de lujo y confort.',
                perfil: '../imagenes/persona2.jpg'
            },
            {
                usuario: '@luxury_critic',
                texto: 'El diseño interior del Clase S es incomparable.',
                perfil: '../imagenes/persona3.jpg'
            },
            {
                usuario: '@techlover99',
                texto: 'La tecnología del Clase S es impresionante.',
                perfil: '../imagenes/persona1.jpg'
            }
        ]
    },
    {
        id: 2,
        foto: '../imagenes/audi.jpg',
        nombre: 'Audi A8',
        descripcion: 'El Audi A8 es el epítome de la elegancia y el rendimiento refinado. Con su distintivo diseño exterior y una cabina lujosamente equipada, este sedán de lujo combina un estilo imponente con una experiencia de conducción excepcional. Cada detalle, desde los asientos de cuero premium hasta los avanzados sistemas de asistencia al conductor, refleja la artesanía y la atención al detalle que caracteriza a la marca Audi.',
        comentarios: [
            {
                usuario: '@petrolhead89',
                texto: 'El Audi A8 nunca deja de impresionar.',
                perfil: '../imagenes/persona1.jpg'
            },
            {
                usuario: '@carlover123',
                texto: '¡El A8 es una obra maestra de la ingeniería alemana!',
                perfil: '../imagenes/persona2.jpg'
            },
            {
                usuario: '@luxurydriver',
                texto: 'El A8 redefine el lujo en la carretera.',
                perfil: '../imagenes/persona3.jpg'
            }
        ]
    },
    {
        id: 3,
        foto: '../imagenes/bmw.jpg',
        nombre: 'BMW Serie 7',
        descripcion: 'El BMW Serie 7 es un símbolo de lujo y confort incomparables. Diseñado para aquellos que exigen lo mejor, este sedán de alta gama ofrece un equilibrio perfecto entre rendimiento dinámico y elegancia refinada. Con su potente motor, tecnología de última generación y un interior exquisitamente diseñado, el Serie 7 redefine el estándar de excelencia en el segmento de sedanes de lujo.',
        comentarios: [
            {
                usuario: '@bmw_fanatic',
                texto: 'El Serie 7 es simplemente magnífico.',
                perfil: '../imagenes/persona1.jpg'
            },
            {
                usuario: '@german_engineering',
                texto: '¡BMW Serie 7, un sueño hecho realidad!',
                perfil: '../imagenes/persona2.jpg'
            },
            {
                usuario: '@luxury_enthusiast',
                texto: 'El Serie 7 es la definición de elegancia.',
                perfil: '../imagenes/persona3.jpg'
            }
        ]
    },
    {
        id: 4,
        foto: '../imagenes/mclaren.webp',
        nombre: 'McLaren 720S',
        descripcion: 'El McLaren 720S es una obra maestra de la ingeniería automotriz que combina innovación y rendimiento en un superdeportivo impresionante. Con un diseño aerodinámico y elegante, este vehículo de alto rendimiento ofrece una experiencia de conducción emocionante y envolvente. Desde su potente motor hasta su chasis ligero y su avanzado sistema de suspensión, el 720S redefine el concepto de velocidad y precisión en la carretera.',
        comentarios: [
            {
                usuario: '@speed_demon',
                texto: 'El McLaren 720S redefine el concepto de velocidad.',
                perfil: '../imagenes/persona1.jpg'
            },
            {
                usuario: '@mclaren_aficionado',
                texto: 'El McLaren 720S es simplemente impresionante.',
                perfil: '../imagenes/persona2.jpg'
            },
            {
                usuario: '@tracklover',
                texto: 'La experiencia de conducir un 720S es única.',
                perfil: '../imagenes/persona3.jpg'
            }
        ]
    },
        {
            id: 5,
            foto: '../imagenes/rolls.jpeg',
            nombre: 'Rolls-Royce Cullinan',
            descripcion: 'El Rolls-Royce Cullinan es el SUV de lujo definitivo, diseñado para aquellos que buscan lo mejor de lo mejor. Con su presencia imponente y su interior lujosamente espacioso, este vehículo ofrece una combinación incomparable de comodidad, estilo y prestaciones. Cada detalle, desde los acabados en madera de nogal hasta los asientos de cuero cosidos a mano, refleja la artesanía y la atención al detalle que caracteriza a la marca Rolls-Royce.',
            comentarios: [
                {
                    usuario: '@rolls_royce_lover',
                    texto: 'El Cullinan es simplemente majestuoso en todos los aspectos.',
                    perfil: '../imagenes/persona1.jpg'
                },
                {
                    usuario: '@luxury_suv_enthusiast',
                    texto: '¡El Rolls-Royce Cullinan redefine el segmento de los SUV de lujo!',
                    perfil: '../imagenes/persona3.jpg'
                }
            ]
        },
        {
            id: 6,
            foto: '../imagenes/Bentley.jpg',
            nombre: 'Bentley Flying Spur',
            descripcion: 'El Bentley Flying Spur es una expresión de lujo, elegancia y rendimiento excepcionales. Con su diseño atemporal y su poderoso motor, este sedán de alta gama ofrece una experiencia de conducción incomparable. Desde su exquisito interior hasta su suave y potente rendimiento en carretera, el Flying Spur es el epítome del refinamiento británico.',
            comentarios: [
                {
                    usuario: '@bentley_aficionado',
                    texto: 'El Bentley Flying Spur es el epítome del refinamiento británico.',
                    perfil: '../imagenes/persona1.jpg'
                },
                {
                    usuario: '@luxury_car_collector',
                    texto: '¡El Flying Spur es una obra maestra de la ingeniería automotriz!',
                    perfil: '../imagenes/persona2.jpg'
                }
            ]
        },
        {
            id: 7,
            foto: '../imagenes/bugatti.jpeg',
            nombre: 'Bugatti Divo',
            descripcion: 'El Bugatti Divo es una máquina de rendimiento diseñada para dominar las curvas y ofrecer una experiencia de conducción incomparable. Con su diseño aerodinámico y su potente motor, este superdeportivo impresionante ofrece un rendimiento excepcional en la pista y en la carretera. Cada detalle, desde su chasis ligero hasta su avanzado sistema de tracción integral, refleja la dedicación de Bugatti a la excelencia en la ingeniería automotriz.',
            comentarios: [
                {
                    usuario: '@bugatti_addict',
                    texto: 'El Bugatti Divo es una bestia indomable en la carretera.',
                    perfil: '../imagenes/persona1.jpg'
                },
                {
                    usuario: '@speed_king',
                    texto: '¡El Divo es la máxima expresión de la ingeniería automotriz!',
                    perfil: '../imagenes/persona3.jpg'
                }
            ]
        },
        {
            id: 8,
            foto: '../imagenes/porsche.jpg',
            nombre: 'Porsche 911 Turbo S',
            descripcion: 'El Porsche 911 Turbo S es un icono del rendimiento y la tecnología de vanguardia. Con su diseño aerodinámico y su potente motor, este deportivo de alto rendimiento ofrece una experiencia de conducción emocionante y envolvente. Desde su lujoso interior hasta su impresionante rendimiento en carretera, el 911 Turbo S es una máquina impresionante en todos los sentidos.',
            comentarios: [
                {
                    usuario: '@porsche_enthusiast',
                    texto: 'El Porsche 911 Turbo S es una máquina impresionante en todos los sentidos.',
                    perfil: '../imagenes/persona1.jpg'
                },
                {
                    usuario: '@speed_freak',
                    texto: '¡El 911 Turbo S siempre deja una sonrisa en mi rostro!',
                    perfil: '../imagenes/persona2.jpg'
                }
            ]
        },
        {
            id: 9,
            foto: '../imagenes/aston.jpg',
            nombre: 'Aston Martin DB11',
            descripcion: 'El Aston Martin DB11 es una combinación perfecta de estilo, rendimiento y artesanía británica. Con su elegante diseño exterior y su potente motor, este coupé de alta gama ofrece una experiencia de conducción emocionante y lujosa. Cada detalle, desde sus líneas aerodinámicas hasta su interior meticulosamente diseñado, refleja la pasión de Aston Martin por la excelencia en la ingeniería automotriz.',
            comentarios: [
                {
                    usuario: '@aston_martin_fanatic',
                    texto: 'El Aston Martin DB11 es un símbolo de estilo y rendimiento.',
                    perfil: '../imagenes/persona1.jpg'
                },
                {
                    usuario: '@luxury_car_enthusiast',
                    texto: '¡El DB11 es simplemente impresionante en todos los sentidos!',
                    perfil: '../imagenes/persona3.jpg'
                }
            ]
        },
        {
            id: 10,
            foto: '../imagenes/lexus.jpeg',
            nombre: 'Lexus LC 500',
            descripcion: 'El Lexus LC 500 es un gran turismo de lujo que cautiva con su diseño cautivador y su rendimiento emocionante. Con su distintivo estilo exterior y su interior lujosamente equipado, este vehículo ofrece una experiencia de conducción incomparable. Desde su potente motor hasta sus avanzadas características de seguridad y entretenimiento, el LC 500 es la combinación perfecta de lujo y deportividad.',
            comentarios: [
                {
                    usuario: '@lexus_enthusiast',
                    texto: 'El Lexus LC 500 es una combinación perfecta de lujo y deportividad.',
                    perfil: '../imagenes/persona1.jpg'
                },
                {
                    usuario: '@performance_lover',
                    texto: '¡El LC 500 ofrece una experiencia de conducción incomparable!',
                    perfil: '../imagenes/persona2.jpg'
                }
            ]
        }
    ]
    
    module.exports = datos
