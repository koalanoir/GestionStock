import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/article.service'; // Corrigez le chemin d'importation
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
  userId: string | undefined;
  showAddArticleForm: boolean = false;
  newArticle: Article = { id: '', name: '', quantity: 0, price: 0, expirationDate: Timestamp.now() };

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
    });
  }

  toggleAddArticleForm(): void {
    this.showAddArticleForm = !this.showAddArticleForm;
  }

  addArticle(): void {
    if (this.userId) {
      console.log(this.newArticle);
      const articleToAdd = { 
        ...this.newArticle, 

        userId: this.userId, 
        expirationDate: Timestamp.fromDate(new Date(this.newArticle.expirationDate  as unknown as string)) 
      };
      this.articleService.addArticle(articleToAdd).then(() => {
        this.loadUserArticles(this.userId!);
        this.newArticle = { id: '', name: '', quantity: 0, price: 0, expirationDate: Timestamp.now() };
        this.showAddArticleForm = false;
      });
    }
  }
}