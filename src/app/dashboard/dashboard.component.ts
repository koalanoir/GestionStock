import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  type = ChartType.LineChart;
  columns = ['Mois', 'Ventes'];
  data: any[] = []; // Initialisation de la table des données
  options = {
    title: 'Statistiques des ventes sur 12 mois',
    curveType: 'function',
    legend: { position: 'bottom' },
    width: window.innerWidth - 50, // Largeur initiale basée sur la taille de l'écran
    height: 500,
  };
  articles : any[] = [];

  // Écouter les changements de taille de l'écran
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.options.width = event.target.innerWidth - 50; // Ajuster la largeur
  }

  ngOnInit(): void {
    this.generateLast12MonthsData();
    this.loadSalesData();
  }
  loadSalesData(): void {
    const rawData = [
      { name: 'Article A', sales: 150 },
      { name: 'Article B', sales: 200 },
      { name: 'Article C', sales: 50 },
      { name: 'Article D', sales: 300 },
      { name: 'Article E', sales: 100 },
    ];

    // Trier les articles par ventes décroissantes
    this.articles = rawData.sort((a, b) => b.sales - a.sales);
  }
  // Méthode pour générer les 12 derniers mois
  generateLast12MonthsData(): void {
    const currentDate = new Date(); // Date du jour
    const months = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];

    // Générer les données pour les 12 derniers mois
    for (let i = 0; i < 12; i++) {
      const date = new Date();
      date.setMonth(currentDate.getMonth() - i);

      const monthName = months[date.getMonth()];
      const year = date.getFullYear();

      // Ajouter une valeur aléatoire pour les ventes
      const randomSales = Math.floor(Math.random() * 100) + 1;

      // Ajouter les données au tableau
      this.data.unshift([`${monthName} ${year}`, randomSales]);
    }
  }
}
