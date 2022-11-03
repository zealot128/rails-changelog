import "index.css"
import "syntax-highlighting.css"

import AutomountAll from './utils/automount'

import ChangelogApp from './ChangelogApp.svelte'

AutomountAll({
  'changelog-app': {
    component: (node, props) => {
      new ChangelogApp({ target: node, props })
    }
  }
})
