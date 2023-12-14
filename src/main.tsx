import { App } from './app.tsx'
import React from 'preact/compat'
import { Bridge } from './bridge/Bridge.ts'
const bridge = new Bridge();
React.render(<App />,document.getElementById('app')!)