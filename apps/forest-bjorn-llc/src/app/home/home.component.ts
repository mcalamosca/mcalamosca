import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  protected currentYear = new Date().getFullYear();
  private scrollHandler: (() => void) | null = null;
  private rafId: number | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  // Hero words for staggered animation
  protected heroWords = ['We', 'build', 'digital', 'products', 'that', 'matter.'];

  protected services = [
    {
      title: 'Web Development',
      description: 'Modern, performant websites and web applications built with cutting-edge frameworks. From marketing sites to complex enterprise platforms.',
    },
    {
      title: 'Application Development',
      description: 'Native and cross-platform mobile and desktop applications. Thoughtfully designed, meticulously engineered.',
    },
    {
      title: 'Technical Consulting',
      description: 'Architecture reviews, technology strategy, and hands-on guidance for development teams scaling their products.',
    },
    {
      title: 'DevOps & Infrastructure',
      description: 'CI/CD pipelines, cloud infrastructure, and deployment automation. Ship faster, with confidence.',
    }
  ];

  protected showCleanCode = false;

  protected messyCode = `<span class="code-comment">// TODO: fix this later</span>
<span class="code-keyword">function</span> <span class="code-function">getData</span>(id, type, flag, opts) {
  <span class="code-keyword">let</span> result = <span class="code-keyword">null</span>;
  <span class="code-keyword">if</span> (type == <span class="code-string">"user"</span>) {
    result = fetch(<span class="code-string">"/api/user/"</span> + id)
      .then(<span class="code-keyword">function</span>(r) { <span class="code-keyword">return</span> r.json() })
      .then(<span class="code-keyword">function</span>(data) {
        <span class="code-keyword">if</span> (flag == <span class="code-keyword">true</span>) {
          <span class="code-keyword">return</span> data.user;
        } <span class="code-keyword">else</span> {
          <span class="code-keyword">return</span> data;
        }
      })
  } <span class="code-keyword">else if</span> (type == <span class="code-string">"post"</span>) {
    result = fetch(<span class="code-string">"/api/post/"</span> + id)
      .then(<span class="code-keyword">function</span>(r) { <span class="code-keyword">return</span> r.json() })
  }
  <span class="code-keyword">return</span> result;
}`;

  protected cleanCode = `<span class="code-keyword">interface</span> <span class="code-type">FetchOptions</span> {
  unwrap?: <span class="code-type">boolean</span>;
}

<span class="code-keyword">type</span> <span class="code-type">ResourceType</span> = <span class="code-string">'user'</span> | <span class="code-string">'post'</span>;

<span class="code-keyword">async function</span> <span class="code-function">fetchResource</span>&lt;<span class="code-type">T</span>&gt;(
  type: <span class="code-type">ResourceType</span>,
  id: <span class="code-type">string</span>,
  options: <span class="code-type">FetchOptions</span> = {}
): <span class="code-type">Promise</span>&lt;<span class="code-type">T</span>&gt; {
  <span class="code-keyword">const</span> response = <span class="code-keyword">await</span> fetch(\`/api/\${type}/\${id}\`);
  
  <span class="code-keyword">if</span> (!response.ok) {
    <span class="code-keyword">throw new</span> <span class="code-type">ApiError</span>(response.status);
  }
  
  <span class="code-keyword">const</span> data = <span class="code-keyword">await</span> response.json();
  <span class="code-keyword">return</span> options.unwrap ? data[type] : data;
}`;

  toggleCode(): void {
    this.showCleanCode = !this.showCleanCode;
  }

  protected toolkitLogos = [
    { name: 'Anthropic', logo: 'assets/logos/anthropic.svg?v=3' },
    { name: 'OpenAI', logo: 'assets/logos/openai.svg?v=3' },
    { name: 'Cursor', logo: 'assets/logos/cursor.svg?v=3' },
    { name: 'Gemini', logo: 'assets/logos/gemini.svg?v=3' },
    { name: 'CodeRabbit', logo: 'assets/logos/coderabbit.svg?v=3' },
  ];

  protected portfolio = [
    {
      category: 'Government',
      title: 'Public Sector Policy Platform',
      description: 'Modernized a state government agency portal serving millions of citizens. Rebuilt the homepage and user flows from the ground up, improving accessibility compliance and reducing page load times by 60%.',
      tech: ['Python', 'Django', 'HTMX', 'PostgreSQL'],
    },
    {
      category: 'Healthcare',
      title: 'Enterprise Member Portal',
      description: 'Led frontend architecture for a Fortune 10 healthcare company\'s prescription management platform. Migrated from legacy systems to a micro-frontend architecture, serving millions of daily active users.',
      tech: ['Angular', 'NgRx', 'Web Components', 'Nx'],
    },
    {
      category: 'Finance',
      title: 'IT Asset Intelligence Dashboard',
      description: 'Built interactive data visualization dashboards for a global financial institution. Created dynamic reporting tools used by internal teams and regulatory bodies for compliance reporting.',
      tech: ['Angular', 'Highcharts', 'D3.js', 'TypeScript'],
    },
    {
      category: 'IoT',
      title: 'Smart Home Security System',
      description: 'Designed and implemented a comprehensive home automation and security platform. Integrated Zigbee sensors, cameras, and automated responses with real-time monitoring dashboards.',
      tech: ['Home Assistant', 'Zigbee', 'Python', 'YAML'],
    },
    {
      category: 'Automotive',
      title: 'Market Analytics Platform',
      description: 'Developed a data-driven insights tool for the automotive aftermarket industry. Built intuitive visualizations that transformed complex market data into actionable inventory decisions.',
      tech: ['Angular', 'D3.js', 'Material UI', 'REST APIs'],
    },
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
      this.initParallax();
      this.initMagneticButtons();
      this.initTiltCards();
    }
  }

  ngOnDestroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
  }

  private initParallax() {
    const layers = document.querySelectorAll('.forest-layer');
    if (!layers.length) return;

    let ticking = false;
    
    this.scrollHandler = () => {
      if (!ticking) {
        this.rafId = requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const heroHeight = document.querySelector('.hero')?.clientHeight || 800;
          
          if (scrollY < heroHeight) {
            const progress = scrollY / heroHeight;
            
            layers.forEach((layer, index) => {
              const speed = (index + 1) * 0.15;
              const yOffset = scrollY * speed;
              (layer as HTMLElement).style.transform = `translateY(${yOffset}px)`;
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  private initMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    
    magneticBtns.forEach((btn) => {
      const button = btn as HTMLElement;
      
      button.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const strength = 0.3;
        button.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
        button.style.transition = 'transform 0.3s ease-out';
      });
      
      button.addEventListener('mouseenter', () => {
        button.style.transition = 'transform 0.1s ease-out';
      });
    });
  }

  private initTiltCards() {
    const cards = document.querySelectorAll('.tilt-card');
    
    cards.forEach((card) => {
      const cardEl = card as HTMLElement;
      const inner = cardEl.querySelector('.tilt-card-inner') as HTMLElement;
      if (!inner) return;
      
      cardEl.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = cardEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      
      cardEl.addEventListener('mouseleave', () => {
        inner.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }
}
