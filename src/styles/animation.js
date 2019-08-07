import { useTransition, config } from 'react-spring'

export const useFadeIn = (item, userConfig = {}, key = null) => {
  const getConfigByString = (config, object) => {
    if (!Object.prototype.hasOwnProperty.call(object, config)) {
      return {}
    }
    return object[config]
  }
  if (typeof (userConfig) === 'string') {
    userConfig = getConfigByString(userConfig, config)
  }

  const fade = useTransition(item, key, {
    from: {
      filter: `blur(${5}px)`,
      opacity: 0
    },
    enter: {
      filter: `blur(${0}px)`,
      opacity: 1
    },
    leave: {
      filter: `blur(${5}px)`,
      opacity: 0
    },
    config: userConfig
  })

  const interpolateFade = useTransition(item, key, {
    from: {
      interpolateFilter: 5,
      opacity: 0
    },
    enter: {
      interpolateFilter: 0,
      opacity: 1
    },
    leave: {
      interpolateFilter: 5,
      opacity: 0
    },
    config: userConfig
  })

  return { fade, interpolateFade }
}
