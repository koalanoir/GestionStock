import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import { Article } from 'src/models/article.model';
import { AuthService } from '@auth0/auth0-angular';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.scss']
})
export class GestionProduitsComponent implements OnInit {
  articles: Article[] = [];
  groupedArticles: any[] = [];
  userId: string | undefined;
  showAddArticleForm: boolean = false;
  newArticle: Article = { id: '', productId: '', name: '', lot: '', quantity: 0, price: 0, expirationDate: Timestamp.now() };

  constructor(private articleService: ArticleService, public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      if (user?.sub) {
        this.userId = user.sub.split('|')[1]; // Extraire l'identifiant unique
        this.loadUserArticles(this.userId);
      }
    });
  }

  loadUserArticles(userId: string): void {
    this.articleService.getArticlesByUserId(userId).subscribe((data: Article[]) => {
      this.articles = data;
      this.groupArticlesByProduct();
    });
  }

  groupArticlesByProduct(): void {
    const grouped = this.articles.reduce((acc: any[], article) => {
      const product = acc.find(item => item.productId === article.productId);
      if (product) {
        product.lots.add(article.lot);
        product.totalQuantity += article.quantity;
      } else {
        acc.push({
          productId: article.productId,
          name: article.name,
          lots: new Set([article.lot]),
          totalQuantity: article.quantity
        });
      }
      return acc;
    }, []);

    this.groupedArticles = grouped.map(item => ({
      ...item,
      lotCount: item.lots.size
    }));
  }

  toggleAddArticleForm(): void {
    this.showAddArticleForm = !this.showAddArticleForm;
  }

  addArticle(): void {
    if (this.userId) {
      const expirationDate = new Date(this.newArticle.expirationDate as unknown as string); // Convertir la chaîne en Date
      const articleToAdd = { 
        ...this.newArticle, 
        userId: this.userId, 
        expirationDate: Timestamp.fromDate(expirationDate) 
      };
      this.articleService.addArticle(articleToAdd).then(() => {
        this.loadUserArticles(this.userId!);
        this.newArticle = { id: '', productId: '', name: '', lot: '', quantity: 0, price: 0, expirationDate: Timestamp.now() };
        this.showAddArticleForm = false;
      });
    }
  }

  checkProduct(): void {
    if (this.newArticle.productId) {
      this.articleService.getProductById(this.newArticle.productId).subscribe((products: Article[]) => {
        if (products.length > 0) {
          const product = products[0];
          this.newArticle.name = product.name;
          this.newArticle.price = product.price;
          const lots = products.map(p => p.lot);
          const maxLot = Math.max(...lots.map(lot => parseInt(lot, 10)));
          this.newArticle.lot = (maxLot + 1).toString();
        }
      });
    }
  }
}