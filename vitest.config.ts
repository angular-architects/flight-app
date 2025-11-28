import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  test: {
    testTimeout: 5000,
    browser: {
      enabled: true,
      provider: playwright(),

      // https://vitest.dev/config/browser/playwright
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
})
