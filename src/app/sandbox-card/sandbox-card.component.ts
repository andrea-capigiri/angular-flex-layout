import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SandboxCardViewModel } from '../shared/sandbox-card.model';

@Component({
    selector: 'app-sandbox-card',
    templateUrl: './sandbox-card.component.html',
    styleUrls: ['./sandbox-card.component.scss']
})
export class SandboxCardComponent {

    @Input() public viewModel: SandboxCardViewModel;
    @Output() public onSelect: EventEmitter<number> = new EventEmitter();

    constructor() { }

    public backgroundColor(): string {
        switch (this.viewModel.index) {
            case 0: return '#E53935';
            case 1: return '#757575';
            case 2: return '#7B1FA2';
            case 3: return '#1976D2';
            case 4: return '#558B2F';
            case 5: return '#3F51B5';
            case 6: return '#E65100';
            case 7: return '#795548';
            case 8: return '#546E7A';
            case 9: return '#827717';
        }
    }
}