const places = [
  {
    id: 1,
    title: 'Burguer King',
    fullTitle: '',
    fileName: 'BurguerKing.jpeg',
    address: "R. José Camilo de Camargo, 5 - Lot. Remanso Campineiro, Hortolândia - SP",
    phone: "-",
    city: 'Hortolandia',
    sections: [],
    url: 'https://www.google.com/maps/dir//Burger+King+-+R.+Jos%C3%A9+Camilo+de+Camargo,+5+-+Lot.+Remanso+Campineiro,+Hortol%C3%A2ndia+-+SP,+13184-494/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8beaaa291dba9:0x7594e7a3714d260e?sa=X&ved=2ahUKEwjur4Xb18P_AhUcrpUCHXuwCGYQ48ADegQIWxAI',
  },
  {
    id: 2,
    title: 'Matuto',
    fullTitle: '',
    fileName: 'matuto.jpeg',
    address: 'R. José Camilo de Camargo, 5 - Lot. Remanso Campineiro, Hortolândia - SP',
    phone: '(19) 3116-1010',
    city: 'Campinas',
    sections: [],
    url: 'https://www.google.com/maps/dir/-22.8294656,-47.1924736/O+Matuto+Churrascaria+-+Express+-+R.+Jos%C3%A9+Camilo+de+Camargo,+5+-+Lot.+Remanso+Campineiro,+Hortol%C3%A2ndia+-+SP,+13184-494/@-22.8452252,-47.2215019,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94c8beaa978e98c1:0xab538cf94c4ebe83!2m2!1d-47.213365!2d-22.8630398?entry=ttu'
  },
  {
    id: 3,
    title: 'Fatec',
    fullTitle: 'Fatec - Faculdade de Tecnologia',
    fileName: 'fatec.jpeg',
    address: 'Av. Cônego Antônio Roccato, 593 - Jardim Santa Monica, Campinas - SP',
    phone: '(11) 4004-6446',
    city: 'Campinas',
    postcode: '13082-015',
    sections: [
      {
        sectionTitle: 'Sobre',
        subtitle: 'Um pouquinho sobre nós',
        text: `A fatec é uma instituição de ensino superior com especialização em cursos tecnológicos,a faculdade oferece mais de 60 curso de graduação presenciais. e o melhor ainda, é totalmente gratuito, que possibilita diversas  oportunidades no mercado de trabalho.
        Vale lembrar que a fatec constituí em cursos tecnológicos que são graduações menores e que duram de dois a três anos e meio`
      },
      {
        sectionTitle: 'Vestibular',
        subtitle: 'Mas como funciona o vestibular da Fatec?',
        text: `O vestibular possui apenas uma etapa, a prova é dividida em duas partes sendo elas uma prova de múltipla escolha e uma redação com duração de 5 horas`
      }
    ],
    url: 'https://www.google.com/maps/place/Av.+C%C3%B4nego+Ant%C3%B4nio+Roccato,+593+-+Ch%C3%A1caras+Campos+dos+Amarais,+Campinas+-+SP,+13082-015/@-22.8647531,-47.101121,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8c700be958dd1:0xcf50cbfc525bd404!8m2!3d-22.8647531!4d-47.101121!16s%2Fg%2F11h4nlwh7v?entry=ttu'
  },
  {
    id: 4,
    title: 'Mc Donalds',
    fullTitle: '',
    fileName: 'mc-donalds.jpeg',
    address: 'R. José Camilo de Camargo, 5 - Lot. Remanso Campineiro, Hortolândia - SP',
    phone: '(16) 3116-1080',
    city: 'Hortolandia',
    sections: [],
    url: 'https://www.google.com/maps/dir//Mc+Donalds+-+R.+Jos%C3%A9+Camilo+de+Camargo,+5+-+Lot.+Remanso+Campineiro,+Hortol%C3%A2ndia+-+SP,+13184-494/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8beaa9807eb6b:0x9bec13a33626ea60?sa=X&ved=2ahUKEwjCv7X_18P_AhX3rZUCHdVLC5oQ48ADegQIGBAJ'
  },
  {
    id: 5,
    title: 'Subway',
    fullTitle: '',
    fileName: 'subway.jpeg',
    address: 'R. José Camilo de Camargo, 05 - LOJA 312 - Remanso Campineiro, Hortolândia - SP',
    phone: '(19) 3116-1137',
    city: 'Hortolandia',
    sections: [],
    url: 'https://www.google.com/maps/dir//Subway+Shopping+Hortol%C3%A2ndia+-+R.+Jos%C3%A9+Camilo+de+Camargo,+05+-+LOJA+312+-+Remanso+Campineiro,+Hortol%C3%A2ndia+-+SP,+13184-494/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8beaa8e500001:0x18d7f4489a7c7d2f?sa=X&ved=2ahUKEwjioMKI2MP_AhV7rJUCHTZqD5kQ48ADegQIGBAJ'
  },
  {
    id: 6,
    title: "Bob's",
    fullTitle: '',
    fileName: 'bobs.jpeg',
    address: 'Av. José Paulino, 2600 - Jardim America, Paulínia - SP',
    phone: '(19) 3244-9613',
    city: 'Paulinia',
    sections: [],
    url: "https://www.google.com/maps/dir//Bob's+Shakes+-+Av.+Jos%C3%A9+Paulino,+2600+-+Jardim+America,+Paul%C3%ADnia+-+SP,+13140-707/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8bf3faa88f873:0x5268f5c8b3fbc086?sa=X&hl=pt-BR&ved=2ahUKEwjz176Y2MP_AhX9qZUCHU4oAMcQ48ADegQIEBAI"
  },
  {
    id: 7,
    title: 'Outback',
    fullTitle: '',
    fileName: 'outback.jpeg',
    address: 'Av. Guilherme Campos, 500 - R 006 - Jardim Santa Genebra, Campinas - SP',
    phone: '(19) 3756-9877',
    city: 'Campinas',
    sections: [],
    url: 'https://www.google.com/maps/dir//Outback+-+Av.+Guilherme+Campos,+500+-+R+006+-+Jardim+Santa+Genebra,+Campinas+-+SP,+13087-901/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8c68483bf0eff:0x5e8dfca78ae91f2d?sa=X&ved=2ahUKEwj1yLSJzsP_AhXcHbkGHSLaCykQ48ADegQIGBAJ'
  },
]

export default places