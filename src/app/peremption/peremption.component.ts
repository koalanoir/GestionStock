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
  groupedArticles: any[] = [];
  userId: string | undefined;
  product: any  = [];
  product_view :any= [];
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
    const grouped = this.articles.reduce((acc: any[], article: Article) => {
      const product = acc.find((item: any) => item.productId === article.productId);
      if (product) {
        product.lots.push(article);
        product.totalQuantity += article.quantity;
        product.earliestExpirationDate = new Date(Math.min(new Date(product.earliestExpirationDate).getTime(), new Date(article.expirationDate.toDate()).getTime()));
      } else {
        acc.push({
          productId: article.productId,
          name: article.name,
          lotCount: 1,
          totalQuantity: article.quantity,
          price: article.price,
          earliestExpirationDate: article.expirationDate.toDate(),
          lots: [article],
          showLots: true
        });
      }
      return acc;
    }, []);

    this.groupedArticles = grouped.map((item: any) => ({
      ...item,
      lotCount: item.lots.length
    }));
  }

  toggleLots(product: any): void {
    this.product_view= product;
    this.product_view.lots.sort((a: Article, b: Article) => a.expirationDate.toDate().getTime() - b.expirationDate.toDate().getTime());
    console.log(this.product);
    console.log(product);
  }
}
