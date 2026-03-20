import { TestBed } from "@angular/core/testing";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { page } from 'vitest/browser'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'


it('should search from Grenchen to Zurich', async () => {
  TestBed.configureTestingModule({
    providers: [provideHttpClientTesting()]
  }).createComponent(FlightSearchComponent);

  const ctrl = TestBed.inject(HttpTestingController)
  await page.getByRole('textbox', { name: 'From' }).fill('Grenchen');
  ctrl.match(() => true).forEach(req => req.flush([{ id: 1, from: '', to: '' }]));
  await page.getByRole('textbox', { name: 'To' }).fill('Zürich');


  await page.getByRole('button', { name: 'Search', exact: true }).click()

  await expect(page.getByText('Gefundene Flüge: 2')).toBeVisible();
});
