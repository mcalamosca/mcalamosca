import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected currentYear = new Date().getFullYear();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

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
}
