const places = [
  {
    id: 1,
    title: 'Burguer King',
    fileName: 'BurguerKing.jpeg',
    address: "R. José Camilo de Camargo, 5 - Lot. Remanso Campineiro, Hortolândia - SP",
    phone: "-",
    url: 'https://www.google.com/maps/dir//Burger+King+-+R.+Jos%C3%A9+Camilo+de+Camargo,+5+-+Lot.+Remanso+Campineiro,+Hortol%C3%A2ndia+-+SP,+13184-494/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8beaaa291dba9:0x7594e7a3714d260e?sa=X&ved=2ahUKEwjur4Xb18P_AhUcrpUCHXuwCGYQ48ADegQIWxAI'
  },
  {
    id: 2,
    title: 'Matuto',
    fileName: 'matuto.jpeg',
    address: 'R. José Camilo de Camargo, 5 - Lot. Remanso Campineiro, Hortolândia - SP',
    phone: '(19) 3116-1010',
    url: 'https://www.google.com/maps/dir/-22.8294656,-47.1924736/O+Matuto+Churrascaria+-+Express+-+R.+Jos%C3%A9+Camilo+de+Camargo,+5+-+Lot.+Remanso+Campineiro,+Hortol%C3%A2ndia+-+SP,+13184-494/@-22.8452252,-47.2215019,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94c8beaa978e98c1:0xab538cf94c4ebe83!2m2!1d-47.213365!2d-22.8630398?entry=ttu'
  },
  {
    id: 3,
    title: 'Pizza Hut',
    fileName: 'pizza-hut.jpeg',
    address: 'Av. José de Souza Campos, 900 - Nova Campinas, Campinas - SP',
    phone: '(11) 4004-6446',
    url: 'https://www.google.com/maps/dir/-22.8294656,-47.1924736/Pizza+Hut+Norte+Sul:+Pizzaria,+Delivery+em+Campinas+SP+-+Av.+Jos%C3%A9+de+Souza+Campos,+900+-+Nova+Campinas,+Campinas+-+SP,+13092-123/@-22.8790886,-47.1902519,11.9z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94c8cf4508c00001:0x6e80b01e6131681b!2m2!1d-47.0468233!2d-22.8976661?entry=ttu'
  },
  {
    id: 4,
    title: 'Mc Donalds',
    fileName: 'mc-donalds.jpeg',
    address: 'R. José Camilo de Camargo, 5 - Lot. Remanso Campineiro, Hortolândia - SP',
    phone: '(16) 3116-1080',
    url: 'https://www.google.com/maps/dir//Mc+Donalds+-+R.+Jos%C3%A9+Camilo+de+Camargo,+5+-+Lot.+Remanso+Campineiro,+Hortol%C3%A2ndia+-+SP,+13184-494/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8beaa9807eb6b:0x9bec13a33626ea60?sa=X&ved=2ahUKEwjCv7X_18P_AhX3rZUCHdVLC5oQ48ADegQIGBAJ'
  },
  {
    id: 5,
    title: 'Subway',
    fileName: 'subway.jpeg',
    address: 'R. José Camilo de Camargo, 05 - LOJA 312 - Remanso Campineiro, Hortolândia - SP',
    phone: '(19) 3116-1137',
    url: 'https://www.google.com/maps/dir//Subway+Shopping+Hortol%C3%A2ndia+-+R.+Jos%C3%A9+Camilo+de+Camargo,+05+-+LOJA+312+-+Remanso+Campineiro,+Hortol%C3%A2ndia+-+SP,+13184-494/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8beaa8e500001:0x18d7f4489a7c7d2f?sa=X&ved=2ahUKEwjioMKI2MP_AhV7rJUCHTZqD5kQ48ADegQIGBAJ'
  },
  {
    id: 6,
    title: "Bob's",
    fileName: 'bobs.jpeg',
    address: 'Av. José Paulino, 2600 - Jardim America, Paulínia - SP',
    phone: '(19) 3244-9613',
    url: "https://www.google.com/maps/dir//Bob's+Shakes+-+Av.+Jos%C3%A9+Paulino,+2600+-+Jardim+America,+Paul%C3%ADnia+-+SP,+13140-707/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8bf3faa88f873:0x5268f5c8b3fbc086?sa=X&hl=pt-BR&ved=2ahUKEwjz176Y2MP_AhX9qZUCHU4oAMcQ48ADegQIEBAI"
  },
  {
    id: 7,
    title: 'Outback',
    fileName: 'outback.jpeg',
    address: 'Av. Guilherme Campos, 500 - R 006 - Jardim Santa Genebra, Campinas - SP',
    phone: '(19) 3756-9877',
    url: 'https://www.google.com/maps/dir//Outback+-+Av.+Guilherme+Campos,+500+-+R+006+-+Jardim+Santa+Genebra,+Campinas+-+SP,+13087-901/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8c68483bf0eff:0x5e8dfca78ae91f2d?sa=X&ved=2ahUKEwj1yLSJzsP_AhXcHbkGHSLaCykQ48ADegQIGBAJ'
  },
]

export default places