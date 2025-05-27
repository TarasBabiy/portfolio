function AboutMe() {
  return (
    <div className="container">
      <div className="card">
        <h2>Про мене</h2>
        <p>Мене звати Бабій Тарас, я студент 2-го курсу НУБіП, спеціальність "Комп’ютерні науки", з фокусом на мобільну розробку.</p>
      </div>
      <div className="card">
        <h3>Навики</h3>
        <ul>
          <li>Написання чистого коду</li>
          <li>Оптимізація коду</li>
          <li>Адаптивна верстка сторінок</li>
          <li>Командна взаємодія</li>
          <li>Англійська для технічної документації</li>
          <li>Розуміння веб-сервісів</li>
          <li>Забезпечення зручного інтерфейсу</li>
        </ul>
        <h3>Мови програмування</h3>
        <p>Java, Python, C/C++, SQL</p>
      </div>
      <div className="card">
        <h3>Цінності та захоплення</h3>
        <p><strong>Цінності:</strong> Постійне навчання, Креативність, Наполегливість, Командна робота, Відповідальність, Чистий код</p>
        <p><strong>Захоплення:</strong> Розробка, спорт, 3D-моделювання</p>
        <p><strong>Курси навчання:</strong> Пройшов курси "Web Dev 101", "React Basics", "Python для початківців"</p>
      </div>
      <div className="card">
        <h3>Мої проєкти</h3>
        <div className="project-grid">
          <div className="project-card">
            <h4>HTML + CSS</h4>
            <a href="https://github.com/TarasBabiy/css_pratice" className="button" target="_blank" rel="noopener noreferrer">
              CSS Practice
            </a>
            <a href="https://github.com/TarasBabiy/site" className="button" target="_blank" rel="noopener noreferrer">
              Site
            </a>
          </div>
          <div className="project-card">
            <h4>JavaScript</h4>
            <a href="https://github.com/TarasBabiy/js-easy" className="button" target="_blank" rel="noopener noreferrer">
              JS Easy
            </a>
            <a href="https://github.com/TarasBabiy/js-DOM1-TB" className="button" target="_blank" rel="noopener noreferrer">
              JS DOM
            </a>
          </div>
          <div className="project-card">
            <h4>React</h4>
            <a href="https://github.com/TarasBabiy/LAB-15" className="button" target="_blank" rel="noopener noreferrer">
              Lab 15
            </a>
            <a href="https://github.com/TarasBabiy/LAB-13" className="button" target="_blank" rel="noopener noreferrer">
              Lab 13
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;