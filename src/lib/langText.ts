type Header = {
  home: string;
  en: string;
  ru: string;
  login: string;
  register: string;
  signOut: string;
};

type Welcome = {
  title: {
    1: string;
    2: string;
    3: string;
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
  title: string;
  1: TeamMemder;
  2: TeamMemder;
  3: TeamMemder;
};

type AuthPage = {
  title: {
    login: string;
    register: string;
  };
  toast: {
    title: string;
    description: string;
    error: string;
  };
  usernameLabel: string;
  usernamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  submitButton: string;
};

type NotFound = {
  title: string;
  homeButton: string;
};

export type Validation = {
  password: {
    min: string;
    max: string;
    latin: string;
    number: string;
    symbol: string;
  };
  username: string;
};

type Dashboard = {
  docs: string;
  url: {
    title: string;
    edit: string;
    save: string;
  };
  variables: string;
  headers: string;
};

type langText = {
  header: Header;
  welcome: Welcome;
  team: {
    aboutTeam: {
      title: string;
      text: string;
    };
    ourTeam: OurTeam;
  };
  authPage: AuthPage;
  notFound: NotFound;
  validation: Validation;
  dashboard: Dashboard;
};

export const enText: langText = {
  header: {
    home: 'Home',
    en: 'EN',
    ru: 'RU',
    login: 'Login',
    register: 'Register',
    signOut: 'Sign Out',
  },
  welcome: {
    title: {
      '1': 'Welcome to ',
      '2': 'Rick and Morty',
      '3': ' GraphQl',
    },
    text: 'Welcome to our GraphQL-powered website! Here you can explore the amazing world of the Rick and Morty API using GraphQL. Discover information about your favorite characters, episodes, and more. Get ready for an exciting journey through the multiverse!',
    login: 'Login',
    register: 'Register',
    dashboard: 'Main Page',
  },
  team: {
    aboutTeam: {
      title: 'About Team',
      text: 'Our frontend development team is a group of talented and dedicated professionals who are passionate about creating exceptional user experiences. With their expertise in HTML, CSS, and JavaScript, they bring websites and web applications to life. The team is committed to staying up to date with the latest frontend technologies and best practices. They are constantly exploring new frameworks, libraries.',
    },
    ourTeam: {
      title: 'Our Team',
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
  },
  authPage: {
    title: {
      login: 'Authorization',
      register: 'Registration',
    },
    toast: {
      title: 'Success',
      description: 'You are successfully authorized',
      error: 'Error',
    },
    usernameLabel: 'Username',
    usernamePlaceholder: 'Your name',
    emailLabel: 'E-mail',
    emailPlaceholder: 'Your e-mail',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Your password',
    submitButton: 'Submit',
  },
  notFound: {
    title: 'Page not found',
    homeButton: 'Go Home',
  },
  validation: {
    password: {
      min: 'Password must be at least 8 characters.',
      max: 'Maximum password length 32 characters.',
      latin: 'Password must contain a latin letter',
      number: 'Password must contain a number',
      symbol: `Password must contain a special character: ,."'!@#$%^&*()_+=-`,
    },
    username: 'Username must be at least 2 characters.',
  },
  dashboard: {
    docs: 'DOCS',
    url: {
      title: 'URL',
      edit: 'Edit',
      save: 'Save',
    },
    variables: 'Variables',
    headers: 'Headers',
  },
};

export const ruText: langText = {
  header: {
    home: 'Дом',
    en: 'АНГЛ',
    ru: 'РУС',
    login: 'Войти',
    register: 'Зарегистрироваться',
    signOut: 'Выйти',
  },
  welcome: {
    title: {
      '1': 'Вас приветствует ',
      '2': 'Рик и Морти',
      '3': ' GraphQl',
    },
    text: 'Добро пожаловать на наш сайт, работающий на GraphQL! Здесь вы можете познакомиться с удивительным миром API Рика и Морти с помощью GraphQL. Откройте для себя информацию о любимых персонажах, эпизодах и многом другом. Приготовьтесь к захватывающему путешествию по мультивселенной!',
    login: 'Войти',
    register: 'Зарегистрироваться',
    dashboard: 'Главная страница',
  },
  team: {
    aboutTeam: {
      title: 'О команде',
      text: 'Наша команда фронтенд-разработчиков - это группа талантливых и преданных своему делу профессионалов, увлеченных созданием исключительного пользовательского опыта. Благодаря своему опыту в HTML, CSS и JavaScript они воплощают в жизнь веб-сайты и веб-приложения. Команда стремится быть в курсе последних технологий и передовых методов разработки. Они постоянно изучают новые фреймворки, библиотеки.',
    },
    ourTeam: {
      title: 'Наша команда',
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
  },
  authPage: {
    title: {
      login: 'Авторизация',
      register: 'Регистрация',
    },
    toast: {
      title: 'Поздравляем',
      description: 'Вы успешно авторизованы',
      error: 'Ошибка',
    },
    usernameLabel: 'Имя пользователя',
    usernamePlaceholder: 'Ваше имя',
    emailLabel: 'E-mail адрес',
    emailPlaceholder: 'Ваш e-mail адрес',
    passwordLabel: 'Пароль',
    passwordPlaceholder: 'Ваш пароль',
    submitButton: 'Отправить',
  },
  notFound: {
    title: 'Страница не найдена',
    homeButton: 'Вернуться домой',
  },
  validation: {
    password: {
      min: 'Пароль должен содержать не менее 8 символов.',
      max: 'Максимальная длина пароля 32 символа.',
      latin: 'Пароль должен содержать латинскую букву',
      number: 'Пароль должен содержать цифру',
      symbol: `Пароль должен содержать специальный символ: ,."'!@#$%^&*()_+=-`,
    },
    username: 'Имя пользователя должно содержать не менее 2 символов.',
  },
  dashboard: {
    docs: 'Документация',
    url: {
      title: 'URL адрес',
      edit: 'Редактировать',
      save: 'Сохранить',
    },
    variables: 'Переменные',
    headers: 'Заголовки',
  },
};

export type TextContentType = {
  en: langText;
  ru: langText;
};

export const textContent: TextContentType = {
  en: enText,
  ru: ruText,
};
