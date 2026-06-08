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
  private revealObserver: IntersectionObserver | null = null;
  private rafId: number | null = null;
  private motionSections: HTMLElement[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  // Hero words for staggered animation
  protected heroWords = ['Your', 'business', 'runs', 'on', 'scattered', 'tools.'];

  protected operatingSystems = [
    {
      title: 'Custom Dashboards',
      description: 'Give owners and operators one clear place to see orders, sales, outreach, marketing, inventory, tasks, and the work that normally hides in spreadsheets.',
    },
    {
      title: 'Workflow Automation',
      description: 'Turn repetitive admin work into reliable flows: intake, routing, reminders, document generation, follow-ups, reporting, and handoffs.',
    },
    {
      title: 'AI-Assisted Operations',
      description: 'Use Claude, Gemini, ChatGPT, and custom agents to summarize, classify, draft, analyze, research, and coordinate daily business work.',
    },
    {
      title: 'Bespoke Business Software',
      description: 'Build focused internal tools around how the business actually runs instead of forcing every workflow into generic SaaS.',
    },
  ];

  protected services = [
    {
      subtitle: '01',
      title: 'Workflow Systems',
      description: 'Map the repeat work, connect the scattered tools, and make the handoffs visible enough to trust.',
    },
    {
      subtitle: '02',
      title: 'AI Operations',
      description: 'Use AI where it earns its keep: intake triage, follow-up drafts, reporting summaries, knowledge retrieval, and repeat decisions with human review.',
    },
    {
      subtitle: '03',
      title: 'Custom Internal Tools',
      description: 'Dashboards, portals, forms, admin systems, reporting tools, and lightweight apps tailored to the business instead of the other way around.',
    },
    {
      subtitle: '04',
      title: 'Technical Cleanup',
      description: 'Untangle brittle automations, half-finished integrations, and legacy code so the system becomes easier to run and safer to grow.',
    },
  ];

  protected proofPoints = [
    {
      category: 'Custom Operations Dashboard',
      title: 'Morini Brands / Bahama Burger',
      description: 'Built internal dashboard and operational tooling around ecommerce visibility, marketing activity, retailer outreach, and business workflows for a growing food brand.',
      outcome: 'A clearer command center for decisions that used to live across scattered tools.',
    },
    {
      category: 'Business Infrastructure',
      title: 'Dwyer Commercial Glass',
      description: 'Set up Google Workspace company email accounts so the business had a more professional, durable communication foundation.',
      outcome: 'A focused operational upgrade: small enough to move quickly, important enough to matter every day.',
    },
    {
      category: 'Internal AI Systems',
      title: 'Forest Bjorn Operating Stack',
      description: 'Uses agent workflows, AI-assisted development, automation, and custom project tooling internally to move faster with less overhead.',
      outcome: 'The same operating philosophy we sell is how the consultancy runs.',
    },
  ];

  protected processSteps = [
    {
      title: 'Diagnose',
      description: 'Map the workflows, bottlenecks, tools, data, and recurring manual work.',
    },
    {
      title: 'Prototype',
      description: 'Build a focused working version quickly so the business can react to something real.',
    },
    {
      title: 'Integrate',
      description: 'Connect email, spreadsheets, ecommerce, docs, calendars, databases, and APIs where they matter.',
    },
    {
      title: 'Operationalize',
      description: 'Deploy, document, train, and improve the system around actual usage.',
    },
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

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
      this.initSectionMotion();
      this.initMagneticButtons();
      this.initTiltCards();
    }
  }

  ngOnDestroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
      window.removeEventListener('resize', this.scrollHandler);
    }
    if (this.revealObserver) {
      this.revealObserver.disconnect();
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private initScrollAnimations() {
    const animatedElements = Array.from(document.querySelectorAll('.animate-on-scroll')) as HTMLElement[];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    animatedElements.forEach((el, index) => {
      el.style.setProperty('--motion-index', String(index % 6));
    });

    if (prefersReducedMotion) {
      animatedElements.forEach((el) => el.classList.add('animate-in'));
      return;
    }

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -80px 0px' }
    );

    animatedElements.forEach((el) => {
      this.revealObserver?.observe(el);
    });
  }

  private initSectionMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.motionSections = Array.from(document.querySelectorAll('.motion-section')) as HTMLElement[];

    if (prefersReducedMotion || !this.motionSections.length) {
      return;
    }

    let ticking = false;

    const updateMotion = () => {
      const viewportHeight = window.innerHeight || 1;

      this.motionSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height))
        );
        const centerDistance = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        section.style.setProperty('--scroll-glow-x', `${18 + progress * 64}%`);
        section.style.setProperty('--section-shift', `${Math.max(-1, Math.min(1, centerDistance)) * 28}px`);
      });
    };

    this.scrollHandler = () => {
      if (!ticking) {
        this.rafId = requestAnimationFrame(() => {
          updateMotion();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    window.addEventListener('resize', this.scrollHandler, { passive: true });
    updateMotion();
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
