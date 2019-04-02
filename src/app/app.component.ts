import { Component } from '@angular/core';
import { SandboxCardViewModel } from './shared/sandbox-card.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public fxLayout: string = 'row';
    public fxLayoutWrap: string = '';
    public fxLayoutAlignHorizontal: string = 'center';
    public fxLayoutAlignVertical: string = 'center';
    public fxLayoutGap: number = 0;

    public card: SandboxCardViewModel = null;
    public cardList: SandboxCardViewModel[] = [
        <SandboxCardViewModel>{ index: 0 },
        <SandboxCardViewModel>{ index: 1 },
        <SandboxCardViewModel>{ index: 2 },
        <SandboxCardViewModel>{ index: 3 },
        <SandboxCardViewModel>{ index: 4 },
        <SandboxCardViewModel>{ index: 5 },
    ];

    public fxLayoutValue() { return (this.fxLayout || '') + (this.fxLayoutWrap ? ' ' + this.fxLayoutWrap : ''); }
    public fxLayoutAlignValue() { return (this.fxLayoutAlignHorizontal || '') + (this.fxLayoutAlignVertical ? ' ' + this.fxLayoutAlignVertical : ''); }
    public fxLayoutGapValue() { return (this.fxLayoutGap || 0) + 'px'; }

    public addBox() {
        let i = this.cardList.length + 1;
        let tmp = new SandboxCardViewModel();
        tmp.index = i;
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
