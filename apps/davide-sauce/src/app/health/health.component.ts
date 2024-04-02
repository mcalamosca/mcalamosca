import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { fadeIn } from '@mcalamosca/ui-components';

@Component({
  selector: 'ds-health',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './health.component.html',
  styleUrl: './health.component.scss',
  animations: [fadeIn],
})
export class HealthComponent {
  cards = [
    {
      title: 'Ingredients',
      content:
        "When comparing ingredients among different sauces, it's essential to recognize the importance of ingredient quality and health implications. Regulations mandate that ingredients be listed by volume, offering an insight into what you're primarily consuming.",
      imgSrc: '../../assets/images/ingredients.jpg',
      altText: 'ingredients',
    },
    {
      title: 'Reduced Sodium',
      content:
        'Excessive sodium intake is a concern for many health-conscious consumers. Studies have shown that some pasta sauces contain upwards of 900 mg of sodium per half-cup serving, with an average range around 400-500 mg. Our sauce significantly lowers this number to just 220 mg per serving, aligning with health guidelines advocating for reduced sodium consumption for cardiovascular health.',
      imgSrc: '../../assets/images/salt.jpg',
      altText: 'salt',
    },
    {
      title: 'No Added Sugars or Tomato Paste',
      content:
        'Unlike many sauces that rely on tomato paste—a concentrated, often bitter base made from lower quality tomatoes—and add sugars or corn syrup to compensate for taste, our sauce uses only fresh, ripe tomatoes. These provide a naturally sweet flavor without the need for added sugars, supporting a healthier diet and reducing risks associated with high sugar intake. The sweetness in our sauce is from fresh carrots, an ingredient rarely found in other sauces.',
      imgSrc: '../../assets/images/fresh_carrots.jpg',
      altText: 'fresh_carrots',
    },
    {
      title: 'Free from Artificial Preservatives',
      content:
        'Our commitment to your health extends to avoiding all artificial preservatives. Our sauces are crafted to deliver natural taste and longevity without compromising on safety or quality.',
      imgSrc: '../../assets/images/jars.jpg',
      altText: 'jars',
    },
    {
      title: 'No Dehydrated Vegetables',
      content:
        'The concept of using dehydrated vegetables in sauce is far from our philosophy. We believe in the vibrancy and nutritional value of fresh vegetables, ensuring our sauce is both delicious and nourishing.',
      imgSrc: '../../assets/images/fresh-vegetables.jpg',
      altText: 'fresh-vegetables',
    },
    {
      title: 'Rich in Lycopene',
      content:
        "The health benefits of tomatoes don't just end at their natural sweetness. They're a fantastic source of lycopene, an antioxidant with potential cancer-fighting properties. Our sauce maximizes this nutrient's presence, contributing to a healthier diet.",
      imgSrc: '../../assets/images/raw-tomato.jpg',
      altText: 'raw tomato',
    },
    {
      title: 'Extra Virgin Olive Oil',
      content:
        'We exclusively use Extra Virgin olive oil in Davide sauces, avoiding soybean, canola, and oils extracted through heat or chemicals. This choice ensures a healthier fat profile and preserves the authentic taste and nutritional benefits of our ingredients.',
      imgSrc: '../../assets/images/olive-oil.jpg',
      altText: 'olive-oil',
    },
  ];
}
