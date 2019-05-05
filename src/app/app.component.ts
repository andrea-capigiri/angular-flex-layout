import { Component, OnInit } from '@angular/core';
import { SandboxCardViewModel } from './shared/sandbox-card.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public fxLayout: string = 'row';
    public fxLayoutWrap: string = '';
    public fxLayoutAlignHorizontal: string = 'center';
    public fxLayoutAlignVertical: string = 'center';
    public fxLayoutGap: number = 0;

    public card: SandboxCardViewModel = null;
    public cardList: SandboxCardViewModel[] = [];

    public ngOnInit() {
        for (let i = 0; i < 5; i++)
            this.addBox();
    }

    public fxLayoutValue() { return (this.fxLayout || '') + (this.fxLayoutWrap ? ' ' + this.fxLayoutWrap : ''); }
    public fxLayoutAlignValue() { return (this.fxLayoutAlignHorizontal || '') + (this.fxLayoutAlignVertical ? ' ' + this.fxLayoutAlignVertical : ''); }
    public fxLayoutGapValue() { return (this.fxLayoutGap || 0) + 'px'; }

    public addBox() {
        let tmp = new SandboxCardViewModel();
        tmp.index = this.cardList.length;
        tmp.size = Math.floor(Math.random() * 160) + 80;
        this.cardList.push(tmp);
    }
    public removeBox() { this.cardList.pop(); }

    public onSelectCard($event: number) {
        console.log('You have selected: ' + $event);
        this.card = this.cardList[$event];
        for (let $item of this.cardList) {
            $item.selected = ($item.index == $event);
        }
    }
}
