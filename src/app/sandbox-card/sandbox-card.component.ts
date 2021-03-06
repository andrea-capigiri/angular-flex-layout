import { Component, Input, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { SandboxCardViewModel } from '../shared/sandbox-card.model';

@Component({
    selector: 'app-sandbox-card',
    templateUrl: './sandbox-card.component.html',
    styleUrls: ['./sandbox-card.component.scss']
})
export class SandboxCardComponent implements OnInit {
    
    private _width : string;
    public get width() : string { return this._width; }
    @Input('width')
    public set width(v : string) { this._width = v; this.elRef.nativeElement.style.width = v; }

    private _height : string;
    public get height() : string { return this._height; }
    @Input('height')
    public set height(v : string) { this._height = v; this.elRef.nativeElement.style.height = v; }
    
    @Input() public viewModel: SandboxCardViewModel;
    @Output() public onSelect: EventEmitter<number> = new EventEmitter();

    constructor(private elRef:ElementRef) { }

    ngOnInit() {}

    public backgroundColor(): string {
        switch (this.viewModel.index) {
            case 0: case 10: return '#E53935';
            case 1: case 11: return '#757575';
            case 2: case 12: return '#7B1FA2';
            case 3: case 13: return '#1976D2';
            case 4: case 14: return '#558B2F';
            case 5: case 15: return '#3F51B5';
            case 6: case 16: return '#E65100';
            case 7: case 17: return '#795548';
            case 8: case 18: return '#546E7A';
            case 9: case 19: return '#827717';
        }
    }
}