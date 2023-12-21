type Header = {
  home: string;
  login: string;
  register: string;
};

type Welcome = {
  title: {
    '1': string;
    '2': string;
    '3': string;
  };
  text: string;
  login: string;
  register: string;
  dashboard: string;
};

type TeamMemder = {
  name: string;
  description: string;
};

type OurTeam = {
  '1': TeamMemder;
  '2': TeamMemder;
  '3': TeamMemder;
};

type AuthPage = {
  title: {
    login: string;
    register: string;
  };
  'username-label': string;
  'username-placeholder': string;
  'email-label': string;
  'email-placeholder': string;
  'password-label': string;
  'password-placeholder': string;
  'submit-button': string;
};

type NotFound = {
  title: string;
  'home-button': string;
};

type langText = {
  header: Header;
  welcome: Welcome;
  aboutTeam: string;
  ourTeam: OurTeam;
  authPage: AuthPage;
  notFound: NotFound;
};

export const enText: langText = {
  header: {
    home: 'Home',
    login: 'Login',
    register: 'Register',
  },
  welcome: {
    title: {
      '1': 'Welcome to ',
      '2': 'Rick and Morty',
      '3': 'GraphQl',
    },
    text: 'Welcome to our GraphQL-powered website! Here you can explore the amazing world of the Rick and Morty API using GraphQL. Discover information about your favorite characters, episodes, and more. Get ready for an exciting journey through the multiverse!',
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
  },
  aboutTeam:
    'Our frontend development team is a group of talented and dedicated professionals who are passionate about creating exceptional user experiences. With their expertise in HTML, CSS, and JavaScript, they bring websites and web applications to life. The team is committed to staying up to date with the latest frontend technologies and best practices. They are constantly exploring new frameworks, libraries.',
  ourTeam: {
    '1': {
      name: 'Dmitry Konev',
      description:
        "Aspiring web developer diving into the world of React. Eager to learn and create interactive user interfaces. Let's code! 🚀",
    },
    '2': {
      name: 'Natalia Lebedeva',
      description:
        'Natalia has a higher education in construction, but has been interested in programming all her life. She started her path in IT with Python and machine learning, and then got acquainted with web development and realized that she had found her direction. Now she does what she is really interested in, what energizes and inspires her.',
    },
    '3': {
      name: 'Nikita Starmoussov',
      description:
        "Nikita, another of our promising junior frontend developers, is the embodiment of ambition and skill. Young yet incredibly adept, his drive to be the best is palpable in every task he undertakes.. Every line of code he writes echoes his dedication and eagerness to excel. With such passion, there's no doubt that the sky's the limit for him in the tech world.",
    },
  },
  authPage: {
    title: {
      login: 'Authorization',
      register: 'Registration',
    },
    'username-label': 'Username',
    'username-placeholder': 'Your name',
    'email-label': 'E-mail',
    'email-placeholder': 'Your e-mail',
    'password-label': 'Password',
    'password-placeholder': 'Your password',
    'submit-button': 'Submit',
  },
  notFound: {
    title: 'Page not found',
    'home-button': 'Go Home',
  },
};

export const ruText: langText = {
  header: {
    home: 'Домой',
    login: 'Войти',
    register: 'Зарегистрироваться',
  },
  welcome: {
    title: {
      '1': 'Добро пожаловать к ',
      '2': 'Рик и Морти',
      '3': 'GraphQl',
    },
    text: "Добро пожаловать на наш сайт, работающий на GraphQL! Здесь вы можете познакомиться с удивительным миром 'Рик и Морти' API с помощью GraphQL. Откройте для себя информацию о любимых персонажах, эпизодах и многом другом. Приготовьтесь к захватывающему путешествию по мультивселенной!",
    login: 'Войти',
    register: 'Зарегистрироваться',
    dashboard: 'GraphQl панель',
  },
  aboutTeam:
    'Наша команда фронтенд-разработчиков - это группа талантливых и преданных своему делу профессионалов, увлеченных созданием исключительного пользовательского опыта. Благодаря своему опыту в HTML, CSS и JavaScript они воплощают в жизнь веб-сайты и веб-приложения. Команда стремится быть в курсе последних технологий и передовых методов разработки. Они постоянно изучают новые фреймворки, библиотеки.',
  ourTeam: {
    '1': {
      name: 'Дмитрий Конев',
      description:
        'Начинающий веб-разработчик, погружающийся в мир React. Жаждет учиться и создавать интерактивные пользовательские интерфейсы. Давайте кодить! 🚀',
    },
    '2': {
      name: 'Наталья Лебедева',
      description:
        'Наталья получила высшее строительное образование, но всю жизнь интересовалась программированием. Свой путь в IT она начала с Python и машинного обучения, а затем познакомилась с веб-разработкой и поняла, что нашла свое направление. Теперь она занимается тем, что ей действительно интересно, что ее заряжает и вдохновляет.',
    },
    '3': {
      name: 'Никита Стармоуссов',
      description:
        'Никита, еще один из наших перспективных младших фронтенд-разработчиков, - воплощение амбиций и мастерства. Молодой, но невероятно опытный, его стремление быть лучшим ощущается в каждой задаче, за которую он берется. Каждая строчка кода, которую он пишет, отражает его преданность и стремление к совершенству. С такой страстью можно не сомневаться, что в мире технологий для него открываются новые горизонты.',
    },
  },
  authPage: {
    title: {
      login: 'Авторизация',
      register: 'Регистрация',
    },
    'username-label': 'Имя пользователя',
    'username-placeholder': 'Ваше имя',
    'email-label': 'E-mail адрес',
    'email-placeholder': 'Ваш e-mail адрес',
    'password-label': 'Пароль',
    'password-placeholder': 'Ваш пароль',
    'submit-button': 'Отправить',
  },
  notFound: {
    title: 'Страница не найдена',
    'home-button': 'Вернуться домой',
  },
};
