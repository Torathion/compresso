import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

if (process.env.TEST_WATCH) {
  // Keep your stdin patch if it's still necessary for your watch setup
  process.stdin.isTTY = true
  process.stdin.setRawMode = () => process.stdin
}

const isCI = process.env.CI === 'true'

export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, './src')
    }
  },
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      include: ['src/**'], // Recommended: be explicit
      exclude: [
        '**/*.js',
        '**/*.[cm]js',
        '**/*.d.ts',
        '**/types/',
        '**/index.ts',
        '**/constants.ts',
        'src/internal/**',
        '**/*.config.ts',
        'test/test-utils.ts'
      ],
      reporter: ['text', 'text-summary', 'json', 'json-summary', 'html'],
      reportsDirectory: './coverage',
      reportOnFailure: true,
      thresholds: { lines: 80, functions: 80, branches: 80, statements: 80 }
    },

    reporters: isCI
      ? ['verbose', 'json', 'junit'] // or simplify to fewer in CI
      : ['default', 'hanging-process'],

    silent: isCI
  }
})
