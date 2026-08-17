import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  Layers3,
  MapPin,
  Palette,
  PenTool,
  Phone,
  Sparkles,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const services = [
  {
    number: '01',
    icon: Globe2,
    title: 'Web Tasarım',
    description:
      'Markanızın karakterini yansıtan, mobil uyumlu ve dönüşüm odaklı kurumsal web siteleri.',
    tags: ['Strateji', 'UX/UI', 'Responsive'],
  },
  {
    number: '02',
    icon: Code2,
    title: 'Web Geliştirme',
    description:
      'Hızlı, güvenli ve ölçeklenebilir altyapılarla fikrinizi kusursuz çalışan dijital ürüne dönüştürüyoruz.',
    tags: ['Frontend', 'CMS', 'Performans'],
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Logo Tasarımı',
    description:
      'İşletmenizin hikâyesini tek bakışta anlatan özgün, zamansız ve akılda kalıcı marka imzaları.',
    tags: ['Logo', 'Tipografi', 'Brandbook'],
  },
  {
    number: '04',
    icon: Palette,
    title: 'Grafik Tasarım',
    description:
      'Sosyal medyadan basılı materyallere kadar markanızı her temas noktasında tutarlı kılan görsel sistemler.',
    tags: ['Sosyal Medya', 'Katalog', 'Kampanya'],
  },
]

const projects = [
  {
    category: 'Mimarlık · Kurumsal Web',
    name: 'Noma Atelier',
    description: 'Mimarlık stüdyosu için sessiz lüksü dijital deneyime taşıyan bütünsel marka dünyası.',
    theme: 'blue',
    variant: 'stacked' as const,
    url: 'nomaatelier.com',
  },
  {
    category: 'E-Ticaret · Doğal Bakım',
    name: 'Mori Botanics',
    description: 'Doğal bakım markasının bilim ve doğa arasındaki hikâyesini anlatan güçlü e-ticaret deneyimi.',
    theme: 'lime',
    variant: 'grid' as const,
    url: 'moribotanics.com',
  },
  {
    category: 'Hukuk · Kurumsal Kimlik',
    name: 'Fora Legal',
    description: 'Yeni nesil hukuk bürosu için güven veren, net ve alışılmışın dışında bir dijital kimlik.',
    theme: 'dark',
    variant: 'stacked' as const,
    url: 'foralegal.com',
  },
  {
    category: 'Restoran · Yeme-İçme',
    name: 'Zeytin & Tuz',
    description: 'Bursa\'nın köklü lezzetlerini modern bir sofraya taşıyan, iştah açan ve sıcak bir web deneyimi.',
    theme: 'coral',
    variant: 'grid' as const,
    url: 'zeytinvetuz.com',
  },
  {
    category: 'Emlak · İlan Platformu',
    name: 'Anka Gayrimenkul',
    description: 'Portföydeki her mülkü güvenilir ve şık bir vitrinde sunan, hızlı filtrelenebilir emlak sitesi.',
    theme: 'sand',
    variant: 'stacked' as const,
    url: 'ankagayrimenkul.com',
  },
  {
    category: 'Fitness · Spor Stüdyosu',
    name: 'Form Stüdyo',
    description: 'Üyelik ve ders programını tek ekranda toplayan, enerjik ve harekete geçiren bir spor markası.',
    theme: 'lilac',
    variant: 'grid' as const,
    url: 'formstudio.com',
  },
]

const steps = [
  ['Tanışma', 'İşinizi, hedeflerinizi ve sizi farklı kılan değerleri dinliyoruz.'],
  ['Strateji', 'Doğru mesajı, yaratıcı yönü ve proje yol haritasını birlikte netleştiriyoruz.'],
  ['Tasarım', 'Fikirleri güçlü bir görsel dil ve sezgisel kullanıcı deneyimine dönüştürüyoruz.'],
  ['Yayın', 'Testleri tamamlıyor, projenizi yayına alıyor ve büyüme sürecinde yanınızda kalıyoruz.'],
]

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brand-lockup${footer ? ' brand-lockup-footer' : ''}`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path d="M4 4h23.5C37.8 4 43 8.6 43 16.1c0 4.5-2.3 8-6.5 10 5.1 1.7 7.5 5.2 7.5 9.8C44 43.7 38.3 48 27.3 48H4V4Zm11 9v9h11.3c3.8 0 5.7-1.5 5.7-4.6S30 13 26.3 13H15Zm0 18v8h12.7c3.5 0 5.3-1.3 5.3-4s-1.8-4-5.3-4H15Z" />
          <path className="brand-mark-cut" d="M4 35.5 43 9v7.8L4 43.2v-7.7Z" />
        </svg>
      </span>
      <span className="brand-type">
        <strong>BATMAZ</strong>
        <small>Dijital Stüdyo</small>
      </span>
    </span>
  )
}

function ProjectMock({ variant, url }: { variant: 'stacked' | 'grid'; url: string }) {
  return (
    <div className="mock-frame">
      <div className="mock-bar">
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-url">{url}</span>
      </div>
      <div className="mock-body">
        <div className="mock-nav">
          <span className="mock-navdot" />
          <span className="mock-navline" />
          <span className="mock-navline" />
          <span className="mock-navline" />
        </div>
        {variant === 'grid' ? (
          <>
            <div className="mock-line lg" />
            <div className="mock-line sm" />
            <div className="mock-tiles">
              <span />
              <span />
              <span />
              <span />
            </div>
          </>
        ) : (
          <>
            <div className="mock-photo" />
            <div className="mock-line lg" />
            <div className="mock-line md" />
            <span className="mock-cta">Detay ↗</span>
          </>
        )}
      </div>
    </div>
  )
}

function HomePage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mljrpywo', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Form gönderilemedi')

      form.reset()
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Batmaz Dijital Stüdyo ana sayfa">
          <BrandLogo />
        </a>
        <nav className="desktop-nav" aria-label="Ana menü">
          <a href="#hizmetler">Hizmetler</a>
          <a href="#projeler">Projeler</a>
          <a href="#surec">Süreç</a>
        </nav>
        <a className="header-cta" href="#iletisim">
          Projeni Anlat <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-eyebrow reveal">
          <span className="status-dot" /> BATMAZ / Bursa merkezli bağımsız dijital stüdyo
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="reveal delay-1">
              Markanı<br />
              <em>dijitalde</em><br />
              büyütelim.
            </h1>
          </div>
          <div className="hero-side reveal delay-2">
            <p>
              Markaları sıradanlıktan çıkaran web siteleri, güçlü kimlikler ve fark yaratan tasarımlar üretiyoruz.
            </p>
            <a href="#iletisim" className="round-link" aria-label="Ücretsiz görüşme başlat">
              <span>Ücretsiz<br />Görüşme</span>
              <ArrowDownRight size={26} />
            </a>
          </div>
        </div>
        <div className="hero-ribbon" aria-hidden="true">
          <div className="ribbon-track">
            <span>WEB TASARIM</span><b>✦</b><span>LOGO & MARKA</span><b>✦</b><span>GRAFİK TASARIM</span><b>✦</b><span>DİJİTAL ÇÖZÜMLER</span><b>✦</b>
            <span>WEB TASARIM</span><b>✦</b><span>LOGO & MARKA</span><b>✦</b><span>GRAFİK TASARIM</span><b>✦</b><span>DİJİTAL ÇÖZÜMLER</span><b>✦</b>
          </div>
        </div>
      </section>

      <section className="services section-shell" id="hizmetler">
        <div className="section-heading">
          <div>
            <span className="kicker">/ Neler Yapıyoruz</span>
            <h2>Fikrinden<br /><em>etkisine.</em></h2>
          </div>
          <p>İşletmenizin dijitalde ihtiyaç duyduğu tüm yaratıcı hizmetleri, tek bir tutarlı marka dünyasında buluşturuyoruz.</p>
        </div>
        <div className="services-list">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <span className="service-icon"><Icon strokeWidth={1.5} /></span>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="service-tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <ArrowUpRight className="service-arrow" />
              </article>
            )
          })}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-symbol"><Sparkles size={42} /></div>
        <p>
          Sadece güzel görünen değil; <em>doğru çalışan, hikâyenizi anlatan</em> ve işletmenize değer katan işler tasarlıyoruz.
        </p>
      </section>

      <section className="projects section-shell" id="projeler">
        <div className="section-heading project-heading">
          <div>
            <span className="kicker">/ Seçili İşler</span>
            <h2>İz bırakan<br /><em>projeler.</em></h2>
          </div>
          <a href="#iletisim" className="text-link">Sıradaki seninki olsun <ArrowUpRight size={18} /></a>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className={`project-visual project-${project.theme}`}>
                <span className="project-index">0{index + 1}</span>
                <ProjectMock variant={project.variant} url={project.url} />
              </div>
              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-shell" id="surec">
        <div className="process-intro">
          <span className="kicker">/ Nasıl Çalışıyoruz</span>
          <h2>Karmaşayı<br /><em>sadeleştiren</em><br />bir süreç.</h2>
          <p>Şeffaf iletişim, net adımlar ve sürprizsiz bir iş akışı. Projenizin her aşamasında ne olduğunu bilirsiniz.</p>
        </div>
        <div className="process-steps">
          {steps.map(([title, description], index) => (
            <div className="process-step" key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <Check size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="iletisim">
        <div className="contact-copy">
          <span className="kicker">/ Birlikte Üretelim</span>
          <h2>İyi bir fikrin<br /><em>var mı?</em></h2>
          <p>Bursa merkezli dijital stüdyomuza projenizden kısaca bahsedin. En geç 2 iş günü içinde size dönüş yapalım.</p>
          <a className="contact-phone" href="tel:+905305820366" aria-label="Hemen ara: 0530 582 03 66">
            <span className="contact-phone-icon"><Phone size={20} /></span>
            <span className="contact-phone-text">
              <small>Hemen Ara</small>
              <strong>0530 582 03 66</strong>
            </span>
          </a>
          <div className="contact-detail">
            <span><MapPin size={18} /> Bursa merkezli dijital stüdyo</span>
            <span><Layers3 size={18} /> Web, marka ve grafik tasarım</span>
            <span><Check size={18} /> Ücretsiz ilk görüşme</span>
          </div>
        </div>
        <form className="contact-form" name="proje-talebi" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="Batmaz Dijital Stüdyo — Yeni proje talebi" />
          <div className="form-row">
            <label>
              Adınız
              <input type="text" name="name" placeholder="Ad Soyad" required />
            </label>
            <label>
              E-posta
              <input type="email" name="email" placeholder="ornek@sirket.com" required />
            </label>
          </div>
          <label>
            İlgilendiğiniz hizmet
            <select name="service" defaultValue="" required>
              <option value="" disabled>Bir hizmet seçin</option>
              <option>Kurumsal Web Sitesi</option>
              <option>E-Ticaret Sitesi</option>
              <option>Logo & Marka Kimliği</option>
              <option>Grafik Tasarım</option>
              <option>Tümü / Emin Değilim</option>
            </select>
          </label>
          <label>
            Projenizden bahsedin
            <textarea name="message" rows={4} placeholder="Hedefiniz, ihtiyaçlarınız ve varsa planladığınız tarih..." required />
          </label>
          <button type="submit" disabled={formStatus === 'sending'}>
            {formStatus === 'sending' ? 'Gönderiliyor...' : 'Projeyi Gönder'}
            <ArrowUpRight size={20} />
          </button>
          <div className="form-feedback" aria-live="polite">
            {formStatus === 'success' && 'Teşekkürler! Projeniz bize ulaştı. Yakında görüşmek üzere.'}
            {formStatus === 'error' && 'Bir sorun oluştu. Lütfen tekrar deneyin.'}
          </div>
        </form>
      </section>

      <footer>
        <div className="footer-top">
          <a className="brand brand-footer" href="#top" aria-label="Batmaz Dijital Stüdyo ana sayfa">
            <BrandLogo footer />
          </a>
          <div className="footer-links">
            <a href="#hizmetler">Hizmetler</a>
            <a href="#projeler">Projeler</a>
            <a href="#surec">Süreç</a>
            <a href="#iletisim">İletişim</a>
          </div>
          <div className="footer-socials">
            <a href="#iletisim">Instagram ↗</a>
            <a href="#iletisim">Behance ↗</a>
            <a href="#iletisim">LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Batmaz Dijital Stüdyo</span>
          <span>Bursa, Türkiye · 530 582 03 66</span>
        </div>
      </footer>
    </main>
  )
}
