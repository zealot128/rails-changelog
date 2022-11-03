import datasetToProps from "./datasetToProps"

type ComponentConfig = {
  component: any
  extra?: any
  plugins?: any[]
}

type AutomountConfig = {
  [name: string]: ComponentConfig
}

const mount = (
  node: HTMLElement,
  component: any,
  name: string,
  plugins: any[] = []
) => {
  const props = datasetToProps(node)
  component(node, props)
}

const scanAndMount = (
  parent: HTMLElement | Document,
  config: AutomountConfig
) => {
  if (!parent.querySelectorAll) return
  Object.keys(config).forEach((name) => {
    const { component, plugins } = config[name]
    Array.from(parent.querySelectorAll(name)).forEach((node) => {
      if (node instanceof HTMLElement) {
        mount(node, component, name, plugins || [])
      }
    })
  })
}

const AutomountAll = (config: AutomountConfig): void => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          scanAndMount(node, config)
        }
      })
    })
  })
  observer.observe(document, {
    subtree: true,
    childList: true,
  })
  document.addEventListener("DOMContentLoaded", () => {
    scanAndMount(document, config)
  })
}

export default AutomountAll

