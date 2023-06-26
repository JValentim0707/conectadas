// Import Place Extra Information
import { etecUnits, etecCourses } from '../config/etec'
import { fatecUnits, fatecCourses } from '../config/fatec'
import { senaiCourses, senaiUnits } from '../config/senai'
import { cieeCourses } from './ciee'


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
        subtitle: 'Como entrar?',
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
    units: senaiUnits,
    courses: senaiCourses,
    url: 'https://www.google.com/maps/place/Av.+Paulista,+1313+-+Centro+Hist%C3%B3rico+de+S%C3%A3o+Paulo,+S%C3%A3o+Paulo+-+SP,+01311-200/@-23.5634986,-46.6570215,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59b8bef0c08d:0x1e5b40890eac320d!8m2!3d-23.5635035!4d-46.6544466!16s%2Fg%2F11j9cl_7wv?entry=ttu'
  },
  {
    id: 4,
    title: 'CIEE',
    fullTitle: 'CIEE Virtual Saber',
    fileName: 'ciee.jpeg',
    address: 'Rua Tabapuã, 540 São Paulo/SP',
    description: 'O CIEE Saber Virtual é uma plataforma de cursos gratuitos que permite a realização totalmente em sua casa',
    phone: '(11) 3003-2433',
    format: 'Online',
    postcode: '04533-001',
    website: 'https://portal.ciee.org.br/',
    city: 'São Paulo',
    sections: [
      {
        sectionTitle: 'Sobre',
        subtitle: 'Um pouquinho sobre nós',
        text: `O CIEE Saber Virtual é uma plataforma de cursos gratuitos que permite a realização totalmente em sua casa utilizando um computador conectado à internet.
        Nesse portal, é possível realizar trilhas de conhecimento, são 80 cursos que são para preparação para o mundo do trabalho, informática, comunicação, português, matemática, contabilidade, empreendedorismo e a economia.`
      },
      {
        sectionTitle: 'Objetivo',
        subtitle: 'Qual é nosso objetivo?',
        text: `Objetivo é apresentar conceitos, dicas e estratégias para lidar com a comunicação e a matemática no trabalho, na universidade e no dia a dia por meio de estudos estruturados, atividades e assuntos relacionados ao cotidiano de modo fácil a manter suas habilidades atualizadas em seu campo de trabalho ou desenvolver novas habilidades que são exigidas no mercado de trabalho atual. Isso pode ser especialmente valioso em um ambiente onde a tecnologia e as habilidades de trabalho estão em constante evolução.`
      }
    ],
    courses: cieeCourses,
    units: [],
    url: 'https://www.google.com/maps/place/Rua+Tabapu%C3%A3,+540+-+Itaim+Bibi,+S%C3%A3o+Paulo+-+SP,+04533-001/@-23.582924,-46.6780236,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce575ddcdfeca5:0x9a95a66e6bd92ce9!8m2!3d-23.582924!4d-46.6758349!16s%2Fg%2F11bw447lpl?entry=ttu'
  },
  {
    id: 5,
    title: 'Fundação Bradesco',
    fullTitle: 'Escola Virtual Fundação Bradesco',
    description: 'A Escola Virtual da Fundação Bradesco é um portal de e-learning dedicado a oferecer cursos livres online',
    fileName: 'bradesco.jpeg',
    address: 'Av. Wellman Galvão de França Rangel, 2000 - Swiss Park, Campinas',
    phone: ' (19) 3268-3465',
    city: 'Campinas',
    postcode: '13049-254',
    format: 'Online',
    website: 'https://www.ev.org.br/',
    sections: [
      {
        sectionTitle: 'Sobre',
        subtitle: 'Um pouquinho sobre nós',
        text: `A Escola Virtual da Fundação Bradesco é um portal de e-learning dedicado a oferecer cursos livres online, totalmente gratuitos, via Internet. Está disponível 24 horas por dia, sete dias por semana, o é objetivo de propiciar um ambiente virtual de aprendizagem, no qual o aluno é o principal agente e condutor de seu aprendizado.
        Por ser cursos on-line, você pode acessá-los de qualquer lugar e em qualquer momento através de um dispositivo móvel ou computador ligado a internet, . Isso traz uma grande flexibilidade para estudar e poder ajustar seu horário de estudo de acordo com suas necessidades.`
      },
      {
        sectionTitle: 'Sobre Nossos Cursos',
        subtitle: 'Muitas variedades pra vocês',
        text: `A Escola Virtual Fundação Bradesco tem um catálogo de 81 cursos básicos gratuitos com carga horário no máximo 180hr e totalmente online em diversas áreas.`
      }
    ],
    url: 'https://www.google.com/maps/place/Av.+Wellman+Galv%C3%A3o+de+Fran%C3%A7a+Rangel,+2000+-+Swiss+Park,+Campinas+-+SP,+13049-254/@-22.9677859,-47.0813369,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8c967489fffe1:0x5b054f1e4d585830!8m2!3d-22.9677909!4d-47.078762!16s%2Fg%2F11s9qkrsqn?hl=pt-BR&entry=ttu',
  },
  {
    id: 6,
    title: "Sebrae",
    fullTitle: "Sebrae - Serviço Brasileiro de Apoio às Micro e Pequenas Empresas",
    fileName: 'sebrae.jpeg',
    description: 'O Sebrae abre caminhos para o interessado em empreender na intenção de abrir seu primeiro negócio',
    website: 'https://sebrae.com.br/sites/PortalSebrae',
    address: 'Rua Vergueiro, 1117 / Paraíso - São Paulo/SP',
    phone: '0800 570 0800',
    city: 'São Paulo',
    postcode: '01504-001',
    sections: [
      {
        sectionTitle: 'Sobre',
        subtitle: 'Um pouquinho sobre nós',
        text: `O Sebrae abre caminhos para o interessado em empreender na intenção de abrir seu primeiro negócio até pequenas empresas que já estão consolidadas e buscam um novo posicionamento no mercado.
        São mais de 150 cursos para garantir a sua qualificação para desenvolver pequenos negócios, o Sebrae atua em todo o território nacional.`
      },
      {
        sectionTitle: 'Localização',
        subtitle: 'Onde podemos ser encontrado?',
        text: `Onde tem Brasil, tem Sebrae, tem 27 Unidades da Federação, onde são oferecidas bolsas de estudo de cursos livres, capacitação, técnicos, graduações, pôs graduações, doutorado e mestrado, seminários, consultorias e assistência técnica para pequenos negócios de todos os setores.`
      }
    ],
    url: 'https://www.google.com/maps/place/Rua+Vergueiro,+1117+-+Liberdade,+S%C3%A3o+Paulo+-+SP,+01504-001/@-23.5718864,-46.6417638,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5999af167f0f:0x3fc2a9e3f9b82567!8m2!3d-23.5718864!4d-46.6395751!16s%2Fg%2F11c4qjy47q?entry=ttu'
  },
  {
    id: 7,
    title: 'Senac',
    fullTitle: 'Senac - Serviço Nacional de Aprendizagem Comercia',
    fileName: 'senac.jpeg',
    description: 'Serviço Nacional de Aprendizagem Comercial – Senac é o principal agente de educação profissional voltado para o Comércio de Bens, Serviços e Turismo.',
    address: 'Av. Marechal Tito, 1500 São Miguel Paulista, São Paulo - SP',
    phone: '(11) 2504-8400',
    city: 'Campinas',
    website: 'https://www.ead.senac.br/',
    postcode: '08010-090',
    sections: [
      {
        sectionTitle: 'Sobre',
        subtitle: 'Um pouquinho sobre nós',
        text: `Serviço Nacional de Aprendizagem Comercial – Senac é o principal agente de educação profissional voltado para o Comércio de Bens, Serviços e Turismo.
        Composta por mais de 600 unidades escolares, empresas pedagógicas e unidades móveis no brasil.`
      },
      {
        sectionTitle: 'Sobre Nossos Cursos',
        subtitle: 'Oque podemos te oferecer?',
        text: `Seu portfólio contempla bolsas de estudos presenciais e a distância, em diversas áreas do conhecimento, que vão da Formação Inicial e Continuada, técnicos, graduações e à Pós-graduação junto com possibilidades das empresas que contrata você e fornecer ao aluno planejar sua carreira profissional em uma perspectiva de educação continuada.`
      }
    ],
    url: 'https://www.google.com/maps/place/Avenida+Marechal+Tito,+1500+-+S%C3%A3o+Miguel+Paulista,+S%C3%A3o+Paulo+-+SP/@-23.4956433,-46.4340227,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce63dd09800149:0x4f436ed77615106c!8m2!3d-23.4956433!4d-46.431834!16s%2Fg%2F11gdc2cyfr?hl=pt-BR&entry=ttu'
  },
]

export default places