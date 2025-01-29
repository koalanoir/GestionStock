import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import { Article } from 'src/models/article.model';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-peremption',
  templateUrl: './peremption.component.html',
  styleUrls: ['./peremption.component.scss']
})
export class PeremptionComponent implements OnInit {
  articles: Article[] = [];
  userId: string | undefined;

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
    this.articleService.getArticlesByUserIdOrderPeremptionDate(userId).subscribe((data: Article[]) => {
      this.articles = data;
    });
  }
}
