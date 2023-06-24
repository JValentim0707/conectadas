// Import Place Extra Information
import { etecUnits, etecCourses } from '../config/etec'
import { fatecUnits, fatecCourses } from '../config/fatec'


const places = [
  {
    id: 1,
    title: 'Etec',
    fullTitle: 'Escola Tecnica Estadual',
    fileName: 'etec.jpeg',
    description: 'Nossos cursos estão com as portas abertas para você fazer parte de uma das melhores redes de ensino profissional público e gratuito',
    address: "R. José Camilo de Camargo, 5 - Lot. Remanso Campineiro, Hortolândia - SP",
    phone: "(11) 3471-4071",
    postcode: "13184-494",
    city: 'Hortolandia',
    website: 'https://www.vestibulinhoetec.com.br/home/',
    sections: [
      {
        sectionTitle: 'Sobre',
        subtitle: 'Um pouquinho sobre nós',
        text: `As Etecs tem horários que variam de uma unidade para outra,vale ressaltar que existem várias unidades da Etec,então uma dica é consultar de forma cautelosa a Etec mais próxima da sua casa ou aquela que tem o curso do seu interesse`,
      
      },  
      {
        sectionTitle: 'Vestibular',
        subtitle: 'Mas como funciona o vestibular da Fatec?',
        text: `Para ingressar no curso técnico em qualquer escola da Etec o candidato deverá se escrever no site http://www.vestibulinhoetec.com.br essa seleção ocorre duas vezes no ano e consiste em uma prova com conhecimentos adquiridos em escola nível fundamental e médio.`
      }
    ],
    units: etecUnits,
    courses: etecCourses,
    url: 'https://www.google.com.br/maps/place/R.+Jos%C3%A9+Camilo+de+Camargo,+5+-+Jardim+das+Paineiras,+Hortol%C3%A2ndia+-+SP,+13184-494/@-22.8636307,-47.216054,17z/data=!4m6!3m5!1s0x94c8beaa96556b9d:0x7c65361c583f59d7!8m2!3d-22.8636357!4d-47.2134791!16s%2Fg%2F11bw3y_r86?entry=ttu'
  },
  {
    id: 2,
    title: 'Fatec',
    fullTitle: 'Fatec - Faculdade de Tecnologia',
    fileName: 'fatec.jpeg',
    description: 'A Faculdade de Tecnologia (Fatec) é uma instituição que oferece ensino superior em 67 cidades do estado de São Paulo.',
    address: 'Av. Cônego Antônio Roccato, 593 - Jardim Santa Monica, Campinas - SP',
    phone: '(11) 3471-4103',
    postcode: '13082-015',
    city: 'Campinas',
    website: 'https://www.vestibularfatec.com.br/home/',
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
    units: fatecUnits,
    courses: fatecCourses,
    url: 'https://www.google.com/maps/place/Av.+C%C3%B4nego+Ant%C3%B4nio+Roccato,+593+-+Ch%C3%A1caras+Campos+dos+Amarais,+Campinas+-+SP,+13082-015/@-22.8647531,-47.101121,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8c700be958dd1:0xcf50cbfc525bd404!8m2!3d-22.8647531!4d-47.101121!16s%2Fg%2F11h4nlwh7v?entry=ttu'
  },
  {
    id: 3,
    title: 'Senai',
    fullTitle: 'Senai - Senai-SP',
    fileName: 'senai.jpeg',
    description: 'O SENAI-SP oferece desde cursos para a qualificação básica até a pós-graduação.',
    website: 'https://www.sp.senai.br/',
    address: 'Av. Paulista, 1313, São Paulo/SP',
    phone: '(11) 3322-0050',
    city: 'Campinas',
    postcode: '01311-200',

    sections: [
      {
        sectionTitle: 'Sobre',
        subtitle: 'Um pouquinho sobre nós',
        text: `O SENAI-SP oferece desde cursos para a qualificação básica até a pós-graduação, nas modalidades presencial, semi presencial e online podendo ser no horário da tarde, manhã ou noite. 
        São mais de 80 unidades de formação profissional distribuídas em todo o estado de São Paulo, sem contar as escolas móveis, que levam e conhecimento de fácil acesso para a população e 
        A instituição oferece várias formas de capacitação, inovação e tecnologias da atualidade, assim oferecendo oportunidades na área de alimentos e bebidas, biotecnologia, energias renováveis, manufatura avançada, administração e logística, criando futuros profissionais qualificados de forma eficiente para entrarem no mercado de trabalho.
        O melhor de tudo é que em vários cursos é oferecido certificados e comprovação que o aluno de fato realizou o curso seja ele técnico, graduação ou até mesmo em cursos livres.
        Não ocorre acepção de pessoas, visto que todos são capazes de adquirir conhecimento e mostrar o seu potencial no mercado Tenha você 16 anos ou 60.`
      }
    ],
    units: [],
    courses: [],
    url: 'https://www.google.com/maps/place/Av.+Paulista,+1313+-+Centro+Hist%C3%B3rico+de+S%C3%A3o+Paulo,+S%C3%A3o+Paulo+-+SP,+01311-200/@-23.5634986,-46.6570215,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59b8bef0c08d:0x1e5b40890eac320d!8m2!3d-23.5635035!4d-46.6544466!16s%2Fg%2F11j9cl_7wv?entry=ttu'
  },
  {
    id: 4,
    title: 'Mc Donalds',
    fullTitle: 'Mc Donalds',
    fileName: 'mc-donalds.jpeg',
    address: 'R. José Camilo de Camargo, 5 - Lot. Remanso Campineiro, Hortolândia - SP',
    phone: '(16) 3116-1080',
    city: 'Hortolandia',
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
    url: 'https://www.google.com/maps/dir//Mc+Donalds+-+R.+Jos%C3%A9+Camilo+de+Camargo,+5+-+Lot.+Remanso+Campineiro,+Hortol%C3%A2ndia+-+SP,+13184-494/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8beaa9807eb6b:0x9bec13a33626ea60?sa=X&ved=2ahUKEwjCv7X_18P_AhX3rZUCHdVLC5oQ48ADegQIGBAJ'
  },
  {
    id: 5,
    title: 'Subway',
    fullTitle: 'Subway',
    fileName: 'subway.jpeg',
    address: 'R. José Camilo de Camargo, 05 - LOJA 312 - Remanso Campineiro, Hortolândia - SP',
    phone: '(19) 3116-1137',
    city: 'Hortolandia',
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
    url: 'https://www.google.com/maps/dir//Subway+Shopping+Hortol%C3%A2ndia+-+R.+Jos%C3%A9+Camilo+de+Camargo,+05+-+LOJA+312+-+Remanso+Campineiro,+Hortol%C3%A2ndia+-+SP,+13184-494/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8beaa8e500001:0x18d7f4489a7c7d2f?sa=X&ved=2ahUKEwjioMKI2MP_AhV7rJUCHTZqD5kQ48ADegQIGBAJ'
  },
  {
    id: 6,
    title: "Bob's",
    fullTitle: "Bob's",
    fileName: 'bobs.jpeg',
    address: 'Av. José Paulino, 2600 - Jardim America, Paulínia - SP',
    phone: '(19) 3244-9613',
    city: 'Paulinia',
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
    url: "https://www.google.com/maps/dir//Bob's+Shakes+-+Av.+Jos%C3%A9+Paulino,+2600+-+Jardim+America,+Paul%C3%ADnia+-+SP,+13140-707/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8bf3faa88f873:0x5268f5c8b3fbc086?sa=X&hl=pt-BR&ved=2ahUKEwjz176Y2MP_AhX9qZUCHU4oAMcQ48ADegQIEBAI"
  },
  {
    id: 7,
    title: 'Outback',
    fullTitle: 'Outback',
    fileName: 'outback.jpeg',
    address: 'Av. Guilherme Campos, 500 - R 006 - Jardim Santa Genebra, Campinas - SP',
    phone: '(19) 3756-9877',
    city: 'Campinas',
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
    url: 'https://www.google.com/maps/dir//Outback+-+Av.+Guilherme+Campos,+500+-+R+006+-+Jardim+Santa+Genebra,+Campinas+-+SP,+13087-901/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94c8c68483bf0eff:0x5e8dfca78ae91f2d?sa=X&ved=2ahUKEwj1yLSJzsP_AhXcHbkGHSLaCykQ48ADegQIGBAJ'
  },
]

export default places