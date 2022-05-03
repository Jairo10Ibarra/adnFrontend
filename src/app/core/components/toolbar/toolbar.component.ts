import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "toolbar.component.html",
  styles: [
    `
      h1 {
        display: inline;
        font-size: 20px;
        font-weight: normal;
        letter-spacing: 0.1px;
        line-height: 48px;
      }
    `,
  ],
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
