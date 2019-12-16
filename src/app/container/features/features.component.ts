import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
    items=[
        {
            imgpath:"../../assets/img/sprite.svg#icon-global",
            title:"World's best luxury homes",
            description:"Elit dolore fugiat nemo error deleniti? Corrupti recusandae veritatis sed aut excepturi Eveniet fugiat quasi id consequatur natus Delectus totam perspiciatis dolore iste vel explicabo dolore. Dignissimos nesciunt fuga fugit."
        },
        {
            imgpath:"../../assets/img/sprite.svg#icon-trophy",
            title:"Only the best properties",
            description:"Consectetur ullam aliquid in officiis natus molestiae Necessitatibus unde dicta amet saepe similique Explicabo officiis rem voluptatum ducimus delectus autem Ullam eligendi quo fuga sapiente eveniet ab. Dolor enim et"
        },
        {
            imgpath:"../../assets/img/sprite.svg#icon-map-pin",
            title:"All homes in in top locations",
            description:"Amet tempore explicabo fuga cupiditate officia Facilis illo dolores ea ratione necessitatibus? Accusantium iure non deserunt deleniti veritatis debitis Similique hic architecto unde minus minima. Ducimus reprehenderit et quibusdam recusandae."
        },
        {
            imgpath:"../../assets/img/sprite.svg#icon-key",
            title:"New home in one week",
            description:"Adipisicing deleniti accusantium commodi animi nesciunt cumque, aliquam necessitatibus? Expedita quae quidem at ut cumque. Officiis obcaecati quidem voluptate aspernatur maiores Quod officiis obcaecati reprehenderit iste sunt non recusandae animi!"
        },
        {
            imgpath:"../../assets/img/sprite.svg#icon-presentation",
            title:"Top 1% realtors",
            description:"Consectetur consectetur et assumenda quidem cumque. Hic voluptas ad perferendis saepe nulla? Facilis minus voluptatibus doloremque asperiores expedita Maiores illum rerum veritatis earum odio Voluptatibus quas nulla excepturi saepe atque!"
        },
        {
            imgpath:"../../assets/img/sprite.svg#icon-lock",
            title:"Secure payments on nexter",
            description:"Amet dignissimos quisquam aut iure a officiis quaerat? Qui nam neque in voluptate numquam? Accusamus ducimus rem iusto ab debitis enim nihil. Totam sint quam doloribus possimus consectetur temporibus. Ratione"
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
