import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected currentYear = new Date().getFullYear();

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
}
