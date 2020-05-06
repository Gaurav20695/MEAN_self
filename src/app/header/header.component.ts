import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    constructor(private router: Router) { }

    click: boolean = true;

    onClick() {
        this.click = !this.click;

        if (this.click)
            this.router.navigate(['/login']);
        else
            this.router.navigate(['/signup']);

    }

}