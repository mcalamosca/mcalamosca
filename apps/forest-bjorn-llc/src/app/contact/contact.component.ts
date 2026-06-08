import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
  timeline: string;
  budget: string;
  hasDesigns: string;
  technicalRequirements: string;
  referralSource: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  currentStep = 1;
  totalSteps = 3;
  isSubmitting = false;
  isSubmitted = false;
  submitError = '';

  form: ContactForm = {
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
    timeline: '',
    budget: '',
    hasDesigns: '',
    technicalRequirements: '',
    referralSource: '',
  };

  projectTypes = [
    { value: 'workflow', label: 'Workflow Automation' },
    { value: 'ai-ops', label: 'AI Operations System' },
    { value: 'internal-tool', label: 'Internal Tool' },
    { value: 'portal', label: 'Customer / Partner Portal' },
    { value: 'audit', label: 'Systems Audit' },
    { value: 'website', label: 'Website / Web App' },
    { value: 'other', label: 'Other' },
  ];

  timelines = [
    { value: 'asap', label: 'ASAP (< 1 month)' },
    { value: '1-3', label: '1-3 months' },
    { value: '3-6', label: '3-6 months' },
    { value: '6+', label: '6+ months' },
    { value: 'flexible', label: 'Flexible / Not sure' },
  ];

  budgets = [
    { value: '<10k', label: 'Under $10,000' },
    { value: '10-25k', label: '$10,000 - $25,000' },
    { value: '25-50k', label: '$25,000 - $50,000' },
    { value: '50-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' },
    { value: 'discuss', label: "Let's discuss" },
  ];

  designOptions = [
    { value: 'yes', label: 'Yes, ready to go' },
    { value: 'partial', label: 'Partially (some ideas)' },
    { value: 'no', label: 'No, starting fresh' },
  ];

  referralSources = [
    { value: 'referral', label: 'Referral' },
    { value: 'google', label: 'Google Search' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'github', label: 'GitHub' },
    { value: 'other', label: 'Other' },
  ];

  get canProceedStep1(): boolean {
    return !!(this.form.name && this.form.email && this.form.projectType);
  }

  get canProceedStep2(): boolean {
    return !!(this.form.description && this.form.description.length >= 20);
  }

  get canSubmit(): boolean {
    return this.canProceedStep1 && this.canProceedStep2;
  }

  get progressPercent(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToStep(step: number) {
    if (step <= this.currentStep || (step === 2 && this.canProceedStep1) || (step === 3 && this.canProceedStep2)) {
      this.currentStep = step;
    }
  }

  // Google Apps Script deployment URL
  private readonly FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwNb6tMHUDqikKu4LhqIa7vAyBoA6kK98ZsxJQlpYpmmtjSe08Ha5Bgh_qLJlRbnr6SYA/exec';

  async submitForm() {
    if (!this.canSubmit) return;
    
    this.isSubmitting = true;
    this.submitError = '';

    try {
      const response = await fetch(this.FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // Apps Script handles JSON in text/plain better for CORS
        },
        body: JSON.stringify(this.form),
      });

      const result = await response.json();
      
      if (result.success) {
        this.isSubmitted = true;
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      this.submitError = 'Something went wrong. Please try again or email us directly at forestbjornllc@gmail.com';
    } finally {
      this.isSubmitting = false;
    }
  }

  selectOption(field: keyof ContactForm, value: string) {
    this.form[field] = value;
  }
}
