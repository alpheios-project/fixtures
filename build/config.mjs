import path from 'path'

const projectRoot = process.cwd()

const webpack = {
  common: {
    entry: './index.js',
    resolve: {
      alias: {
        // Below will force all imported modules with unresolved dependencies to use a single instance of that dependency
        '@': path.join(projectRoot, 'src')
      }
    },

    module: {
      rules: [
        {
          test: /\.xml$/i,
          use: 'raw-loader',
        },
      ],
    }
  },

  production: {
    output: {filename: 'alpheios-fixtures.min.js'}
  },
  development: {
    output: {filename: 'alpheios-fixtures.js'}
  }
}

export { webpack }
