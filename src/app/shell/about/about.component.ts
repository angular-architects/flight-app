import {
  Component,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule],
})
export class AboutComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  placeholder: ViewContainerRef | undefined;

  injector = inject(Injector);

  async ngOnInit(): Promise<void> {
    const module = await loadRemoteModule('miles', './Miles');
    const Comp = module.MilesComponent;

    // *ngComponentOutlet
    if (this.placeholder) {
      /* const ref = */ this.placeholder.createComponent(Comp, {
        injector: this.injector,
      });

      // ref.setInput('item', item);
      // const compInst = ref.instance;
      // compInst.item = item;
    }
  }
}
