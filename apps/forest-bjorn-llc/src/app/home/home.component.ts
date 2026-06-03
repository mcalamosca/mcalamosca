import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject, HostListener } from '@angular/core';
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
  protected isLogoExpanded = false;
  private scrollHandler: (() => void) | null = null;
  private rafId: number | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  // Hero words for staggered animation
  protected heroWords = ['Software', 'built', 'to', 'survive', 'the', 'wild.'];

  protected services = [
    {
      subtitle: 'Trailheads',
      title: 'Web Development',
      description: 'Where your users enter the experience. We build paths that are clear, fast, and impossible to get lost on — from marketing sites to complex enterprise platforms.',
    },
    {
      subtitle: 'Basecamp',
      title: 'Application Development',
      description: 'The tools your team and users carry daily. Native and cross-platform apps built light enough to move fast, tough enough to last.',
    },
    {
      subtitle: 'Wayfinding',
      title: 'Technical Consulting',
      description: 'When the map doesn\'t match the territory. Architecture reviews, technology strategy, and hands-on guidance for teams navigating scale.',
    },
    {
      subtitle: 'Supply Lines',
      title: 'DevOps & Infrastructure',
      description: 'CI/CD pipelines, cloud infrastructure, and deployment automation. The systems that keep your operation moving no matter the conditions.',
    }
  ];

  protected showCleanCode = false;

  protected messyCode = `<span class="code-comment">// handles user stuff</span>
<span class="code-keyword">let</span> userData: <span class="code-type">any</span> = <span class="code-keyword">null</span>;
<span class="code-keyword">let</span> isLoading = <span class="code-keyword">false</span>;

<span class="code-keyword">function</span> <span class="code-function">processUser</span>(data: <span class="code-type">any</span>, cb: <span class="code-type">any</span>) {
  isLoading = <span class="code-keyword">true</span>;
  userData = data;
  <span class="code-keyword">if</span> (data.type == <span class="code-string">"admin"</span>) {
    data.perms = [<span class="code-string">"read"</span>, <span class="code-string">"write"</span>, <span class="code-string">"delete"</span>];
  }
  <span class="code-keyword">if</span> (data.age && data.age > 0) {
    data.isValid = <span class="code-keyword">true</span>;
  }
  setTimeout(<span class="code-keyword">function</span>() {
    cb(data);
    isLoading = <span class="code-keyword">false</span>;
  }, 1000);
}`;

  protected cleanCode = `<span class="code-keyword">type</span> <span class="code-type">Role</span> = <span class="code-string">'admin'</span> | <span class="code-string">'editor'</span> | <span class="code-string">'viewer'</span>;
<span class="code-keyword">type</span> <span class="code-type">Permission</span> = <span class="code-string">'read'</span> | <span class="code-string">'write'</span> | <span class="code-string">'delete'</span>;

<span class="code-keyword">interface</span> <span class="code-type">User</span> {
  <span class="code-keyword">readonly</span> id: <span class="code-type">string</span>;
  role: <span class="code-type">Role</span>;
  age: <span class="code-type">number</span>;
}

<span class="code-keyword">const</span> <span class="code-function">ROLE_PERMISSIONS</span>: <span class="code-type">Record</span>&lt;<span class="code-type">Role</span>, <span class="code-type">Permission</span>[]&gt; = {
  admin: [<span class="code-string">'read'</span>, <span class="code-string">'write'</span>, <span class="code-string">'delete'</span>],
  editor: [<span class="code-string">'read'</span>, <span class="code-string">'write'</span>],
  viewer: [<span class="code-string">'read'</span>],
} <span class="code-keyword">as const</span>;

<span class="code-keyword">function</span> <span class="code-function">getUserPermissions</span>(
  user: <span class="code-type">User</span>
): <span class="code-type">Permission</span>[] {
  <span class="code-keyword">return</span> ROLE_PERMISSIONS[user.role];
}`;

  toggleCode(): void {
    this.showCleanCode = !this.showCleanCode;
  }

  toggleLogoPopout(event: MouseEvent): void {
    event.stopPropagation();
    this.isLogoExpanded = !this.isLogoExpanded;
  }

  @HostListener('document:click')
  collapseLogo(): void {
    this.isLogoExpanded = false;
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
