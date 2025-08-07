import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-birch-white text-birch-black font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-birch-black text-birch-white z-50 border-b border-birch-dark">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 birch-pattern-dark"></div>
              <span className="text-xl font-mono font-bold glitch-text" data-text="БЕРЁЗКА">БЕРЁЗКА</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="font-mono hover:text-birch-gray transition-colors">О НАС</button>
              <button onClick={() => scrollToSection('services')} className="font-mono hover:text-birch-gray transition-colors">УСЛУГИ</button>
              <button onClick={() => scrollToSection('cases')} className="font-mono hover:text-birch-gray transition-colors">КЕЙСЫ</button>
              <button onClick={() => scrollToSection('contact')} className="font-mono hover:text-birch-gray transition-colors">КОНТАКТЫ</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-mono font-bold mb-6 animate-fade-in">
              <span className="glitch-text" data-text="АВТОМАТИЗАЦИЯ">АВТОМАТИЗАЦИЯ</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-mono mb-8 text-birch-dark">
              ДЛЯ ТЕХ, КТО ХОЧЕТ <span className="bg-birch-black text-birch-white px-2">БАБЛО</span>, А НЕ <span className="line-through">ПОНТЫ</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-birch-black text-birch-white hover:bg-birch-dark font-mono text-lg px-8 py-4"
              onClick={() => window.open('https://t.me/berezka_ai', '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              ПИШИ В TELEGRAM
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-birch-black text-birch-black hover:bg-birch-gray font-mono text-lg px-8 py-4"
              onClick={() => scrollToSection('services')}
            >
              УЗНАТЬ ЦЕНЫ
            </Button>
          </div>

          <div className="birch-pattern h-32 animate-birch-pattern"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-birch-gray px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-mono font-bold mb-6">О НАС // НЕ СТРОИМ ИЗ СЕБЯ</h2>
              <p className="text-xl mb-4 font-sans">
                Мы не агентство, которое будет пиздеть про «синергию» и «инновации». 
                Мы делаем простые AI-инструменты, которые экономят ваше время и приносят деньги.
              </p>
              <p className="text-lg mb-6 text-birch-dark font-sans">
                Честно говорим цены, честно считаем ROI, честно делаем работу. 
                Без понтов, без маркетинговой хуеты — только результат.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="font-mono">AI-АССИСТЕНТЫ</Badge>
                <Badge variant="outline" className="font-mono">КОНТЕНТ-ЗАВОДЫ</Badge>
                <Badge variant="outline" className="font-mono">ГОЛОСОВЫЕ БОТЫ</Badge>
                <Badge variant="outline" className="font-mono">ТЕЛЕГРАМ</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="birch-pattern-dark h-64 w-full rounded"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-birch-white font-mono text-2xl glitch-text" data-text="ЦИФРОВОЙ_ЛЕС">ЦИФРОВОЙ_ЛЕС</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-mono font-bold text-center mb-16">
            УСЛУГИ <span className="text-birch-dark">//</span> БЕЗ ЛИШНЕЙ ВОДЫ
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-2 border-birch-black hover:bg-birch-gray transition-colors">
              <Icon name="Bot" size={32} className="mb-4" />
              <h3 className="text-xl font-mono font-bold mb-3">AI-АССИСТЕНТЫ</h3>
              <p className="text-birch-dark mb-4 font-sans">
                Чат-боты для клиентского сервиса, продаж, FAQ. Интеграция с Telegram, WhatsApp, сайтом.
              </p>
              <div className="text-2xl font-mono font-bold">ОТ 30К ₽</div>
            </Card>

            <Card className="p-6 border-2 border-birch-black hover:bg-birch-gray transition-colors">
              <Icon name="Factory" size={32} className="mb-4" />
              <h3 className="text-xl font-mono font-bold mb-3">КОНТЕНТ-ЗАВОДЫ</h3>
              <p className="text-birch-dark mb-4 font-sans">
                Автоматическое создание постов, описаний товаров, email-рассылок. Настройка под ваш стиль.
              </p>
              <div className="text-2xl font-mono font-bold">ОТ 25К ₽</div>
            </Card>

            <Card className="p-6 border-2 border-birch-black hover:bg-birch-gray transition-colors">
              <Icon name="Phone" size={32} className="mb-4" />
              <h3 className="text-xl font-mono font-bold mb-3">ГОЛОСОВЫЕ БОТЫ</h3>
              <p className="text-birch-dark mb-4 font-sans">
                Автоответчики, обработка входящих, запись на встречи. Звучат как живые люди.
              </p>
              <div className="text-2xl font-mono font-bold">ОТ 50К ₽</div>
            </Card>

            <Card className="p-6 border-2 border-birch-black hover:bg-birch-gray transition-colors">
              <Icon name="Package" size={32} className="mb-4" />
              <h3 className="text-xl font-mono font-bold mb-3">ГОТОВЫЕ ШАБЛОНЫ</h3>
              <p className="text-birch-dark mb-4 font-sans">
                Готовые решения для типовых задач: интернет-магазин, салон красоты, автосервис.
              </p>
              <div className="text-2xl font-mono font-bold">ОТ 15К ₽</div>
            </Card>

            <Card className="p-6 border-2 border-birch-black hover:bg-birch-gray transition-colors">
              <Icon name="Settings" size={32} className="mb-4" />
              <h3 className="text-xl font-mono font-bold mb-3">КАСТОМ РЕШЕНИЯ</h3>
              <p className="text-birch-dark mb-4 font-sans">
                Индивидуальная разработка под вашу специфику. CRM, аналитика, интеграции.
              </p>
              <div className="text-2xl font-mono font-bold">ОТ 100К ₽</div>
            </Card>

            <Card className="p-6 border-2 border-birch-black hover:bg-birch-gray transition-colors">
              <Icon name="Zap" size={32} className="mb-4" />
              <h3 className="text-xl font-mono font-bold mb-3">БЫСТРЫЙ СТАРТ</h3>
              <p className="text-birch-dark mb-4 font-sans">
                Настройка за день: базовый чат-бот + инструкция + месяц поддержки.
              </p>
              <div className="text-2xl font-mono font-bold">10К ₽</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-birch-black text-birch-white px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-mono font-bold text-center mb-16">
            КЕЙСЫ <span className="text-birch-gray">//</span> ЖИВЫЕ ЦИФРЫ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-birch-dark border-birch-gray text-birch-white">
              <div className="text-4xl font-mono font-bold text-green-400 mb-2">+340%</div>
              <h3 className="text-xl font-mono mb-2">АВТОСАЛОН</h3>
              <p className="text-birch-gray font-sans">
                Голосовой бот обрабатывает входящие звонки. 
                Количество записанных клиентов выросло в 3.4 раза.
              </p>
            </Card>

            <Card className="p-6 bg-birch-dark border-birch-gray text-birch-white">
              <div className="text-4xl font-mono font-bold text-green-400 mb-2">-80%</div>
              <h3 className="text-xl font-mono mb-2">КОНТЕНТ-СТУДИЯ</h3>
              <p className="text-birch-gray font-sans">
                AI генерирует посты для соцсетей. 
                Время на создание контента сократилось на 80%.
              </p>
            </Card>

            <Card className="p-6 bg-birch-dark border-birch-gray text-birch-white">
              <div className="text-4xl font-mono font-bold text-green-400 mb-2">+150К</div>
              <h3 className="text-xl font-mono mb-2">ИНТЕРНЕТ-МАГАЗИН</h3>
              <p className="text-birch-gray font-sans">
                Чат-бот в Telegram консультирует и продает. 
                Дополнительная выручка +150К в месяц.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 bg-birch-gray px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-mono font-bold mb-8">
            AI-КОНСУЛЬТАНТ <span className="text-birch-dark">//</span> ЗАДАЙ ВОПРОС
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-2 border-birch-black">
              <div className="flex items-center justify-center mb-6">
                <Icon name="MessageSquare" size={48} />
              </div>
              <p className="text-xl mb-6 font-sans">
                Не знаешь, что выбрать? Наш AI-ассистент поможет подобрать решение 
                под твой бизнес и посчитает примерную стоимость.
              </p>
              <Button 
                size="lg" 
                className="bg-birch-black text-birch-white hover:bg-birch-dark font-mono text-lg px-8 py-4"
                onClick={() => window.open('https://t.me/berezka_ai_bot', '_blank')}
              >
                <Icon name="Bot" size={20} className="mr-2" />
                ЗАПУСТИТЬ КОНСУЛЬТАЦИЮ
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready Solutions */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-mono font-bold text-center mb-16">
            ГОТОВЫЕ РЕШЕНИЯ <span className="text-birch-dark">//</span> КУПИ И РАБОТАЙ
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-2 border-birch-black hover:bg-birch-gray transition-colors">
              <Icon name="ShoppingCart" size={32} className="mb-4" />
              <h3 className="text-lg font-mono font-bold mb-2">МАГАЗИН</h3>
              <p className="text-sm text-birch-dark mb-4 font-sans">Каталог + корзина + оплата</p>
              <div className="text-xl font-mono font-bold mb-4">15К ₽</div>
              <Button className="w-full bg-birch-black text-birch-white hover:bg-birch-dark font-mono">
                КУПИТЬ
              </Button>
            </Card>

            <Card className="p-6 border-2 border-birch-black hover:bg-birch-gray transition-colors">
              <Icon name="Scissors" size={32} className="mb-4" />
              <h3 className="text-lg font-mono font-bold mb-2">САЛОН</h3>
              <p className="text-sm text-birch-dark mb-4 font-sans">Запись + напоминания + отзывы</p>
              <div className="text-xl font-mono font-bold mb-4">12К ₽</div>
              <Button className="w-full bg-birch-black text-birch-white hover:bg-birch-dark font-mono">
                КУПИТЬ
              </Button>
            </Card>

            <Card className="p-6 border-2 border-birch-black hover:bg-birch-gray transition-colors">
              <Icon name="Car" size={32} className="mb-4" />
              <h3 className="text-lg font-mono font-bold mb-2">АВТОСЕРВИС</h3>
              <p className="text-sm text-birch-dark mb-4 font-sans">Диагностика + смета + запись</p>
              <div className="text-xl font-mono font-bold mb-4">18К ₽</div>
              <Button className="w-full bg-birch-black text-birch-white hover:bg-birch-dark font-mono">
                КУПИТЬ
              </Button>
            </Card>

            <Card className="p-6 border-2 border-birch-black hover:bg-birch-gray transition-colors">
              <Icon name="Home" size={32} className="mb-4" />
              <h3 className="text-lg font-mono font-bold mb-2">НЕДВИЖИМОСТЬ</h3>
              <p className="text-sm text-birch-dark mb-4 font-sans">Подбор + показы + сделки</p>
              <div className="text-xl font-mono font-bold mb-4">22К ₽</div>
              <Button className="w-full bg-birch-black text-birch-white hover:bg-birch-dark font-mono">
                КУПИТЬ
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-birch-black text-birch-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-mono font-bold mb-8">
            КОНТАКТЫ <span className="text-birch-gray">//</span> СВЯЗЬ
          </h2>
          <p className="text-xl mb-12 font-sans text-birch-gray">
            Не любим звонки, любим Telegram. Отвечаем быстро и по делу.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-birch-dark border-birch-gray text-center">
              <Icon name="MessageCircle" size={32} className="mx-auto mb-4 text-blue-400" />
              <h3 className="font-mono font-bold mb-2">TELEGRAM</h3>
              <p className="text-birch-gray font-sans mb-4">Основной канал связи</p>
              <Button 
                variant="outline" 
                className="border-birch-gray text-birch-white hover:bg-birch-gray font-mono"
                onClick={() => window.open('https://t.me/berezka_ai', '_blank')}
              >
                НАПИСАТЬ
              </Button>
            </Card>

            <Card className="p-6 bg-birch-dark border-birch-gray text-center">
              <Icon name="Mail" size={32} className="mx-auto mb-4 text-green-400" />
              <h3 className="font-mono font-bold mb-2">EMAIL</h3>
              <p className="text-birch-gray font-sans mb-4">Для официальных писем</p>
              <p className="font-mono text-sm">hello@berezka.ai</p>
            </Card>

            <Card className="p-6 bg-birch-dark border-birch-gray text-center">
              <Icon name="Clock" size={32} className="mx-auto mb-4 text-yellow-400" />
              <h3 className="font-mono font-bold mb-2">ВРЕМЯ РАБОТЫ</h3>
              <p className="text-birch-gray font-sans mb-4">Отвечаем каждый день</p>
              <p className="font-mono text-sm">10:00 - 22:00 МСК</p>
            </Card>
          </div>
          
          <div className="mt-12">
            <div className="birch-pattern-dark h-16 w-32 mx-auto mb-4 rounded"></div>
            <p className="font-mono text-birch-gray">BEREZKA.AI // ЦИФРОВОЙ_ЛЕС</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-birch-gray px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 birch-pattern"></div>
              <span className="font-mono font-bold">БЕРЁЗКА // AI-АГЕНТСТВО</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://t.me/berezka_ai" target="_blank" rel="noopener noreferrer" 
                 className="text-birch-dark hover:text-birch-black transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="mailto:hello@berezka.ai" 
                 className="text-birch-dark hover:text-birch-black transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-birch-dark hover:text-birch-black transition-colors">
                <Icon name="Github" size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-birch-dark text-center">
            <p className="font-mono text-sm text-birch-dark">
              © 2024 БЕРЁЗКА.AI // БЕЗ ПОНТОВ, ТОЛЬКО РЕЗУЛЬТАТ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}