import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LmsService } from '../lms.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {


  trustedUrl: SafeResourceUrl| undefined ;
  articleId:number = 0;
  content:any;

  constructor(public sanitizer: DomSanitizer, private route:ActivatedRoute, private lmsService: LmsService) {
    console.log("c", this.article);

   }

  ngOnInit(): void {
    console.log(this.article)
  }

  loadArticle(){
    this.lmsService.getArticle(this.articleId).subscribe((res:any)=>{
      console.log(res);
      this.article = res;
      //this.getContent();
    })
  }

  @ViewChild('contentframe', { static: false })
  contentFrame!: ElementRef;

  ngAfterViewInit() {
    // const doc = this.contentFrame.nativeElement.contentDocument;
    // let contentHeight = this.contentFrame.nativeElement.contentWindow.document.body.scrollHeight;
    // console.log("Content Height", contentHeight);
    // this.contentFrame.nativeElement.style.height = contentHeight + 'px';
    // this.contentFrame.nativeElement.style.width =
    // this.contentFrame.nativeElement.contentWindow.document.body.scrollWidth + 'px';

  }


  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //console.log("ngOnChange", this.article);
    //this.getContent();


    //this.trustedUrl = this.article ? this.sanitizer.bypassSecurityTrustUrl(this.article.url): null;
  }

  getContent(){
    this.lmsService.getArticleContent(this.article.url).subscribe((res:any)=>{
      let content = res.substring(res.indexOf("<body>")+6,res.indexOf("</body"))
      this.content = content;

    });
  }

  @Input()
  article:any;



}
