import React, { Fragment } from 'react'
import { configure, addDecorator, storiesOf } from '@storybook/react'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import themeDecorator from './decorators/themeDecorator'

const newViewports = {
  xs: {
    name: 'XS Screen',
    styles: {
      width: '320px',
      height: '600px'
    }
  },
  sm: {
    name: 'SM Screen',
    styles: {
      width: '576px',
      height: '800px'
    }
  },
  md: {
    name: 'MD Screen',
    styles: {
      width: '778px',
      height: '800px'
    }
  },
  lg: {
    name: 'LG Screen',
    styles: {
      width: '992px',
      height: '1338px'
    }
  },
  xl: {
    name: 'XL Screen',
    styles: {
      width: '1200px',
      height: '1338px'
    }
  },
  xxl: {
    name: 'XXL Screen',
    styles: {
      width: '2460px',
      height: '1338px'
    }
  },
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px'
    }
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px'
    }
  }
}

global.React = React
global.Fragment = Fragment
global.storiesOf = storiesOf

const req = require.context('../../examples', true, /\/*stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configureViewport({
  viewports: { ...newViewports, ...INITIAL_VIEWPORTS },
  defaultViewport: 'xxl'
})

addDecorator(themeDecorator)

configure(loadStories, module)
