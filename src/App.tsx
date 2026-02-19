import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LabMeta = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lab-meta">
      <div>SYSTEM // ACTIVE</div>
      <div>CORE // ISTANBUL</div>
      <div>SYNC // {time}</div>
      <div>INDEX // FL_026</div>
    </div>
  );
};

const Section = ({ num, label, children }: { num: string, label: string, children: React.ReactNode }) => (
  <section className="lab-section">
    <span className="lab-label">{num} :: {label}</span>
    {children}
  </section>
);

const ProjectCard = ({ title, status, link }: { title: string, status: string, link?: string }) => {
  const CardContent = (
    <div className="node-row" style={{ cursor: link ? 'pointer' : 'default' }}>
      <span>{title}</span>
      <div className="status-indicator">
        <div className={`status-dot ${status === 'UPCOMING' ? 'upcoming' : ''}`}></div>
        <span>{status}</span>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      {CardContent}
    </a>
  ) : CardContent;
};

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="lab-container">
      <aside className="lab-sidebar">
        <div className="lab-logo" style={{ marginBottom: '2.5rem' }}>frax labs</div>
        <LabMeta />
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '// dark_mode' : '// light_mode'}
        </button>
      </aside>

      <main className="lab-main">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          frax labs
        </motion.h1>

        <Section num="01" label="VİZYON">
          <div className="lab-description">
            İnsan zekasını otonom sistemlerle güçlendirerek, işletmelerin kendi kendini yönetebildiği dijital bir ekosistem inşa etmek.
          </div>
        </Section>

        <Section num="02" label="BİZ KİMİZ?">
          <div className="lab-description">
            Frax, 2026 yılında İstanbul merkezli olarak iki ortaklı bir yapı ile kurulan genç ve dinamik bir teknoloji şirketidir. Yenilikçi çözümler üretme tutkusuyla yola çıkan ekibimiz, dijital dönüşümü işletmeler için en basit ve verimli hale getirmeyi amaçlamaktadır.
          </div>
        </Section>

        <Section num="03" label="OPERASYONEL MODEL">
          <p className="lab-description" style={{ marginBottom: '3rem' }}>
            Fikirleri somut ürünlere dönüştüren, hızlı prototipleme ve sürekli deney disipliniyle hareket ediyoruz.
          </p>
          <div className="lab-grid">
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.8rem', marginBottom: '1.5rem', textTransform: 'uppercase', color: 'var(--text-dim)' }}>// Metodoloji</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ fontSize: '0.9rem' }}><span style={{ color: 'var(--text-dim)', marginRight: '1rem' }}>::</span>Seri Üretim</div>
                <div style={{ fontSize: '0.9rem' }}><span style={{ color: 'var(--text-dim)', marginRight: '1rem' }}>::</span>Hızlı Prototipleme</div>
                <div style={{ fontSize: '0.9rem' }}><span style={{ color: 'var(--text-dim)', marginRight: '1rem' }}>::</span>Sürekli Deney</div>
                <div style={{ fontSize: '0.9rem', whiteSpace: 'nowrap' }}><span style={{ color: 'var(--text-dim)', marginRight: '1rem' }}>::</span>Ticarileştirme veya Sonlandırma</div>
              </div>
            </div>
          </div>
        </Section>

        <Section num="04" label="PROJE LABORATUVARI">
          <div>
            <ProjectCard title="Ugra" status="LIVE" link="https://ugra.frax.tr/" />
            <ProjectCard title="Mera" status="UPCOMING" />
            <ProjectCard title="Vision Flow" status="UPCOMING" />
            <ProjectCard title="Frax Connect" status="UPCOMING" />
          </div>
        </Section>

        <Section num="05" label="AMİRAL GEMİSİ ÜRÜN">
          <div
            className="feature-box"
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('https://ugra.frax.tr/', '_blank')}
          >
            <div className="feature-title" style={{ color: 'var(--text)' }}>Ugra</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '1.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Otonom İşletme İşletim Sistemi</div>

            <div className="feature-desc" style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Ugra, PWA mimarisiyle uygulama indirme bariyerini kaldıran ve AI desteğiyle işletme yönetimini otonom hale getiren bir sadakat platformudur. İşletme sahipleri için veriyi proaktif kararlara dönüştüren dijital bir iş ortağıdır.
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
                <div>ID: 101</div>
                <div>STATUS: ACTIVE_ALPHA</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>
                İNCELE <span style={{ fontSize: '1.2rem' }}>→</span>
              </div>
            </div>
          </div>
        </Section>

        <Section num="06" label="MANİFESTO">
          <div className="lab-description" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p>Frax Labs olarak biz, dijitalleşmenin sadece kod yazmaktan ibaret olmadığına inanıyoruz.</p>

            <div style={{ fontWeight: 700, fontSize: '0.8rem', marginTop: '1rem', textTransform: 'uppercase', color: 'var(--text-dim)' }}>// MİSYON</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
              <div><span style={{ color: 'var(--text-dim)', marginRight: '0.5rem' }}>::</span> <span style={{ fontWeight: 700, color: 'var(--text)' }}>Yalınlık Güçtür:</span> Karmaşıklığı değil, en basit ve işlevsel olanı hedefliyoruz.</div>
              <div><span style={{ color: 'var(--text-dim)', marginRight: '0.5rem' }}>::</span> <span style={{ fontWeight: 700, color: 'var(--text)' }}>Veri Odaklı Sezgi:</span> Kararlarımızı varsayımlar üzerine değil, doğrulanmış veriler ve yapay zeka analitiği üzerine inşa ediyoruz.</div>
              <div><span style={{ color: 'var(--text-dim)', marginRight: '0.5rem' }}>::</span> <span style={{ fontWeight: 700, color: 'var(--text)' }}>Yerel Bağlantı:</span> Yüksek teknolojiyi küresel standartlarda üretip, yerel esnafın ve mahalle kültürünün hizmetine sunuyoruz.</div>
              <div><span style={{ color: 'var(--text-dim)', marginRight: '0.5rem' }}>::</span> <span style={{ fontWeight: 700, color: 'var(--text)' }}>Hız ve Doğruluk:</span> Hızı gelişimin anahtarı olarak görüyor, her geri bildirimle sistemimizi daha akıllı bir yapıya kavuşturuyoruz.</div>
            </div>

            <p style={{
              marginTop: '2rem',
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem'
            }}>
              /* Gelecek, otonom sistemlerle değil, bu sistemleri anlamlı kılan insan odaklı vizyonla kurulacaktır. */
            </p>
          </div>
        </Section>

        <Section num="07" label="İLETİŞİM">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            <a href="mailto:info@fraxlabs.co" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 700 }}>info@fraxlabs.co</a>
            <div style={{ color: 'var(--text-muted)' }}>İstanbul, TR</div>
          </div>
        </Section>

        <footer style={{ marginTop: '8rem', color: 'var(--text-dim)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
          <span>© 2026 <span style={{ fontWeight: 700, color: 'var(--text)' }}>frax labs</span> // ALL RIGHTS RESERVED</span>
          <span>EST. 2026 // TR</span>
        </footer>
      </main>
    </div >
  );
}
