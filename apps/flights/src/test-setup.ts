import '@angular/compiler';
import '@angular/material/prebuilt-themes/indigo-pink.css';
import './styles.css';
import '@analogjs/vitest-angular/setup-snapshots';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';

setupTestBed({ zoneless: false });
