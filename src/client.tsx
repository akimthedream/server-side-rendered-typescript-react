import * as React from 'react';
import {render} from 'react-dom';
import app from './app';

const initialState = (window as any).__PRELOADED_STATE__;

render(app(initialState), document.getElementById('mount'));
