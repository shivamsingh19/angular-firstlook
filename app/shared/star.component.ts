import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent {
    @Input() rating: number;
    starWidht: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChange(): void {
        this.starWidht = this.rating * 86 / 5;
    }
    onClick(): void {
       this.ratingClicked.emit(`The Rating ${this.rating} was clicked `);
    }
}