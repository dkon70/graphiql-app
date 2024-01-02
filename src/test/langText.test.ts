import { enText, ruText } from '@/lib/langText';

describe('English and Russian text', () => {
  test('Works correctly', () => {
    expect(enText.authPage.toast.title).toBe('Success');
    expect(enText.authPage.toast.description).toBe(
      'You are successfully authorized'
    );
  });
  test('Works correctly', () => {
    expect(ruText.welcome.text).toBe(
      'Добро пожаловать на наш сайт, работающий на GraphQL! Здесь вы можете познакомиться с удивительным миром API Рика и Морти с помощью GraphQL. Откройте для себя информацию о любимых персонажах, эпизодах и многом другом. Приготовьтесь к захватывающему путешествию по мультивселенной!'
    );
    expect(ruText.welcome.dashboard).toBe('Главная страница');
  });
});
