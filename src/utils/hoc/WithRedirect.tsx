import React, { ComponentType } from 'react'

type RedirectIfBlankPropsType = {
  path: string
}

const withRedirectIfBlank =
  () => (Component: ComponentType<any>) => (props: RedirectIfBlankPropsType) => {
    return <Component path={props.path} />
  }

export { withRedirectIfBlank }
