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
  protected title = 'Forest Bjorn LLC';
  protected tagline = 'Modern Web & Application Development Solutions';

  protected currentYear = new Date().getFullYear();

  protected services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks like Angular, React, and Vue.',
      icon: '🌐',
    },
    {
      title: 'Application Development',
      description: 'Native and cross-platform mobile and desktop applications tailored to your needs.',
      icon: '📱',
    },
    {
      title: 'Consulting',
      description: 'Technical architecture, code reviews, and strategic guidance for your development teams.',
      icon: '💡',
    },
    {
      title: 'DevOps & Cloud',
      description: 'CI/CD pipelines, cloud infrastructure, and deployment automation.',
      icon: '☁️',
    },
  ];
}
