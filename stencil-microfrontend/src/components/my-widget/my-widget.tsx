import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-widget',
  styleUrl: 'my-widget.css',
  shadow: true
})
export class MyWidget {
  @Prop() title: string;

  render() {
    return <div class="widget"><h2>{this.title}</h2><p>Stencil Micro Frontend Component</p></div>;
  }
}
