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
